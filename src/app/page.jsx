import Blogs from "@/components/cards/blogs";
import CertificatesCard from "@/components/cards/certificates";
import EducationCard from "@/components/cards/education";
import HobbiesCard from "@/components/cards/hobbies";
import Introduction from "@/components/cards/introduction";
import LanguagesCard from "@/components/cards/language";
import Outro from "@/components/cards/outro";
import Profile from "@/components/cards/profile";
import Projects from "@/components/cards/projects";
import StackCard from "@/components/cards/tech-stack";

export default function () {
  return (
    <div className="flex flex-col gap-5 px-20">
      <div className="flex justify-center gap-5 ">
        <Profile />
        <Introduction />
      </div>
      <Blogs />
      <Projects />
      <div className="flex justify-center gap-5 ">
        <LanguagesCard />
        <StackCard />
      </div>
      <EducationCard />
        <CertificatesCard />
      <div className="flex justify-center gap-5 ">
        <HobbiesCard />
        <Outro />
      </div>
    </div>
  );
}
