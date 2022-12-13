import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success", // success
  },
  BETA: <LinkStatus>{
    text: "BETA",
    color: "failure",
  },
  HOT: <LinkStatus>{
    text: "HOT",
    color: "primaryDark",
  },
  FINISH: <LinkStatus>{
    text: "FINISH",
    color: "textDisabled",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.plantswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.plantswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Market",
    icon: "MarketIcon",
    href: "/market",
    status: status.SOON,
  },
  {
    label: "Garden",
    icon: "PoolIcon",
    href: "/gardens",
  },
  {
    label: "Garden V1",
    icon: "PoolIcon",
    href: "/gardensV1",
    status: status.FINISH,
  },
  {
    label: "Vertical Garden",
    icon: "VerticalGardenIcon",
    href: "/verticalGardens",
    status: status.NEW,
  },
  {
    label: "Collectibles Farm",
    icon: "CollectiblesFarmIcon",
    href: "/collectiblesFarm",
    status: status.NEW,
  },
  {
    label: "Barn",
    icon: "BarnIcon",
    href: "/barn",
    status: status.BETA,
  },
  {
    label: "Tree",
    icon: "TreeIcon",
    href: "/tree",
    status: status.HOT,
  },
  {
    label: "Contribution",
    icon: "ContributionIcon",
    href: "/tree",
  },
  {
    label: "TreePlanting",
    icon: "TreePlantingIcon",
    href: "/treePlanting",
  },
  {
    label: "Project",
    icon: "ProjectIcon",
    href: "/project",
  },
  {
    label: "Gouvernance",
    icon: "VoteIcon",
    href: "/vote",
    status: status.NEW,
  },
  {
    label: "Roadmap",
    icon: "RoadmapIcon",
    href: "/roadmap",
    status: status.NEW,
  },
  {
    label: "Beta dev.",
    icon: "BetaIcon",
    items: [
        {
          label: "Beta 1",
          href: "/Beta1",
        },
        {
          label: "Beta 2",
          href: "/Beta2",
        },
        {
          label: "Beta 3",
          href: "/Beta3",
        },
        {
          label: "Beta 4",
          href: "/Beta4",
        },
        {
          label: "Beta 5",
          href: "/Beta5",
        },
      ],
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://plantswap.info",
      },
      {
        label: "Tokens",
        href: "https://plantswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://plantswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://plantswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.plantswap.finance",
      },
      {
        label: "Github",
        href: "https://github.com/plantswap",
      },
      {
        label: "Docs",
        href: "https://docs.plantswap.finance",
      },
      {
        label: "Blog",
        href: "https://plantswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/plantswapfinance",
      },
      {
        label: "Accouncement - En",
        href: "https://t.me/plantswapfinance_announcement",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/plantswapdefi",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 270;
export const SIDEBAR_WIDTH_REDUCED = 56;
