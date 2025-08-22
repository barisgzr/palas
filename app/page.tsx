"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/language-context";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target,
  Mail,
  Phone,
  MapPin,
  Clock,
  Building2,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const translations = {
  en: {
    hero: {
      title: "Your Trusted Partner in Amazon E-commerce",
      subtitle:
        "Grow your business with our 8+ years of e-commerce and 5 years of Amazon experience",
      cta: "Get Started Now",
      learnMore: "Learn More",
    },
    about: {
      title: "About GearsofDown",
      description:
        "With over 8 years of e-commerce and 5 years of Amazon experience, we manage business processes from start to finish and provide practical and innovative solutions to problems they may encounter. Thanks to the field experience we gained in our own stores, we contribute to our clients' growth journey with measurable results. Together with our headquarters team in Turkey and business partners in the USA, we provide fast and effective solutions on a global scale.",
      experience: "8+ Years Experience",
      clients: "100+ Happy Clients",
      projects: "300+ Successful Projects",
    },
    packages: {
      title: "Our Packages",
      subtitle:
        "Choose the package that best suits your Amazon e-commerce journey",
      baslangic: {
        title: "Starter Package",
        description:
          "I want to start e-commerce but don't know where to begin?",
        question: "This package is for you.",
      },
      yukselme: {
        title: "Growth Package",
        description: "I have a store but can't reach the sales I want?",
        question: "This package is for you.",
      },
      kurumsal: {
        title: "Corporate Package",
        description: "My store has reached a certain level, how can I grow it?",
        question: "This package is for you.",
      },
      tamEntegrasyon: {
        title: "Full Integration Package",
        description: "I want to build a brand, what should I do on this path?",
        question: "This package is for you.",
      },
      viewDetails: "Click to view details",
      additionalServices: "Additional Services",
    },
    contact: {
      title: "Ready to Transform Your Business?",
      subtitle: "Contact us today and get free consultation",
      name: "Full Name",
      email: "Email Address",
      company: "Company Name",
      message: "Your Message",
      send: "Send Message",
      success: "Thank you for your message! We will get back to you shortly.",
      or: "or",
      contactUs: "Direct Contact",
      phone: "+90 551 953 63 12",
      emailAddress: "info@gearsofdown.com",
      address:
        "Adnan Kahveci Mahallesi Cebeci Caddesi Yargı Apartmanı Daire 30, İstanbul/Beylikdüzü",
      workHours: "Working Hours: 09.00-21.00 7 Days",
    },
  },
  tr: {
    hero: {
      title: "Amazon E-Ticaret Sürecinizde Güvenilir Partneriniz",
      subtitle:
        "8+ yıllık e-ticaret ve 5 yıllık Amazon deneyimimizle işinizi büyütün",
      cta: "Hemen Başlayın",
      learnMore: "Daha Fazla Bilgi",
    },
    about: {
      title: "GearsofDown Hakkında",
      description:
        "8 yılı aşkın e-ticaret ve 5 yıllık Amazon deneyimimizle, işletmelerin süreçlerini en baştan sonuna kadar yönetiyor, karşılaşabilecekleri sorunlara pratik ve yenilikçi çözümler üretiyoruz. Kendi mağazalarımızda edindiğimiz saha tecrübesi sayesinde, danışanlarımızın büyüme yolculuğuna ölçülebilir sonuçlarla katkı sağlıyoruz. Türkiye'deki merkez ekibimiz ve ABD'deki iş ortaklarımızla birlikte, global ölçekte hızlı ve etkili çözümler sunuyoruz.",
      experience: "8+ Yıl Deneyim",
      clients: "100+ Mutlu Müşteri",
      projects: "300+ Başarılı Proje",
    },
    packages: {
      title: "Paketlerimiz",
      subtitle: "Amazon e-ticaret sürecinizde size en uygun paketi seçin",
      baslangic: {
        title: "Başlangıç Paketi",
        description:
          "E-ticarete başlamak istiyorum ama nereden başlayacağımı bilmiyorum?",
        question: "Bu paket sizin için.",
      },
      yukselme: {
        title: "Yükselme Paketi",
        description: "Mağazam var ancak istediğim satışlara ulaşamıyorum?",
        question: "Bu paket sizin için.",
      },
      kurumsal: {
        title: "Kurumsal Paket",
        description: "Mağazam belirli bir seviyeye geldi, nasıl büyütebilirim?",
        question: "Bu paket sizin için.",
      },
      tamEntegrasyon: {
        title: "Tam Entegrasyon Paketi",
        description: "Markalaşmak istiyorum bu yolda neler yapmalıyım?",
        question: "Bu paket sizin için.",
      },
      viewDetails: "Ayrıntıları görmek için tıklayın",
      additionalServices: "Ek Hizmetler",
    },
    contact: {
      title: "İşinizi Dönüştürmeye Hazır Mısınız?",
      subtitle: "Bugün bizimle iletişime geçin ve ücretsiz danışmanlık alın",
      name: "Ad Soyad",
      email: "E-posta Adresi",
      company: "Şirket Adı",
      message: "Mesajınız",
      send: "Mesaj Gönder",
      success:
        "Mesajınız için teşekkürler! En kısa sürede size dönüş yapacağız.",
      or: "veya",
      contactUs: "Doğrudan İletişim",
      phone: "+90 551 953 63 12 ",
      emailAddress: "info@gearsofdown.com",
      address:
        "Adnan Kahveci Mahallesi Cebeci Caddesi Yargı Apartmanı Daire 30, İstanbul/Beylikdüzü",
      workHours: "Çalışma Saatleri: 09.00-21.00 7 Gün",
    },
  },
};

