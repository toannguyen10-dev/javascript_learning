# 🚀 Deploy React App lên Vercel

## ✨ Tại sao nên dùng Vercel?

- ✅ **MIỄN PHÍ** cho personal projects
- ✅ **Tự động build & deploy** khi push code lên GitHub
- ✅ **SSL certificate** miễn phí (HTTPS)
- ✅ **CDN toàn cầu** - load nhanh ở mọi nơi
- ✅ **Preview deployments** - mỗi PR có link preview riêng
- ✅ **Zero config** - tự động detect Vite
- ✅ **Custom domain** miễn phí

## 📋 Yêu cầu

1. Node.js >= 20.19.0 (đã hướng dẫn upgrade ở INSTALLATION.md)
2. Git đã cài đặt
3. Tài khoản GitHub
4. Tài khoản Vercel (đăng ký miễn phí)

## 🎯 Cách 1: Deploy qua Vercel Dashboard (DỄ NHẤT)

### Bước 1: Push code lên GitHub

```bash
# Tại thư mục javascript_learning/

# Khởi tạo git (nếu chưa có)
git init

# Thêm .gitignore
echo "node_modules
dist
.env
.env.local
*.log
.DS_Store" > .gitignore

# Add files
git add .

# Commit
git commit -m "Initial commit - JavaScript Learning Platform"

# Tạo repository trên GitHub (vào github.com/new)
# Sau đó link với remote:
git remote add origin https://github.com/YOUR_USERNAME/javascript-learning.git

# Push
git branch -M main
git push -u origin main
```

### Bước 2: Deploy trên Vercel

1. **Đăng nhập Vercel**
   - Vào: https://vercel.com
   - Click "Sign Up" → Chọn "Continue with GitHub"
   - Authorize Vercel

2. **Import Project**
   - Click "Add New..." → "Project"
   - Chọn repository: `javascript-learning`
   - Click "Import"

3. **Configure Project**
   ```
   Framework Preset: Vite ✅ (tự động detect)
   Root Directory: ./
   Build Command: npm run build ✅
   Output Directory: dist ✅
   Install Command: npm install ✅
   ```

4. **Deploy**
   - Click "Deploy"
   - Đợi 1-2 phút ⏳
   - Done! 🎉

### Bước 3: Nhận link

Sau khi deploy xong, bạn sẽ có:
- **Production URL**: `https://javascript-learning-xxx.vercel.app`
- **Custom domain** (optional): `yourdomain.com`

## 🎯 Cách 2: Deploy qua Vercel CLI (NHANH HƠN)

### Bước 1: Cài Vercel CLI

```bash
npm install -g vercel
```

### Bước 2: Login

```bash
vercel login
```

### Bước 3: Deploy

```bash
cd /home/toan.nguyen10/workspace/learning/javascript_learning

# Deploy lần đầu
vercel

# Hoặc deploy production ngay
vercel --prod
```

CLI sẽ hỏi:
- Set up and deploy? **Y**
- Which scope? Chọn account của bạn
- Link to existing project? **N** (lần đầu)
- What's your project's name? **javascript-learning**
- In which directory is your code located? **./** (Enter)

Xong! Link sẽ hiển thị ngay: `https://javascript-learning-xxx.vercel.app`

## 🔄 Auto Deploy (Khuyến nghị)

Sau khi setup xong, mỗi lần push code lên GitHub:

```bash
git add .
git commit -m "Update content"
git push
```

→ Vercel **tự động build & deploy** trong 1-2 phút! ✨

## 🌐 Custom Domain (Optional)

1. Vào Vercel Dashboard
2. Chọn project → Settings → Domains
3. Add domain của bạn: `myapp.com`
4. Config DNS theo hướng dẫn
5. Done! SSL tự động

## 📊 Environment Variables (Nếu cần)

Nếu app có API keys, secrets:

### Via Dashboard:
1. Project Settings → Environment Variables
2. Add biến: `VITE_API_KEY=xxx`
3. Redeploy

### Via CLI:
```bash
vercel env add VITE_API_KEY
# Nhập value
# Chọn environments (Production, Preview, Development)
```

## ⚡ Tối ưu Performance

### 1. Thêm cache headers

Tạo file `public/_headers`:

```
/*
  Cache-Control: public, max-age=0, must-revalidate

/assets/*
  Cache-Control: public, max-age=31536000, immutable
```

### 2. Compress images

Nếu có nhiều ảnh:
```bash
npm install -D vite-plugin-imagemin
```

### 3. Code splitting

Code đã sử dụng dynamic import cho routes (tự động code splitting)

## 🐛 Troubleshooting

### Lỗi: Build failed

**Nguyên nhân**: Dependencies chưa đúng

**Giải pháp**:
```bash
# Local test build trước
npm run build

# Nếu OK thì:
vercel --prod
```

### Lỗi: Routes không hoạt động (404)

**Nguyên nhân**: Vercel chưa rewrite routes

**Giải pháp**: File `vercel.json` đã config sẵn:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Lỗi: Node version

**Giải pháp**: Thêm vào `package.json`:
```json
{
  "engines": {
    "node": ">=20.19.0"
  }
}
```

## 📈 Analytics & Monitoring

Vercel cung cấp miễn phí:
- **Analytics**: Theo dõi traffic, performance
- **Logs**: Real-time deployment logs
- **Speed Insights**: Core Web Vitals

Vào Dashboard → Project → Analytics để xem

## 🎨 Preview Deployments

Mỗi Pull Request tự động có preview URL:
```
Preview: https://javascript-learning-git-feature-xxx.vercel.app
```

Rất hữu ích để test trước khi merge!

## 💰 Chi phí

| Plan | Giá | Limits |
|------|-----|--------|
| **Hobby** | **FREE** | 100GB bandwidth/tháng, Unlimited projects |
| Pro | $20/tháng | 1TB bandwidth, Teams, Analytics nâng cao |
| Enterprise | Custom | Unlimited, SLA, Support 24/7 |

→ **FREE plan là đủ** cho hầu hết projects cá nhân!

## 📚 Links hữu ích

- **Vercel Docs**: https://vercel.com/docs
- **Vite + Vercel**: https://vercel.com/docs/frameworks/vite
- **Custom Domains**: https://vercel.com/docs/custom-domains

## ✅ Checklist trước khi deploy

- [ ] Node.js >= 20.19.0
- [ ] `npm run build` chạy thành công local
- [ ] Code đã push lên GitHub
- [ ] File `vercel.json` đã tạo
- [ ] `.gitignore` đã config đúng
- [ ] Test app local: `npm run dev`

## 🎉 Kết quả

Sau khi deploy thành công, bạn sẽ có:

1. ✅ **Live URL** chia sẻ được ngay: `https://javascript-learning-xxx.vercel.app`
2. ✅ **SSL/HTTPS** tự động
3. ✅ **CDN** toàn cầu - load nhanh
4. ✅ **Auto deploy** mỗi khi push code
5. ✅ **Analytics** miễn phí

## 🚀 Bước tiếp theo

Sau khi deploy, bạn có thể:
- Share link với bạn bè
- Thêm custom domain
- Enable analytics
- Setup CI/CD với GitHub Actions
- Thêm SEO meta tags

---

**Happy Deploying!** 🎊

Nếu gặp vấn đề, check:
1. Vercel Logs trong Dashboard
2. Browser Console (F12)
3. Network tab để debug API calls

---

## 📝 Quick Commands

```bash
# Deploy ngay
vercel --prod

# Check logs
vercel logs

# List deployments
vercel ls

# Remove deployment
vercel rm deployment-url

# Open project dashboard
vercel
```

