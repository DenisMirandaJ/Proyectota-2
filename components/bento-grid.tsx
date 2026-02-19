import Image from "next/image";
import React from "react";

export interface BentoItem {
  id: string;
  title: string;
  message: string;
  src: string;
  alt?: string;
  cols?: number; // número de columnas (default: 1)
  rows?: number; // número de filas (default: 1)
  content?: React.ReactNode; // Overlay opcional
}

interface BentoGridProps {
  items: BentoItem[];
  columns?: number; // default 4
  rowHeight?: number; // altura base en px
  gap?: string; // ej: "gap-4"
  className?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  items,
  columns = 4,
  rowHeight = 150,
  gap = "gap-4",
  className = "",
}) => {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-${columns} ${gap} ${className}`}
      style={{
        gridAutoRows: `${rowHeight}px`,
      }}
    >
      {items.map((item) => {
        const cols = item.cols ?? 1;
        const rows = item.rows ?? 1;

        return (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-2xl bg-card/80 border-6 border-primary/75 shadow-[8px_8px_0px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_rgba(0,0,0,0.15)] cursor-pointer group"
            style={{
              gridColumn: `span ${cols}`,
              gridRow: `span ${rows}`,
            }}
          >
            <Image
              src={item.src}
              alt={item.alt ?? ""}
              width={500}
              height={500}
              className="w-full h-full object-cover bg-linear-to-br from-primary/20 via-secondary/15 to-accent/10 relative overflow-hidden rounded-none"
            />

            {item.content && (
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-end p-4 text-white">
                {item.content}
              </div>
            )}
            {/* Content overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex flex-col justify-end p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-white/90 drop-shadow-md italic">
                  {item.message}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
