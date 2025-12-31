#!/bin/bash

# 个人主页部署脚本 - GitHub Pages
# 使用方法: ./deploy.sh [选项]

set -e

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# GitHub 仓库地址
GITHUB_REPO="https://github.com/yuehan1228/personal-website.git"

echo -e "${GREEN}个人主页部署脚本 - GitHub Pages${NC}"
echo "======================================"
echo ""

# 检查参数
if [ $# -eq 0 ]; then
    echo "请选择操作:"
    echo "1. 本地预览 (Python服务器)"
    echo "2. 本地预览 (Node.js服务器)"
    echo "3. 部署到 GitHub Pages"
    echo ""
    read -p "请输入选项 (1-3): " choice
else
    case $1 in
        "deploy"|"d")
            choice=3
            ;;
        "local"|"l"|"1")
            choice=1
            ;;
        "node"|"n"|"2")
            choice=2
            ;;
        *)
            choice=$1
            ;;
    esac
fi

case $choice in
    1)
        echo -e "${GREEN}启动 Python HTTP 服务器...${NC}"
        echo "访问地址: ${BLUE}http://localhost:8000${NC}"
        echo "按 Ctrl+C 停止服务器"
        echo ""
        python3 -m http.server 8000
        ;;
    2)
        echo -e "${GREEN}启动 Node.js HTTP 服务器...${NC}"
        echo "访问地址: ${BLUE}http://localhost:8000${NC}"
        echo "按 Ctrl+C 停止服务器"
        echo ""
        if ! command -v http-server &> /dev/null; then
            echo -e "${YELLOW}正在安装 http-server...${NC}"
            npm install -g http-server
        fi
        http-server -p 8000
        ;;
    3)
        echo -e "${GREEN}部署到 GitHub Pages...${NC}"
        echo ""
        
        # 检查是否已初始化git
        if [ ! -d ".git" ]; then
            echo -e "${YELLOW}初始化 git 仓库...${NC}"
            git init
            git add .
            git commit -m "Initial commit: Personal website"
            echo -e "${GREEN}✓ Git 仓库初始化完成${NC}"
        fi
        
        # 检查是否已有远程仓库
        if ! git remote | grep -q origin; then
            echo -e "${YELLOW}添加 GitHub 远程仓库...${NC}"
            echo "仓库地址: ${BLUE}${GITHUB_REPO}${NC}"
            echo ""
            read -p "是否使用默认仓库地址? (y/n): " use_default
            if [ "$use_default" = "y" ] || [ "$use_default" = "Y" ] || [ -z "$use_default" ]; then
                git remote add origin "$GITHUB_REPO"
            else
                read -p "请输入仓库URL: " repo_url
                git remote add origin "$repo_url"
            fi
            echo -e "${GREEN}✓ 远程仓库添加完成${NC}"
        fi
        
        # 检查当前分支
        current_branch=$(git branch --show-current 2>/dev/null || echo "main")
        if [ -z "$current_branch" ]; then
            current_branch="main"
        fi
        
        # 检查是否有未提交的更改
        if ! git diff-index --quiet HEAD -- 2>/dev/null; then
            echo -e "${YELLOW}检测到未提交的更改，正在提交...${NC}"
            git add .
            read -p "请输入提交信息 (直接回车使用默认): " commit_msg
            if [ -z "$commit_msg" ]; then
                commit_msg="Update website - $(date +'%Y-%m-%d %H:%M:%S')"
            fi
            git commit -m "$commit_msg"
            echo -e "${GREEN}✓ 更改已提交${NC}"
        fi
        
        # 推送到 GitHub
        echo ""
        echo -e "${BLUE}正在推送到 GitHub...${NC}"
        if git push origin "$current_branch" 2>/dev/null; then
            echo -e "${GREEN}✓ 代码推送成功${NC}"
        else
            # 如果推送失败，可能是第一次推送
            echo -e "${YELLOW}首次推送，设置上游分支...${NC}"
            git push -u origin "$current_branch" || {
                echo -e "${RED}推送失败，请检查：${NC}"
                echo "1. GitHub 仓库是否存在"
                echo "2. 是否有推送权限"
                echo "3. 网络连接是否正常"
                exit 1
            }
        fi
        
        echo ""
        echo -e "${GREEN}========================================${NC}"
        echo -e "${GREEN}部署完成!${NC}"
        echo -e "${GREEN}========================================${NC}"
        echo ""
        echo "下一步操作："
        echo "1. 访问 GitHub 仓库: ${BLUE}${GITHUB_REPO}${NC}"
        echo "2. 进入 Settings > Pages"
        echo "3. Source 选择: ${BLUE}${current_branch} branch${NC}"
        echo "4. 文件夹选择: ${BLUE}/ (root)${NC}"
        echo "5. 保存后，网站将在几分钟后可通过以下地址访问："
        echo "   ${BLUE}https://yuehan1228.github.io/personal-website${NC}"
        echo ""
        ;;
    *)
        echo -e "${RED}无效的选项${NC}"
        echo "使用方法:"
        echo "  ./deploy.sh          # 显示菜单"
        echo "  ./deploy.sh deploy   # 部署到GitHub Pages"
        echo "  ./deploy.sh local    # 本地预览(Python)"
        echo "  ./deploy.sh node     # 本地预览(Node.js)"
        exit 1
        ;;
esac

