import Blogs from "@/components/cards/blogs";
import Introduction from "@/components/cards/introduction";
import Profile from "@/components/cards/profile";

export default function () {
  return (
    <div className="flex flex-col gap-5 px-20">
      <div className="flex justify-center gap-5 ">
        <Profile />
        <Introduction />
      </div>
      <Blogs />
    </div>
  );
}
