import { avSermonsBanner } from "../../assets/images";
import { PanoramicBanner } from "../../components";

const AudioVideoSermons = () => {
  const resourceData = {
    title: "Audio & Video Sermons",
    banner: avSermonsBanner,
    description:
      "Enlightening messages to nurture your faith and understanding.",
    paragraphs: [],
  };
  return (
    <main>
      <PanoramicBanner
        bgImg={resourceData?.banner}
        title={resourceData?.title}
      />
      <section className="bg-yellow-50 py-12">
        <div className="container">
          <h2 className="text-2xl font-bold text-emerald-600 px-4 mb-4">
            {resourceData?.title}
          </h2>
          <div className="px-4 text-md text-justify font-semibold indent-10 leading-normal text-red-500">
            {resourceData?.paragraphs.map((para, index) => (
              <p key={index} className="mb-5">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AudioVideoSermons;
