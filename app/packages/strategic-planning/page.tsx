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
import { Target, CheckCircle, ArrowRight, Mail, Phone } from "lucide-react";
import { useState } from "react";

const translations = {
  en: {
    title: "Starter Package",
    subtitle: "Basic setup and guidance support for beginners",
    overview: {
      title: "Package Overview",
      description:
        "We provide all the setup and basic training support you need to take your first steps on Amazon with confidence. This package guides you through the process from opening your store to listing products.",
    },
    whatIncluded: {
      title: "What's Included",
      items: [
        "Amazon store setup",
        "Payoneer account setup and integration",
        "Listing of 5 products",
        "Product research training",
        "FBA & FBM business models training",
        "General Amazon seller training and information",
        "A total of 4 (40 min) meetings and progress analysis over 1 month",
        "Logistics network guidance and support",
        "Email and WhatsApp support service",
      ],
    },
    process: {
      title: "Our Process",
      steps: [
        {
          title: "Setup and Introduction",
          description: "Store and payment system setup",
          duration: "1 week",
        },
        {
          title: "Product Listing",
          description: "Uploading and editing first products",
          duration: "1-2 weeks",
        },
        {
          title: "Training & Analysis",
          description: "FBA & FBM training, progress evaluation",
          duration: "Over 1 month",
        },
      ],
    },
    benefits: {
      title: "Key Benefits",
      items: [
        "Fast and accurate start on Amazon",
        "Product listing and getting ready for sale",
        "Safe operation with logistics and payment solutions",
        "Direct communication and one-on-one support",
      ],
    },
    pricing: {
      title: "Investment",
      price: "550 USD / Monthly",
      description:
        "Final pricing may change according to your requests before the process and is determined at the beginning.",
      includes:
        "Our packages are based on monthly payments, not one-time payments.",
    },
    meeting: {
      title: "Request a Starter Package Consultation",
      subtitle: "Let's discuss how we can help you start your Amazon journey",
      name: "Full Name",
      email: "Email Address",
      company: "Company Name",
      employees: "Number of Employees",
      industry: "Industry",
      experience: "E-commerce Experience",
      products: "Products You Want to Sell",
      challenges: "Current Challenges",
      goals: "Your Goals",
      timeline: "Preferred Timeline",
      send: "Request Consultation",
      success:
        "Thank you! We'll contact you within 24 hours to schedule your consultation.",
    },
  },
  tr: {
    title: "Başlangıç Paketi",
    subtitle: "Yeni başlayanlar için temel kurulum ve yönlendirme desteği",
    overview: {
      title: "Paket Genel Bakış",
      description:
        "Amazon'a ilk adımlarınızı güvenle atmanız için gerekli tüm kurulum ve temel eğitim desteğini sağlıyoruz. Bu paket, mağazanızı açmanızdan ürün listelemeye kadar olan süreçte size yol gösterir.",
    },
    whatIncluded: {
      title: "Paket İçeriği",
      items: [
        "Amazon mağaza kurulumu",
        "Payoneer hesabı kurulumu ve entegrasyonu",
        "5 ürünün listelenmesi",
        "Ürün araştırması eğitimi",
        "FBA & FBM iş modelleri eğitimi",
        "Genel Amazon satıcı eğitimi ve bilgilendirme",
        "1 ay boyunca toplam 4 adet (40 dk) toplantı ve ilerleme analizi",
        "Lojistik ağı yönlendirme ve destek",
        "E-posta ve WhatsApp üzerinden destek hizmeti",
      ],
    },
    process: {
      title: "Sürecimiz",
      steps: [
        {
          title: "Kurulum ve Tanıtım",
          description: "Mağaza ve ödeme sistemi kurulumu",
          duration: "1 hafta",
        },
        {
          title: "Ürün Listeleme",
          description: "İlk ürünlerin yüklenmesi ve düzenlenmesi",
          duration: "1-2 hafta",
        },
        {
          title: "Eğitim & Analiz",
          description: "FBA & FBM eğitimi, ilerleme değerlendirmesi",
          duration: "1 ay boyunca",
        },
      ],
    },
    benefits: {
      title: "Temel Faydalar",
      items: [
        "Amazon'a hızlı ve doğru başlangıç",
        "Ürün listeleme ve satışa hazır hale gelme",
        "Lojistik ve ödeme çözümleriyle güvenli operasyon",
        "Doğrudan iletişim ve birebir destek",
      ],
    },
    pricing: {
      title: "Yatırım",
      price: "550 USD / Aylık",
      description:
        "Nihai fiyatlandırma süreç öncesi taleplerinize göre değişiklik gösterebilir ve başta belirlenir.",
      includes:
        "Paketlerimiz tek seferlik ödeme değil aylık ödeme üzerine kuruludur.",
    },
    meeting: {
      title: "Başlangıç Paketi Danışmanlığı Talep Edin",
      subtitle: "Amazon yolculuğunuza nasıl başlayabileceğinizi konuşalım",
      name: "Ad Soyad",
      email: "E-posta Adresi",
      company: "Şirket Adı",
      employees: "Çalışan Sayısı",
      industry: "Sektör",
      experience: "E-ticaret Deneyimi",
      products: "Satmak İstediğiniz Ürünler",
      challenges: "Mevcut Zorluklar",
      goals: "Hedefleriniz",
      timeline: "Tercih Edilen Zaman Çizelgesi",
      send: "Danışmanlık Talep Et",
      success:
        "Teşekkürler! Danışmanlığınızı planlamak için 24 saat içinde sizinle iletişime geçeceğiz.",
    },
  },
};

export default function StarterPackagePage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    industry: "",
    experience: "",
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
      experience: "",
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
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Target className="h-10 w-10 text-white" />
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
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-navy-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 mb-2">{step.description}</p>
                        <span className="text-sm text-blue-600 font-medium">
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
            <Card className="shadow-lg border-0 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-navy-900">
                  {t.pricing.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-blue-600">
                  {t.pricing.price}
                </div>
                <p className="text-sm text-gray-600">{t.pricing.description}</p>
                <div className="pt-4 border-t border-blue-200">
                  <p className="text-sm text-gray-600">{t.pricing.includes}</p>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
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
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">{t.meeting.experience}</option>
                      <option value="none">No Experience</option>
                      <option value="beginner">Beginner (0-1 year)</option>
                      <option value="intermediate">
                        Intermediate (1-3 years)
                      </option>
                      <option value="advanced">Advanced (3+ years)</option>
                    </select>
                  </div>
                  <div>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    name="products"
                    placeholder={t.meeting.products}
                    value={formData.products}
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
                  className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg"
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
