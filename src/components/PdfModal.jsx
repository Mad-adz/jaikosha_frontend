import { invitationJaiKosha } from "@/assets/pdfs";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { Button } from "./ui/button";

import {
  LuZoomIn,
  LuZoomOut,
  LuChevronLeft,
  LuChevronRight,
  LuDownload,
  LuEye,
  LuLoaderCircle,
} from "react-icons/lu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const PdfModal = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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

  function zoomIn() {
    setScale((prevScale) => Math.min(prevScale + 0.2, 2.0));
  }

  function zoomOut() {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.6));
  }

  function handleDownload() {
    const link = document.createElement("a");
    link.href = invitationJaiKosha;
    link.download = "invitation.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div>
      <div>
        <div className="flex gap-4">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <LuEye className="h-4 w-4" />
                View PDF
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl w-[96vw] lg:w-[75vw] h-[96vh] flex flex-col">
              <DialogHeader>
                <DialogTitle>{"fileName"}</DialogTitle>
              </DialogHeader>
              <div className="h-full flex flex-col items-center">
                <div className="w-full">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={zoomOut}
                        disabled={scale <= 0.6}
                      >
                        <LuZoomOut className="h-4 w-4" />
                      </Button>
                      <span className="text-sm">
                        {Math.round(scale * 100)}%
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={zoomIn}
                        disabled={scale >= 2.0}
                      >
                        <LuZoomIn className="h-4 w-4" />
                      </Button>
                    </div>
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
                        {pageNumber}/{numPages}
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
                  </div>
                </div>
                <Document
                  className={"h-full"}
                  file={invitationJaiKosha}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={
                    <div className="flex items-center justify-center overflow-hidden">
                      <LuLoaderCircle className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  }
                  error={
                    <div className="flex items-center justify-center text-red-500">
                      Failed to load PDF. Please try again.
                    </div>
                  }
                >
                  <Page
                    pageNumber={pageNumber}
                    scale={scale}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="h-full"
                  />
                </Document>
              </div>
            </DialogContent>
          </Dialog>
          <Button
            variant="outline"
            onClick={handleDownload}
            className="flex items-center gap-2"
          >
            <LuDownload className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PdfModal;
