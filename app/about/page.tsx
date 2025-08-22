"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import { Users, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const translations = {
  en: {
    hero: {
      title: "About GearsofDown",
      subtitle: "Your trusted growth partner in e-commerce",
    },
    story: {
      title: "Our Story",
      content: [
        "As Gears Of Down, we have been in the e-commerce sector for 8 years and in the Amazon sector for 5 years. During this process, we gained experience in every stage of the process, starting from e-commerce operations. We have both grown and continuously developed our team over the years.",
        "One of the most important features that distinguishes us from other companies is that we have our own stores in the sector. In this way, we have either experienced and solved almost every problem that our consultants may encounter in the field, or we have created a dynamic team that can quickly take action to solve similar problems. Our team consists of young and energetic professionals who work full-time on this job. Our familiarity with flexible working hours and intense pace enables us to offer current and innovative solutions.",
        "Not only in Turkey, but also thanks to our teammates residing in the USA, we can solve problems experienced on a global scale quickly and effectively.",
        "Our motto and vision are built on achieving great things with limited resources. As Gears Of Down, we progressed not with big capital, but with small capital and big efforts, weaving the process stitch by stitch. Therefore, whether you buy a starter package or a full integration package; for us, every client's store is like our own store. Because we know very well what hope, system building and work mean. We are aware that we are entrusted not only with your store, but also with your labor and hope.",
      ],
    },
    mission: {
      title: "Our Mission",
      content:
        "At GearsOfDown, our goal is to take Amazon consulting far beyond a few training videos or limited basic support; we aim to provide every business, large or small, with the quality service it deserves. As a true guide in the complex world of Amazon, we enable our local sellers to play a more effective role in global markets such as overseas and Amazon.",
    },
    values: {
      title: "Our Values",
      items: [
        {
          title: "Value Creation",
          description:
            "We aim to add measurable value to every project and produce concrete results that advance our customers' businesses.",
        },
        {
          title: "Integrity",
          description:
            "We work with complete transparency and honesty, building trust through our actions and recommendations.",
        },
        {
          title: "Innovation",
          description:
            "We adopt innovative approaches and state-of-the-art methodologies to solve complex business challenges.",
        },
        {
          title: "Partnership",
          description:
            "We work as true partners with our customers, invest in their success and focus on long-term relationships.",
        },
      ],
    },
    stats: {
      title: "Our Impact",
      items: [
        { number: "100+", label: "Happy Clients" },
        { number: "300+", label: "Successful Projects" },
        { number: "8+", label: "Years Experience" },
        { number: "95%", label: "Client Satisfaction" },
      ],
    },
    cta: {
      title: "Ready to Transform Your Business?",
      subtitle: "Let's discuss how you can reach your goals",
      button: "Get Started Now",
    },
  },
  tr: {
    hero: {
      title: "GearsofDown Hakkında",
      subtitle: "E-ticarette güvenilir büyüme ortağınız",
    },
    story: {
      title: "Hikayemiz",
      content: [
        "Gears Of Down olarak 8 yıldır e-ticaret, 5 yıldır ise Amazon sektörünün içindeyiz. Bu süreçte, e-ticaret operasyonlarından başlayarak sürecin her aşamasında deneyim kazandık. Ekibimizi yıllar içinde hem büyüttük hem de sürekli geliştirdik.",
        "Bizi diğer firmalardan ayıran en önemli özelliklerden biri, sektörde kendimize ait mağazalarımızın da bulunmasıdır. Bu sayede danışanlarımızın karşılaşabileceği hemen her sorunu ya daha önce bizzat yaşadık ve sahada çözdük ya da benzer problemleri çözmek için hızlıca aksiyon alabilen dinamik bir ekip oluşturduk. Ekibimiz tam zamanlı olarak bu işi yapan genç ve enerjik profesyonellerden oluşuyor. Esnek çalışma saatlerine ve yoğun tempolara alışkın olmamız, güncel ve yenilikçi çözümler sunmamızı sağlıyor.",
        "Sadece Türkiye'de değil, ABD'de ikamet eden ekip arkadaşlarımız sayesinde global çapta yaşanan sorunları da hızlı ve etkili şekilde çözebiliyoruz.",
        "Mottomuz ve vizyonumuz, kısıtlı imkanlarla büyük işler başarmak üzerine kurulu. Gears Of Down olarak biz, büyük sermayelerle değil; küçük sermayeler ve büyük emeklerle, süreci ilmek ilmek örerek ilerledik. Bu yüzden ister başlangıç paketi, ister tam entegrasyon paketi satın alın; bizim için her danışanımızın mağazası, kendi mağazamız gibidir. Çünkü umut etmeyi, sistem kurmayı ve çalışmanın ne demek olduğunu çok iyi biliyoruz. Biz sadece mağazanızı değil, emeğinizi ve umudunuzu emanet aldığımızın farkındayız.",
      ],
    },
    mission: {
      title: "Misyonumuz",
      content:
        "GearsOfDown olarak, Amazon danışmanlığını birkaç eğitim videosu veya sınırlı temel destekten çok daha ileriye taşımak; küçük veya büyük fark etmeksizin, her ölçekte işletmeye hak ettiği kaliteli hizmeti sunmak amacımızdır. Amazon’un karmaşık dünyasında gerçek bir rehber olarak, yurtdışı ve Amazon gibi global pazarlarda yerel satıcılarımızın daha etkin bir şekilde rol almasını sağlamaktayız.",
    },
    values: {
      title: "Değerlerimiz",
      items: [
        {
          title: "Değer Katma",
          description:
            "Her projeye ölçülebilir değer katmayı hedefliyor, müşterilerimizin işlerini ileriye taşıyan somut sonuçlar üretiyoruz.",
        },
        {
          title: "Dürüstlük",
          description:
            "Tam şeffaflık ve dürüstlükle çalışıyor, eylemlerimiz ve önerilerimizle güven inşa ediyoruz.",
        },
        {
          title: "İnovasyon",
          description:
            "Karmaşık iş zorluklarını çözmek için yenilikçi yaklaşımları ve son teknoloji metodolojileri benimsiyoruz.",
        },
        {
          title: "Ortaklık",
          description:
            "Müşterilerimizle gerçek ortaklar olarak çalışıyor, başarılarına yatırım yapıyor ve uzun vadeli ilişkilere odaklanıyoruz.",
        },
      ],
    },
    stats: {
      title: "Etkimiz",
      items: [
        { number: "100+", label: "Mutlu Müşteri" },
        { number: "300+", label: "Başarılı Proje" },
        { number: "8+", label: "Yıl Deneyim" },
        { number: "%95", label: "Müşteri Memnuniyeti" },
      ],
    },
    cta: {
      title: "İşinizi Dönüştürmeye Hazır mısınız?",
      subtitle: "Hedeflerinize nasıl ulaşabileceğinizi konuşalım",
      button: "Hemen Başlayın",
    },
  },
};

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

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

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
            {t.story.title}
          </h2>
          <div className="space-y-6">
            {t.story.content.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
            {t.mission.title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t.mission.content}
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-16 text-center">
            {t.values.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.values.items.map((value, index) => (
              <Card
                key={index}
                className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-navy-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-navy-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            {t.stats.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">{t.cta.subtitle}</p>
          <Link href="/#contact">
            <Button
              size="lg"
              className="bg-navy-600 hover:bg-navy-700 px-8 py-3"
            >
              {t.cta.button}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
