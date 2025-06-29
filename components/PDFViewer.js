import { useEffect, useRef, useState, useCallback } from 'react'

export default function PDFViewer({ pdfData, nim, year, season }) {
  const canvasRef = useRef(null)
  const [pdfDoc, setPdfDoc] = useState(null)
  const [pageNum, setPageNum] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const [scale, setScale] = useState(1.5)
  const [loading, setLoading] = useState(true)
  const [rendering, setRendering] = useState(false)

  const renderPage = useCallback(async (num) => {
    if (!pdfDoc || rendering) return

    setRendering(true)
    try {
      const page = await pdfDoc.getPage(num)
      const viewport = page.getViewport({ scale })
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')

      canvas.height = viewport.height
      canvas.width = viewport.width

      const renderContext = {
        canvasContext: context,
        viewport: viewport
      }

      await page.render(renderContext).promise
    } catch (error) {
      console.error('Error rendering page:', error)
    } finally {
      setRendering(false)
    }
  }, [pdfDoc, rendering, scale])

  const loadPDF = useCallback(async () => {
    if (typeof window !== 'undefined' && window.pdfjsLib && pdfData) {
      try {
        const loadingTask = window.pdfjsLib.getDocument({ data: atob(pdfData) })
        const pdf = await loadingTask.promise
        setPdfDoc(pdf)
        setPageCount(pdf.numPages)
        setLoading(false)
      } catch (error) {
        console.error('Error loading PDF:', error)
        setLoading(false)
      }
    }
  }, [pdfData])

  useEffect(() => {
    loadPDF()
  }, [loadPDF])

  useEffect(() => {
    if (pdfDoc) {
      renderPage(pageNum)
    }
  }, [pdfDoc, pageNum, renderPage])

  const prevPage = () => {
    if (pageNum <= 1) return
    setPageNum(pageNum - 1)
  }

  const nextPage = () => {
    if (pageNum >= pageCount) return
    setPageNum(pageNum + 1)
  }

  const zoomIn = () => {
    setScale(scale + 0.25)
  }

  const zoomOut = () => {
    if (scale <= 0.5) return
    setScale(scale - 0.25)
  }

  // Load PDF.js script
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.pdfjsLib) {
      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js'
      script.onload = () => {
        if (window.pdfjsLib) {
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
          loadPDF()
        }
      }
      document.head.appendChild(script)
    }
  }, [loadPDF])

  if (loading) {
    return (
      <div className="pdf-container">
        <div className="loading">
          <i className="fas fa-spinner fa-spin"></i>
          Memuat PDF...
        </div>
      </div>
    )
  }

  return (
    <div className="pdf-container">
      <div className="pdf-controls">
        <button onClick={prevPage} className="btn-control" disabled={pageNum <= 1}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <span id="page-info">
          Halaman {pageNum} dari {pageCount}
        </span>
        <button onClick={nextPage} className="btn-control" disabled={pageNum >= pageCount}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <button onClick={zoomIn} className="btn-control">
          <i className="fas fa-search-plus"></i>
        </button>
        <button onClick={zoomOut} className="btn-control" disabled={scale <= 0.5}>
          <i className="fas fa-search-minus"></i>
        </button>
      </div>
      
      <div className="pdf-viewer">
        <canvas ref={canvasRef} />
      </div>
    </div>
  )
}
