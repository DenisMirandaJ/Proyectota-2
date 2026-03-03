export interface Screenshot {
  id: string;
  image: string;
  sender: string;
  description?: string;
  date?: string;
}

export const screenshots: Screenshot[] = [
  {
    id: "1",
    image: "/screenshots/1.png",
    sender: "Yiyo Garay Tello",
    description: "Fue cuando tuve una crisis depresiva a principios del 2024, su apoyo fue muy importante pa mi pq igual traté de desvivirme por esas fechas y me da entre pena y rabia no haber estado de esa forma con él cuando lo necesitaba.",
    date: "Febrero 2026",
  },
  {
    id: "2",
    image: "/screenshots/2.png",
    sender: "Gustavo Szigethi (Guetti)",
    description: "Poco antes del momento en que tuvimos que despedirnos, me escribió esto. Me hizo sentir que nuestra amistad era algo especial, podía sentir su emoción en sus palabras.",
    date: "Febrero 2026",
  },
  {
    id: "3",
    image: "/screenshots/3.png",
    sender: "Bárbara S",
    description: "Con el Totita siempre hablábamos de lo maravilloso que sería reencarnar en otras especies, sin preocupaciones, solo existir y ser libres. Espero que en alguna vida nos podamos volver a encontrar y ser amiguitos nuevamente.",
    date: "Febrero 2026",
  },
  {
    id: "4",
    image: "/screenshots/4.jpeg",
    sender: "Demian Fernando Geraldo Órdenes",
    description: "Adjunto unos pantallazos de nuestras conversaciones que me marcaron, el dia que me llamo y hablamos más de una hora, jamás lo habíamos hecho y después me enviaste un audio orinando jajaja y te lo devolvi <3.",
    date: "Febrero 2026",
  },
  {
    id: "5",
    image: "/screenshots/5.jpeg",
    sender: "Demian Fernando Geraldo Órdenes",
    description: "Las veces que hablamos de que te tatuarias a Gato Tom.",
    date: "Febrero 2026",
  },
  {
    id: "6",
    image: "/screenshots/6.jpeg",
    sender: "Demian Fernando Geraldo Órdenes",
    description: "Cuando me dijiste de un anime que jamas vi, ahora lo vere.",
    date: "Febrero 2026",
  },
];
