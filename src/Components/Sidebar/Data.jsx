import { FaHome } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { RiMessage3Fill } from "react-icons/ri";
import { FaClipboard } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { FaCircleInfo } from "react-icons/fa6";
import { MdImportContacts } from "react-icons/md";

const Data = [
  {
    title: "Home",
    icon: <FaHome />,
    link: "/home",
  },
  {
    title: "Dashboard",
    icon: <FaClipboard />,
    link: "/dashboard",
  },
  {
    title: "Profile",
    icon: <FaUserAlt />,
    link: "/profile",
  },
  {
    title: "Messages",
    icon: <RiMessage3Fill />,
    link: "/messages",
  },
  {
    title: "Settings",
    icon: <IoIosSettings />,
    link: "/settings",
  },
  {
    title: "Projects",
    icon: <PiProjectorScreenChartFill />,
    link: "/projects",
  },
  {
    title: "About Us",
    icon: <FaCircleInfo />,
    link: "/about",
  },
  {
    title: "Contact",
    icon: <MdImportContacts />,
    link: "/contact",
  },
];

export default Data;
