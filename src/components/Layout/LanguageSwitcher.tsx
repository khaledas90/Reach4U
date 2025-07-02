"use client";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Button } from "../ui/button";
import { ChevronDown, Globe, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", name: "English", nativeName: "English" },
    { code: "ar", name: "Arabic", nativeName: "عربي" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  const switchLanguage = (locale: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPathname);
    router.refresh();
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="border border-black text-black hover:bg-black hover:text-white flex items-center gap-2 min-w-[100px] justify-between"
      >
        <div className="flex items-center gap-2">
          <Globe size={16} />
          <span className="text-sm font-medium">
            {currentLanguage?.nativeName}
          </span>
        </div>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Button>

      {isOpen && (
        <div className="absolute rtl:left-0 ltr:right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 overflow-hidden">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => switchLanguage(language.code)}
                className={`w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center justify-between transition-colors duration-150 ${
                  currentLocale === language.code
                    ? "bg-gray-50 text-black"
                    : "text-gray-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Globe size={16} className="text-gray-400" />
                  <div>
                    <div className="font-medium text-sm">
                      {language.nativeName}
                    </div>
                    <div className="text-xs text-gray-500">{language.name}</div>
                  </div>
                </div>
                {currentLocale === language.code && (
                  <Check size={16} className="text-green-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
