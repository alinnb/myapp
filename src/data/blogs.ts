interface Blog {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const blogs: Blog[] = [
  {
    userId: 1,
    id: 1,
    title: "React 18新特性解析",
    body: "React 18带来了许多激动人心的新特性，包括自动批处理、并发渲染和Suspense服务端组件支持。这些更新不仅提升了应用性能，还简化了开发流程。特别是并发渲染功能，让我们能够更好地处理大规模数据更新和复杂UI交互。"
  },
  {
    userId: 1,
    id: 2,
    title: "TypeScript高级类型指南",
    body: "TypeScript的类型系统非常强大，本文将深入探讨条件类型、映射类型和工具类型的使用。通过实际案例，讲解如何利用这些高级特性来提升代码的类型安全性和开发效率。同时也会介绍一些常见的类型编程技巧。"
  },
  {
    userId: 1,
    id: 3,
    title: "Next.js 13性能优化实践",
    body: "Next.js 13引入了革命性的App Router和服务器组件，本文将分享一些实际项目中的性能优化技巧。包括如何正确使用服务器组件、优化图片加载、实现增量静态再生成(ISR)，以及如何利用新的缓存机制提升应用响应速度。"
  },
  {
    userId: 2,
    id: 4,
    title: "现代CSS布局技巧",
    body: "CSS Grid和Flexbox已经成为现代网页布局的标配，本文将介绍一些高级布局技巧。包括如何创建响应式网格系统、实现复杂的卡片布局、使用CSS容器查询，以及一些实用的CSS变量使用技巧。这些技巧将帮助你创建更灵活和维护性更好的布局。"
  }
];