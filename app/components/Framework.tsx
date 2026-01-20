import {
  SiTailwindcss,
  SiAngular,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export function Framework() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-center mb-12 text-[rgb(var(--text))]">
        Frameworks & Libraries
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            name: "Tailwind CSS",
            icon: <SiTailwindcss className="text-[#38BDF8]" />,
          },
          {
            name: "Angular",
            icon: <SiAngular className="text-[#DD0031]" />,
          },
          {
            name: "Next.js",
            icon: <SiNextdotjs className="text-black" />,
          },
          {
            name: "React",
            icon: <SiReact className="text-[#38BDF8]" />,
          },
          {
            name: "Node.js",
            icon: <SiNodedotjs className="text-[#339933]" />,
          },
          {
            name: "Express",
            icon: <SiExpress className="text-gray-700 dark:text-gray-300" />,
          },
          {
            name: "php",
            icon: <SiPhp className="text-[#777BB4]" />,
          },
          {
            name: "Java",
            icon: <FaJava className="text-[#007396]" />,
          },
          {
            name: "MongoDB",
            icon: <SiMongodb className="text-[#47A248]" />,
          },
          {
            name: "MySQL",
            icon: <SiMysql className="text-[#4479A1]" />,
          },
          {
            name: "Postman",
            icon: <SiPostman className="text-[#FF6C37]" />,
          }
        ].map((item) => (
          <div
            key={item.name}
            className="
              bg-[rgb(var(--card))]
              border border-[rgb(var(--border))]
              rounded-2xl p-6
              flex flex-col items-center gap-4
              hover:-translate-y-1
              hover:shadow-md
              transition
            "
          >
            {/* Brand-colored icons */}
            <div className="text-4xl">{item.icon}</div>

            <p className="font-medium text-[rgb(var(--text))]">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
