import { events } from "@/constants";
import { useParams } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { Button } from "@/components/ui/button";
// import { PdfViewer } from "@/components";

const EventDetails = () => {
  const { id } = useParams();
  const currentEvent = events.find((event) => event.id === Number(id));

  const handleOpenAndDownload = () => {
    const link = document.createElement("a");
    link.href = currentEvent?.pdf;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    // link.download = `${currentEvent?.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="mt-[6rem]">
      <section className="py-10">
        <div className="container">
          <div>
            {currentEvent ? (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <img src={currentEvent?.banner} alt={currentEvent?.title} />
                  </div>
                  <div className="px-2 py-4 md:px-4 md:py-8">
                    <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                      {currentEvent?.title}
                    </h3>
                    <p className="flex gap-2 mb-4">
                      {currentEvent?.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className="w-min rounded-full bg-slate-100 px-4 py-1 text-red-500 text-sm font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </p>
                    <p className="text-zinc-800 mb-4 indent-10">
                      {currentEvent?.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="flex items-center gap-2 mb-2">
                          <MdLocationOn className="text-emerald-600" />
                          <span>{currentEvent?.location}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <BiSolidUser className="text-emerald-600" />
                          <span>{currentEvent?.organizer}</span>
                        </p>
                      </div>
                      {currentEvent?.pdf && (
                        <div>
                          <Button
                            variant="outline"
                            onClick={handleOpenAndDownload}
                          >
                            View Invitation
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {currentEvent?.paragraphs.length > 0 && (
                  <div className="py-4">
                    {currentEvent?.paragraphs?.map((para, index) => (
                      <p
                        key={index}
                        className="text-sm text-justify font-semibold leading-normal indent-10 text-red-500 mb-2"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="text-center py-10">
                  <p className="text-2xl font-semibold">
                    No Event Details Found.!
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      {/* {currentEvent?.pdf && (
        <section className="pb-4">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PdfViewer pdf={currentEvent?.pdf} />
            </div>
          </div>
        </section>
      )} */}
    </main>
  );
};

export default EventDetails;
