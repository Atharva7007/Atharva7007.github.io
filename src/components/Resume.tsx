import React, { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

// Set the workerSrc property to use the PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const [scale, setScale] = useState(1.5);
  const resumeUrl = "./assets/Atharva Pansare Resume ML.pdf";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // Centers horizontally
        alignItems: "center", // Centers vertically
        minHeight: "100vh", // Ensures full screen height
        flexDirection: "column", // Stacks the content vertically
        padding: "20px",
        marginTop: "50px",
      }}
    >
      {/* Centering the download button */}
      <a className="download-btn" href={resumeUrl} download="My_Resume.pdf">
        <button
          style={{
            backgroundColor: "#29af14",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "25px",
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FaFileDownload />
          Download Resume
        </button>
      </a>

      {/* Centering the PDF */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexDirection: "column",
          alignItems: "center", // Ensures vertical centering of the PDF
        }}
      >
        <Document file={resumeUrl}>
          <Page
            pageNumber={1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            scale={scale}
          />
        </Document>
      </div>
    </div>
  );
};

export default Resume;
