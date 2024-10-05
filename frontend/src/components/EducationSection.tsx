import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BorderBeam } from "./ui/border-beam";

interface Education {
  degree: string;
  description: string;
  year: string;
}

const educationData: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    description:
      "I completed my Bachelor of Science in Computer Science education at Rural Degree College, Kanakapura, Karnataka.",
    year: "2021 - 2024",
  },
  {
    degree: "2nd PuC (Science)",
    description:
      "I completed my class 12 high school education at Karnataka Public School, Horohalli, Karnataka, where I studied Science.",
    year: "2019 - 2021",
  },
  {
    degree: "High School",
    description:
      "I completed my high school education at Maralavadi Education Society, Maralavadi, Karnataka.",
    year: "2016 - 2019",
  },
];

export default function EducationSection() {
  const educationRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    educationRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
              scrub: true,
            },
            duration: 0.5,
            ease: "power3.out",
          }
        );
      }
    });
  }, []);

  return (
    <section
      className="education-section bg-black text-white py-10 sm:py-12 md:py-16 overflow-hidden"
      id="education"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center my-3">
          Education
        </h2>
        <p className="text-gray-300 font-medium text-sm sm:text-base my-6 text-center">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="education-item rounded-lg border border-gray-800 xl:rounded-full text-center p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-700"
              ref={(el: any) => (educationRefs.current[index] = el)}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                {education.degree}
              </h3>
              <p className="text-sm sm:text-base text-gray-400">
                {education.description}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                {education.year}
              </p>
              <BorderBeam size={120} duration={12} delay={9} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
