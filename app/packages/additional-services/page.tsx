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
  Settings,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  DollarSign,
  Package,
  Truck,
  FileText,
  AlertCircle,
  Store,
  BarChart3,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";

const translations = {
  en: {
    title: "Additional Services",
    subtitle: "Additional support services tailored to your needs",
    overview: {
      title: "Service Overview",
      description:
        "With the special services we offer in addition to our packages, we provide fast and effective solutions to the specific problems you encounter. Each service is meticulously carried out by our expert team.",
    },
    services: [
      {
        title: "Amazon error code solution (e.g. 5561)",
        price: "100 USD",
        icon: "AlertCircle",
        description:
          "Quick solution to error codes you encounter on Amazon platform",
      },
      {
        title: "Store opening only",
        price: "300 USD",
        icon: "Store",
        description: "Amazon store setup and basic settings",
      },
      {
        title: "International shipping issues solution",
        price: "300 USD",
        icon: "Truck",
        description: "Resolving problems in international shipping processes",
      },
      {
        title: "Europe FBA solutions",
        price: "500 USD",
        icon: "Package",
        description:
          "Comprehensive support for FBA operations in European market",
      },
      {
        title: "US FDA document acquisition",
        price: "200 USD",
        icon: "FileText",
        description: "Obtaining required FDA documents for US market",
      },
      {
        title: "US warehouse service",
        price: "Special price per shipment",
        icon: "Package",
        description: "Warehouse and logistics support in the US",
      },
      {
        title: "US company formation (excluding costs)",
        price: "70 USD",
        icon: "FileText",
        description: "Guidance in company formation process in the US",
      },
      {
        title: "Advertising support only (1 ad)",
        price: "100 USD",
        icon: "BarChart3",
        description: "Optimization support for single advertising campaign",
      },
      {
        title: "Product listing only (1 product)",
        price: "30 USD",
        icon: "ShoppingCart",
        description: "Professional listing service for single product",
      },
      {
        title: "Store analysis and development advice",
        price: "200 USD",
        icon: "BarChart3",
        description:
          "Analysis of store performance and improvement recommendations",
      },
      {
        title: "Shipping processes handled by us",
        price: "Special price per shipment",
        icon: "Truck",
        description: "Complete management of shipping operations by us",
      },
    ],
    cta: {
      title: "Which Service Do You Need?",
      description: "Contact us to offer you customized solutions.",
      button: "Contact Us Now",
    },
    contact: {
      title: "Contact",
      name: "Full Name",
      email: "Email",
      service: "Service you need",
      message: "Details",
      submit: "Get Quote",
    },
  },
  tr: {
    title: "Ek Hizmetler",
    subtitle: "İhtiyaçlarınıza özel ek destek hizmetleri",
    overview: {
      title: "Hizmet Genel Bakış",
      description:
        "Paketlerimize ek olarak sunduğumuz özel hizmetlerle, karşılaştığınız spesifik sorunlara hızlı ve etkili çözümler sağlıyoruz. Her bir hizmet, uzman ekibimiz tarafından titizlikle yürütülür.",
    },
    services: [
      {
        title: "Amazon hata kodu çözümü (örnek: 5561)",
        price: "100 USD",
        icon: "AlertCircle",
        description:
          "Amazon platformunda karşılaştığınız hata kodlarının hızlı çözümü",
      },
      {
        title: "Yalnızca mağaza açılışı",
        price: "300 USD",
        icon: "Store",
        description: "Amazon mağaza kurulumu ve temel ayarlar",
      },
      {
        title: "Yurtdışına kargo çıkışı sorunları çözümü",
        price: "300 USD",
        icon: "Truck",
        description:
          "Uluslararası kargo süreçlerindeki problemlerin giderilmesi",
      },
      {
        title: "Avrupa FBA çözümleri",
        price: "500 USD",
        icon: "Package",
        description: "Avrupa pazarında FBA operasyonları için kapsamlı destek",
      },
      {
        title: "Amerika FDA belgesi alımı",
        price: "200 USD",
        icon: "FileText",
        description: "ABD pazarı için gerekli FDA belgelerinin temini",
      },
      {
        title: "Amerika ara depo hizmeti",
        price: "Gönderi başına özel fiyat",
        icon: "Package",
        description: "ABD'de ara depo ve lojistik desteği",
      },
      {
        title: "Amerika şirket açılışı (masraflar hariç)",
        price: "70 USD",
        icon: "FileText",
        description: "ABD'de şirket kuruluş sürecinde rehberlik",
      },
      {
        title: "Sadece reklam desteği (1 reklam)",
        price: "100 USD",
        icon: "BarChart3",
        description: "Tek reklam kampanyası için optimizasyon desteği",
      },
      {
        title: "Sadece ürün listeleme (1 ürün)",
        price: "30 USD",
        icon: "ShoppingCart",
        description: "Tek ürün için profesyonel listeleme hizmeti",
      },
      {
        title: "Mağaza analizi ve geliştirme tavsiyesi",
        price: "200 USD",
        icon: "BarChart3",
        description: "Mağaza performansının analizi ve iyileştirme önerileri",
      },
      {
        title: "Kargo süreçlerinin tarafımızca halledilmesi",
        price: "Gönderi başına özel fiyat",
        icon: "Truck",
        description:
          "Kargo operasyonlarının tamamen bizim tarafımızdan yönetilmesi",
      },
    ],
    cta: {
      title: "Hangi Hizmete İhtiyacınız Var?",
      description: "Size özel çözümler sunmak için bizimle iletişime geçin.",
      button: "Hemen İletişime Geçin",
    },
    contact: {
      title: "İletişim",
      name: "Ad Soyad",
      email: "E-posta",
      service: "İhtiyacınız olan hizmet",
      message: "Detaylar",
      submit: "Teklif Al",
    },
  },
};

const iconComponents = {
  AlertCircle,
  Store,
  Truck,
  Package,
  FileText,
  BarChart3,
  ShoppingCart,
  Settings,
};

export default function EkHizmetlerPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t.overview.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.overview.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.services.map((service, index) => {
                const IconComponent =
                  iconComponents[service.icon as keyof typeof iconComponents] ||
                  Settings;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-indigo-600" />
                      </div>
                      <CardTitle className="text-lg leading-tight mb-2">
                        {service.title}
                      </CardTitle>
                      <div className="text-2xl font-bold text-indigo-600">
                        {service.price}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
            <p className="text-xl mb-8">{t.cta.description}</p>
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100"
            >
              {t.cta.button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t.contact.title}</CardTitle>
                <CardDescription className="flex items-center justify-center gap-4 mt-4">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    info@gearsofdown.com
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    +90 551 953 63 12
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    placeholder={t.contact.name}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder={t.contact.email}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">{t.contact.service}</option>
                    {t.services.map((service, index) => (
                      <option key={index} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  <Textarea
                    name="message"
                    placeholder={t.contact.message}
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                  />
                  <Button type="submit" className="w-full">
                    {t.contact.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
