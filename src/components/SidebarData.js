import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Overview",
    path: "/overview",
    icons: <AiIcons.AiFillHome />,
    iconClosed: <IoIcons.IoMdArrowDropdown />,
    iconOpened: <IoIcons.IoMdArrowDropup />,
    subNav: [
      {
        title: "Users",
        path: "/overview/users",
        icons: <IoIcons.IoIosPaper />
      },
      {
        title: "Review",
        path: "/overview/review",
        icons: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: "Reports",
    path: "/reports",
    icons: <AiIcons.AiFillHome />,
    iconClosed: <IoIcons.IoMdArrowDropdown />,
    iconOpened: <IoIcons.IoMdArrowDropup />,
    subNav: [
      {
        title: "Reports 1",
        path: "/reports/reports1",
        icons: <IoIcons.IoIosPaper />
      },
      {
        title: "Reports 2",
        path: "/reports/reports2",
        icons: <IoIcons.IoIosPaper />
      },
      {
        title: "Reports 3",
        path: "/reports/reports3",
        icons: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: "Products",
    path: "/products",
    icons: <FaIcons.FaCartPlus />
  },
  {
    title: "Team",
    path: "/team",
    icons: <IoIcons.IoMdPeople />
  },
  {
    title: "Messages",
    path: "/messages",
    icons: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <IoIcons.IoMdArrowDropdown />,
    iconOpened: <IoIcons.IoMdArrowDropup />,
    subNav: [
      {
        title: "message 1",
        path: "/reports/message1",
        icons: <IoIcons.IoIosPaper />
      },
      {
        title: "Message 2",
        path: "/reports/message2",
        icons: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: "Support",
    path: "/support",
    icons: <IoIcons.IoMdHelpCircle />
  }
];
