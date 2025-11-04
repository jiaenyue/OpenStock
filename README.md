<div align="center">
  欢迎查看我们其他优秀的项目，<a href="github.com/open-dev-society/openreadme" target="_blank">OpenReadme </a> 已经上线！
</div>  
<div align="center">
  <br />
  <a href="#" target="_blank">
    <img src="./public/assets/images/dashboard.png" alt="项目横幅" />
  </a>
  © Open Dev Society. 本项目采用 AGPL-3.0 许可证；如果您修改、重新分发或部署（包括作为网络服务），您必须在相同的许可证下发布您的源代码，并注明原作者。
  <br />
  <br/>

  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logoColor=white&logo=next.js&color=000000" alt="Next.js badge" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6"/>
    <img src="https://img.shields.io/badge/-Tailwind%20CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=38B2AC"/>
    <img src="https://img.shields.io/badge/-shadcn/ui-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=000000"/>
    <img src="https://img.shields.io/badge/-Radix%20UI-black?style=for-the-badge&logoColor=white&logo=radixui&color=000000"/>
    <img src="https://img.shields.io/badge/-Better%20Auth-black?style=for-the-badge&logoColor=white&logo=betterauth&color=000000"/>
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=00A35C"/>
    <img src="https://img.shields.io/badge/-Inngest-black?style=for-the-badge&logoColor=white&logo=inngest&color=000000"/>
    <img src="https://img.shields.io/badge/-Nodemailer-black?style=for-the-badge&logoColor=white&logo=gmail&color=EA4335"/>
    <img src="https://img.shields.io/badge/-TradingView-black?style=for-the-badge&logoColor=white&logo=tradingview&color=2962FF"/>
    <img src="https://img.shields.io/badge/-Finnhub-black?style=for-the-badge&logoColor=white&color=30B27A"/>
    <img src="https://img.shields.io/badge/-CodeRabbit-black?style=for-the-badge&logoColor=white&logo=coderabbit&color=9146FF"/>
  </div>
</div>

# OpenStock

OpenStock 是一个开源项目，旨在替代昂贵的股票市场平台。您可以实时跟踪价格、设置个性化警报，并探索详细的公司分析——这是一个为所有人构建的、永久免费的开放平台。

**注意**：OpenStock 是由社区构建的，并非经纪公司。市场数据可能根据提供商规则和您的配置存在延迟。本文中的任何内容均不构成财务建议。

## 📋 目录

