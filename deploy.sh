#!/bin/bash

# 个人主页部署脚本
# 使用方法: ./deploy.sh [选项]

set -e

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}个人主页部署脚本${NC}"
echo "===================="
echo ""

# 检查参数
if [ $# -eq 0 ]; then
    echo "请选择部署方式:"
    echo "1. 本地服务器 (Python)"
    echo "2. 本地服务器 (Node.js)"
    echo "3. ngrok (需要先安装和配置)"
    echo "4. GitHub Pages (需要先配置git仓库)"
    echo "5. Vercel (需要先安装: npm i -g vercel)"
    echo "6. Netlify (需要先安装: npm i -g netlify-cli)"
    echo ""
    read -p "请输入选项 (1-6): " choice
else
    choice=$1
fi

case $choice in
    1)
        echo -e "${GREEN}启动 Python HTTP 服务器...${NC}"
        echo "访问地址: http://localhost:8000"
        echo "按 Ctrl+C 停止服务器"
        python3 -m http.server 8000
        ;;
    2)
        echo -e "${GREEN}启动 Node.js HTTP 服务器...${NC}"
        echo "访问地址: http://localhost:8000"
        echo "按 Ctrl+C 停止服务器"
        if ! command -v http-server &> /dev/null; then
            echo -e "${YELLOW}正在安装 http-server...${NC}"
            npm install -g http-server
        fi
        http-server -p 8000
        ;;
    3)
        echo -e "${GREEN}启动 ngrok 隧道...${NC}"
        if ! command -v ngrok &> /dev/null; then
            echo -e "${RED}错误: 未找到 ngrok，请先安装${NC}"
            echo "安装方法: https://ngrok.com/download"
            exit 1
        fi
        
        # 检查是否已有本地服务器运行
        if ! lsof -Pi :8000 -sTCP:LISTEN -t >/dev/null ; then
            echo -e "${YELLOW}未检测到本地服务器，先启动服务器...${NC}"
            python3 -m http.server 8000 &
            SERVER_PID=$!
            sleep 2
        fi
        
        echo "启动 ngrok..."
        ngrok http 8000
        ;;
    4)
        echo -e "${GREEN}部署到 GitHub Pages...${NC}"
        
        # 检查是否已初始化git
        if [ ! -d ".git" ]; then
            echo -e "${YELLOW}初始化 git 仓库...${NC}"
            git init
            git add .
            git commit -m "Initial commit"
        fi
        
        # 检查是否已有远程仓库
        if ! git remote | grep -q origin; then
            echo -e "${YELLOW}请先添加 GitHub 远程仓库:${NC}"
            echo "git remote add origin https://github.com/你的用户名/personal-website.git"
            echo ""
            read -p "是否现在添加? (y/n): " add_remote
            if [ "$add_remote" = "y" ]; then
                read -p "请输入仓库URL: " repo_url
                git remote add origin "$repo_url"
            else
                exit 1
            fi
        fi
        
        echo "推送到 GitHub..."
        git add .
        git commit -m "Update website" || true
        git push origin main || git push origin master
        
        echo -e "${GREEN}部署完成!${NC}"
        echo "请在 GitHub 仓库设置中启用 Pages:"
        echo "Settings > Pages > Source: main branch"
        ;;
    5)
        echo -e "${GREEN}部署到 Vercel...${NC}"
        if ! command -v vercel &> /dev/null; then
            echo -e "${RED}错误: 未找到 vercel，请先安装${NC}"
            echo "安装方法: npm install -g vercel"
            exit 1
        fi
        vercel --prod
        ;;
    6)
        echo -e "${GREEN}部署到 Netlify...${NC}"
        if ! command -v netlify &> /dev/null; then
            echo -e "${RED}错误: 未找到 netlify，请先安装${NC}"
            echo "安装方法: npm install -g netlify-cli"
            exit 1
        fi
        netlify deploy --prod
        ;;
    *)
        echo -e "${RED}无效的选项${NC}"
        exit 1
        ;;
esac

