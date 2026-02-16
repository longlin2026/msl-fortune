#!/bin/bash
# MSL 运势签一键部署脚本

echo "🐎 MSL千里马运势签 - 部署工具"
echo "================================"
echo ""

# 检查是否有 Git
if ! command -v git &> /dev/null; then
    echo "❌ 请先安装 Git: https://git-scm.com/download"
    exit 1
fi

# 询问 GitHub 用户名
echo "步骤 1/4: 输入你的 GitHub 用户名:"
read -r username

if [ -z "$username" ]; then
    echo "❌ 用户名不能为空"
    exit 1
fi

repo_name="msl-fortune"

# 检查是否已配置 git
if ! git config user.email &> /dev/null; then
    echo ""
    echo "步骤 2/4: 配置 Git（只需一次）"
    echo "输入你的邮箱:"
    read -r email
    git config user.email "$email"
    git config user.name "$username"
fi

# 创建 GitHub 仓库
echo ""
echo "步骤 3/4: 创建 GitHub 仓库..."
echo "请在浏览器中完成以下操作："
echo "1. 访问: https://github.com/new"
echo "2. Repository name: $repo_name"
echo "3. 选择 Public"
echo "4. 点击 Create repository"
echo ""
echo "完成后按回车继续..."
read -r

# 推送到 GitHub
echo ""
echo "步骤 4/4: 推送到 GitHub..."

# 添加远程仓库
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$username/$repo_name.git"

# 推送
git branch -M main 2>/dev/null || git branch -M master

if git push -u origin main 2>/dev/null || git push -u origin master; then
    echo ""
    echo "✅ 推送成功！"
    echo ""
    echo "现在启用 GitHub Pages:"
    echo "1. 访问: https://github.com/$username/$repo_name/settings/pages"
    echo "2. Source 选择 Deploy from a branch"
    echo "3. Branch 选择 main 或 master"
    echo "4. 点击 Save"
    echo ""
    echo "等待1-2分钟后，你的网站将上线："
    echo "🌐 https://$username.github.io/$repo_name/fortune/"
else
    echo ""
    echo "❌ 推送失败"
    echo "请尝试手动上传："
    echo "1. 访问: https://github.com/$username/$repo_name/upload"
    echo "2. 将此文件夹的所有文件拖拽上传"
fi

echo ""
echo "按回车退出..."
read -r
