import {
  Application,
  Chart,
  Components,
  DashBoard,
  Stacks2,
  Map,
  Grid,
  Files,
  Graph,
  ClipBoard,
  Cart,
  Envelope,
  Messages,
  Monitor,
  ListFill,
  Calendar,
  Flag,
  Book,
  Note,
  ClipBoard2,
  Note2,
  Note3,
  BarLeft,
  BarTop,
  ChartBar,
  PretentionChartLine,
  PretentionChartLine2,
  Google,
  Pointer,
  Map2,
  MenuBar,
  Icons,
  ChartArea,
  Building,
  Building2,
  Sheild,
  Error,
  Diamond,
  Heroicon,
  LucideIcon,
  CustomIcon,
  Mail,
} from "@/components/svg";

export interface MenuItemProps {
  title: string;
  icon: any;
  href?: string;
  child?: MenuItemProps[];
  megaMenu?: MenuItemProps[];
  multi_menu?: MenuItemProps[];
  nested?: MenuItemProps[];
  onClick: () => void;
}

export const menusConfig = {
  mainNav: [
    {
      title: "Dashboard",
      icon: DashBoard,
      child: [
        {
          title: "Analytics",
          href: "/dashboard",
          icon: Graph,
        },
        {
          title: "Ecommerce",
          href: "/ecommerce",
          icon: Chart,
        },
        {
          title: "Project ",
          href: "/project",
          icon: ClipBoard,
        },
      ],
    },
  ],

  sidebarNav: {
    module: [
      {
        title: "Dashboard",
        icon: DashBoard,
        child: [
          {
            title: "example",
            href: "/",
            icon: Graph,
          },
        ],
      },
    ],
    classic: [
      {
        isHeader: true,
        title: "Meny",
      },
      {
        title: "Dashboard",
        icon: DashBoard,
        child: [
          {
            title: "Oversikt",
            href: "/dashboard",
            icon: Graph,
          },
        ],
      },
      {
        isHeader: true,
        title: "Prosjekter",
      },
      {
        title: "LTM-Plan",
        icon: BarLeft,
        href: "/projects/ltm-plan",
      },
      {
        title: "PVL-Plan",
        icon: Building2,
        href: "/projects/pvl-plan",
      },
      {
        title: "Andre Prosjekter",
        icon: Building,
        href: "/projects/andre-prosjekter",
      },
      {
        isHeader: true,
        title: "Administrasjon",
      },
      {
        title: "Brukere",
        icon: Mail,
        href: "/brukere",
      },
      {
        title: "Lokasjoner",
        icon: Mail,
        href: "/lokasjoner",
      },
      {
        title: "Bygninger",
        icon: Mail,
        href: "/bygninger",
      },
      {
        title: "Blokker",
        icon: Mail,
        href: "/blokker",
      },
      {
        title: "NS-koder",
        icon: Mail,
        href: "/ns-koder",
      },
      {
        title: "Kategorier",
        icon: Mail,
        href: "/kategorier",
      },
      {
        title: "Statuser",
        icon: Mail,
        href: "/statuser",
      },
    ],
  },
};

export type ModuleNavType = (typeof menusConfig.sidebarNav.module)[number];
export type ClassicNavType = (typeof menusConfig.sidebarNav.classic)[number];
export type MainNavType = (typeof menusConfig.mainNav)[number];
