import { farewellNote } from "@/content/farewell-note";
import Image from "next/image";
import { Card } from "./ui/card";
import { ImageLightbox } from "./ui/image-lightbox";

export default function FarewellNoteSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-3xl text-foreground text-balance md:text-4xl">
            {farewellNote.title}
          </h2>
          <p className="mx-auto max-w-3xl text-muted-foreground text-pretty leading-relaxed">
            {farewellNote.description}
          </p>
        </div>

        <Card className="overflow-hidden rounded-none border-2 border-border bg-card shadow-[10px_10px_0px_rgba(0,0,0,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border-b-2 border-border bg-muted/30 p-6 lg:border-r-2 lg:border-b-0 lg:p-8">
              <blockquote className="border-l-4 border-accent pl-5">
                <p className="font-serif text-3xl leading-tight text-foreground md:text-5xl">
                  &quot;{farewellNote.quote}&quot;
                </p>
              </blockquote>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
                Leer estas palabras duele. Por eso esta imagen aparece en un espacio sereno, sin distraerla con otros elementos, para acompañarla con el silencio y el respeto que merece.
              </p>
            </div>

            <div className="bg-background p-4 md:p-6">
              <ImageLightbox src={farewellNote.image} alt={farewellNote.alt}>
                <div className="overflow-hidden border-2 border-border bg-card p-3 cursor-zoom-in">
                  <Image
                    src={farewellNote.image}
                    alt={farewellNote.alt}
                    width={1200}
                    height={1500}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </ImageLightbox>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}