export interface FarewellNote {
  title: string;
  quote: string;
  description: string;
  image: string;
  alt: string;
}

export const farewellNote: FarewellNote = {
  title: "Una nota que merece su propio espacio",
  quote: "No fue culpa de nadie",
  description:
    "Hay recuerdos que necesitan un lugar aparte. Esta nota queda aquí, acompañada con el cuidado, el respeto y la sensibilidad que merece.",
  image: "/images/farewell-note.png",
  alt: "Papel con el mensaje: no fue culpa de nadie",
};