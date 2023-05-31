const menuRouters = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/pages/home/home.vue"),
    meta: {
      title: "博客主页"
    }
  },
  {
    path: "/allArticles",
    name: "allArticles",
    component: () => import("@/pages/allArticles/allArticles.vue"),
    meta: {
      title: "所有文章"
    }
  },
  {
    path: "/tag",
    name: "allATagrticles",
    component: () => import("@/pages/tag/tag.vue"),
    meta: {
      title: "标签"
    }
  },
  {
    path: "/technology",
    name: "technology",
    component: () => import("@/pages/technology/technology.vue"),
    meta: {
      title: "技术支持"
    }
  },
  {
    path: "/aboutMe",
    name: "aboutMe",
    component: () => import("@/pages/aboutMe/aboutMe.vue"),
    meta: {
      title: "关于我"
    }
  },
  {
    path: "/writeArticle",
    name: "writeArticle",
    component: () => import("@/pages/writeArticle/writeArticle.vue"),
    meta: {
      title: "写文章"
    }
  },
  {
    path: "/content",
    name: "content",
    component: () => import("@/pages/content/content.vue"),
    meta: {
      title: "博客内容"
    }
  },
]
export default menuRouters