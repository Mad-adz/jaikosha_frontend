import { lazy } from "react";

export const Activities = lazy(() => import("./Activities"));
export const AutoBiography = lazy(() => import("./AutoBiography"));
export const BookMyDharshan = lazy(() => import("./BookMyDharshan"));
export const Contact = lazy(() => import("./Contact"));
export const Donate = lazy(() => import("./Donate"));
export const EventDetails = lazy(() => import("./EventDetails"));
export const Events = lazy(() => import("./Events"));
export const Home = lazy(() => import("./Home"));
export const Loader = lazy(() => import("./Loader"));
export const Workshops = lazy(() => import("./Workshops"));
export const YendhiraKovil = lazy(() => import("./YendhiraKovil"));

export const MeditationPractices = lazy(() =>
  import("./resources/MeditationPractices")
);
export const SuperiorYoga = lazy(() => import("./resources/SuperiorYoga"));
export const AudioVideoSermons = lazy(() =>
  import("./resources/AudioVideoSermons")
);
export const SpritualDevices = lazy(() =>
  import("./resources/SpritualDevices")
);
