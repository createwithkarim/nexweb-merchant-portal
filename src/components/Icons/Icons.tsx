import {
  ChevronLeft,
  ChevronRight,
  Compass,
  Home,
  Laptop,
  LayoutPanelLeft,
  Moon,
  Package2,
  PackageCheck,
  ShoppingBagIcon,
  Star,
  Sun,
  Tag,
  UsersRound,
} from "lucide-react";

export const Icons = {
  logo: ShoppingBagIcon,
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
};

export type IconKey = keyof typeof Icons;
