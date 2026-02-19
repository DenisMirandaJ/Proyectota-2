export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">Sobre él</h2>
          <p className="text-foreground/70 text-lg">
            Un espacio para contar su historia, personalidad y momentos que lo
            definieron.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border/60 bg-card/70 p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Biografía breve</h3>
            <p className="text-foreground/70">
              Resumen de su vida, familia, estudios y pasiones.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/70 p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Valores</h3>
            <p className="text-foreground/70">
              Lo que lo caracterizaba: generosidad, humor, amistad.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/70 p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Recuerdos</h3>
            <p className="text-foreground/70">
              Anécdotas o hitos importantes de su vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
