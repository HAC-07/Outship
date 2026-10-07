export type Directory = {
  id: string;
  name: string;
  url: string;
  category: string[];
  type: "Directory" | "Launch" | "Community" | "Discovery";
  free: boolean;
  requiresAccount: boolean;
  dofollow: boolean;
  description: string;
};

export const directories: Directory[] = [
  {
    id: "product-hunt",
    name: "Product Hunt",
    url: "https://www.producthunt.com/",
    category: ["saas", "startup", "ai", "software"],
    type: "Launch",
    free: true,
    requiresAccount: true,
    dofollow: false,
    description:
      "A major launch platform for discovering and promoting new products.",
  },
  {
    id: "betalist",
    name: "BetaList",
    url: "https://betalist.com/",
    category: ["startup", "saas", "software", "ai"],
    type: "Launch",
    free: true,
    requiresAccount: true,
    dofollow: true,
    description:
      "A platform for discovering early-stage startups and new products.",
  },
  {
    id: "uneed",
    name: "Uneed",
    url: "https://www.uneed.best/",
    category: ["saas", "ai", "tools", "software"],
    type: "Directory",
    free: true,
    requiresAccount: false,
    dofollow: true,
    description:
      "A product discovery platform focused on useful tools and startups.",
  },
  {
    id: "saashub",
    name: "SaaSHub",
    url: "https://www.saashub.com/",
    category: ["saas", "software", "business"],
    type: "Directory",
    free: true,
    requiresAccount: true,
    dofollow: true,
    description:
      "A software discovery platform for SaaS products and alternatives.",
  },
  {
    id: "alternativeto",
    name: "AlternativeTo",
    url: "https://alternativeto.net/",
    category: ["software", "saas", "tools"],
    type: "Discovery",
    free: true,
    requiresAccount: true,
    dofollow: false,
    description:
      "A platform where users discover alternatives to existing software.",
  },
  {
    id: "peerlist",
    name: "Peerlist",
    url: "https://peerlist.io/",
    category: ["startup", "developer", "saas", "software"],
    type: "Community",
    free: true,
    requiresAccount: true,
    dofollow: false,
    description:
      "A professional community where builders can showcase products and projects.",
  },
  {
    id: "indie-hackers",
    name: "Indie Hackers",
    url: "https://www.indiehackers.com/",
    category: ["startup", "saas", "indie", "developer"],
    type: "Community",
    free: true,
    requiresAccount: true,
    dofollow: false,
    description:
      "A community for founders building profitable online businesses.",
  },
  {
    id: "betapage",
    name: "BetaPage",
    url: "https://betapage.co/",
    category: ["startup", "saas", "software"],
    type: "Launch",
    free: true,
    requiresAccount: true,
    dofollow: true,
    description:
      "A startup discovery platform for newly launched products.",
  },
  {
    id: "startupbase",
    name: "StartupBase",
    url: "https://startupbase.io/",
    category: ["startup", "saas", "software"],
    type: "Directory",
    free: true,
    requiresAccount: true,
    dofollow: true,
    description:
      "A directory for discovering startups and new products.",
  },
  {
    id: "saasframe",
    name: "SaaSFrame",
    url: "https://www.saasframe.io/",
    category: ["saas", "design", "software"],
    type: "Directory",
    free: true,
    requiresAccount: false,
    dofollow: true,
    description:
      "A resource focused on SaaS products and design inspiration.",
  },
];