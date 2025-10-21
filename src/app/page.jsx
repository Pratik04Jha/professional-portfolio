import Blogs from "@/components/cards/home/blogs/blogs";
import CertificatesCard from "@/components/cards/home/certificates/certificates";
import EducationCard from "@/components/cards/home/education/education";
import HobbiesCard from "@/components/cards/home/hobbies";
import Introduction from "@/components/cards/home/introduction";
import LanguagesCard from "@/components/cards/home/language";
import Outro from "@/components/cards/home/outro";
import Profile from "@/components/cards/home/profile";
import Projects from "@/components/cards/home/projects/projects";
import StackCard from "@/components/cards/home/tech-stack";

export default function () {
  return (
    <div className="flex flex-col gap-5 px-5 md:px-20">
      <div className="flex flex-col gap-5 md:flex-row md:justify-center md:gap-5 ">
        <Profile />
        <Introduction />
      </div>
      <Blogs />
      <Projects />
      <div className="flex flex-col md:flex-row justify-center gap-5 ">
        <LanguagesCard />
        <StackCard />
      </div>
      <EducationCard />
      <CertificatesCard />
      <div className="flex md:flex-row flex-col justify-center gap-5 ">
        <HobbiesCard />
        <Outro />
      </div>
    </div>
  );
}
