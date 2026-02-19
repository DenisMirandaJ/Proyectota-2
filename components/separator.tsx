export function Separator() {
  return (
    <div className="border-primary border-b-2 bg-primary/5 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 ${i % 3 === 0 ? "bg-primary" : i % 3 === 1 ? "bg-accent" : "bg-primary/40"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
