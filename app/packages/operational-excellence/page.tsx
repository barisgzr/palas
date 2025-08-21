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
import { Building2, CheckCircle, ArrowRight, Mail, Phone } from "lucide-react";
import { useState } from "react";

const translations = {
  en: {
    title: "Corporate Package",
    subtitle: "Advanced growth support for brands with active operations",
    overview: {
      title: "Package Overview",
      description:
        "Designed for brands with existing operations, this package helps you grow your brand internationally with advanced analysis, product optimization and global logistics support.",
    },
    whatIncluded: {
      title: "What's Included",
      items: [
        "Starter Package content +",
        "Detailed store analysis and reporting",
        "In-depth market & competitor analysis",
        "Store optimization - for all products",
        "Domestic and international product sourcing support",
        "Special pricing in logistics network",
        "Guidance & support for documents (FDA, CE, etc.)",
        "40% discount on US warehouse service",
        "2 meetings per week (40 min)",
        "24/7 WhatsApp support line",
      ],
    },
    process: {
      title: "Our Process",
      steps: [
        {
          title: "Comprehensive Analysis",
          description: "Detailed reporting of store and products",
          duration: "2 weeks",
        },
        {
          title: "Global Strategy",
          description: "Planning based on market and competitor analysis",
          duration: "2-3 weeks",
        },
        {
          title: "Implementation & Optimization",
          description: "Adjustments and sourcing support for all products",
          duration: "Over 1 month",
        },
        {
          title: "Continuous Support",
          description: "24/7 communication and weekly meetings",
          duration: "Ongoing",
        },
      ],
    },
    benefits: {
      title: "Key Benefits",
      items: [
        "Professional and comprehensive store management",
        "Strengthening in global competition",
        "Guidance in documents and legal processes",
        "Great advantage in logistics costs",
        "Instant support and regular reporting",
      ],
    },
    pricing: {
      title: "Investment",
      price: "2,000 USD / Monthly",
      description:
        "Final pricing may change according to your requests before the process and is determined at the beginning.",
      includes:
        "Our packages are based on monthly payments, not one-time payments.",
    },
    meeting: {
      title: "Request a Corporate Package Consultation",
      subtitle: "Let's discuss how we can take your brand to the global level",
      name: "Full Name",
      email: "Email Address",
      company: "Company Name",
      employees: "Number of Employees",
      industry: "Industry",
      revenue: "Current Monthly Revenue",
      products: "Number of Products",
      markets: "Target Markets",
      challenges: "Current Challenges",
      goals: "Growth Goals",
      timeline: "Preferred Timeline",
      send: "Request Consultation",
      success:
        "Thank you! We'll contact you within 24 hours to schedule your consultation.",
    },
  },
  tr: {
    title: "Kurumsal Paket",
    subtitle: "Aktif operasyonu olan markalar için ileri düzey büyüme desteği",
    overview: {
      title: "Paket Genel Bakış",
      description:
        "Hali hazırda operasyonları bulunan markalar için tasarlanan bu paket, ileri seviye analiz, ürün optimizasyonu ve global lojistik desteğiyle markanızı uluslararası seviyede büyütmenize yardımcı olur.",
    },
    whatIncluded: {
      title: "Paket İçeriği",
      items: [
        "Başlangıç Paketi içeriği +",
        "Detaylı mağaza analizi ve raporlama",
        "Derinlemesine pazar & rakip analizi",
        "Mağaza düzenlemesi – tüm ürünler için",
        "Yurt içi ve yurt dışı ürün tedarik desteği",
        "Lojistik ağında özel fiyatlandırma",
        "Belgeler için yönlendirme & destek (FDA, CE vb.)",
        "Amerika ara depo hizmetinde %40 indirim",
        "Haftada 2 toplantı (40 dk)",
        "7/24 WhatsApp destek hattı",
      ],
    },
    process: {
      title: "Sürecimiz",
      steps: [
        {
          title: "Kapsamlı Analiz",
          description: "Mağaza ve ürünlerin detaylı raporlaması",
          duration: "2 hafta",
        },
        {
          title: "Global Strateji",
          description: "Pazar ve rakip analizine dayalı planlama",
          duration: "2-3 hafta",
        },
        {
          title: "Uygulama & Optimizasyon",
          description: "Tüm ürünlerde düzenleme ve tedarik desteği",
          duration: "1 ay boyunca",
        },
        {
          title: "Sürekli Destek",
          description: "7/24 iletişim ve haftalık toplantılar",
          duration: "Devamlı",
        },
      ],
    },
    benefits: {
      title: "Temel Faydalar",
      items: [
        "Profesyonel ve kapsamlı mağaza yönetimi",
        "Global rekabette güçlenme",
        "Belgeler ve yasal süreçlerde rehberlik",
        "Lojistik maliyetlerinde büyük avantaj",
        "Anlık destek ve düzenli raporlama",
      ],
    },
    pricing: {
      title: "Yatırım",
      price: "2.000 USD / Aylık",
      description:
        "Nihai fiyatlandırma süreç öncesi taleplerinize göre değişiklik gösterebilir ve başta belirlenir.",
      includes:
        "Paketlerimiz tek seferlik ödeme değil aylık ödeme üzerine kuruludur.",
    },
    meeting: {
      title: "Kurumsal Paket Danışmanlığı Talep Edin",
      subtitle: "Markanızı global seviyeye nasıl taşıyabileceğimizi konuşalım",
      name: "Ad Soyad",
      email: "E-posta Adresi",
      company: "Şirket Adı",
      employees: "Çalışan Sayısı",
      industry: "Sektör",
      revenue: "Mevcut Aylık Gelir",
      products: "Ürün Sayısı",
      markets: "Hedef Pazarlar",
      challenges: "Mevcut Zorluklar",
      goals: "Büyüme Hedefleri",
      timeline: "Tercih Edilen Zaman Çizelgesi",
      send: "Danışmanlık Talep Et",
      success:
        "Teşekkürler! Danışmanlığınızı planlamak için 24 saat içinde sizinle iletişime geçeceğiz.",
    },
  },
};

