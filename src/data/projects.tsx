import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,

  SiHtml5,
  SiCss3,
  SiC,
  SiCplusplus,
  SiJson,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {

  json: {
    title: "JSON",
    bg: "black",
    fg: "white",
    icon: <SiJson />,
  },

  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  c: {
    title: "C",
    bg: "black",
    fg: "white",
    icon: <SiC />,
  },
  cplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "sentinelphoenix",
    category: "Network Traffic Analyzer",
    title: "Sentinel-Phoenix",
    src: "/assets/projects-screenshots/SENTINELPHOENIX/2.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
      ],
      backend: [

        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,

      ],
    },
    live: "https://github.com/amrindersingh1820/SENTINEL-PHOENIX",
    github: "https://github.com/amrindersingh1820/SENTINEL-PHOENIX",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Sentinel Pro: Phoenix Edition = Network Traffic Analyzer + Packet Sniffer + Network Mapping & Security Tool + Penetration Testing Suite
          </TypographyP>
          <TypographyP className="font-mono ">
            Sentinel Phoenix is a professional-grade network warfare suite built for real-time traffic inspection, deep reconnaissance, and automated security auditing.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Packet Inspector </TypographyH3>
          <p className="font-mono mb-2">
            Experience Wireshark-style deep packet inspection with a pro-grade 3-pane layout, featuring real-time protocol trees and full raw hex dumps.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/SENTINELPHOENIX/1.png`,

            ]}
          />
          <TypographyH3 className="my-4 mt-8">Network Mapper</TypographyH3>
          <p className="font-mono mb-2">
            Collaborate in real-time with others in a multiplayer coding
            environment, just like CodePen but with a social twist.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/SENTINELPHOENIX/2.png`,

            ]}
          />
          <TypographyH3 className="my-4 mt-8">Threat Intel & OS Fingerprinting </TypographyH3>

          <p className="font-mono mb-2">
            Intelligently identify target systems (Windows, Linux, or Unix) using advanced TTL-based OS fingerprinting and reconnaissance techniques.
          </p>
          <SlideShow
            images={[

            ]}
          />
          <TypographyH3 className="my-4 mt-8">Visual Analytics </TypographyH3>
          <p className="font-mono mb-2">
            Monitor network health with real-time throughput graphing and visual analytics that track live packet frequency and system throughput spikes.
          </p>
          <SlideShow images={[`${BASE_PATH}/SENTINELPHOENIX/3.png`]} />
          <TypographyH3 className="my-4 mt-8">Domain Identification </TypographyH3>
          <p className="font-mono mb-2">
            Map encrypted traffic to specific websites using intelligent TLS SNI extraction to identify visited domains like github.com or google.com.
          </p>
          <SlideShow images={[`${BASE_PATH}/SENTINELPHOENIX/4.png`]} />
          <TypographyH3 className="my-4 mt-8">Asset Discovery</TypographyH3>

          <p className="font-mono mb-2">
            Automatically identify connected hardware on your network by mapping MAC addresses to vendor manufacturers like Apple, Cisco, or Raspberry Pi.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/SENTINELPHOENIX/5.png`,

            ]}
          />
        </div>
      );
    },
  },
  {
    id: "PathFinder",
    category: "Path Finder",
    title: "Path Finder",
    src: "/assets/projects-screenshots/PathFinder/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://github.com/amrindersingh1820/Path-Finder",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            PathFinder is an interactive visualization tool designed to demystify
            graph theory. It allows users to see exactly how algorithms like
            Dijkstra and BFS navigate through complex grids to find the shortest
            path between two points.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            Fire it up, and you&apos;re in the driver&apos;s seat. Place your start
            node, set your target, and draw walls to create your own mazes.
          </p>
          <SlideShow images={[`${BASE_PATH}/pathfinder/1.png`]} />

          <TypographyH3 className="my-4 ">The Algorithms</TypographyH3>
          <p className="font-mono mb-2">
            This project creates a visual battleground for two legendary algorithms.
            <strong> Breadth-First Search (BFS)</strong> scans layer-by-layer like
            ripples in a pond, guaranteeing the shortest path in unweighted grids.
          </p>
          <p className="font-mono mb-2">
            <strong>Dijkstra&apos;s Algorithm</strong> takes it a step further,
            calculating costs to find the optimal route even when the terrain gets tough.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/pathfinder/3.png`,
              `${BASE_PATH}/pathfinder/2.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Interactive Grid</TypographyH3>
          <p className="font-mono mb-2">
            No pre-baked maps here. You build the obstacles. Whether you want to
            trap the algorithm in a spiral or test its speed through a dense forest
            of walls, the grid updates in real-time.
          </p>
          <SlideShow images={[`${BASE_PATH}/pathfinder/4.png`]} />

          <TypographyH3 className="my-4 mt-8">Under the Hood</TypographyH3>
          <p className="font-mono mb-2">
            Built entirely with Python, this project leverages efficient Data
            Structures to handle path reconstruction instantly. It visualizes the
            "visited" nodes versus the "final path," giving you a clear look into
            the computer&apos;s decision-making process.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/pathfinder/3.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-5">
            PathFinder isn&apos;t just a grid; it&apos;s a sandbox for logic,
            proving that finding the shortest way home is an art form in itself.
          </p>
        </div>
      );
    },
  },
  {
    id: "the-booking-desk",
    category: "Travel",
    title: "The Booking Desk",
    src: "/assets/projects-screenshots/the-booking-desk/landing.png",
    screenshots: ["1.png"],
    live: "",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.sanity],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            The Booking Desk is your ultimate travel consultation hub, designed
            to turn your wanderlust dreams into reality. With a focus on smooth
            and visually captivating animations, navigating the site feels like
            a breeze—it&apos;s almost as if the destinations are calling you.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            A sleek, modern interface greets you, featuring the latest travel
            tips, deals, and must-visit spots around the globe.
          </p>
          <SlideShow images={[`${BASE_PATH}/the-booking-desk/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">Blogs</TypographyH3>
          <p className="font-mono mb-2">
            Dive into the curated articles written by travel experts. Whether
            you&apos;re looking for hidden gems or travel hacks, our blog section has
            you covered.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/blogs.png`,
              `${BASE_PATH}/the-booking-desk/blog.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Sanity CMS</TypographyH3>

          <p className="font-mono mb-2">
            Keeping everything fresh and up-to-date, I&apos;ve integrated Sanity CMS
            to manage all the content with ease, ensuring you always get the
            latest and greatest information.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/cms-1.png`,
              `${BASE_PATH}/the-booking-desk/cms-2.png`,
            ]}
          />
          <p className="font-mono mb-2 my-8">
            With a stunning 100% score on Lighthouse, The Booking Desk isn&apos;t
            just beautiful—it&apos;s built to perform. Whether you&apos;re planning your
            next adventure or just daydreaming, our site delivers a top-notch
            experience that&apos;s both informative and enjoyable.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/ghostchat/1.png",
    screenshots: ["1.png"],
    live: "",
    github: "",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ghostchat/1.png`,
              `${BASE_PATH}/ghostchat/2.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ghostchat/1.png`,
              `${BASE_PATH}/ghostchat/1.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
    id: "ValmaxBank",
    category: "Banking",
    title: "ValmaxBank",
    src: "/assets/projects-screenshots/ValmaxBank/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://github.com/amrindersingh1820/VamaxBank",
    github: "https://github.com/amrindersingh1820/VamaxBank",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.c, PROJECT_SKILLS.cplus],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            ValmaxxBank is a comprehensive Banking Management System designed to simulate and manage core banking operations with a focus on security, efficiency, and user experience. The project aims to digitize traditional banking processes, offering a seamless interface for both customers and administrators to handle financial transactions, account management, and record-keeping
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/ValmaxBank/1.png`,
              `${BASE_PATH}/ValmaxBank/2.png`,
              `${BASE_PATH}/ValmaxBank/3.png`,
              `${BASE_PATH}/ValmaxBank/4.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "Password Manager",
    category: "Cybersecurity Tool",
    title: "Secure Password Manager",
    src: "/assets/projects-screenshots/PasswordManager/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://github.com/amrindersingh1820/Password-Manager",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.json,
        PROJECT_SKILLS.docker,

      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Stop using "password123" everywhere. This Password Manager is your
            digital Fort Knox, designed to secure your entire online life. It
            takes the headache out of cybersecurity, ensuring you only ever need
            to remember one Master Password.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[
            `${BASE_PATH}/PasswordManager/1.png`,
            `${BASE_PATH}/PasswordManager/2.png`,
            `${BASE_PATH}/PasswordManager/3.png`,
            `${BASE_PATH}/PasswordManager/4.png`,
          ]}
          />
          <TypographyH3 className="my-4 mt-8">
            Unlock the vault, and boom! You have instant, secure access to every
            credential you own, neatly organized and ready to go.
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Dive into a clean, streamlined interface where all your accounts live.
              Need to log in to Netflix? One click copies your username, another
              copies your complex password. No more sticky notes on the monitor.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">.</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Still using your pet&apos;s name and birth year? Let the built-in
              Strong Gen handle it. It cranks out virtually uncrackable,
              randomized passwords loaded with symbols, numbers, and mixed casing.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Faculty Features:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Powered by Python&apos;s robust cryptography libraries, this bad boy
              doesn&apos;t mess around. We aren&apos;t saving text files here.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Downfall:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Every credential is salted and hashed using military-grade
              encryption algorithms <em>before</em> it ever touches the database.
              Even if the DB is compromised, your secrets remain locked tight..
            </li>

          </ul>
        </div>
      );
    },
  },
];
export default projects;
