# 天草郡市薬剤師会 Webメニュー

HTML・CSS・JavaScriptのみの静的Webサイトです。Flaskは不要です。

## ファイル
- `index.html`：ページ本体
- `style.css`：デザイン
- `menu.js`：6つのメニュー名、リンク、説明

## GitHub Pagesで公開
1. GitHubで新しい**公開**リポジトリ（例：`amakusa-menu`）を作成します。
2. 3ファイルをリポジトリの最上位にアップロードしてコミットします。
3. Settings → Pages → Build and deployment → Deploy from a branch を選択します。
4. Branchを `main`、フォルダを `/(root)` にして保存します。
5. 公開後のURLは `https://ユーザー名.github.io/amakusa-menu/` の形式になります。
6. LINEオープンチャットのアナウンスや大事なノートにURLを掲載します。

## リンクの変更
`menu.js` の `url`、`title`、`description` を変更してGitHubにコミットしてください。

## セキュリティ
このサイトは公開ページです。会員名簿やパスワード、非公開資料を置かないでください。会員限定ページへのリンクを置いても、リンク先のログイン認証は引き続き必要です。
