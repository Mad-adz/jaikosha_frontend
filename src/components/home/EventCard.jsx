import { truncateText } from "@/utils/helpers";
import { Link } from "react-router-dom";
import { LuExternalLink } from "react-icons/lu";

// eslint-disable-next-line react/prop-types
const EventCard = ({ id, title, datetime, location, description }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative bg-yellow-50/50 backdrop-blur-xl rounded-2xl p-8 border border-yellow-100 shadow-sm">
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-pink-500 rounded-tl-2xl"></div>
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-yellow-500 rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-yellow-500 rounded-bl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-pink-500 rounded-br-2xl"></div>

        <div className="relative">
          <div className="absolute -top-12 left-0 px-4 py-1 bg-gradient-to-b from-teal-600 via-emerald-500 to-green-400 rounded-full text-sm text-white">
            {/* {datetime} */}
            Spiritual Event
          </div>

          <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>

          {/* <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500">
            {location}
          </h3> */}

          <p className="text-md text-justify text-zinc-700 mb-4">
            {truncateText(description)}
          </p>

          <Link
            to={`events/${id}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 hover:opacity-90 transition-opacity text-white"
          >
            Explore
            <LuExternalLink />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
