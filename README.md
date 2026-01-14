# Sherlock Assistant: 下一代教育与生产力生态系统

Sherlock Assistant 是一款基于 React Native 构建的智能代理型（Agentic）应用，旨在通过深度整合 AI 交互、时间管理、教育辅助和时序记忆系统，为用户提供具备上下文连续性的智能化体验。

## 🌟 核心支柱

### 1. 无压力异步 AI 交流引擎
- **秒级反馈**：利用 React 19 的 `useOptimistic` 钩子消除交互延迟感。
- **智能聚合**：3秒防抖聚合算法，允许用户连续发送碎片的思维片段，由 AI 整合处理。
- **离线支持**：内置消息队列，确保在网络不稳定时依然能记录灵感。

### 2. 视觉化时间流管理 (Timeline)
- **动感交互**：使用 React Native Skia 打造平滑的扫描效交互。
- **任务分类**：区分 **Rigid** (刚性) 和 **Flexible** (弹性) 任务，为 AI 自动调配提供数据支持。

### 3. 游戏化逻辑互动学习
- **语义学习**：支持 LaTeX 公式渲染 (KaTeX)。
- **互动题型**：Parsons Problems (逻辑块排序) 与 完形填空，减少移动端输入成本。
- **苏格拉底教学**：AI 会通过提问引导而非直接给出答案，促进深度思考。

### 4. Sherlock 时序记忆图谱
- **记忆演进**：集成 Zep Cloud，自动提取对话中的实体与时序关系。
- **上下文连续性**：能够理解事实随时间的变化（如：从“喜欢咖啡”到“现在戒了”）。

### 5. 生物识别语音安全
- **端侧加密**：集成 Picovoice Eagle，实现毫秒级离线声纹解锁。
- **角色分离**：Deepgram Nova-2 说话人分离技术，精准记录多方会议纪要。

## 🛠 技术栈

- **前端**: React Native (Expo SDK 54), Expo Router, React 19
- **通讯**: Stream Chat SDK
- **数据库/网关**: Supabase (PostgreSQL, Auth, Edge Functions)
- **长效记忆**: Zep Cloud
- **语音引擎**: Deepgram Nova-2, Picovoice Eagle

## 🚀 快速开始

1. **环境克隆**
   ```bash
   git clone <repo-url>
   cd OpenGPT-App
   ```

2. **依赖安装**
   ```bash
   npm install
   ```

3. **配置环境变量**
   创建 `.env` 文件并参考 `.env.example` 填入 API Keys：
   - `EXPO_PUBLIC_SUPABASE_URL`
   - `EXPO_PUBLIC_STREAM_API_KEY`
   - `EXPO_PUBLIC_ZEP_API_KEY`
   - `EXPO_PUBLIC_DEEPGRAM_API_KEY`

4. **启动应用**
   ```bash
   npx expo start
   ```

## 📜 许可证

MIT License
