// app/api/send-email/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType } = body; // Hangi formdan geldiğini belirleyen alan

    // Güvenlik ve doğrulama için temel bir kontrol
    if (!formType) {
      return NextResponse.json(
        { message: "Form türü belirtilmemiş." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "mail.gearsofdown.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // .env.local dosyasından gelecek
        pass: process.env.EMAIL_PASS, // .env.local dosyasından gelecek
      },
    });

    let mailOptions;
    const fromAddress = `"GearsofDown Web" <${process.env.EMAIL_USER}>`;
    const toAddress = process.env.EMAIL_USER;

    // Gelen formun türüne göre e-posta içeriğini oluştur
    switch (formType) {
      case "contact": {
        const { name, email, company, message } = body;
        mailOptions = {
          from: fromAddress,
          to: toAddress,
          subject: `Yeni İletişim Formu Mesajı: ${name}`,
          html: `
            <h1>Ana Sayfa İletişim Formu</h1>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Şirket Adı:</strong> ${company || "Belirtilmedi"}</p>
            <hr>
            <p><strong>Mesaj:</strong></p>
            <p>${message}</p>
          `,
        };
        break;
      }

      case "additional-service": {
        const { name, email, service, message } = body;
        mailOptions = {
          from: fromAddress,
          to: toAddress,
          subject: `Yeni Ek Hizmet Talebi: ${name}`,
          html: `
            <h1>Ek Hizmetler Talep Formu</h1>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>İlgilenilen Hizmet:</strong> ${service}</p>
            <hr>
            <p><strong>Mesaj:</strong></p>
            <p>${message}</p>
          `,
        };
        break;
      }

      // Tüm paket formları benzer alanlara sahip olduğu için tek bir case'de birleştirebiliriz
      // veya daha spesifik başlıklar için ayırabiliriz. Ayırmak daha yönetilebilir.
      case "full-integration":
      case "growth-acceleration":
      case "operational-excellence":
      case "strategic-planning": {
        const {
          name,
          email,
          company,
          employees,
          industry,
          revenue,
          products,
          platforms,
          brandGoals,
          challenges,
          timeline,
        } = body;

        // Form türüne göre başlığı dinamik olarak belirle
        const packageTitles: { [key: string]: string } = {
          "full-integration": "Tam Entegrasyon Paketi",
          "growth-acceleration": "Büyüme Hızlandırma Paketi",
          "operational-excellence": "Operasyonel Mükemmellik Paketi",
          "strategic-planning": "Stratejik Planlama Paketi",
        };
        const title = packageTitles[formType] || "Paket Başvurusu";

        mailOptions = {
          from: fromAddress,
          to: toAddress,
          subject: `Yeni ${title} Talebi: ${name}`,
          html: `
            <h1>${title} Başvuru Formu</h1>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Şirket Adı:</strong> ${company}</p>
            <hr>
            <h2>Şirket Detayları</h2>
            <p><strong>Çalışan Sayısı:</strong> ${employees}</p>
            <p><strong>Sektör:</strong> ${industry}</p>
            <p><strong>Mevcut Aylık Gelir:</strong> ${revenue}</p>
            <p><strong>Ürün/Hizmet Sayısı:</strong> ${products}</p>
            <p><strong>Kullanılan Platformlar:</strong> ${platforms}</p>
            <hr>
            <h2>Proje Detayları</h2>
            <p><strong>Marka Hedefleri:</strong> ${brandGoals}</p>
            <p><strong>Mevcut Zorluklar:</strong> ${challenges}</p>
            <p><strong>Tercih Edilen Zaman Çizelgesi:</strong> ${timeline}</p>
          `,
        };
        break;
      }

      default:
        return NextResponse.json(
          { message: "Geçersiz form türü." },
          { status: 400 }
        );
    }

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "E-posta başarıyla gönderildi." },
      { status: 200 }
    );
  } catch (error) {
    console.error("E-posta gönderilirken hata oluştu:", error);
    return NextResponse.json(
      { message: "Sunucu hatası: E-posta gönderilemedi." },
      { status: 500 }
    );
  }
}