1. ✨ [简介](#简介)
2. 🌍 [开放开发者社区宣言](#开放开发者社区宣言)
3. ⚙️ [技术栈](#技术栈)
4. 🔋 [功能特性](#功能特性)
5. 🤸 [快速入门](#快速入门)
6. 🐳 [Docker 设置](#docker-设置)
7. 🔐 [环境变量](#环境变量)
8. 🧱 [项目结构](#项目结构)
9. 📡 [数据与集成](#数据与集成)
10. 🧪 [脚本与工具](#脚本与工具)
11. 🤝 [如何贡献](#如何贡献)
12. 🛡️ [安全性](#安全性)
13. 📜 [许可证](#许可证)
14. 🙏 [致谢](#致谢)

## ✨ 简介

OpenStock 是一个现代化的股票市场应用，基于 Next.js (App Router)、shadcn/ui 和 Tailwind CSS 构建。它使用 Better Auth 进行身份验证，MongoDB 进行数据持久化，Finnhub 提供市场数据，并集成 TradingView 小部件来展示图表和市场视图。

## 🌍 开放开发者社区宣言

我们生活在一个知识被付费墙隐藏的世界。工具被订阅锁定，信息被偏见扭曲，新手被告知他们“不够好”去创造。

我们相信有更好的方式。

- **我们的信念**：技术应属于每个人。知识应该是开放、免费和易于获取的。社区应该以信任欢迎新人，而不是设置障碍。
- **我们的使命**：构建真正有意义的免费开源项目：
    - 专业人士和学生可以无障碍使用的工具。
    - 知识可以永久免费学习的平台。
    - 每个初学者都能得到指导而不是评判的社区。
    - 依靠信任而非利润运行的资源。
- **我们的承诺**：我们绝不将知识锁定。我们绝不为访问收费。我们绝不为金钱牺牲信任。我们以透明、捐赠和社区的力量为基础。
- **我们的号召**：如果你曾感到格格不入，难以找到免费资源，或者想创造一些有意义的东西——这里就是你的归属。

因为未来属于那些开放创造的人。

## ⚙️ 技术栈

**核心**
- Next.js 15 (App Router), React 19
- TypeScript
- Tailwind CSS v4 (通过 @tailwindcss/postcss)
- shadcn/ui + Radix UI primitives
- Lucide icons

**认证与数据**
- Better Auth (邮箱/密码) 及 MongoDB 适配器
- MongoDB + Mongoose
- Finnhub API (用于股票代码、公司简介和市场新闻)
- TradingView (可嵌入的小部件)

**自动化与通信**
- Inngest (事件驱动、定时任务、通过 Gemini 的 AI 推理)
- Nodemailer (Gmail transport)
- next-themes, cmdk (命令面板), react-hook-form

**语言构成**
- TypeScript (~93.4%), CSS (~6%), JavaScript (~0.6%)

## 🔋 功能特性

- **身份验证**
    - 使用 Better Auth 和 MongoDB 适配器的邮箱/密码认证
    - 通过 Next.js 中间件强制执行的受保护路由
- **全局搜索和 Command + K 面板**
    - 基于 Finnhub 的快速股票搜索
    - 空闲时显示热门股票；带有去抖动的查询
- **关注列表**
    - 每个用户的关注列表存储在 MongoDB 中 (每个用户对应唯一的股票代码)
- **股票详情**
    - TradingView 符号信息、K线图/高级图表、基线图、技术分析
    - 公司简介和财务状况小部件
- **市场概览**
    - 热图、行情和头条新闻 (TradingView 小部件)
- **个性化引导**
    - 收集国家、投资目标、风险承受能力和偏好行业
- **邮件与自动化**
    - AI 个性化欢迎邮件 (通过 Inngest 使用 Gemini)
    - 根据用户关注列表个性化的每日新闻摘要邮件 (定时任务)
- **精致的 UI**
    - shadcn/ui 组件、Radix primitives、Tailwind v4 设计令牌
    - 默认暗色主题
- **键盘快捷键**
    - `Cmd/Ctrl + K` 快速操作/搜索

## 🤸 快速入门

**先决条件**
- Node.js 20+ 和 pnpm 或 npm
- MongoDB 连接字符串 (MongoDB Atlas 或通过 Docker Compose 的本地实例)
- Finnhub API 密钥 (支持免费版；实时数据可能需要付费)
- 用于发送邮件的 Gmail 帐户 (或更新 Nodemailer transport)
- (可选) Google Gemini API 密钥 (用于 AI 生成的欢迎介绍)

**克隆并安装**
```bash
git clone https://github.com/Open-Dev-Society/OpenStock.git
cd OpenStock

# 选择一种方式:
pnpm install
# 或
npm install
```

**配置环境**
- 创建一个 `.env` 文件 (参见 [环境变量](#环境变量))。
- 验证数据库连接:
```bash
pnpm test:db
# 或
npm run test:db
```

**运行开发环境**
```bash
# Next.js 开发 (Turbopack)
pnpm dev
# 或
npm run dev
```

**本地运行 Inngest (工作流, 定时任务, AI)**
```bash
npx inngest-cli@latest dev
```

**构建并启动 (生产环境)**
```bash
pnpm build && pnpm start
# 或
npm run build && npm start
```

在浏览器中打开 http://localhost:3000 查看应用。

## 🐳 Docker 设置

您可以使用 Docker Compose 轻松运行 OpenStock 和 MongoDB。

1) 确保已安装 Docker 和 Docker Compose。

2) `docker-compose.yml` 包含两个服务:
- `openstock` (本应用)
- `mongodb` (带有持久化卷的 MongoDB 数据库)

3) 创建您的 `.env` 文件 (参见下面的示例)。对于 Docker 设置，请使用如下本地连接字符串:
```env
MONGODB_URI=mongodb://root:example@mongodb:27017/openstock?authSource=admin
```

4) 启动服务栈:
```bash
# 在仓库根目录
docker compose up -d mongodb && docker compose up -d --build
```

5) 访问应用:
- 应用: http://localhost:3000
- MongoDB 在 Docker 网络内部的主机 `mongodb:27017` 上可用。

**注意**
- `openstock` 服务依赖于 `mongodb` 服务。
- 凭据在 Compose 文件中为 MongoDB root 用户定义；连接字符串需要 `authSource=admin`。
- 数据通过 Docker 卷在重启后持久化。

## 🔐 环境变量

在项目根目录创建一个 `.env` 文件。选择一个托管的 MongoDB (Atlas) URI 或本地 Docker URI。

**托管 (MongoDB Atlas):**
```env
# 核心
NODE_ENV=development

# 数据库 (Atlas)
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority

# Better Auth
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# Finnhub
FINNHUB_API_KEY=your_finnhub_key
# 如果客户端代码需要，可选的客户端暴露版本:
NEXT_PUBLIC_FINNHUB_API_KEY=
FINNHUB_BASE_URL=https://finnhub.io/api/v1

# Inngest AI (Gemini)
GEMINI_API_KEY=your_gemini_api_key

# 邮件 (通过 Gmail 的 Nodemailer; 如果有 2FA，请考虑使用应用密码)
NODEMAILER_EMAIL=youraddress@gmail.com
NODEMAILER_PASSWORD=your_gmail_app_password
```

**本地 (Docker Compose) MongoDB:**
```env
# 核心
NODE_ENV=development

# 数据库 (Docker)
MONGODB_URI=mongodb://root:example@mongodb:27017/openstock?authSource=admin

# ... 其他变量与上面相同 ...
```

## 🧱 项目结构

```
app/                  # Next.js App Router 页面和路由
  (auth)/             # 认证相关页面 (登录, 注册)
  (root)/             # 应用核心页面 (主页, 股票详情等)
  api/inngest/        # Inngest 事件处理路由
components/           # 可重用的 React 组件
  ui/                 # shadcn/ui 基础组件
  forms/              # 表单相关组件
database/             # 数据库相关配置
  models/             # Mongoose 模型定义
  mongoose.ts         # MongoDB 连接逻辑
hooks/                # 自定义 React Hooks
lib/                  # 辅助函数、服务和配置
  actions/            # Next.js Server Actions
  better-auth/        # 认证配置
  inngest/            # Inngest 客户端、函数和提示
  nodemailer/         # 邮件发送逻辑和模板
middleware/           # Next.js 中间件
scripts/              # 辅助脚本 (例如，测试数据库连接)
types/                # 全局 TypeScript 类型定义
public/               # 静态资源
# ... 其他配置文件 ...
```

## 📡 数据与集成

- **Finnhub**: 用于股票搜索、公司简介和市场新闻。
- **TradingView**: 用于图表、热图、行情和时间线的可嵌入小部件。
- **Better Auth + MongoDB**: 用于邮箱/密码认证和会话管理。
- **Inngest**: 用于处理后台任务，如发送个性化邮件和每日新闻摘要。
- **Nodemailer**: 用于通过 Gmail 发送电子邮件。

## 🧪 脚本与工具

- **`dev`**: 启动 Next.js 开发服务器。
- **`build`**: 构建生产版本。
- **`start`**: 运行生产服务器。
- **`lint`**: 运行 ESLint 代码检查。
- **`test:db`**: 验证数据库连接。

## 🤝 如何贡献

我们欢迎所有人的贡献，无论您是学生、自学成才的开发者还是经验丰富的工程师。

- **开启 Issue**: 讨论想法和 Bug。
- **寻找任务**: 查找标记为 “good first issue” 或 “help wanted” 的 Issue。
- **保持专注**: 确保您的 Pull Request 集中于一个特定任务。
- **友善待人**: 指导新手，不设障碍——这是 ODS 的方式。

## 🛡️ 安全性

如果您发现漏洞，请不要公开创建 Issue。请发送邮件至 `opendevsociety@cc.cc`。

## 📜 许可证

本项目采用 **AGPL-3.0** 许可证。详情请见 `LICENSE` 文件。

## 🙏 致谢

- [Adrian Hajdin (JavaScript Mastery)](https://github.com/adrianhajdin) — 他出色的股票市场应用教程是为开源社区构建 OpenStock 的重要参考。
- 以及所有为开源工具做出贡献的人们。
