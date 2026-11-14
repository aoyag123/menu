// リンクの名称・URL・説明は、このファイルで変更できます。
const menus = [
  { title: 'ホームページ', description: '会員向けサイト', icon: 'home', url: 'https://amapha.main.jp/member/' },
  { title: '研修会情報', description: '研修会・講習会', icon: 'calendar', url: 'https://amapha.main.jp/member/?cat=3' },
  { title: '夜間・休日当番', description: '当番情報', icon: 'moon', url: 'https://amapha.main.jp/member/?cat=4' },
  { title: '休日開局情報', description: '開局薬局の確認', icon: 'pharmacy', url: 'https://amakusazaitaku.main.jp/' },
  { title: '熊本県薬剤師会HP', description: '県薬剤師会', icon: 'building', url: 'https://www.kumayaku.or.jp/' },
  { title: '日本薬剤師会マナブル', description: '研修管理サイト', icon: 'learning', url: 'https://nichiyaku.manaable.com/' },
  { title: 'お問い合わせ（LINE公式）', description: '事務局への個別のお問い合わせ', icon: 'chat', url: 'https://lin.ee/62ud3bz', contact: true }
];
// 端末のフォントに依存しない、共通の線画アイコン。
const iconPaths = {
  home: ['m3 10 9-7 9 7', 'M5 9v12h5v-7h4v7h5V9'],
  calendar: ['M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z', 'M7 3v4m10-4v4M3 11h18m-14 4h2m6 0h2m-10 3h2'],
  moon: ['M20.5 14A9 9 0 0 1 10 3.5 9 9 0 1 0 20.5 14Z'],
  pharmacy: ['M4 21V8l8-5 8 5v13H4Z', 'M9 21v-5h6v5m-3-13v5m-2.5-2.5h5'],
  building: ['M6 21V3h12v18M3 21h18', 'M9 7h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1m-4 6v-3h2v3'],
  learning: ['m2 8 10-5 10 5-10 5L2 8Z', 'M6 10v6c3 3 9 3 12 0v-6m4-2v7'],
  chat: ['M21 11.5a8.5 8.5 0 0 1-8.5 8.5H7l-5 2 2-5v-5.5a8.5 8.5 0 0 1 17 0Z', 'M8 12h.01M12 12h.01M16 12h.01']
};
function createIcon(name) {
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.8');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  for (const d of iconPaths[name]) {
    const path = document.createElementNS(ns, 'path');
    path.setAttribute('d', d);
    svg.append(path);
  }
  return svg;
}
const container = document.getElementById('menu');
for (const item of menus) {
  const a = document.createElement('a');
  a.className = 'tile' + (item.contact ? ' tile-contact' : '');
  a.href = item.url;
  a.rel = 'noopener noreferrer';
  const icon = document.createElement('span');
  icon.className = 'symbol'; icon.setAttribute('aria-hidden', 'true'); icon.append(createIcon(item.icon));
  const title = document.createElement('strong'); title.textContent = item.title;
  const desc = document.createElement('small'); desc.textContent = item.description;
  a.append(icon, title, desc); container.append(a);
}
