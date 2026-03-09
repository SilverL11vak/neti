'use client'

import { useEffect, useState } from 'react'

export default function Template({ children }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="page-transition" style={{
      animation: mounted ? 'pageFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none'
    }}>
      {children}
      <style jsx global>{`
        @keyframes pageFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .page-transition {
          min-height: 100vh;
        }
      `}</style>
    </div>
  )
}
