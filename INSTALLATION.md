# 📦 Hướng dẫn cài đặt chi tiết

## ⚠️ Lưu ý quan trọng

**Node.js version hiện tại của bạn là v12.22.9 - QUẦCŨ!**

Ứng dụng này yêu cầu **Node.js >= 20.19.0** để chạy được.

## 🔧 Cách upgrade Node.js

### Cách 1: Sử dụng nvm (Node Version Manager) - KHUYẾN NGHỊ

#### Bước 1: Cài đặt nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

#### Bước 2: Load nvm

```bash
# Thêm vào ~/.bashrc hoặc ~/.zshrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

Sau đó reload shell:
```bash
source ~/.bashrc
# hoặc
source ~/.zshrc
```

#### Bước 3: Cài đặt Node.js mới

```bash
# Cài Node.js LTS (khuyến nghị)
nvm install --lts

# Hoặc cài version cụ thể
nvm install 20

# Sử dụng version vừa cài
nvm use 20

# Kiểm tra version
node --version  # Nên hiển thị v20.x.x
```

#### Bước 4: Set default version

```bash
nvm alias default 20
```

### Cách 2: Cài trực tiếp từ NodeSource

#### Ubuntu/Debian:

```bash
# Xóa Node.js cũ
sudo apt remove nodejs npm

# Thêm NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Cài Node.js 20
sudo apt-get install -y nodejs

# Kiểm tra
node --version
npm --version
```

### Cách 3: Download binary từ nodejs.org

1. Truy cập: https://nodejs.org/en/download
2. Tải bản Linux Binaries (x64)
3. Giải nén và thêm vào PATH

```bash
# Ví dụ:
wget https://nodejs.org/dist/v20.10.0/node-v20.10.0-linux-x64.tar.xz
tar -xf node-v20.10.0-linux-x64.tar.xz
sudo mv node-v20.10.0-linux-x64 /usr/local/node20
echo 'export PATH=/usr/local/node20/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

## 🚀 Sau khi upgrade Node.js

### 1. Verify version

```bash
node --version  # Phải >= v20.19.0
npm --version   # Phải >= 8.0.0
```

### 2. Cài đặt dependencies

```bash
cd /home/toan.nguyen10/workspace/learning/javascript_learning
npm install
```

### 3. Chạy app

```bash
npm run dev
```

### 4. Mở trình duyệt

Truy cập: `http://localhost:5173`

## 📱 Xem trước ứng dụng

App sẽ có:
- ✨ UI đẹp mắt với gradient và animations
- 📚 3 modules học tập chi tiết
- 🎯 30+ câu quiz tương tác
- 🧭 Navigation mượt mà
- 📱 Responsive design

## 🎨 Screenshots expected

### Trang chủ
- Hero section với gradient text
- 3 module cards với hover effects
- Statistics (3 modules, 30+ quizzes, 100% free)

### Trang học tập
- Navigation bar sticky
- Content sections với code blocks
- Examples với syntax highlighting
- CTA buttons để làm quiz

### Trang Quiz
- Progress bar
- Multiple choice questions
- Instant feedback
- Score tracking
- Explanations cho mỗi câu

## ❓ Câu hỏi thường gặp

### Q: Tại sao phải upgrade Node.js?
A: Node.js 12 đã end-of-life và không hỗ trợ các tính năng ES mới như optional chaining cho methods.

### Q: Có thể dùng Node.js 18 không?
A: Có, nhưng khuyến nghị dùng Node.js 20 trở lên để đảm bảo tương thích.

### Q: nvm install bị lỗi?
A: Đảm bảo bạn đã cài `curl` và có quyền sudo. Thử:
```bash
sudo apt-get install curl
```

### Q: npm install bị lỗi EACCES?
A: Fix quyền npm:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

## 🆘 Cần trợ giúp?

Nếu gặp vấn đề, hãy:
1. Kiểm tra Node.js version: `node --version`
2. Xóa node_modules và cài lại: `rm -rf node_modules && npm install`
3. Clear npm cache: `npm cache clean --force`

---

Happy Learning! 🎉

