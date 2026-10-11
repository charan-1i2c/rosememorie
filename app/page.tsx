'use client'

import { useEffect, useState } from 'react'

export default function Page() {
  const [iframeReady, setIframeReady] = useState(false)
  const [minimumTimePassed, setMinimumTimePassed] = useState(false)
  const [loading, setLoading] = useState(true)
  const [dismissing, setDismissing] = useState(false)

  useEffect(() => {
    const minimumTimer = window.setTimeout(() => setMinimumTimePassed(true), 1000)
    const fallbackTimer = window.setTimeout(() => setLoading(false), 1800)

    return () => {
      window.clearTimeout(minimumTimer)
      window.clearTimeout(fallbackTimer)
    }
  }, [])

  useEffect(() => {
    if (iframeReady && minimumTimePassed) {
      setDismissing(true)
      const dismissTimer = window.setTimeout(() => setLoading(false), 300)
      return () => window.clearTimeout(dismissTimer)
    }
  }, [iframeReady, minimumTimePassed])

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-black">
      <iframe
        src="/type-garden.html"
        title="Rosemorie interactive typographic garden"
        className="h-full w-full border-0"
        allow="fullscreen"
        onLoad={() => setIframeReady(true)}
      />
      {loading && (
        <div
          aria-label="Loading Rosemorie"
          className={`rose-loading fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-300 ${dismissing ? 'opacity-0' : 'opacity-100'}`}
        >
          <img
            src="/rose-loading.png"
            alt=""
            className="max-h-[78vh] max-w-[78vw] object-contain"
          />
        </div>
      )}
    </main>
  )
}

