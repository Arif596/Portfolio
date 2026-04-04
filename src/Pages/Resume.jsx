import React, { useState, useEffect, useRef } from 'react'

const CV_PATH = '/M.Arif Jamal Cv.pdf'

function Resume() {
  const [visible, setVisible] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const fallback = setTimeout(() => setVisible(true), 200)
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); clearTimeout(fallback) } },
      { threshold: 0.05 }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => { observer.disconnect(); clearTimeout(fallback) }
  }, [])

  const handlePreview = () => window.open(CV_PATH, '_blank')

  const handleDownload = () => {
    setDownloading(true)
    const link = document.createElement('a')
    link.href = CV_PATH
    link.download = 'M.Arif Jamal Cv.pdf'
    link.click()
    setTimeout(() => setDownloading(false), 2000)
  }

  return (
    <div className="min-h-screen py-10 px-4 mt-10">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div
          ref={headerRef}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
          className="flex items-center gap-4 mb-12 ml-2"
        >
          <h1 className="text-2xl font-bold text-purple-500 font-mono whitespace-nowrap">
            #resume
          </h1>
          <div className="h-px bg-purple-500 w-64" />
        </div>

        {/* Main Card */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            boxShadow: '5px 5px 0px 0px rgba(168,85,247,0.25)',
          }}
          className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
        >

          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 py-5 border-b border-gray-200 dark:border-gray-700">

            {/* Left — file info */}
            <div className="flex items-center gap-4">
              {/* PDF icon block */}
              <div className="border-2 border-red-400 p-2.5 relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 2v6h6" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6M9 17h4" />
                </svg>
                {/* PDF label */}
                <span className="absolute -top-2 -right-2 bg-red-500 text-white font-mono text-[8px] font-bold px-1 py-0.5">
                  PDF
                </span>
              </div>

              <div>
                <p className="font-bold text-gray-900 dark:text-white font-mono text-sm tracking-wide">
                  M.Arif_Jamal_CV.pdf
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 font-mono mt-0.5">
                  Full Stack Developer · Resume 2025
                </p>
              </div>
            </div>

            {/* Right — action buttons */}
            <div className="flex items-center gap-3">

              {/* Preview */}
              <button
                onClick={handlePreview}
                className="
                  flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold
                  border border-gray-400 dark:border-gray-600
                  text-gray-700 dark:text-gray-300
                  hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400
                  transition-all duration-200
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Open Tab
              </button>

              {/* Download */}
              <button
                onClick={handleDownload}
                disabled={downloading}
                style={{
                  boxShadow: downloading ? 'none' : '3px 3px 0px 0px rgba(168,85,247,0.4)',
                  transition: 'box-shadow 0.2s ease, transform 0.1s ease',
                }}
                className="
                  flex items-center gap-2 px-5 py-2 font-mono text-xs font-bold
                  border-2 border-purple-500
                  text-purple-600 dark:text-white
                  hover:bg-purple-500 hover:text-white
                  disabled:opacity-60 disabled:cursor-not-allowed
                  transition-all duration-200 active:scale-95
                "
              >
                {downloading ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
                    Downloading...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                    </svg>
                    Download CV
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Stats strip */}
          <div className="flex items-center gap-6 px-6 py-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            {[
              { label: 'Experience', value: '1+ Years' },
              { label: 'Role', value: 'Full Stack Dev' },
              { label: 'Stack', value: 'MERN · Angular · .NET' },
              { label: 'Status', value: '🟢 Open to Work' },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-widest">
                  {label}
                </span>
                <span className="font-mono text-[10px] font-bold text-gray-700 dark:text-gray-300">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* PDF Viewer */}
          <div className="relative">
            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-purple-500 z-10 opacity-60" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-purple-500 z-10 opacity-60" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-purple-500 z-10 opacity-60" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-purple-500 z-10 opacity-60" />

            <iframe
              src={CV_PATH}
              width="100%"
              height="720px"
              title="CV Preview"
              className="w-full block"
            />
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <p className="font-mono text-[10px] text-gray-400 dark:text-gray-600 tracking-widest uppercase">
              M. Arif Jamal · Full Stack Developer · 2025
            </p>
            <div className="flex items-center gap-2">
              {/* Animated purple dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
              </span>
              <span className="font-mono text-[10px] font-bold text-purple-500 tracking-wide">
                Available for hire
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Resume