import PostFeed from "./components/PostFeed";
import SideBar from "./components/SideBar";
import Widgets from "./components/Widgets";

export default function Home() {
  return (
    <div className="text-[#0f1419] min-h-screen max-w-[1400px] mx-auto
    flex">
      <SideBar />
      <PostFeed />
      <Widgets />
    </div>
  );
}
