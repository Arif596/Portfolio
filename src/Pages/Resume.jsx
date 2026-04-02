import React from 'react'

const CV_PATH = '/M.Arif Jamal Cv.pdf'

function Resume() {
  const handlePreview = () => {
    window.open(CV_PATH, '_blank')
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = CV_PATH
    link.download = 'M.Arif Jamal Cv.pdf'
    link.click()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mt-20">My Resume</h1>
          <p className="text-gray-500 mt-1">M. Arif Jamal — Full Stack Developer</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md p-6">

          {/* Top Bar */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              {/* PDF Icon */}
              <div className="bg-red-100 text-red-500 rounded-lg p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2v6h6" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">M.Arif Jamal Cv.pdf</p>
                <p className="text-xs text-gray-400">PDF Document</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePreview}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-500 text-blue-500 text-sm font-medium hover:bg-blue-50 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Preview
              </button>

              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                </svg>
                Download
              </button>
            </div>
          </div>

          {/* PDF iframe */}
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <iframe
              src={CV_PATH}
              width="100%"
              height="650px"
              title="CV Preview"
              className="w-full"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Resume