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
import { Zap, CheckCircle, ArrowRight, Mail, Phone } from "lucide-react";
import { useState } from "react";

const translations = {
  en: {
    title: "Full Integration Package",
    subtitle: "For brands that want full-scale support",
    overview: {
      title: "Package Overview",
      description:
        "This package offers comprehensive support for those who want to build a strong brand not only on Amazon but also in multiple marketplaces. An expert from our team manages all steps of the process from scratch brand building by taking care of your store one-on-one.",
    },
    whatIncluded: {
      title: "What's Included",
      items: [
        "Corporate Package content +",
        "Support in other marketplaces like Etsy, Shopify",
        "Dedicated assignment of 1 person from our team to your store",
        "Comprehensive support in brand building from scratch",
      ],
    },
    process: {
      title: "Our Process",
      steps: [
        {
          title: "Brand Foundation",
          description: "Creating multi-platform strategy",
          duration: "2-3 weeks",
        },
        {
          title: "Setup & Integration",
          description: "Shopify, Etsy and Amazon integration",
          duration: "3-4 weeks",
        },
        {
          title: "One-on-One Management",
          description:
            "Management of operational processes with assigned expert",
          duration: "Ongoing",
        },
        {
          title: "Brand Building",
          description: "Long-term growth and sustainability plan",
          duration: "Ongoing",
        },
      ],
    },
    benefits: {
      title: "Key Benefits",
      items: [
        "Sales opportunity in multiple marketplaces",
        "Dedicated expert support assigned to your store",
        "Opportunity to build a brand from scratch",
        "Sustainable growth with full integration",
        "One-stop solution for all processes",
      ],
    },
    pricing: {
      title: "Investment",
      price: "2,500 USD / Monthly",
      description:
        "Final pricing may change according to your requests before the process and is determined at the beginning.",
      includes:
        "Our packages are based on monthly payments, not one-time payments.",
    },
    meeting: {
      title: "Request a Full Integration Package Consultation",
      subtitle:
        "Let's discuss how we can build your brand across all platforms",
      name: "Full Name",
      email: "Email Address",
      company: "Company Name",
      employees: "Number of Employees",
      industry: "Industry",
      revenue: "Current Monthly Revenue",
      products: "Number of Products",
      platforms: "Current Platforms",
      brandGoals: "Brand Goals",
      challenges: "Current Challenges",
      timeline: "Preferred Timeline",
      send: "Request Consultation",
      success:
        "Thank you! We'll contact you within 24 hours to schedule your consultation.",
    },
  },
  tr: {
    title: "Tam Entegrasyon Paketi",
    subtitle: "Tam teşekküllü destek isteyen markalar için",
    overview: {
      title: "Paket Genel Bakış",
      description:
        "Bu paket, yalnızca Amazon'da değil, çoklu pazaryerlerinde güçlü bir marka oluşturmak isteyenler için tam kapsamlı bir destek sunar. Ekibimizden bir uzman, mağazanızla birebir ilgilenerek sıfırdan marka inşasına kadar sürecin tüm adımlarını yönetir.",
    },
    whatIncluded: {
      title: "Paket İçeriği",
      items: [
        "Kurumsal Paket içeriği +",
        "Etsy, Shopify gibi diğer pazaryerlerinde destek",
        "Ekibimizden 1 kişinin mağazanıza özel atanması",
        "Sıfırdan marka kurulumunda tam kapsamlı destek",
      ],
    },
    process: {
      title: "Sürecimiz",
      steps: [
        {
          title: "Marka Temeli",
          description: "Çoklu platform stratejisi oluşturma",
          duration: "2-3 hafta",
        },
        {
          title: "Kurulum & Entegrasyon",
          description: "Shopify, Etsy ve Amazon entegrasyonu",
          duration: "3-4 hafta",
        },
        {
          title: "Birebir Yönetim",
          description: "Atanmış uzmanla operasyonel süreçlerin yönetimi",
          duration: "Devam eden",
        },
        {
          title: "Marka İnşası",
          description: "Uzun vadeli büyüme ve sürdürülebilirlik planı",
          duration: "Devam eden",
        },
      ],
    },
    benefits: {
      title: "Temel Faydalar",
      items: [
        "Çoklu pazaryerlerinde satış imkanı",
        "Mağazanıza özel atanmış uzman desteği",
        "Sıfırdan marka kurma fırsatı",
        "Tam entegrasyon ile sürdürülebilir büyüme",
        "Tüm süreçlerde tek noktadan çözüm",
      ],
    },
    pricing: {
      title: "Yatırım",
      price: "2.500 USD / Aylık",
      description:
        "Nihai fiyatlandırma süreç öncesi taleplerinize göre değişiklik gösterebilir ve başta belirlenir.",
      includes:
        "Paketlerimiz tek seferlik ödeme değil aylık ödeme üzerine kuruludur.",
    },
    meeting: {
      title: "Tam Entegrasyon Paketi Danışmanlığı Talep Edin",
      subtitle: "Markanızı tüm platformlarda nasıl kurabileceğimizi konuşalım",
      name: "Ad Soyad",
      email: "E-posta Adresi",
      company: "Şirket Adı",
      employees: "Çalışan Sayısı",
      industry: "Sektör",
      revenue: "Mevcut Aylık Gelir",
      products: "Ürün Sayısı",
      platforms: "Mevcut Platformlar",
      brandGoals: "Marka Hedefleri",
      challenges: "Mevcut Zorluklar",
      timeline: "Tercih Edilen Zaman Çizelgesi",
      send: "Danışmanlık Talep Et",
      success:
        "Teşekkürler! Danışmanlığınızı planlamak için 24 saat içinde sizinle iletişime geçeceğiz.",
    },
  },
};

