"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import {
  ArrowRight,
  Target,
  CheckCircle,
  TrendingUp,
  Clock,
  Users,
  Award,
  Building2,
  Zap,
} from "lucide-react";
import Link from "next/link";

const translations = {
  en: {
    title: "Our Packages",
    subtitle:
      "Choose the package that best suits your Amazon e-commerce journey",
    baslangic: {
      title: "Starter Package",
      description: "Basic setup and guidance support for beginners.",
      questions: [
        "I want to start e-commerce but don't know where to begin?",
        "Where should I start to sell abroad?",
        "I have no knowledge about online commerce?",
        "How will I handle the shipping process?",
      ],
      features: [
        "Amazon store setup",
        "Product research training",
        "Introduction to FBA and FBM business models",
        "General Amazon seller training",
      ],
      duration: "1-2 Months",
      team: "Senior Consultants",
      price: "Starting from $500",
    },
    yukselme: {
      title: "Growth Package",
      description:
        "For sellers who have basic knowledge and want to grow their store.",
      questions: [
        "I have a store but can't reach the sales I want?",
        "Does the quality of my product listings affect sales?",
        "Should I run advertising campaigns?",
        "How can I grow my store?",
      ],
      features: [
        "Store and product analysis",
        "Market research & competitor analysis",
        "Logistics network guidance",
        "US warehouse service",
      ],
      duration: "3-4 Months",
      team: "Technical and Operations Specialists",
      price: "Starting from $1500",
    },
    kurumsal: {
      title: "Corporate Package",
      description: "Advanced growth support for brands with active operations.",
      questions: [
        "My store has reached a certain level, how can I grow it?",
        "How can I increase my volume and sales?",
        "What should I do to get ahead of my competitors?",
        "What should I do to establish and regularize the operation system?",
      ],
      features: [
        "Detailed store analysis",
        "In-depth market & competitor analysis",
        "Domestic and international product sourcing support",
        "Special pricing in logistics network",
      ],
      duration: "6-12 Months",
      team: "Full Team",
      price: "Starting from $2000",
    },
    tamEntegrasyon: {
      title: "Full Integration Package",
      description: "For those who want full-scale support.",
      questions: [
        "I want to build a brand, what should I do on this path?",
        "I need someone who can solve problems that may arise in the process.",
        "I want to enter platforms like Etsy, Shopify besides Amazon.",
      ],
      features: [
        "All corporate package content included",
        "Other marketplaces like Etsy, Shopify",
        "One-on-one dedicated person from our team",
        "Strong brand building journey from scratch",
      ],
      duration: "12+ Months",
      team: "Full Team",
      price: "Starting from $2500",
    },
    features: "Key Features",
    duration: "Duration",
    team: "Team",
    pricing: "Pricing",
    learnMore: "Click to view details",
    thisPackageForYou: "This package is for you.",
    additionalServices: "Additional Services",
    additionalServicesDesc:
      "Additional support services tailored to your needs",
  },
  tr: {
    title: "Paketlerimiz",
    subtitle: "Amazon e-ticaret sürecinizde size en uygun paketi seçin",
    baslangic: {
      title: "Başlangıç Paketi",
      description:
        "Yeni başlayanlar için temel kurulum ve yönlendirme desteği.",
      questions: [
        "E-ticarete başlamak istiyorum ama nereden başlayacağımı bilmiyorum?",
        "Yurt dışına satış yapmak için nereden başlamalıyım?",
        "Online ticaret konusunda bilgim yok?",
        "Kargolama sürecini nasıl halledeceğim?",
      ],
      features: [
        "Amazon mağaza kurulumu",
        "Ürün araştırması eğitimi",
        "FBA ve FBM iş modellerinin tanıtımı",
        "Genel Amazon satıcı eğitimi",
      ],
      duration: "1-2 Ay",
      team: "Kıdemli Danışmanlar",
      price: "500$'dan başlayan fiyatlarla",
    },
    yukselme: {
      title: "Yükselme Paketi",
      description:
        "Temel bilgileri almış, mağazasını büyütmek isteyen satıcılar için.",
      questions: [
        "Mağazam var ancak istediğim satışlara ulaşamıyorum?",
        "Ürün liste kalitemin satışlara etkisi var mı?",
        "Reklamlar çalışması yapmalı mıyım?",
        "Mağazamı nasıl büyütebilirim?",
      ],
      features: [
        "Mağaza ve ürün analizi",
        "Pazar araştırması & rakip analizi",
        "Lojistik ağı yönlendirme",
        "Amerika ara depo hizmeti",
      ],
      duration: "3-4 Ay",
      team: "Teknik ve Operasyon Uzmanları",
      price: "1500$'dan başlayan fiyatlarla",
    },
    kurumsal: {
      title: "Kurumsal Paket",
      description:
        "Aktif operasyonu olan markalar için ileri düzey büyüme desteği.",
      questions: [
        "Mağazam belirli bir seviyeye geldi, nasıl büyütebilirim?",
        "Hacmimi ve satışlarımı nasıl arttırabilirim?",
        "Rakiplerimin önüne geçmek için neler yapmalıyım?",
        "Operasyon sistemini oturtmak ve düzenli hale getirmek için ne yapmalıyım?",
      ],
      features: [
        "Detaylı mağaza analizi",
        "Derinlemesine pazar & rakip analizi",
        "Yurt içi ve yurt dışı ürün tedarik desteği",
        "Lojistik ağında özel fiyatlandırma",
      ],
      duration: "6-12 Ay",
      team: "Tüm Ekip",
      price: "2000$'dan başlayan fiyatlarla",
    },
    tamEntegrasyon: {
      title: "Tam Entegrasyon Paketi",
      description: "Tam teşekküllü destek isteyenler için.",
      questions: [
        "Markalaşmak istiyorum bu yolda neler yapmalıyım?",
        "Süreç içinde ortaya çıkabilecek sorunlarımı çözebilecek birilerine ihtiyacım var.",
        "Amazon dışında; Etsy, Shopify gibi platformlara da girmek istiyorum.",
      ],
      features: [
        "Tüm kurumsal paket içeriği dahildir",
        "Etsy, Shopify gibi diğer pazaryerleri",
        "Ekibimizden 1 kişinin birebir ilgilenmesi",
        "Sıfırdan güçlü marka kurma yolculuğu",
      ],
      duration: "12 Ay+",
      team: "Tüm Ekip",
      price: "2500$'dan başlayan fiyatlarla",
    },
    features: "Temel Özellikler",
    duration: "Süre",
    team: "Ekip",
    pricing: "Fiyatlandırma",
    learnMore: "Ayrıntıları görmek için tıklayın",
    thisPackageForYou: "Bu paket sizin için.",
    additionalServices: "Ek Hizmetler",
    additionalServicesDesc: "İhtiyaçlarınıza özel ek destek hizmetleri",
  },
};

