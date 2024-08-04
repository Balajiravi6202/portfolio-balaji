import { BiLogoCss3, BiLogoFirebase, BiLogoReact, BiLogoTailwindCss, } from "react-icons/bi";
import { TbApi, TbDatabase, } from "react-icons/tb";
import { SiThemoviedatabase,  } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Quize Application",
    image: "./IMDB.png",
    icons: [BiLogoReact, BiLogoCss3, SiThemoviedatabase],
    description: "This website provides information about popular , quize Application.",
    github: "https://github.com/Balajiravi6202",
    demo: "https://quiz-application-g1y2f1z3m-balajiravi6202s-projects.vercel.app/",
  },
  {
    id: "2",
    name: "Ecommerce Website",
    image: "./ecom.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, TbDatabase],
    description: "This website provides users with all the basic kinds of shopping items.",
    github: "https://github.com/Balajiravi6202",
    demo: "https://e-commerce-website-dqra.vercel.app/",
  },
  {
    id: "3",
    name: "Insurance Website",
    image: "./chatapp.png",
    icons: [BiLogoReact, BiLogoTailwindCss,],
    description: "This is Insurance Web site .",
    github: "https://github.com/Balajiravi6202",
    demo: "https://rioninsura.com/",
  },
  
];

export default ProjectsData;
