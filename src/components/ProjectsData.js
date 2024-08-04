import { BiLogoBootstrap, BiLogoCss3, BiLogoFigma, BiLogoReact, BiLogoTailwindCss, } from "react-icons/bi";
import { TbApi, } from "react-icons/tb";
import { SiExpress,  } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const ProjectsData = [
  {
    id: "1",
    name: "Quize Application",
    image: "./IMDB.png",
    icons: [BiLogoReact, BiLogoCss3, BiLogoBootstrap],
    description: "This website provides information about popular , quize Application.",
    github: "https://github.com/Balajiravi6202",
    demo: "https://quiz-application-g1y2f1z3m-balajiravi6202s-projects.vercel.app/",
  },
  {
    id: "2",
    name: "Ecommerce Website",
    image: "./ecom.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, BiLogoFigma],
    description: "This website provides users with all the basic kinds of shopping items.",
    github: "https://github.com/Balajiravi6202",
    demo: "https://e-commerce-website-dqra.vercel.app/",
  },
  {
    id: "3",
    name: "Insurance Website",
    image: "./rion.png",
    icons: [BiLogoReact, BiLogoTailwindCss, FaDatabase, SiExpress, TbApi],
    description: "This is Insurance Web site .",
    github: "https://github.com/Balajiravi6202",
    demo: "https://rioninsura.com/",
  },
  
];

export default ProjectsData;
