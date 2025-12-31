# 个人主页项目

这是一个现代化的个人主页网站，包含三个主要部分：个人介绍、兴趣爱好和工作项目。

## 🚀 快速开始

### 本地预览
```bash
# 方式1: 直接打开 index.html
# 方式2: 使用Python服务器
python -m http.server 8000
# 然后访问 http://localhost:8000
```

### 部署到 GitHub Pages
```bash
# 使用部署脚本（最简单）
chmod +x deploy.sh
./deploy.sh

# 详细说明见下方"部署说明"章节
```

## 功能特点

- 🎨 现代化的UI设计，响应式布局
- 📱 完全响应式，支持移动端、平板和桌面端
- ✨ 平滑滚动和动画效果
- 🎯 清晰的导航和内容组织
- 🌈 渐变色彩和阴影效果

## 项目结构

```
personal-website/
├── index.html      # 主页面文件
├── styles.css      # 样式文件
├── script.js       # JavaScript交互文件
├── deploy.sh       # 部署脚本（一键部署到GitHub Pages）
├── .gitignore      # Git忽略文件
└── README.md       # 项目说明文档
```

## 使用方法

### 本地访问

1. 直接在浏览器中打开 `index.html` 文件即可查看网站
2. 或者使用本地服务器运行（推荐）：
   ```bash
   # 使用Python
   python -m http.server 8000
   
   # 使用Node.js
   npx http-server
   ```
   然后在浏览器中访问 `http://localhost:8000`

### 部署到 GitHub Pages（让其他人可以访问你的网站）

#### 方法一：使用部署脚本（推荐）

项目包含一个便捷的部署脚本，可以快速部署到 GitHub Pages：

```bash
# 给脚本添加执行权限（首次使用）
chmod +x deploy.sh

# 运行部署脚本
./deploy.sh

# 或直接部署到GitHub Pages
./deploy.sh deploy
```

脚本会自动：
1. 检查并初始化 git 仓库（如果还没有）
2. 检查并添加 GitHub 远程仓库（如果需要）
3. 提交并推送代码到 GitHub
4. 提示你启用 GitHub Pages

#### 方法二：手动部署

1. **创建 GitHub 仓库**：
   - 在 GitHub 上创建一个新仓库（例如：`personal-website`）

2. **初始化并推送代码**：
   ```bash
   # 初始化git仓库
   cd personal-website
   git init
   git add .
   git commit -m "Initial commit"
   
   # 添加远程仓库（替换为你的仓库地址）
   git remote add origin https://github.com/yuehan1228/personal-website.git
   git branch -M main
   git push -u origin main
   ```

3. **启用 GitHub Pages**：
   - 进入仓库的 Settings
   - 找到 Pages 选项
   - Source 选择 `main` 分支，文件夹选择 `/ (root)`
   - 保存后，网站将在 `https://yuehan1228.github.io/personal-website` 可访问
   - 通常几分钟后即可访问

#### 更新网站

每次修改后，运行以下命令更新网站：

```bash
./deploy.sh deploy
```

或手动执行：

```bash
git add .
git commit -m "Update website"
git push origin main
```

## 自定义内容

### 修改个人介绍
编辑 `index.html` 中 `#about` 部分的内容，包括：
- 个人简介文字
- 技能标签
- 头像（目前使用占位符图标）

### 修改兴趣爱好
编辑 `index.html` 中 `#interests` 部分的兴趣卡片，可以：
- 添加或删除兴趣卡片
- 修改图标（使用Font Awesome图标）
- 更新描述文字

### 修改工作项目
编辑 `index.html` 中 `#projects` 部分的项目卡片，可以：
- 添加或删除项目
- 修改项目描述
- 更新技术标签
- 添加项目链接

### 修改样式
编辑 `styles.css` 文件来自定义：
- 颜色主题（修改 `:root` 中的CSS变量）
- 字体和间距
- 动画效果
- 响应式断点

## 技术栈

- HTML5
- CSS3 (使用CSS变量、Grid、Flexbox)
- JavaScript (原生JS，无依赖)
- Font Awesome 图标库（CDN）

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

本项目为个人使用项目，可自由修改和使用。

