"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { BentoGrid, BentoItem } from "./bento-grid";

const images: BentoItem[] = [
  {
    id: "1",
    title: "Momentos juntos",
    message: "Recuerdos que perduran",
    src: "/images/media/1.png",
    cols: 2,
    rows: 3,
  },
  {
    id: "2",
    title: "Sonrisas",
    message: "Siempre radiante",
    src: "/images/media/2.png",
    cols: 1,
    rows: 2,
  },
  {
    id: "3",
    title: "Aventuras",
    message: "Cada momento especial",
    src: "/images/media/3.png",
    cols: 1,
    rows: 3,
  },

  {
    id: "4",
    title: "En familia",
    message: "Amor compartido",
    src: "/images/media/4.png",
    cols: 1,
    rows: 5,
  },

  {
    id: "5",
    title: "Celebraciones",
    message: "Instantes de alegría",
    src: "/images/media/5.png",
    cols: 2,
    rows: 3,
  },
];

export default function MediaSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedItem = images.find((item) => item.id === selectedId) || null;

  return (
    <section id="galeria" className="py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Galería de momentos
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Un mosaico de recuerdos, risas y momentos compartidos que perdurarán
            en nuestros corazones.
          </p>
        </div>

        <BentoGrid items={images} columns={3} rowHeight={120} gap="gap-5" />
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedId(null)}
        >
          {/* Background with animation */}
          <div className="absolute inset-0 -z-10 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="absolute inset-0">
              <div className="absolute left-8 top-24 h-50 w-50 rounded-full bg-primary/20 blur-xl animate-[spin_18s_linear_infinite]" />
              <div className="absolute right-10 top-20 h-40 w-40 rotate-45 bg-secondary/20 blur-xl animate-[spin_22s_linear_infinite]" />
              <div className="absolute left-16 bottom-24 h-14 w-14 bg-accent/20 blur-sm animate-[spin_20s_linear_infinite]" />
              <div className="absolute right-1/3 bottom-12 h-10 w-10 rounded-full bg-foreground/10 blur-sm animate-[spin_24s_linear_infinite]" />
            </div>
          </div>

          {/* Modal content */}
          <div
            className="relative bg-card/90 border-8 border-foreground/30 rounded-3xl shadow-2xl w-full max-w-[90vw] max-h-[90vh] backdrop-blur-sm flex flex-col animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative corners */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/70 rounded-full shadow-[3px_3px_0px_rgba(0,0,0,0.2)]" />
            <div className="absolute -top-4 -right-4 w-6 h-6 bg-secondary/70 rounded-sm shadow-[3px_3px_0px_rgba(0,0,0,0.2)]" />
            <div className="absolute -bottom-4 -right-4 w-7 h-7 bg-accent/70 rounded-full shadow-[3px_3px_0px_rgba(0,0,0,0.2)]" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/70 rounded-sm shadow-[3px_3px_0px_rgba(0,0,0,0.2)]" />

            {/* Close button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="p-8 overflow-y-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Image */}
                <div className="shrink-0 rounded-2xl overflow-hidden border-4 border-foreground/20 bg-black/20 flex items-center justify-center max-h-[50vh] lg:max-h-[70vh]">
                  {selectedItem.src ? (
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      width={1200}
                      height={800}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-linear-to-br from-primary/30 via-secondary/25 to-accent/15 flex items-center justify-center min-h-75">
                      <div className="text-center text-foreground/50">
                        <p>Sin imagen</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between py-4">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                      {selectedItem.title}
                    </h2>
                    <p className="text-lg text-foreground/80 italic leading-relaxed">
                      {selectedItem.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