export default function HomePage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fullAddress =
    "Adnan Kahveci Mahallesi Cebeci Caddesi Yargı Apartmanı Daire 30, İstanbul/Beylikdüzü";
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
          formType: "contact", // Specify the form type
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", company: "", message: "" });
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
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const packages = [
    {
      id: "strategic-planning",
      icon: Target,
      title: t.packages.baslangic.title,
      description: t.packages.baslangic.description,
      question: t.packages.baslangic.question,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
    },
    {
      id: "growth-acceleration",
      icon: TrendingUp,
      title: t.packages.yukselme.title,
      description: t.packages.yukselme.description,
      question: t.packages.yukselme.question,
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
    },
    {
      id: "operational-excellence",
      icon: Building2,
      title: t.packages.kurumsal.title,
      description: t.packages.kurumsal.description,
      question: t.packages.kurumsal.question,
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    {
      id: "full-integration",
      icon: Zap,
      title: t.packages.tamEntegrasyon.title,
      description: t.packages.tamEntegrasyon.description,
      question: t.packages.tamEntegrasyon.question,
      color: "bg-emerald-500",
      hoverColor: "hover:bg-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                {t.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact">
                  <Button
                    size="lg"
                    className="bg-white text-navy-900 hover:text-xl hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                  >
                    {t.hero.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/packages">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:text-xl hover:bg-white hover:text-navy-900 px-8 py-4 text-lg font-semibold"
                  >
                    {t.hero.learnMore}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <img src="/logo.png" alt="" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">GearsofDown</h3>
                  <p className="text-gray-200">Amazon E-ticaret Uzmanları</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                {t.about.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t.about.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-600 mb-2">
                    {t.about.experience}
                  </div>
                  <div className="text-gray-600">Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-600 mb-2">
                    {t.about.clients}
                  </div>
                  <div className="text-gray-600">Mutlu Müşteri</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-600 mb-2">
                    {t.about.projects}
                  </div>
                  <div className="text-gray-600">Başarılı Proje</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-3xl font-bold text-navy-600">
                      <img src="/logo.png" alt="" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900">
                    GearsofDown
                  </h3>
                  <p className="text-gray-600">E-ticaret & Amazon Uzmanları</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white" id="packages">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              {t.packages.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.packages.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap w-full justify-center gap-6 mb-12">
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <Card
                  key={pkg.id}
                  className="hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 cursor-pointer group h-full flex-1 min-w-[280px] max-w-[320px]"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 ${pkg.color} ${pkg.hoverColor} group-hover:scale-110 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-navy-900 mb-3 leading-tight">
                      {pkg.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0 space-y-4 flex flex-col justify-between h-full">
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm mb-4 italic">
                        {pkg.description}
                      </p>
                      <p className="text-navy-600 font-semibold text-sm mb-6">
                        {pkg.question}
                      </p>
                    </div>
                    <Link href={`/packages/${pkg.id}`}>
                      <Button
                        className={`w-full ${pkg.color} ${pkg.hoverColor} text-white text-sm py-3 h-12 whitespace-normal`}
                      >
                        {t.packages.viewDetails}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}

            {/* Additional Services */}
            <Card className="hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 cursor-pointer group h-full flex-1 min-w-[280px] max-w-[320px]">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-indigo-500 hover:bg-indigo-600 group-hover:scale-110 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-navy-900 mb-3 leading-tight">
                  {t.packages.additionalServices}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0 space-y-4 flex flex-col justify-between h-full">
                <div className="flex-1">
                  <p className="text-gray-600 text-sm mb-4 italic">
                    İhtiyaçlarınıza özel ek destek hizmetleri
                  </p>
                  <p className="text-navy-600 font-semibold text-sm mb-6">
                    Özel çözümler için.
                  </p>
                </div>
                <Link href="/packages/additional-services">
                  <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm py-3 h-12 whitespace-normal">
                    {t.packages.viewDetails}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-navy-900 text-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-300">{t.contact.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-white text-navy-900">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  İletişim Formu
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <p className="text-lg text-gray-700">{t.contact.success}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      name="name"
                      placeholder={t.contact.name}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder={t.contact.email}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                    <Input
                      name="company"
                      placeholder={t.contact.company}
                      value={formData.company}
                      onChange={handleInputChange}
                      className="h-12"
                    />
                    <Textarea
                      name="message"
                      placeholder={t.contact.message}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-navy-600 hover:bg-navy-700 h-12 text-lg"
                    >
                      {t.contact.send}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  {t.contact.contactUs}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">E-posta</div>
                      <a
                        href="mailto:info@gearsofdown.com"
                        className="text-gray-300 hover:underline"
                      >
                        {t.contact.emailAddress}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Telefon</div>
                      <div className="flex flex-col">
                        <a
                          href="tel:+905350353450"
                          className="text-gray-300 hover:underline"
                        >
                          +90 535 035 34 50 - Temel K.
                        </a>
                        <a
                          href="tel:+905519536312"
                          className="text-gray-300 hover:underline"
                        >
                          +90 551 953 63 12 - Muaz I.
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Adres</div>
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:underline"
                      >
                        {t.contact.address}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Çalışma Saatleri</div>
                      <div className="text-gray-300">{t.contact.workHours}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
