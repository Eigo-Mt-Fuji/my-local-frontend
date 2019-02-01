# README

## はじめに

* 本アプリ上でアンケート用のJSONファイルの編集及びgitリポジトリへの反映までを行うことができます

## 画面イメージ

* ![画面イメージ1](./capture1.png)
* ![画面イメージ2](./capture2.png)

## 機能

* ２つの編集モード
    * [フォーム編集](http://localhost:4200/awesome/edit?is_admin=false&branch=develop)機能
        * 選択したフェーズ内のアンケート項目の編集・削除ができます
            * 文言変更
                * ラベル／テキストエリア／テキストボックス／プルダウン／チェックボックス／ラジオボタン
            * 必須・非必須の切り替え
    　      * 選択式の場合、選択項目ごとの文言・値の編集も可能
                * セレクトボックス／チェックボックス／ラジオボタンが対象
    　      * プレースホルダー（説明）の文言編集も可能
                * テキスト／テキストエリアが対象
            * UIの簡易切り替え
                * セレクトボックス／チェックボックス／ラジオボタン
                * テキスト（１行）／テキストエリアの切り替え
            * 表示項目の削除機能
            * 項目の並び順入れ替え
                * ドラッグアンドドロップ
    * [高度編集](http://localhost:4200/awesome/edit?is_admin=true&branch=develop)機能（管理者向）
        * ツリー上でのアイテム追加・編集／JSONのコード直接編集が可能
* ヘルプダイアログ
    * 画面上部のヘルプ（？）アイコンを押すと表示されます
 
## 課題

* 削除する時確認がほしい
* コミットするときの処理をカスタマイズできるようにしたい
* テキストエリアの入力長さを編集できると嬉しい
* 文言が見きれないようにできるとよい
* 非必須は任意
* 選択肢の＋ボタンのひだりがわによはくがほしい
* 保存したあとPhaseの選択状態及び表示が初期状態に戻ってしまうのをなんとかしたい
* IDは編集できても良いと思った
* 保存するときにnumber整形したい
* IDはphaseとnumber、型から自動採番としたい
* プレビュー機能を実現したい
* 文言の校正機能（具体的には任意の場合、末尾に任意をつける、句読点を統一、類似した表現を検知）を実現したい
* IDが被ってもエラーにならないようにしておきたい
* Electron化したい
  * gitアカウントがない場合の案内を出せるようにしたい
  * gitのcloneからガイドできるようにしたい

## 起動

```
$ cd awesome-json-editor
$ cd resources
$ ln -snf ../../beauty-advice-api/src/drivers/questionnaire-consts-items.json questionnaire-consts-items.json
$ ln -snf ../../beauty-advice-api repository
$ cd repository
$ git checkout develop # git fetch origin && git checkout -b develop origin develop
$ npm install
$ npm run build
$ npm run start # after started, open http://localhost:4200/awesome/edit
```

## 環境

```
$ node --version
v8.11.3

$ npm --version
5.6.0
```
