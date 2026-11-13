// リンクの名称・URL・説明は、このファイルで変更できます。
const menus = [
  { title: 'ホームページ', description: '会員向けサイト', icon: '⌂', url: 'https://amapha.main.jp/member/' },
  { title: '研修会情報', description: '研修会・講習会', icon: '▦', url: 'https://amapha.main.jp/member/?cat=3' },
  { title: '夜間・休日当番', description: '当番情報', icon: '☾', url: 'https://amapha.main.jp/member/?cat=4' },
  { title: '休日開局情報', description: '開局薬局の確認', icon: '✚', url: 'https://amakusazaitaku.main.jp/' },
  { title: '熊本県薬剤師会HP', description: '県薬剤師会', icon: '▤', url: 'https://www.kumayaku.or.jp/' },
  { title: '日本薬剤師会マナブル', description: '研修管理サイト', icon: '▣', url: 'https://nichiyaku.manaable.com/' },
  { title: 'お問い合わせ（LINE公式）', description: '事務局への個別のお問い合わせ', icon: '✉', url: 'https://lin.ee/62ud3bz', contact: true }
];
const container = document.getElementById('menu');
for (const item of menus) {
  const a = document.createElement('a');
  a.className = 'tile' + (item.contact ? ' tile-contact' : '');
  a.href = item.url;
  a.rel = 'noopener noreferrer';
  const icon = document.createElement('span');
  icon.className = 'symbol'; icon.setAttribute('aria-hidden', 'true'); icon.textContent = item.icon;
  const title = document.createElement('strong'); title.textContent = item.title;
  const desc = document.createElement('small'); desc.textContent = item.description;
  a.append(icon, title, desc); container.append(a);
}