export default function CorporatePackagePage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    industry: "",
    revenue: "",
    products: "",
    markets: "",
    challenges: "",
    goals: "",
    timeline: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Meeting request submitted:", formData);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      employees: "",
      industry: "",
      revenue: "",
      products: "",
      markets: "",
      challenges: "",
      goals: "",
      timeline: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building2 className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-navy-900">
                  {t.overview.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {t.overview.description}
                </p>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-navy-900">
                  {t.whatIncluded.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {t.whatIncluded.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Process */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-navy-900">
                  {t.process.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {t.process.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-navy-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 mb-2">{step.description}</p>
                        <span className="text-sm text-purple-600 font-medium">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-navy-900">
                  {t.benefits.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.benefits.items.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing */}
            <Card className="shadow-lg border-0 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-navy-900">
                  {t.pricing.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-purple-600">
                  {t.pricing.price}
                </div>
                <p className="text-sm text-gray-600">{t.pricing.description}</p>
                <div className="pt-4 border-t border-purple-200">
                  <p className="text-sm text-gray-600">{t.pricing.includes}</p>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <a href="#request-meeting">Request Consultation</a>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-navy-900">
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-navy-600" />
                  <span className="text-gray-600">info@gearsofdown.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-navy-600" />
                  <span className="text-gray-600">+90 551 953 63 12</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Meeting Request Form */}
        <Card id="request-meeting" className="shadow-xl border-0 bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-navy-900">
              {t.meeting.title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              {t.meeting.subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <p className="text-lg text-gray-600">{t.meeting.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      name="name"
                      placeholder={t.meeting.name}
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
                      placeholder={t.meeting.email}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      name="company"
                      placeholder={t.meeting.company}
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">{t.meeting.employees}</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-1000">201-1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                  </div>
                  <div>
                    <Input
                      name="industry"
                      placeholder={t.meeting.industry}
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <select
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">{t.meeting.revenue}</option>
                      <option value="under-5k">Under $5K</option>
                      <option value="5k-15k">$5K - $15K</option>
                      <option value="15k-25k">$15K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="over-100k">Over $100K</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="products"
                      value={formData.products}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">{t.meeting.products}</option>
                      <option value="1-50">1-50</option>
                      <option value="51-100">51-100</option>
                      <option value="101-500">101-500</option>
                      <option value="over-500">Over 500</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">{t.meeting.timeline}</option>
                      <option value="immediate">Immediate (1-2 weeks)</option>
                      <option value="short">Short term (1-2 months)</option>
                      <option value="medium">Medium term (3-6 months)</option>
                      <option value="long">Long term (6+ months)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <Textarea
                    name="markets"
                    placeholder={t.meeting.markets}
                    value={formData.markets}
                    onChange={handleInputChange}
                    required
                    rows={3}
                  />
                </div>
                <div>
                  <Textarea
                    name="challenges"
                    placeholder={t.meeting.challenges}
                    value={formData.challenges}
                    onChange={handleInputChange}
                    required
                    rows={3}
                  />
                </div>
                <div>
                  <Textarea
                    name="goals"
                    placeholder={t.meeting.goals}
                    value={formData.goals}
                    onChange={handleInputChange}
                    required
                    rows={3}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 h-12 text-lg"
                >
                  {t.meeting.send}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
