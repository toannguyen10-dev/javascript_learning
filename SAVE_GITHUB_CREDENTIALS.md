# 🔐 Lưu GitHub Credentials để không phải nhập lại

## ❌ Hiện tại: Git CHƯA nhớ token của bạn

Lần trước bạn push bằng token trong URL, nên Git chưa lưu. Lần sau push sẽ bị hỏi lại.

## ✅ Cách 1: Lưu token vào Git (NHANH - 1 lần)

### Bước 1: Push lại với token (để Git lưu)

```bash
cd /home/toan.nguyen10/workspace/learning/javascript_learning

# Push với token - Git sẽ tự động lưu
git push https://toannguyen10-dev:YOUR_TOKEN_HERE@github.com/toannguyen10-dev/javascript_learning.git main
```

Sau lần này, Git sẽ lưu credentials vào `~/.git-credentials`

### Bước 2: Verify

```bash
# Kiểm tra xem đã lưu chưa
cat ~/.git-credentials
# Sẽ thấy: https://toannguyen10-dev:ghp_xxx@github.com
```

### Bước 3: Từ lần sau

```bash
git push  # Không cần token nữa! ✨
```

---

## ✅ Cách 2: Dùng SSH Key (AN TOÀN HƠN - Khuyến nghị)

### Bước 1: Tạo SSH Key

```bash
# Tạo SSH key mới
ssh-keygen -t ed25519 -C "toannguyen10.dev@gmail.com"

# Nhấn Enter 3 lần (để mặc định)
```

### Bước 2: Copy Public Key

```bash
# Hiển thị public key
cat ~/.ssh/id_ed25519.pub

# Copy toàn bộ output (bắt đầu với ssh-ed25519...)
```

### Bước 3: Add SSH Key vào GitHub

1. Vào: **https://github.com/settings/keys**
2. Click **"New SSH key"**
3. Title: `My Linux Machine`
4. Key type: **Authentication Key**
5. Paste public key vào ô "Key"
6. Click **"Add SSH key"**

### Bước 4: Test SSH Connection

```bash
ssh -T git@github.com

# Nếu thành công sẽ thấy:
# Hi toannguyen10-dev! You've successfully authenticated...
```

### Bước 5: Đổi Remote sang SSH

```bash
cd /home/toan.nguyen10/workspace/learning/javascript_learning

# Remove remote HTTPS
git remote remove origin

# Add remote SSH
git remote add origin git@github.com:toannguyen10-dev/javascript_learning.git

# Test push
git push -u origin main
```

### ✅ Từ lần sau:

```bash
git push  # Không cần gì cả! ✨
```

---

## 🔒 Bảo mật Token

### ⚠️ Lưu ý quan trọng:

1. **Token trong URL**: Không an toàn nếu ai đó xem terminal history
2. **Token trong file**: Lưu trong `~/.git-credentials` (tương đối an toàn)
3. **SSH Key**: An toàn nhất! ✅

### 🛡️ Bảo vệ token:

```bash
# Set quyền file credentials (chỉ owner đọc được)
chmod 600 ~/.git-credentials
```

---

## 📋 So sánh các cách:

| Cách | An toàn | Dễ setup | Khuyến nghị |
|------|---------|----------|-------------|
| Token trong URL | ⚠️ Thấp | ✅ Rất dễ | ❌ Không |
| Token lưu file | ⚠️ Trung bình | ✅ Dễ | ⚠️ OK |
| SSH Key | ✅ Cao | ⚠️ Trung bình | ✅ **BEST** |

---

## 🎯 Khuyến nghị:

**Dùng SSH Key** - An toàn nhất và không cần nhập token mỗi lần!

Setup 1 lần, dùng mãi mãi! 🚀

---

## ✅ Quick Setup SSH (Copy-paste luôn):

```bash
# 1. Tạo SSH key
ssh-keygen -t ed25519 -C "toannguyen10.dev@gmail.com"
# Nhấn Enter 3 lần

# 2. Copy public key
cat ~/.ssh/id_ed25519.pub
# Copy output và add vào GitHub: https://github.com/settings/keys

# 3. Test
ssh -T git@github.com

# 4. Đổi remote
cd /home/toan.nguyen10/workspace/learning/javascript_learning
git remote set-url origin git@github.com:toannguyen10-dev/javascript_learning.git

# 5. Push
git push -u origin main
```

---

**Sau khi setup xong, Git sẽ "nhớ" mãi mãi!** 🎉