export default function FullIntegrationPackagePage() {
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
    platforms: "",
    brandGoals: "",
    challenges: "",
    timeline: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
          formType: "full-integration",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          employees: "",
          industry: "",
          revenue: "",
          products: "",
          platforms: "",
          brandGoals: "",
          challenges: "",
          timeline: "",
        });
      } else {
        console.error("Form submission failed");
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
          <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Zap className="h-10 w-10 text-white" />
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
                      <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-navy-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 mb-2">{step.description}</p>
                        <span className="text-sm text-emerald-600 font-medium">
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
            <Card className="shadow-lg border-0 bg-emerald-50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-navy-900">
                  {t.pricing.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-emerald-600">
                  {t.pricing.price}
                </div>
                <p className="text-sm text-gray-600">{t.pricing.description}</p>
                <div className="pt-4 border-t border-emerald-200">
                  <p className="text-sm text-gray-600">{t.pricing.includes}</p>
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
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
                  <a
                    href="mailto:info@gearsofdown.com"
                    className="text-gray-600 hover:underline"
                  >
                    info@gearsofdown.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-navy-600 flex-shrink-0 mt-1" />
                  <div className="flex flex-col">
                    <a
                      href="tel:+905350353450"
                      className="text-gray-600 hover:underline"
                    >
                      +90 535 035 34 50 - Temel K.
                    </a>
                    <a
                      href="tel:+905519536312"
                      className="text-gray-600 hover:underline"
                    >
                      +90 551 953 63 12 - Muaz I.
                    </a>
                  </div>
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
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="">{t.meeting.revenue}</option>
                      <option value="under-10k">Under $10K</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k-250k">$100K - $250K</option>
                      <option value="over-250k">Over $250K</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="products"
                      value={formData.products}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="">{t.meeting.products}</option>
                      <option value="1-50">1-50</option>
                      <option value="51-100">51-100</option>
                      <option value="101-500">101-500</option>
                      <option value="501-1000">501-1000</option>
                      <option value="over-1000">Over 1000</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                    name="platforms"
                    placeholder={t.meeting.platforms}
                    value={formData.platforms}
                    onChange={handleInputChange}
                    required
                    rows={3}
                  />
                </div>
                <div>
                  <Textarea
                    name="brandGoals"
                    placeholder={t.meeting.brandGoals}
                    value={formData.brandGoals}
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
                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-lg"
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
