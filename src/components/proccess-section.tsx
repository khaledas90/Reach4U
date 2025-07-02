import { Circle } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ProccessSection() {

    const t = useTranslations("common.services");

    return (
        <>
            {/* Proccess Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t("title")}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {t("subtitle")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="flex">
                                <div className="flex flex-col justify-between text-center ring-[0.5px] ring-black/20 shadow-md p-4 rounded-2xl w-full h-full min-h-[240px]">
                                    <div>
                                        <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                            {`0${i + 1}`}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{t(`steps.${i}.title`)}</h3>
                                        <div className="text-gray-600 space-y-2 text-start">
                                            {Array.from({ length: 3 }).map((_, j) => (
                                                <div key={j} className="flex items-start gap-2">
                                                    <Circle size={16} className="mt-1 text-orange-500 shrink-0" />
                                                    {t(`steps.${i}.points.${j}`)}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
