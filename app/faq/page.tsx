"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/language-context";
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  DollarSign,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const translations = {
  en: {
    hero: {
      title: "Frequently Asked Questions",
      subtitle:
        "Find answers to frequently asked questions about our Amazon e-commerce services",
    },
    general: {
      title: "General Questions",
      items: [
        {
          question: "What documents do I need to sell on Amazon?",
          answer:
            "To sell on Amazon, you basically need tax number, bank account and identity documents. Additional documents may be required depending on the product category (FDA, CE, etc.). We guide you on this matter.",
        },
        {
          question: "What is the difference between FBA and FBM?",
          answer:
            "FBA (Fulfillment by Amazon) means you use Amazon's storage and shipping service, while FBM (Fulfillment by Merchant) means you ship from your own warehouse. Both have advantages and we help you determine the most suitable model for you.",
        },
        {
          question: "How much capital is needed to start selling on Amazon?",
          answer:
            "This completely depends on your product category and sales strategy. You can start with a minimum of $1000-2000, but $5000-10000 provides a more comfortable start for larger volumes. We determine the appropriate strategy for you together.",
        },
        {
          question: "Which products are more profitable to sell?",
          answer:
            "This completely depends on market analysis. Products with high demand but low competition are the ideal choice. In our product research training, we give you detailed information on this subject and teach you how to find profitable products.",
        },
      ],
    },
    packages: {
      title: "Package and Service Questions",
      items: [
        {
          question: "Which package should I choose?",
          answer:
            "If you are new to Amazon, Starter Package is suitable for you, if you have a store but it's not growing, Growth Package, if you have reached a certain level, Corporate Package, if you want full support, Full Integration Package is suitable for you.",
        },
        {
          question: "How long are the package durations?",
          answer:
            "Starter Package lasts 1-2 months, Growth Package 3-4 months, Corporate Package 6-12 months, Full Integration Package 12+ months. Each package is planned specifically for you.",
        },
        {
          question: "Can I customize the packages?",
          answer:
            "Yes, all our packages can be customized according to your needs. In the initial meeting, we evaluate your requirements and offer you the most suitable solution.",
        },
        {
          question: "Can I only benefit from additional services?",
          answer:
            "Of course! You can find our specially priced services for your one-time needs on our additional services page. Many options are available from store opening to advertising support.",
        },
      ],
    },
    pricing: {
      title: "Pricing and Process Questions",
      items: [
        {
          question: "Do you offer payment plans?",
          answer:
            "This section can be changed but let it remain as it is now. We have monthly payment plans available and offer flexible payment options.",
        },
        {
          question: "How is your pricing determined?",
          answer:
            "Our prices are determined according to package content, duration and scope of service provided. Final pricing may change according to your requests before the process and is determined at the beginning.",
        },
        {
          question: "Is the initial consultation free?",
          answer:
            "Yes, our initial consultation is completely free. In this meeting, we evaluate your needs, determine the most suitable package for you and answer your questions.",
        },
        {
          question: "Do you have a success guarantee?",
          answer:
            "A company that gives a 100% success guarantee on Amazon is not reliable. However, with our 8+ years of experience and field experience, we provide you with the best support. Our customer satisfaction rate is 95%.",
        },
        {
          question: "How long does project initiation take?",
          answer:
            "We usually start the project within 1-2 weeks after the contract is signed. This period can be shortened even further for urgent situations.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept various payment methods such as bank transfer, credit card and PayPal. We determine the most suitable payment method for you together.",
        },
      ],
    },
    contact: {
      title: "Still Have Questions?",
      subtitle:
        "We are here to help! Contact us for personalized answers to your specific questions.",
      phone: "Call us at +90 551 953 63 12",
      email: "Email us at info@gearsofdown.com",
      meeting: "Get Free Consultation",
    },
  },
  tr: {
    hero: {
      title: "Sıkça Sorulan Sorular",
      subtitle:
        "Amazon e-ticaret hizmetlerimiz hakkında sık sorulan soruların cevaplarını bulun",
    },
    general: {
      title: "Genel Sorular",
      items: [
        {
          question:
            "Amazon'da satış yapmak için hangi belgelere ihtiyacım var?",
          answer:
            "Amazon'da satış yapmak için temel olarak vergi numarası, banka hesabı ve kimlik belgelerine ihtiyacınız var. Ürün kategorisine göre ek belgeler gerekebilir (FDA, CE vb.). Bu konuda size rehberlik ediyoruz.",
        },
        {
          question: "FBA ve FBM arasındaki fark nedir?",
          answer:
            "FBA (Fulfillment by Amazon) Amazon'un depolama ve kargo hizmetini kullanmanız, FBM (Fulfillment by Merchant) ise kendi deponuzdan gönderi yapmanızdır. Her ikisinin de avantajları vardır ve size en uygun modeli belirlemenize yardımcı oluruz.",
        },
        {
          question: "Amazon'da satışa başlamak için ne kadar sermaye gerekir?",
          answer:
            "Bu tamamen ürün kategorisi ve satış stratejinize bağlıdır. Minimum 1000-2000$ ile başlanabilir ancak daha büyük hacimler için 5000-10000$ daha rahat bir başlangıç sağlar. Size uygun stratejiyi birlikte belirleriz.",
        },
        {
          question: "Hangi ürünleri satmak daha karlı?",
          answer:
            "Bu tamamen pazar analizine bağlıdır. Talep yüksek ama rekabet düşük olan ürünler ideal seçimdir. Ürün araştırma eğitimimizde size bu konuda detaylı bilgi veriyoruz ve karlı ürünleri nasıl bulacağınızı öğretiyoruz.",
        },
      ],
    },
    packages: {
      title: "Paket ve Hizmet Soruları",
      items: [
        {
          question: "Hangi paketi seçmeliyim?",
          answer:
            "Amazon'a yeni başlıyorsanız Başlangıç Paketi, mağazanız var ama büyümüyorsa Yükselme Paketi, belirli bir seviyeye geldiyseniz Kurumsal Paket, tam destek istiyorsanız Tam Entegrasyon Paketi size uygundur.",
        },
        {
          question: "Paket süreleri ne kadar?",
          answer:
            "Başlangıç Paketi 1-2 ay, Yükselme Paketi 3-4 ay, Kurumsal Paket 6-12 ay, Tam Entegrasyon Paketi 12 ay+ sürmektedir. Her paket size özel planlanır.",
        },
        {
          question: "Paketleri özelleştirebilir miyim?",
          answer:
            "Evet, tüm paketlerimiz ihtiyaçlarınıza göre özelleştirilebilir. İlk görüşmede gereksinimlerinizi değerlendirip size en uygun çözümü sunuyoruz.",
        },
        {
          question: "Sadece ek hizmetlerden faydalanabilir miyim?",
          answer:
            "Tabii ki! Ek hizmetler sayfamızda tek seferlik ihtiyaçlarınız için özel fiyatlandırmalı hizmetlerimizi bulabilirsiniz. Mağaza açılışından reklam desteğine kadar birçok seçenek mevcuttur.",
        },
      ],
    },
    pricing: {
      title: "Fiyatlandırma ve Süreç Soruları",
      items: [
        {
          question: "Ödeme planları sunuyor musunuz?",
          answer:
            "Bu kısım değiştirilebilir ancak şimdi olduğu gibi kalsın. Aylık ödeme planlarımız mevcuttur ve esnek ödeme seçenekleri sunuyoruz.",
        },
        {
          question: "Fiyatlandırmanız nasıl belirleniyor?",
          answer:
            "Fiyatlarımız paket içeriği, süre ve verilen hizmetin kapsamına göre belirlenir. Nihai fiyatlandırma süreç öncesi taleplerinize göre değişiklik gösterebilir ve başta belirlenir.",
        },
        {
          question: "İlk danışmanlık ücretsiz mi?",
          answer:
            "Evet, ilk danışmanlığımız tamamen ücretsizdir. Bu görüşmede ihtiyaçlarınızı değerlendiriyor, size en uygun paketi belirliyoruz ve sorularınızı yanıtlıyoruz.",
        },
        {
          question: "Başarı garantiniz var mı?",
          answer:
            "Amazon'da %100 başarı garantisi veren firma güvenilir değildir. Ancak 8+ yıllık deneyimimiz ve sahada edindiğimiz tecrübelerle size en iyi desteği sağlıyoruz. Müşteri memnuniyet oranımız %95'tir.",
        },
        {
          question: "Proje başlangıcı ne kadar sürüyor?",
          answer:
            "Sözleşme imzalandıktan sonra genellikle 1-2 hafta içinde projeye başlıyoruz. Acil durumlar için bu süre daha da kısaltılabilir.",
        },
        {
          question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
          answer:
            "Banka havalesi, kredi kartı ve PayPal gibi çeşitli ödeme yöntemlerini kabul ediyoruz. Size en uygun ödeme şeklini birlikte belirleriz.",
        },
      ],
    },
    contact: {
      title: "Hala Sorularınız Var mı?",
      subtitle:
        "Yardım etmek için buradayız! Özel sorularınıza kişiselleştirilmiş cevaplar için bizimle iletişime geçin.",
      phone: "Bizi +90 551 953 63 12 numarasından arayın",
      email: "info@gearsofdown.com adresine e-posta gönderin",
      meeting: "Ücretsiz Danışmanlık Alın",
    },
  },
};

export default function FAQPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  const faqSections = [
    { title: t.general.title, items: t.general.items, icon: HelpCircle },
    { title: t.packages.title, items: t.packages.items, icon: MessageCircle },
    { title: t.pricing.title, items: t.pricing.items, icon: DollarSign },
  ];

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

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqSections.map((section, sectionIndex) => {
              const IconComponent = section.icon;
              return (
                <Card key={sectionIndex} className="shadow-lg border-0">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-navy-600" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-navy-900">
                        {section.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <AccordionItem
                          key={itemIndex}
                          value={`${sectionIndex}-${itemIndex}`}
                          className="border border-gray-200 rounded-lg px-4"
                        >
                          <AccordionTrigger className="text-left font-semibold text-navy-900 hover:text-navy-700">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 leading-relaxed pt-4">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 mb-12">{t.contact.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-navy-600" />
                </div>
                <p className="text-gray-600">{t.contact.phone}</p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-navy-600" />
                </div>
                <p className="text-gray-600">{t.contact.email}</p>
              </CardContent>
            </Card>

            {/* Meeting */}
            <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-navy-600" />
                </div>
                <Link href="/#contact">
                  <Button className="bg-navy-600 hover:bg-navy-700">
                    {t.contact.meeting}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
