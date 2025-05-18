import {
  BookmarkCheck,
  ChartLine,
  ChevronLeft,
  ChevronRight,
  Compass,
  CreditCard,
  Home,
  Laptop,
  LayoutPanelLeft,
  Moon,
  Package2,
  PackageCheck,
  Star,
  Sun,
  Tag,
  UsersRound,
} from "lucide-react";

export const Icons = {
  logo: BookmarkCheck,
  package: Package2,
  product: PackageCheck,
  star: Star,
  sun: Sun,
  moon: Moon,
  laptop: Laptop,
  arrowRight: ChevronRight,
  arrowLeft: ChevronLeft,
  user: UsersRound,
  compass: Compass,
  tag: Tag,
  home: Home,
  layout: LayoutPanelLeft,
  CreditCard: CreditCard,
  Chart: ChartLine,
};

export type IconKey = keyof typeof Icons;
