import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#aboutus" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonilas" },
  {label: "Contact Us", href: "#contactUs" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Student",
    image: user1,
    text: "The live classes exceeded my expectations.The team was professional, and the lessons helped me improve my trading skills significantly!",
  },
  {
    user: "Jane Smith",
    company: "Trader",
    image: user2,
    text: "The quality of the signals is outstanding. The team delivers accurate, reliable recommendations that have significantly improved my trading results",
  },
  {
    user: "David Johnson",
    company: "Investor",
    image: user3,
    text: "The personal guidance has been invaluable. The team’s tailored support helped me refine my strategies and boost my trading success.",
  },
  {
    user: "Ronee Brown",
    company: "Student",
    image: user4,
    text: "The strategies provided are top-notch. They’re perfectly tailored to market conditions and have greatly enhanced my trading performance!",
  },
  {
    user: "Michael Wilson",
    company: "Investor",
    image: user5,
    text: "The account handling service is excellent. The team manages my account professionally, ensuring consistent profits according to the plan.",
  },
  {
    user: "Emily Davis",
    company: "Student",
    image: user6,
    text: "The trading journal has been a game-changer. It helps me track my progress, analyze my trades, and improve my profitability.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Live Classes",
    description:
      "We also offer live classes for beginner traders, providing them with essential market knowledge and practical skills to become consistently profitable.",
  },
  {
    icon: <Fingerprint />,
    text: "Best signal Provider",
    description:
      "At Future Trader, we provide top-notch trading signals for currency pairs with an accuracy exceeding 90%, helping you make confident, profitable trading decisions.",
  },
  {
    icon: <ShieldHalf />,
    text: "Personal Guidance",
    description:
      "We offer personalized guidance to help enhance your trading journey. We empower you to grow as a trader, refine your skills, and achieve greater success in the financial markets.",
  },
  {
    icon: <BatteryCharging />,
    text: "Best Stratigies for market",
    description:
      "We pride ourselves on delivering the most effective and adaptable trading strategies. By closely analyzing trends and market signals, our strategies are crafted to maximize profitability.",
  },
  {
    icon: <PlugZap />,
    text: "Account Handling",
    description:
      "We also manage trading accounts and distribute profits according to a well-defined plan, ensuring that every trader approach to maximize returns while minimizing risk.",
  },
  {
    icon: <GlobeLock />,
    text: "Trading Journal",
    description:
      "We provide a comprehensive trading journal that allows you to analyze your trades, identify patterns, and refine your strategies, ultimately helping you become profitable trader.",
  },
];

export const checklistItems = [
  {
    title: "Join our community",
    description:
      "Become part of a supportive network where traders share insights, and grow together toward success.",
  },
  {
    title: "Learn about market",
    description:
      "Learn about the market through our classes and gain the knowledge to become a profitable trader.",
  },
  {
    title: "Trading Journal",
    description:
      "Maintain your trading journal to track progress and achieve faster success in your trading journey.",
  },
  {
    title: "Personal Guidance",
    description:
      "Receive personalized guidance to refine your strategies and accelerate your path to trading success.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Add in Public Group",
      "No live Classes",
      "2-3 signals per day",
      "No Guidance",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Add in VIP Group",
      "Live classes ",
      "5-10 signals per day",
      "Personal Guidance",
    ],
  },
  {
    title: "Enterprise",
    price: "---",
    features: [
      "Compounding Everday",
      "Live Classes",
      "Account Handling",
      "One to One Video call",
    ],
  },
];

export const resourcesLinks = [
  { href: "https://t.me/futuretrader02", text: "Telegram" },
  { href: "https://www.instagram.com/iamafuturetrader/profilecard/?igsh=Y3dxenZubDg0aHgw", text: "Instagram" },
  { href: "https://t.me/futuretrader02", text: "Whatsapp" },
  { href: "#", text: "+91-9917657834" },
];

