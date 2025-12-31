# 🚀 JavaScript Learning Platform

Ứng dụng học JavaScript chuyên sâu với React, Tailwind CSS và Framer Motion.

## 📚 Nội dung học tập

### 1. Event Loop & Async JavaScript
- Single-threaded JavaScript
- Call Stack
- Macro-task và Micro-task
- Async/Await
- Event Loop mechanism
- **10 câu quiz** kiểm tra kiến thức

### 2. ES2015 - ES2024 Features
- Tất cả tính năng từ ES6 đến ES2024
- let/const, arrow functions, classes
- Async/await, Promise
- Optional chaining, Nullish coalescing
- BigInt, Temporal API
- **10 câu quiz** cho mỗi phiên bản

### 3. Bundling & Setup
- Khái niệm Bundle
- Webpack, Vite, Parcel, Rollup
- Tree-shaking, Code splitting
- HMR (Hot Module Replacement)
- **10 câu quiz** về bundlers

## 🛠️ Công nghệ sử dụng

- **React 19** - UI Framework
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icons
- **Vite** - Build tool

## 📦 Cài đặt

### Yêu cầu hệ thống

- **Node.js >= 20.19.0** (hoặc >= 22.12.0)
- npm >= 8.0.0

### Kiểm tra version hiện tại

```bash
node --version
npm --version
```

### Nếu Node version < 20, hãy upgrade:

#### Cách 1: Dùng nvm (khuyến nghị)
```bash
# Cài nvm nếu chưa có
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Cài Node.js mới nhất
nvm install 20
nvm use 20
```

#### Cách 2: Tải trực tiếp
Truy cập: https://nodejs.org/ và tải bản LTS

### Cài đặt dependencies

```bash
cd javascript_learning
npm install
```

## 🚀 Chạy ứng dụng

### Development mode

```bash
npm run dev
```

Sau đó mở trình duyệt tại: `http://localhost:5173`

### Build production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 📂 Cấu trúc dự án

```
javascript_learning/
├── src/
│   ├── components/
│   │   ├── Layout.jsx          # Layout chính với navigation
│   │   ├── ModuleCard.jsx      # Card cho mỗi module
│   │   ├── CodeBlock.jsx       # Component hiển thị code
│   │   └── QuizComponent.jsx   # Component quiz tương tác
│   ├── pages/
│   │   ├── Home.jsx            # Trang chủ
│   │   ├── EventLoop.jsx       # Module 1: Event Loop
│   │   ├── ESFeatures.jsx      # Module 2: ES Features
│   │   ├── Bundling.jsx        # Module 3: Bundling
│   │   └── Quiz.jsx            # Trang quiz
│   ├── data/
│   │   └── quizzes.js          # Dữ liệu quiz cho 3 modules
│   ├── App.jsx                 # Main app với routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind CSS
├── tailwind.config.js          # Cấu hình Tailwind
├── vite.config.js              # Cấu hình Vite
└── package.json
```

## ✨ Tính năng

### 🎨 UI/UX đẹp mắt
- Gradient backgrounds
- Smooth animations với Framer Motion
- Responsive design
- Card-based layout
- Interactive hover effects

### 📖 Nội dung phong phú
- 3 modules học tập chi tiết
- Code examples với syntax highlighting
- Giải thích chi tiết từng concept
- Ví dụ thực tế dễ hiểu

### 🎯 Hệ thống Quiz
- 30+ câu hỏi trắc nghiệm
- Hiển thị kết quả ngay lập tức
- Giải thích chi tiết cho mỗi câu
- Theo dõi điểm số
- Progress bar
- Làm lại quiz

### 🧭 Navigation mượt mà
- React Router integration
- Active link highlighting
- Breadcrumb navigation
- Smooth page transitions

## 🎓 Cách sử dụng

1. **Trang chủ**: Chọn một trong 3 modules để học
2. **Học tập**: Đọc nội dung chi tiết với code examples
3. **Quiz**: Click "Làm bài quiz" để kiểm tra kiến thức
4. **Kết quả**: Xem điểm số và giải thích chi tiết

## 🐛 Troubleshooting

### Lỗi: "Unexpected token '.'"
➡️ **Nguyên nhân**: Node.js version quá cũ (< 20)  
➡️ **Giải pháp**: Upgrade Node.js lên version >= 20.19.0

### Port 5173 đã được sử dụng
➡️ **Giải pháp**: Thay đổi port trong `vite.config.js`:
```js
export default defineConfig({
  server: {
    port: 3000 // Thay đổi port
  }
})
```

### Tailwind CSS không hoạt động
➡️ **Giải pháp**: 
```bash
npm run build
```

## 📝 Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run preview` - Preview production build
- `npm run lint` - Chạy ESLint

## 🤝 Contributing

Mọi đóng góp đều được chào đón! Hãy tạo pull request hoặc báo lỗi.

## 🚀 Deployment

### Deploy lên Vercel (Khuyến nghị - MIỄN PHÍ)

**Cách 1: Qua Dashboard (5 phút)**

1. Push code lên GitHub
2. Vào https://vercel.com
3. Import project
4. Deploy!

**Cách 2: Qua CLI (2 phút)**

```bash
npm install -g vercel
vercel login
vercel --prod
```

→ Xem chi tiết: **DEPLOY_VERCEL.md** và **DEPLOYMENT_SUMMARY.md**

### Alternatives

- Netlify: `netlify deploy --prod`
- GitHub Pages: `gh-pages -d dist`
- Firebase: `firebase deploy`

## 📄 License

MIT License - Tự do sử dụng và chỉnh sửa

## 🎉 Enjoy Learning!

Chúc bạn học JavaScript vui vẻ và hiệu quả! 🚀

### 🔗 Demo

Sau khi deploy, app sẽ có URL:
```
https://javascript-learning-xxx.vercel.app
```

---

Made with ❤️ using React, Tailwind CSS, and Framer Motion

**Ready to deploy!** 🚀✨
