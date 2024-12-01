##PJ作成
 　ng new my-cv --no-standalone
##ライブラリのインストール
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init
##tailwind.config.jsにcontentセクションにテンプレートパスを追加：
　  content: ['./src/**/*.{html,ts}'],
##src/styles.css適用
　@tailwind base;
　@tailwind components;
　@tailwind utilities;
##JSONデータの作成（src/assets/data.jsonに情報を保存）
##コンポーネントの作成
　ng generate component header
　ng generate component skills
　ng generate component projects
　ng generate component contact
  ng generate service data

##FontAwesome のインストール 
  npm install --save @fortawesome/fontawesome-free

##Animate.css のインストール
　　npm install animate.css --save

##fjx ng build error
  "prerender": {
   "discoverRoutes": false
 },

 ##Deploy(Vercel)。deployする前、Vercel accountを登録が必要です。
 npm install -g vercel
 vercel