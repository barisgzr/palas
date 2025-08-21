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
import { TrendingUp, CheckCircle, ArrowRight, Mail, Phone } from "lucide-react";
import { useState } from "react";

const translations = {
  en: {
    title: "Growth Package",
    subtitle: "For sellers who want to grow their store",
    overview: {
      title: "Package Overview",
      description:
        "Designed for sellers who want to go beyond basic setup, this package provides optimization and advertising support that will increase your sales by analyzing your store.",
    },
    whatIncluded: {
      title: "What's Included",
      items: [
        "Starter Package content +",
        "Store & product analysis report",
        "Market research and competitor analysis",
        "Store optimization (Keyword optimization, visual design, title & bullet points) - for 10 products",
        "Advertising reports review - for 3 products",
        "Product sourcing support",
        "Logistics network guidance and support",
        "Total of 6 (40 min) meetings over 1 month",
        "15% discount on US warehouse service",
      ],
    },
    process: {
      title: "Our Process",
      steps: [
        {
          title: "Store Analysis",
          description: "Current performance evaluation",
          duration: "1-2 weeks",
        },
        {
          title: "Optimization",
          description: "Product and store adjustments",
          duration: "2-3 weeks",
        },
        {
          title: "Growth Strategy",
          description: "Advertising analysis and sourcing support",
          duration: "Over 1 month",
        },
      ],
    },
    benefits: {
      title: "Key Benefits",
      items: [
        "More visible and optimized product pages",
        "Efficient use of advertising budget",
        "Strategic roadmap for store growth",
        "Additional discounts and logistics advantages",
      ],
    },
    pricing: {
      title: "Investment",
      price: "1,500 USD / Monthly",
      description:
        "Final pricing may change according to your requests before the process and is determined at the beginning.",
      includes:
        "Our packages are based on monthly payments, not one-time payments.",
    },
    meeting: {
      title: "Request a Growth Package Consultation",
      subtitle: "Let's discuss how we can accelerate your store growth",
      name: "Full Name",
      email: "Email Address",
      company: "Company Name",
      employees: "Number of Employees",
      industry: "Industry",
      revenue: "Current Monthly Revenue",
      products: "Number of Products",
      challenges: "Growth Challenges",
      goals: "Growth Goals",
      timeline: "Preferred Timeline",
      send: "Request Consultation",
      success:
        "Thank you! We'll contact you within 24 hours to schedule your consultation.",
    },
  },
  tr: {
    title: "Yükselme Paketi",
    subtitle: "Mağazasını büyütmek isteyen satıcılar için",
    overview: {
      title: "Paket Genel Bakış",
      description:
        "Temel kurulumun ötesine geçmek isteyen satıcılar için tasarlanan bu paket, mağazanızın analizini yaparak satışlarınızı artıracak optimizasyon ve reklam desteği sunar.",
    },
    whatIncluded: {
      title: "Paket İçeriği",
      items: [
        "Başlangıç Paketi içeriği +",
        "Mağaza & ürün analiz raporu",
        "Pazar araştırması ve rakip analizi",
        "Mağaza düzenlemesi (Keyword optimizasyonu, görsel tasarım, başlık & bullet point) – 10 ürün için",
        "Reklam raporlarının incelenmesi – 3 ürün için",
        "Ürün tedarik desteği",
        "Lojistik ağı yönlendirme ve destek",
        "1 ay boyunca toplam 6 adet (40 dk) toplantı",
        "Amerika ara depo hizmetinde %15 indirim",
      ],
    },
    process: {
      title: "Sürecimiz",
      steps: [
        {
          title: "Mağaza Analizi",
          description: "Mevcut performans değerlendirmesi",
          duration: "1-2 hafta",
        },
        {
          title: "Optimizasyon",
          description: "Ürün ve mağaza düzenlemeleri",
          duration: "2-3 hafta",
        },
        {
          title: "Büyüme Stratejisi",
          description: "Reklam analizi ve tedarik desteği",
          duration: "1 ay boyunca",
        },
      ],
    },
    benefits: {
      title: "Temel Faydalar",
      items: [
        "Daha görünür ve optimize edilmiş ürün sayfaları",
        "Reklam bütçesinin verimli kullanımı",
        "Mağaza büyümesi için stratejik yol haritası",
        "Ek indirimler ve lojistik avantajları",
      ],
    },
    pricing: {
      title: "Yatırım",
      price: "1.500 USD / Aylık",
      description:
        "Nihai fiyatlandırma süreç öncesi taleplerinize göre değişiklik gösterebilir ve başta belirlenir.",
      includes:
        "Paketlerimiz tek seferlik ödeme değil aylık ödeme üzerine kuruludur.",
    },
    meeting: {
      title: "Yükselme Paketi Danışmanlığı Talep Edin",
      subtitle: "Mağaza büyümenizi nasıl hızlandırabileceğimizi konuşalım",
      name: "Ad Soyad",
      email: "E-posta Adresi",
      company: "Şirket Adı",
      employees: "Çalışan Sayısı",
      industry: "Sektör",
      revenue: "Mevcut Aylık Gelir",
      products: "Ürün Sayısı",
      challenges: "Büyüme Zorlukları",
      goals: "Büyüme Hedefleri",
      timeline: "Tercih Edilen Zaman Çizelgesi",
      send: "Danışmanlık Talep Et",
      success:
        "Teşekkürler! Danışmanlığınızı planlamak için 24 saat içinde sizinle iletişime geçeceğiz.",
    },
  },
};

export default function GrowthPackagePage() {
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
          <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <TrendingUp className="h-10 w-10 text-white" />
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
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-navy-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 mb-2">{step.description}</p>
                        <span className="text-sm text-orange-600 font-medium">
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
            <Card className="shadow-lg border-0 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-navy-900">
                  {t.pricing.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-orange-600">
                  {t.pricing.price}
                </div>
                <p className="text-sm text-gray-600">{t.pricing.description}</p>
                <div className="pt-4 border-t border-orange-200">
                  <p className="text-sm text-gray-600">{t.pricing.includes}</p>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
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
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">{t.meeting.revenue}</option>
                      <option value="under-1k">Under $1K</option>
                      <option value="1k-5k">$1K - $5K</option>
                      <option value="5k-10k">$5K - $10K</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="over-50k">Over $50K</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="products"
                      value={formData.products}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">{t.meeting.products}</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-100">51-100</option>
                      <option value="over-100">Over 100</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                  className="w-full bg-orange-600 hover:bg-orange-700 h-12 text-lg"
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
