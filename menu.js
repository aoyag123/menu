
const menus = [
  {
    title: "ホームページ",
    description: "会員向けサイト",
    icon: "⌂",
    url: "https://amapha.main.jp/member/"
  },
  {
    title: "研修会情報",
    description: "研修会・講習会",
    icon: "📅",
    url: "https://amapha.main.jp/member/?cat=3"
  },
  {
    title: "夜間・休日当番",
    description: "当番情報",
    icon: "🌙",
    url: "https://amapha.main.jp/member/?cat=4"
  },
  {
    title: "休日開局情報",
    description: "開局薬局の確認",
    icon: "📋",
    url: "https://amakusazaitaku.main.jp/"
  },
  {
    title: "熊本県薬剤師会HP",
    description: "県薬剤師会",
    icon: "🏢",
    url: "https://www.kumayaku.or.jp/"
  },
  {
    title: "日本薬剤師会マナブル",
    description: "研修管理サイト",
    icon: "🎓",
    url: "https://nichiyaku.manaable.com/"
  }
];

const container = document.getElementById("menu");

if (container) {
  menus.forEach((menu) => {
    const link = document.createElement("a");
    link.href = menu.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "tile";

    const icon = document.createElement("span");
    icon.className = "symbol";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = menu.icon;

    const title = document.createElement("strong");
    title.textContent = menu.title;

    const description = document.createElement("small");
    description.textContent = menu.description;

    link.append(icon, title, description);
    container.appendChild(link);
  });
}
