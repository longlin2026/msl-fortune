# MSL 琥珀光

一个专为医药 MSL 打造的网站，包含小说《琥珀色的光》和 2026 马年运势签。

## 🌐 在线访问

部署后可通过以下地址访问：
`https://你的用户名.github.io/msl-website`

## 📁 网站结构

```
msl-website/
├── index.html          # 首页导航
├── novel.html          # 小说《琥珀色的光》
├── fortune/            # 运势签
│   ├── index.html
│   ├── style.css
│   └── script.js
├── assets/             # 图片资源
│   ├── 主封面图.png
│   ├── mascot-horse.png
│   ├── bg-texture.png
│   └── ...
└── README.md
```

## 🚀 部署到 GitHub Pages

### 第一步：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名填写：`msl-website`
4. 选择 "Public"（公开）
5. 点击 "Create repository"

### 第二步：上传文件

**方法 A：通过网页上传**

1. 在新创建的仓库页面，点击 "uploading an existing file"
2. 将 `msl-website` 文件夹内的所有文件（包括 assets、fortune 文件夹）拖入
3. 点击 "Commit changes"

**方法 B：通过命令行**

```bash
# 进入网站文件夹
cd ~/Documents/Projects/msl-website

# 初始化 git
git init
git add .
git commit -m "Initial commit"

# 连接到 GitHub 仓库（替换 yourusername）
git remote add origin https://github.com/yourusername/msl-website.git
git branch -M main
git push -u origin main
```

### 第三步：启用 GitHub Pages

1. 在仓库页面，点击 "Settings"（设置）
2. 左侧菜单选择 "Pages"
3. "Source" 部分选择 "Deploy from a branch"
4. Branch 选择 "main"，文件夹选择 "/ (root)"
5. 点击 "Save"

等待 1-2 分钟，你的站点就会上线！

## 🎨 网站特色

### 首页
- 精美的渐变背景和动画效果
- 导航到小说和运势签
- 使用主封面图作为视觉焦点

### 小说《琥珀色的光》
- 关于 MSL 在 AI 时代的故事
- 四章节完整内容
- 优雅的阅读排版

### 马年运势签
- 30 支专为 MSL 设计的签文
- 长按抽签动画效果
- 使用千里马吉祥物图片
- 可生成分享图片
- 包含运势指数（事业、财运、人际、健康）

## 🖼️ 使用的图片资源

| 图片 | 用途 |
|------|------|
| 主封面图.png | 首页 Hero 区域展示 |
| mascot-horse.png | 签筒上方的千里马吉祥物 |
| bg-texture.png | 背景纹理 |
| card-decoration.png | 签文卡片装饰 |
| 分享图.png | 社交媒体分享预览 |

## 📝 本地预览

在部署前，你可以在本地预览网站：

```bash
cd ~/Documents/Projects/msl-website

# 使用 Python 简单服务器
python3 -m http.server 8000

# 或使用 Node.js
npx serve .
```

然后在浏览器打开 `http://localhost:8000`

## 🔄 更新网站

### 通过 Claude Code 更新

1. 让 Claude Code 修改本地文件
2. 提交更改：
```bash
cd ~/Documents/Projects/msl-website
git add .
git commit -m "更新内容"
git push
```

3. GitHub Pages 会自动重新部署

## 📱 分享网站

部署完成后，你可以：
- 分享到微信朋友圈
- 发送给同事
- 添加到微信收藏
- 生成二维码（使用草料二维码等工具）

## ⚠️ 注意事项

- 所有图片已放入 `assets` 文件夹，确保路径正确
- 运势签页面使用相对路径 `../assets/` 引用图片
- GitHub Pages 免费版有 1GB 存储限制
- 首次部署可能需要几分钟生效

## 🎯 后续可添加的功能

- [ ] 添加 Google Analytics 统计访问
- [ ] 自定义域名（如 msl-amber.com）
- [ ] 添加更多 MSL 相关故事
- [ ] 收集访客反馈表单

---

**© 2026 MSL 琥珀光**

在这个 AI 可以模仿一切的时代，我们选择成为那个无法被模仿的自己。
