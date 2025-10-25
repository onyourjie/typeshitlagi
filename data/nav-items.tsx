 import { IconHome, IconUser, IconBrandNotion, IconMessageStar, IconAddressBook} from "@tabler/icons-react";

 export const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <IconBrandNotion className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Testimnials",
      link: "#testimonials",
      icon: (
        <IconMessageStar className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconAddressBook className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];