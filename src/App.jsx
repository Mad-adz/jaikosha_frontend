import { Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import { RootLayout } from "./layouts";
import {
  Activities,
  AudioVideoSermons,
  AutoBiography,
  BookMyDharshan,
  Contact,
  Donate,
  EventDetails,
  Events,
  Home,
  Loader,
  MeditationPractices,
  SpritualDevices,
  SuperiorYoga,
  Workshops,
  YendhiraKovil,
} from "./pages";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="autobiography" element={<AutoBiography />} />
        <Route path="activities" element={<Activities />} />
        <Route path="workshops" element={<Workshops />} />
        <Route path="yendhirakovil" element={<YendhiraKovil />} />
        <Route path="donate" element={<Donate />} />
        <Route path="book-my-dharshan" element={<BookMyDharshan />} />
        <Route path="events">
          <Route index element={<Events />} />
          <Route path=":id" element={<EventDetails />} />
        </Route>
        <Route path="meditation-practices" element={<MeditationPractices />} />
        <Route path="superior-yoga" element={<SuperiorYoga />} />
        <Route path="audio-video-sermons" element={<AudioVideoSermons />} />
        <Route path="spiritual-devices" element={<SpritualDevices />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )
);

const App = () => {
  // const url = new URL(
  //   "pdfjs-dist/build/pdf.worker.min.mjs",
  //   import.meta.url
  // ).toString();
  // console.log(url);
  // console.log(pdfjs.GlobalWorkerOptions.workerSrc);
  return (
    <HelmetProvider>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Jai kosha Foundation | Sree La Sree Mahalakshmi Narashima Swamigal |
          Spiritual Growth & Meditation Practices
        </title>
        <meta
          name="description"
          content="Explore the journey of spiritual growth, meditation practices, and yoga workshops to enhance your well-being."
        />
        <meta
          name="keywords"
          content="Spiritual, Yoga, Meditation, Workshops, Dharshan, Events"
        />
        <meta
          name="author"
          content="Sri La Sri Mahalakshmi Narasimha Swamigal , Sree La Sree Mahalakshmi Narashima Swamigal , Sri La Sri Mahalaxmi Narasimha Swamigal , Shree La Shree Mahalakshmi Narasimha Swamigal , Sree La Sree Mahalaxmi Narashimha Swamigal , Sri La Sri Mahalakshmi Narashimha Swamigal , Shree La Shree Mahalakshmi Narashima Swamigal , Sree La Sree Mahalaxmi Narasimhar Swamigal"
        />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Spiritual Growth & Meditation Practices | Jai kosha Foundation"
        />
        <meta
          property="og:description"
          content="Explore the journey of spiritual growth, meditation practices, and yoga workshops to enhance your well-being."
        />
        <meta property="og:image" content="https://jaikosha.com/og-image.jpg" />
        <meta property="og:url" content="https://jaikosha.com/" />
        <meta
          property="og:type"
          content="Jai kosha Foundation  | Sree La Sree Mahalakshmi Narashima Swamigal"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Spiritual Growth & Meditation Practices | Jai kosha Foundation"
        />
        <meta
          name="twitter:description"
          content="Explore the journey of spiritual growth, meditation practices, and yoga workshops to enhance your well-being."
        />
        <meta
          name="twitter:image"
          content="https://jaikosha.com/twitter-image.jpg"
        />

        {/* Schema Markup for Search Engines */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Jai Kosha Foundation | Sree La Sree Mahalakshmi Narashima Swamigal",
            url: "https://jaikosha.com/",
            logo: "https://jaikosha.com/logo.png",
            sameAs: [
              "https://www.facebook.com/profile.php?id=61571363445440/Jai kosha Foundation",
              "https://www.instagram.com/jaikosha_foundation/?hl=en/Jai kosha Foundation",
              "https://x.com/JaiKoshaFdn/Jai kosha Foundation",
            ],
          })}
        </script>
      </Helmet>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  );
};

export default App;
