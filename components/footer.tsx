import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  currentLang: "en" | "tr";
}

const translations = {
  en: {
    company: "GearsofDown",
    description:
      "Professional consultancy services to help your business grow and succeed.",
    quickLinks: "Quick Links",
    contact: "Contact Info",
    rights: "All rights reserved.",
    home: "Home",
    about: "About Us",
    packages: "Our Packages",
    faq: "FAQ",
    contactPage: "Contact",
  },
  tr: {
    company: "GearsofDown",
    description:
      "İşinizin büyümesi ve başarılı olması için profesyonel danışmanlık hizmetleri.",
    quickLinks: "Hızlı Bağlantılar",
    contact: "İletişim Bilgileri",
    rights: "Tüm hakları saklıdır.",
    home: "Ana Sayfa",
    about: "Hakkımızda",
    packages: "Paketlerimiz",
    faq: "SSS",
    contactPage: "İletişim",
  },
};

export function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang];
  const fullAddress =
    "Adnan Kahveci Mah. Cebeci Cad. Yargı Apt. Daire 30, İstanbul/Beylikdüzü";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    fullAddress
  )}`;

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.company}</h3>
            <p className="text-gray-300 mb-4">{t.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.packages}
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.faq}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.contactPage}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gray-400 mt-1" />
                <a
                  href="mailto:info@gearsofdown.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@gearsofdown.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="tel:+905350353450"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +90 535 035 34 50 Temel K.
                  </a>
                  <a
                    href="tel:+905519536312"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +90 551 953 63 12 Muaz I.
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {fullAddress}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 {t.company}. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
