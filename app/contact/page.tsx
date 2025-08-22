"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/language-context";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const translations = {
  en: {
    hero: {
      title: "Contact Us",
      subtitle: "Get in touch with our consultancy experts",
    },
    direct: {
      title: "Direct Contact Information",
      subtitle: "Reach out to us directly using the information below",
    },
    form: {
      title: "Send Us a Message",
      subtitle:
        "Fill out the form below and we'll get back to you within 24 hours",
      name: "Full Name",
      email: "Email Address",
      company: "Company Name",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      success:
        "Thank you for your message! We'll get back to you within 24 hours.",
    },
    info: {
      email: {
        title: "Email",
        value: "info@gearsofdown.com",
        description: "For general inquiries and consultations",
      },
      phone: {
        title: "Phone",
        value: "+90 535 035 34 50 - Temel K.\n+90 551 953 63 12 - Muaz I.",
        description: "Monday to Friday, 9 AM - 6 PM EST",
      },
      address: {
        title: "Office Address",
        value:
          "Adnan Kahveci Mahallesi Cebeci Caddesi Yargı Apartmanı Daire 30\nİstanbul/Beylikdüzü\nTürkiye",
        description: "Visit us for in-person consultations",
      },
      hours: {
        title: "Business Hours",
        value: "09.00 - 21.00 (7 Gün)",
        description: "We're here when you need us",
      },
    },
    response: {
      title: "Response Times",
      items: [
        "Email inquiries: Within 4 hours",
        "Phone calls: Immediate during business hours",
        "Consultation requests: Within 24 hours",
        "Project proposals: Within 48 hours",
      ],
    },
  },
  tr: {
    hero: {
      title: "İletişim",
      subtitle: "Danışmanlık uzmanlarımızla iletişime geçin",
    },
    direct: {
      title: "Doğrudan İletişim Bilgileri",
      subtitle: "Aşağıdaki bilgileri kullanarak doğrudan bize ulaşın",
    },
    form: {
      title: "Bize Mesaj Gönderin",
      subtitle: "Aşağıdaki formu doldurun, 24 saat içinde size geri döneceğiz",
      name: "Ad Soyad",
      email: "E-posta Adresi",
      company: "Şirket Adı",
      subject: "Konu",
      message: "Mesaj",
      send: "Mesaj Gönder",
      success:
        "Mesajınız için teşekkürler! 24 saat içinde size geri döneceğiz.",
    },
    info: {
      email: {
        title: "E-posta",
        value: "info@gearsofdown.com",
        description: "Genel sorular ve danışmanlık için",
      },
      phone: {
        title: "Telefon",
        value: "+90 535 035 34 50 - Temel K.\n+90 551 953 63 12 - Muaz I.",
        description: "Pazartesi - Cuma, 09:00 - 18:00 EST",
      },
      address: {
        title: "Ofis Adresi",
        value:
          "Adnan Kahveci Mahallesi Cebeci Caddesi Yargı Apartmanı Daire 30\nİstanbul/Beylikdüzü\nTürkiye",
        description: "Yüz yüze danışmanlık için bizi ziyaret edin",
      },
      hours: {
        title: "Çalışma Saatleri",
        value: "09.00 - 21.00 (7 Gün)",
        description: "İhtiyacınız olduğunda buradayız",
      },
    },
    response: {
      title: "Yanıt Süreleri",
      items: [
        "E-posta sorguları: 4 saat içinde",
        "Telefon aramaları: Çalışma saatleri içinde anında",
        "Danışmanlık talepleri: 24 saat içinde",
        "Proje teklifleri: 48 saat içinde",
      ],
    },
  },
};

export default function ContactPage() {
  const { language } = useLanguage();
  const t =
    translations[language as keyof typeof translations] || translations.en;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fullAddress =
    "Adnan Kahveci Mahallesi Cebeci Caddesi Yargı Apartmanı Daire 30, İstanbul/Beylikdüzü, Türkiye";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    fullAddress
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType: "contact",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Form submission failed");
        alert("Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl text-gray-300">{t.hero.subtitle}</p>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              {t.direct.title}
            </h2>
            <p className="text-xl text-gray-600">{t.direct.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Email */}
            <Card className="shadow-lg border-0 text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-navy-600" />
                </div>
                <CardTitle className="text-lg font-bold text-navy-900">
                  {t.info.email.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href={`mailto:${t.info.email.value}`}
                  className="text-navy-600 font-medium hover:underline"
                >
                  {t.info.email.value}
                </a>
                <p className="text-gray-600 text-sm">
                  {t.info.email.description}
                </p>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="shadow-lg border-0 text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-navy-600" />
                </div>
                <CardTitle className="text-lg font-bold text-navy-900">
                  {t.info.phone.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-col text-navy-600 font-medium">
                  <a href="tel:+905350353450" className="hover:underline">
                    +90 535 035 34 50 - Temel K.
                  </a>
                  <a href="tel:+905519536312" className="hover:underline">
                    +90 551 953 63 12 - Muaz I.
                  </a>
                </div>
                <p className="text-gray-600 text-sm">
                  {t.info.phone.description}
                </p>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="shadow-lg border-0 text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-navy-600" />
                </div>
                <CardTitle className="text-lg font-bold text-navy-900">
                  {t.info.address.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-600 font-medium whitespace-pre-line hover:underline"
                >
                  {t.info.address.value}
                </a>
                <p className="text-gray-600 text-sm">
                  {t.info.address.description}
                </p>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-lg border-0 text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-navy-600" />
                </div>
                <CardTitle className="text-lg font-bold text-navy-900">
                  {t.info.hours.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-navy-600 font-medium whitespace-pre-line">
                  {t.info.hours.value}
                </p>
                <p className="text-gray-600 text-sm">
                  {t.info.hours.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-12 text-center">
            {t.response.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.response.items.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              {t.form.title}
            </h2>
            <p className="text-xl text-gray-600">{t.form.subtitle}</p>
          </div>

          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <p className="text-lg text-gray-600">{t.form.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        name="name"
                        placeholder={t.form.name}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder={t.form.email}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        name="company"
                        placeholder={t.form.company}
                        value={formData.company}
                        onChange={handleInputChange}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder={t.form.subject}
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder={t.form.message}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-navy-600 hover:bg-navy-700 h-12 text-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {t.form.send}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
