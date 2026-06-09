# File Translator 产品页

基于 Vue 3 + Vite 的产品展示网站，支持中英文国际化。当前内容以 **File Translator**（办公文档 AI 翻译工具）的版本演进为例。

---

## 快速开始

```bash
npm install
npm run dev      # 开发模式 → http://localhost:5173
npm run build    # 生产构建 → dist/
npm run preview  # 预览生产构建
```

---

## 项目结构

```
product-page/
├── index.html                         # 入口 HTML
├── package.json
├── vite.config.js
└── src/
    ├── main.js                        # Vue 应用入口
    ├── App.vue                        # 布局壳（导航 + 路由视图 + 页脚）
    ├── style.css                      # 全局 CSS 变量与基础样式
    │
    ├── i18n/                          # 国际化
    │   ├── index.js                   # vue-i18n 初始化
    │   └── locales/
    │       ├── en.json                # 英文文案
    │       └── zh.json                # 中文文案
    │
    ├── router/index.js                # 路由配置（首页 + 联系我们）
    │
    ├── views/                         # 页面视图
    │   ├── LandingPage.vue            # 产品落地页
    │   └── ContactPage.vue            # 联系我们页
    │
    ├── components/                    # 可复用组件
    │   ├── NavBar.vue                 # 导航栏（含语言切换）
    │   ├── HeroSection.vue            # 首屏 Hero
    │   ├── FeaturesGrid.vue           # 特性卡片网格
    │   ├── ProductShow.vue            # 产品展示（左右交错）
    │   ├── StatsBar.vue               # 数据亮点栏
    │   ├── CtaSection.vue             # 底部 CTA
    │   └── FooterBar.vue              # 页脚
    │
    ├── products/                      # 产品资源（数据驱动）
    │   ├── manifest.js                # 产品 ID 列表
    │   ├── descriptions/
    │   │   ├── en/                    # 英文产品描述
    │   │   └── zh/                    # 中文产品描述
    │   └── images/                    # 产品截图
    │
    └── assets/contact/                # 联系我们页面图片
```

---

## 如何替换产品内容

### 1. 修改产品列表

编辑 `src/products/manifest.js`：

```js
export const productIds = [
  'v1.0.0',
  'v1.0.2',
  'v1.1.0',
  'v1.4.0',
  'v1.6.0',
]
```

### 2. 编写产品描述

在 `descriptions/zh/` 和 `descriptions/en/` 下各创建一个同名的 `.md` 文件：

```
descriptions/
├── en/v1.0.0.md        # 英文版产品描述
└── zh/v1.0.0.md        # 中文版产品描述
```

Markdown 内容格式示例：

```markdown
## 产品标题

一段概述文字。

### 功能亮点

- 功能点 A
- 功能点 B
```

### 3. 上传产品图片

在 `images/` 下放入同名图片（支持 `.png` / `.jpg` / `.svg`）：

```
images/v1.0.0.png
```

### 4. 设置产品名称和标签

编辑 `src/i18n/locales/zh.json` 和 `en.json` 中的 `products.items`：

```json
{
  "products": {
    "items": [
      { "id": "v1.0.0", "name": "v1.0.0 — First Release", "tag": "Excel Translation" },
      { "id": "v1.0.2", "name": "v1.0.2 — Rapid Iteration", "tag": "Range Selection" }
    ]
  }
}
```

> 💡 只需修改 manifest.js 的 id、对应的 md 文件、图片、以及 i18n 中的 name/tag 即可完成全部替换。

---

## 如何修改页面文案

所有 UI 文案集中在 `src/i18n/locales/` 下：

| 文件 | 控制范围 |
|------|----------|
| `en.json` / `zh.json` → `hero` | Hero 区标题、副标题、按钮 |
| → `features.items` | 特性卡片内容 |
| → `stats.items` | 数据亮点栏 |
| → `cta` | 底部 CTA |
| → `contact` | 联系我们全部内容 |
| → `footer` | 页脚版权 |

---

## 页面结构

### 首页（/）

```
┌─ NavBar ────────────────────────┐
│  File Translator    EN | 中文   │
├─────────────────────────────────┤
│          Hero 区                │
├─────────────────────────────────┤
│       特性卡片 (3×2)            │
├─────────────────────────────────┤
│    产品版本展示 (左右交错)       │
├─────────────────────────────────┤
│        数据亮点                 │
├─────────────────────────────────┤
│        底部 CTA                 │
├─────────────────────────────────┤
│          页脚                   │
└─────────────────────────────────┘
```

### 联系我们（/contact）

```
┌─ NavBar ────────────────────────┐
├─────────────────────────────────┤
│     Get in Touch (Hero)         │
├─────────────────────────────────┤
│   📧 Email  │ 💬 Social  │ 📍   │
├──────────────┼───────────┼──────│
│  FAQ + 办公时间  │  联系表单    │
├──────────────────┴──────────────┤
│         团队卡片                 │
├─────────────────────────────────┤
│          页脚                   │
└─────────────────────────────────┘
```

---

## 国际化注意事项

- 语言代码为 `en` / `zh`（非 `en-US` / `zh-CN`）
- `descriptions/` 下的子目录名必须与语言代码一致
- 所有组件统一使用 `useI18n()` + `computed`，**不**在模板中直接使用 `$t()`

---

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue | 3.x | 前端框架 |
| Vite | 5.x | 构建工具 |
| vue-router | 4.x | 路由 |
| vue-i18n | 9.x | 国际化 |
| marked | latest | Markdown → HTML |
| CSS | 原生 | Grid + Flexbox，无 UI 库 |

---

## 部署

```bash
npm run build          # 输出到 dist/
```

将 `dist/` 目录部署到任意静态托管服务（Netlify、Vercel、CloudStudio 等）即可。
