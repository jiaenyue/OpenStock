<div align="center">
  查看新的惊人项目，<a href="github.com/open-dev-society/openreadme" target="_blank">OpenReadme </a> 已上线
</div>  
<div align="center">
  <br />
  <a href="#" target="_blank">
    <img src="./public/assets/images/dashboard.png" alt="项目横幅" />
  </a>
  © Open Dev Society. 本项目采用 AGPL-3.0 许可证；如果您修改、重新分发或部署（包括作为 Web 服务），您必须在相同许可证下发布您的源代码，并注明原作者。
  <br />
  <br/>

  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logoColor=white&logo=next.js&color=000000" alt="Next.js 徽章" />
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

OpenStock 是一个开源的替代昂贵市场平台的选择。跟踪实时价格、设置个性化警报、探索详细的公司见解——开放构建，为每个人，永远免费。

注意：OpenStock 是社区构建的，不是经纪公司。市场数据可能会根据提供商规则和您的配置而延迟。这里没有任何财务建议。

## 📋 目录

1. ✨ [简介](#简介)
2. 🌍 [Open Dev Society 宣言](#宣言)
3. ⚙️ [技术栈](#技术栈)
4. 🔋 [功能](#功能)
5. 🤸 [快速入门](#快速入门)
6. 🐳 [Docker 设置](#docker-设置)
7. 🔐 [环境变量](#环境变量)
8. 🧱 [项目结构](#项目结构)
9. 📡 [数据与集成](#数据与集成)
10. 🧪 [脚本与工具](#脚本与工具)
11. 🤝 [贡献](#贡献)
12. 🛡️ [安全](#安全)
13. 📜 [许可证](#许可证)
14. 🙏 [致谢](#致谢)

## ✨ 简介

OpenStock 是一款现代化的股票市场应用程序，由 Next.js（App Router）、shadcn/ui 和 Tailwind CSS、用于身份验证的 Better Auth、用于持久化的 MongoDB、用于市场数据的 Finnhub 以及用于图表和市场视图的 TradingView 小部件提供支持。

## 🌍 Open Dev Society 宣言 <a name="manifesto"></a>

我们生活在一个知识被隐藏在付费墙后的世界。工具被锁定在订阅中。信息被偏见扭曲。新手被告知他们不够“优秀”去构建。

我们相信有更好的方式。

- 我们的信念：技术应该属于每个人。知识应该是开放、免费和可访问的。社区应该以信任欢迎新手，而不是设置障碍。
- 我们的使命：构建免费、开源的项目，产生真正的影响：
    - 专业人士和学生可以无障碍使用的工具。
    - 知识平台，学习永远免费。
    - 社区，每个初学者都能得到指导，而不是评判。
    - 资源，以信任而非利润为动力。
- 我们的承诺：我们绝不锁定知识。我们绝不收取访问费用。我们绝不以信任换取金钱。我们以透明、捐赠和社区的力量为基础。
- 我们的呼吁：如果您曾感到自己不属于这里，努力寻找免费资源，或想构建有意义的东西——这里就是您的归属。

因为未来属于那些开放构建的人。

## ⚙️ 技术栈

核心
- Next.js 15 (App Router), React 19
- TypeScript
- Tailwind CSS v4 (通过 @tailwindcss/postcss)
- shadcn/ui + Radix UI 原语
- Lucide 图标

认证与数据
- Better Auth (电子邮件/密码) 与 MongoDB 适配器
- MongoDB + Mongoose
- 用于符号、配置文件和市场新闻的 Finnhub API
- 用于图表和市场视图的 TradingView 可嵌入小部件

自动化与通信
- Inngest (事件、cron、通过 Gemini 进行的 AI 推理)
- Nodemailer (Gmail 传输)
- next-themes, cmdk (命令面板), react-hook-form

语言构成
- TypeScript (~93.4%), CSS (~6%), JavaScript (~0.6%)

## 🔋 功能

- 认证
    - 电子邮件/密码认证，使用 Better Auth + MongoDB 适配器
    - 通过 Next.js 中间件强制执行受保护的路由
- 全局搜索和 Command + K 面板
    - 由 Finnhub 支持的快速股票搜索
    - 空闲时显示热门股票；去抖动查询
- 关注列表
    - 每个用户的关注列表存储在 MongoDB 中 (每个用户唯一符号)
- 股票详情
    - TradingView 符号信息、烛台/高级图表、基线、技术分析
    - 公司简介和财务小部件
- 市场概览
    - 热图、报价和头条新闻 (TradingView 小部件)
- 个性化引导
    - 收集国家、投资目标、风险承受能力、偏好行业
- 电子邮件与自动化
    - AI 个性化欢迎邮件 (通过 Inngest 使用 Gemini)
    - 每日新闻摘要邮件 (cron) 根据用户关注列表进行个性化
- 精致的 UI
    - shadcn/ui 组件、Radix 原语、Tailwind v4 设计令牌
    - 默认暗色主题
- 键盘快捷键
    - Cmd/Ctrl + K 用于快速操作/搜索

## 🤸 快速入门

先决条件
- Node.js 20+ 和 pnpm 或 npm
- MongoDB 连接字符串 (MongoDB Atlas 或通过 Docker Compose 的本地 MongoDB)
- Finnhub API 密钥 (支持免费版；实时数据可能需要付费)
- 用于电子邮件的 Gmail 帐户 (或更新 Nodemailer 传输)
- 可选：Google Gemini API 密钥 (用于 AI 生成的欢迎介绍)

克隆和安装
```bash
git clone https://github.com/Open-Dev-Society/OpenStock.git
cd OpenStock

# 选择一个:
pnpm install
# 或
npm install
```

配置环境
- 创建一个 `.env` 文件 (参见 [环境变量](#环境变量))。
- 验证数据库连接：
```bash
pnpm test:db
# 或
npm run test:db
```

运行开发
```bash
# Next.js 开发 (Turbopack)
pnpm dev
# 或
npm run dev
```

本地运行 Inngest (工作流、cron、AI)
```bash
npx inngest-cli@latest dev
```

构建并启动 (生产)
```bash
pnpm build && pnpm start
# 或
npm run build && npm start
```

打开 http://localhost:3000 查看应用程序。

## 🐳 Docker 设置

您可以使用 Docker Compose 轻松运行 OpenStock 和 MongoDB。

1) 确保已安装 Docker 和 Docker Compose。

2) docker-compose.yml 包括两个服务：
- openstock (此应用程序)
- mongodb (带有持久卷的 MongoDB 数据库)

3) 创建您的 `.env` (参见下面的示例)。对于 Docker 设置，请使用如下本地连接字符串：
```env
MONGODB_URI=mongodb://root:example@mongodb:27017/openstock?authSource=admin
```

4) 启动堆栈：
```bash
# 从仓库根目录
docker compose up -d mongodb && docker compose up -d --build
```

5) 访问应用程序：
- 应用程序：http://localhost:3000
- MongoDB 在 Docker 网络内部的主机 mongodb:27017 上可用

注意
- 应用程序服务 `depends_on` mongodb 服务。
- 凭据在 Compose 中为 MongoDB 根用户定义；连接字符串上的 `authSource=admin` 是根用户所必需的。
- 数据通过 docker 卷在重新启动后保持持久。

可选：本项目中使用的示例 MongoDB 服务定义：
```yaml
services:
  mongodb:
    image: mongo:7
    container_name: mongodb
    restart: unless-stopped
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
    healthcheck:
      test: ["CMD", "mongosh", "--eval", "db.adminCommand('ping')"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  mongo-data:
```

## 🔐 环境变量

在项目根目录创建 `.env` 文件。选择托管的 MongoDB (Atlas) URI 或本地 Docker URI。

托管 (MongoDB Atlas)：
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
# 可选的客户端暴露变体，如果客户端代码需要：
NEXT_PUBLIC_FINNHUB_API_KEY=
FINNHUB_BASE_URL=https://finnhub.io/api/v1

# Inngest AI (Gemini)
GEMINI_API_KEY=your_gemini_api_key

# 电子邮件 (通过 Gmail 的 Nodemailer；如果使用 2FA，请考虑应用程序密码)
NODEMAILER_EMAIL=youraddress@gmail.com
NODEMAILER_PASSWORD=your_gmail_app_password
```

本地 (Docker Compose) MongoDB：
```env
# 核心
NODE_ENV=development

# 数据库 (Docker)
MONGODB_URI=mongodb://root:example@mongodb:27017/openstock?authSource=admin

# Better Auth
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# Finnhub
FINNHUB_API_KEY=your_finnhub_key
NEXT_PUBLIC_FINNHUB_API_KEY=
FINNHUB_BASE_URL=https://finnhub.io/api/v1

# Inngest AI (Gemini)
GEMINI_API_KEY=your_gemini_api_key

# 电子邮件 (通过 Gmail 的 Nodemailer；如果使用 2FA，请考虑应用程序密码)
NODEMAILER_EMAIL=youraddress@gmail.com
NODEMAILER_PASSWORD=your_gmail_app_password
```

注意
- 尽可能将私钥保留在服务器端。
- 如果使用 `NEXT_PUBLIC_` 变量，请记住它们会暴露给浏览器。
- 在生产中，首选专用的 SMTP 提供商，而不是个人 Gmail。
- 不要在 Dockerfile 中硬编码机密；使用 `.env` 和 Compose。

## 🧱 项目结构

```
app/
  (auth)/
    layout.tsx
    sign-in/page.tsx
    sign-up/page.tsx
  (root)/
    layout.tsx
    page.tsx
    help/page.tsx
    stocks/[symbol]/page.tsx
  api/inngest/route.ts
  globals.css
  layout.tsx
components/
  ui/…          # shadcn/radix 原语 (button, dialog, command, input, 等)
  forms/…       # InputField, SelectField, CountrySelectField, FooterLink
  Header.tsx, Footer.tsx, SearchCommand.tsx, WatchlistButton.tsx, …
database/
  models/watchlist.model.ts
  mongoose.ts
lib/
  actions/…     # 服务器操作 (auth, finnhub, user, watchlist)
  better-auth/…
  inngest/…     # 客户端、函数、提示
  nodemailer/…  # 传输器、电子邮件模板
  constants.ts, utils.ts
scripts/
  test-db.mjs
types/
  global.d.ts
next.config.ts          # i.ibb.co 图像域允许列表
postcss.config.mjs      # Tailwind v4 postcss 设置
components.json         # shadcn 配置
public/assets/images/   # 徽标和屏幕截图
```

## 📡 数据与集成

- Finnhub
    - 股票搜索、公司简介和市场新闻。
    - 设置 `FINNHUB_API_KEY` 和 `FINNHUB_BASE_URL` (默认：https://finnhub.io/api/v1)。
    - 免费版可能返回延迟报价；请遵守费率限制和条款。

- TradingView
    - 用于图表、热图、报价和时间轴的可嵌入小部件。
    - 来自 `i.ibb.co` 的外部图像在 `next.config.ts` 中被列入白名单。

- Better Auth + MongoDB
    - 电子邮件/密码与 MongoDB 适配器。
    - 通过中间件进行会话验证；大多数路由受保护，公共例外包括 `sign-in`、`sign-up`、资产和 Next 内部。

- Inngest
    - 工作流：
        - `app/user.created` → AI 个性化欢迎邮件
        - Cron `0 12 * * *` → 每个用户的每日新闻摘要
    - 本地开发：`npx inngest-cli@latest dev`。

- 电子邮件 (Nodemailer)
    - Gmail 传输。更新凭据或切换到您的 SMTP 提供商。
    - 欢迎和新闻摘要电子邮件的模板。

## 🧪 脚本与工具

包脚本
- `dev`: Next.js 开发服务器 (使用 Turbopack)
- `build`: 生产构建 (使用 Turbopack)
- `start`: 运行生产服务器
- `lint`: ESLint
- `test:db`: 验证数据库连接

开发者体验
- TypeScript 严格模式
- Tailwind CSS v4 (无需单独的 tailwind.config)
- shadcn/ui 组件与 Radix 原语
- cmdk 命令面板, next-themes, lucide-react 图标

## 🤝 贡献

您属于这里。无论您是学生、自学成才的开发者还是经验丰富的工程师——我们都欢迎您的贡献。

- 开启一个 issue 来讨论想法和错误
- 寻找“good first issue”或“help wanted”
- 保持 PR 专注；为 UI 更改添加屏幕截图
- 友善待人，引导初学者，不设障碍——这就是 ODS 的方式

## 🛡️ 安全

如果您发现漏洞：
- 不要开启公共 issue
- 电子邮件：opendevsociety@cc.cc
- 我们将协调负责任的披露并迅速修补

## 📜 许可证

OpenStock 将永远为每个人免费和开放。本项目采用 AGPL-3.0 许可证 - 详情请参见 LICENSE 文件。

## 🙏 致谢

- Finnhub 提供可访问的市场数据
- TradingView 提供可嵌入的市场小部件
- shadcn/ui, Radix UI, Tailwind CSS, Next.js 社区
- Inngest 提供可靠的后台作业和工作流
- Better Auth 提供简单安全的身份验证
- 所有使开放工具成为可能的贡献者

— 开放构建，为每个人，永远免费。Open Dev Society。

> © Open Dev Society. 本项目采用 AGPL-3.0 许可证；如果您修改、重新分发或部署（包括作为 Web 服务），您必须在相同许可证下发布您的源代码，并注明原作者。

## 我们的荣誉贡献者
- [ravixalgorithm](https://github.com/ravixalgorithm) - 从头开始开发了整个应用程序，包括身份验证、UI 设计、API 和 AI 集成以及部署。
- [Priyanshuu00007](https://github.com/Priyanshuu00007) - 创建了 OpenStock 的官方徽标，并为项目的视觉识别做出了贡献。
- [chinnsenn](https://github.com/chinnsenn) - 为仓库设置了 Docker 配置，确保了顺利的开发和部署过程。
- [koevoet1221](https://github.com/koevoet1221) - 解决了 MongoDB Docker 构建问题，提高了项目的整体稳定性和可靠性。

## 特别感谢
非常感谢 [Adrian Hajdin (JavaScript Mastery)](https://github.com/adrianhajdin) — 他出色的股票市场应用教程对于在 Open Dev Society 下为开源社区构建 OpenStock 起到了至关重要的作用。

GitHub: [adrianhajdin](https://github.com/adrianhajdin)
YouTube 教程: [股票市场应用教程](https://www.youtube.com/watch?v=gu4pafNCXng)
YouTube 频道: [JavaScript Mastery](https://www.youtube.com/@javascriptmastery)
