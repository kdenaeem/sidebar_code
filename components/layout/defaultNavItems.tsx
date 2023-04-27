import React from "react";
import {
  HomeIcon,
  ChatBubbleBottomCenterIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import { NavItem } from "./Sidebar";

export const defaultNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Analytics",
    href: "/team",
    icon: <ArrowTrendingUpIcon className="w-6 h-6" />,
  },
  {
    label: "ChatRoom",
    href: "/chat",
    icon: <ChatBubbleBottomCenterIcon className="w-6 h-6" />,
  },
];
