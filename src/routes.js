import Search from "@/components/Search";
import About from "@/components/About";
import TrackDetail from "@/components/TrackDetail";

const routes = [
  { path: "/track/:id", component: TrackDetail, name: "track" },
  { path: "/about", component: About, name: "about" },
  { path: "/", component: Search, name: "search" }
];

export default routes;
