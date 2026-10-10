export default function Page() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-black">
      <iframe
        src="/type-garden.html"
        title="Rosemorie interactive typographic garden"
        className="h-full w-full border-0"
        allow="fullscreen"
      />
      <div className="pointer-events-none absolute left-5 top-5 z-10 sm:left-8 sm:top-8">
        <img
          src="/rosemorie-logo.png"
          alt="Rosemorie floral R logo"
          className="h-20 w-20 rounded-sm object-cover opacity-95 shadow-lg sm:h-24 sm:w-24"
        />
      </div>
    </main>
  )
}

