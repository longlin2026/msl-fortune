#!/bin/bash
# MSL运势签 - GitHub上传助手

cd "$(dirname "$0")"

echo "🐎 MSL千里马运势签 - GitHub上传助手"
echo "======================================"
echo ""

# 检查 Git
if ! command -v git &> /dev/null; then
    echo "❌ 请先安装 Git"
    echo "访问: https://git-scm.com/download/mac"
    echo "下载后安装，然后重新运行此脚本"
    read -p "按回车退出..."
    exit 1
fi

echo "✅ Git 已安装"
echo ""

# 询问 GitHub 用户名
echo "步骤 1: 输入你的 GitHub 用户名"
read -p "> " username

if [ -z "$username" ]; then
    echo "❌ 用户名不能为空"
    read -p "按回车退出..."
    exit 1
fi

repo_name="msl-fortune"

echo ""
echo "步骤 2: 配置 Git"

# 检查 git 配置
if ! git config user.email &> /dev/null; then
    echo "首次使用，需要配置邮箱"
    read -p "输入你的邮箱: " email
    git config user.email "$email"
    git config user.name "$username"
    echo "✅ Git 配置完成"
else
    echo "✅ Git 已配置"
fi

echo ""
echo "步骤 3: 准备上传"
echo "=================="
echo ""
echo "请先在浏览器中完成："
echo ""
echo "1. 访问: https://github.com/new"
echo "2. Repository name: $repo_name"
echo "3. 选择 Public"
echo "4. 点击 Create repository"
echo ""
echo "完成后，按回车继续..."
read

echo ""
echo "步骤 4: 连接并上传"
echo "=================="

# 添加远程仓库
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$username/$repo_name.git"

# 尝试推送
echo "正在上传文件..."
if git push -u origin master 2>/dev/null || git push -u origin main 2>/dev/null; then
    echo ""
    echo "✅ 上传成功！"
    echo ""
    echo "步骤 5: 启用 GitHub Pages"
    echo "========================="
    echo ""
    echo "1. 访问: https://github.com/$username/$repo_name/settings/pages"
    echo "2. Source 选择 'Deploy from a branch'"
    echo "3. Branch 选择 master 或 main"
    echo "4. 点击 Save"
    echo ""
    echo "等待 2 分钟后，你的网站将在以下地址上线："
    echo ""
    echo "🌐 主页: https://$username.github.io/$repo_name/"
    echo "🎋 运势签: https://$username.github.io/$repo_name/fortune/"
    echo ""
else
    echo ""
    echo "⚠️ 自动上传失败"
    echo ""
    echo "请使用网页手动上传："
    echo "1. 访问: https://github.com/$username/$repo_name/upload"
    echo "2. 选择此文件夹的所有文件上传"
    echo ""
fi

read -p "按回车退出..."
