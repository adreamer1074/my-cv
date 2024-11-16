・PJ作成
 　ng new my-cv --no-standalone
・ライブラリのインストール
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init
・tailwind.config.jsにcontentセクションにテンプレートパスを追加：
　  content: ['./src/**/*.{html,ts}'],
・src/styles.css適用
　@tailwind base;
　@tailwind components;
　@tailwind utilities;
・JSONデータの作成（src/assets/data.jsonに情報を保存）
・コンポーネントの作成
　ng generate component header
　ng generate component skills
　ng generate component projects
　ng generate component contact
  ng generate service data



Tailwind CSS のカスタマイズで、よりスタイリッシュなデザインに。
アイコンやアニメーションを追加（FontAwesome や Animate.css を利用）。
画像や背景の調整で個性を出す。