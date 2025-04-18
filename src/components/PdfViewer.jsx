import { useState } from "react";
import { Document, Page } from "react-pdf";
import { Button } from "./ui/button";
import { LuChevronLeft, LuChevronRight, LuDownload } from "react-icons/lu";
// import { invitationJaiKosha } from "@/assets/pdfs";

const PdfViewer = ({ pdf }) => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset;
      return newPageNumber >= 1 && newPageNumber <= (numPages || 1)
        ? newPageNumber
        : prevPageNumber;
    });
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function handleDownload() {
    const link = document.createElement("a");
    // link.href = invitationJaiKosha;
    link.href = pdf;
    link.download = "invitation.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="">
      <div>
        <Document
          // file={invitationJaiKosha}
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
          className={"w-full overflow-hidden"}
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className={"w-full"}
          />
        </Document>

        <div className="flex flex-col gap-4 w-full mt-4">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={previousPage}
                disabled={pageNumber <= 1}
              >
                <LuChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm">
                Page {pageNumber} of {numPages}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={nextPage}
                disabled={pageNumber >= (numPages || 1)}
              >
                <LuChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div>
              <Button variant="outline" size="icon" onClick={handleDownload}>
                <LuDownload className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