export default function PackagesPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const packages = [
    {
      id: "strategic-planning",
      icon: Target,
      title: t.baslangic.title,
      description: t.baslangic.description,
      questions: t.baslangic.questions,
      features: t.baslangic.features,
      duration: t.baslangic.duration,
      team: t.baslangic.team,
      price: t.baslangic.price,
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      borderColor: "border-blue-200",
      textColor: "text-blue-600",
    },
    {
      id: "growth-acceleration",
      icon: TrendingUp,
      title: t.yukselme.title,
      description: t.yukselme.description,
      questions: t.yukselme.questions,
      features: t.yukselme.features,
      duration: t.yukselme.duration,
      team: t.yukselme.team,
      price: t.yukselme.price,
      color: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
      borderColor: "border-orange-200",
      textColor: "text-orange-600",
    },
    {
      id: "operational-excellence",
      icon: Building2,
      title: t.kurumsal.title,
      description: t.kurumsal.description,
      questions: t.kurumsal.questions,
      features: t.kurumsal.features,
      duration: t.kurumsal.duration,
      team: t.kurumsal.team,
      price: t.kurumsal.price,
      color: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
      borderColor: "border-purple-200",
      textColor: "text-purple-600",
    },
    {
      id: "full-integration",
      icon: Zap,
      title: t.tamEntegrasyon.title,
      description: t.tamEntegrasyon.description,
      questions: t.tamEntegrasyon.questions,
      features: t.tamEntegrasyon.features,
      duration: t.tamEntegrasyon.duration,
      team: t.tamEntegrasyon.team,
      price: t.tamEntegrasyon.price,
      color: "bg-emerald-500",
      hoverColor: "hover:bg-emerald-600",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-fit mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-12">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon;
            return (
              <Card
                key={pkg.id}
                className="hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 cursor-pointer group h-full "
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
                <CardContent className="space-y-4 pt-0 flex flex-col justify-between h-full">
                  {/* Questions */}
                  <div>
                    <div className="space-y-2 text-sm">
                      {pkg.questions.slice(0, 2).map((question, index) => (
                        <div key={index} className="text-gray-500 italic">
                          {question}
                        </div>
                      ))}
                    </div>
                    <div
                      className={`${pkg.textColor} font-semibold text-sm mt-3`}
                    >
                      {t.thisPackageForYou}
                    </div>
                  </div>

                  {/* Package Details */}
                  <div className="space-y-2 pt-4 border-t text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{pkg.price}</span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-4">
                    <Link href={`/packages/${pkg.id}`}>
                      <Button
                        className={`w-full ${pkg.color} ${pkg.hoverColor} text-white text-sm py-6 h-10 whitespace-normal`}
                      >
                        {t.learnMore}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Additional Services */}
          <Card className="hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 cursor-pointer group h-full">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-indigo-500 hover:bg-indigo-600 group-hover:scale-110 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-navy-900 mb-3 leading-tight">
                {t.additionalServices}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0 flex flex-col justify-between h-full">
              <div>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-500 italic">
                    Hızlı çözümler için
                  </div>
                  <div className="text-gray-500 italic">
                    Tek seferlik ihtiyaçlar
                  </div>
                </div>
                <div className="text-indigo-600 font-semibold text-sm mt-3">
                  Özel çözümler için.
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">Hızlı çözüm</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">30$'dan başlayan</span>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/packages/additional-services">
                  <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm py-6 h-10 whitespace-normal">
                    {t.learnMore}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
