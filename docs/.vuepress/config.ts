import { defaultTheme, defineUserConfig } from "vuepress";
import demoBlock from "./plugins/demo-block";
import { viteBundler } from "@vuepress/bundler-vite";
// import vueJsx from "@vitejs/plugin-vue-jsx";
import { searchPlugin } from "@vuepress/plugin-search";
// import DefineOptions from "unplugin-vue-define-options/vite";
import * as path from "path";


export default defineUserConfig({
  // 站点配置
  lang: "zh-CN",
  title: "xxx",
  description: "vue3 UI lib",
  alias: {
    "@packages": path.resolve(__dirname, "../../packages"),
    "@lang": path.resolve(__dirname, "../../packages/locale/src")
  },
  plugins: [
    demoBlock({
      componentsDir: path.resolve(__dirname, "./../examples")
    }),
    searchPlugin()
  ],
  markdown: {
    toc: {}
  },
  bundler: viteBundler({
    // viteOptions: { plugins: [vueJsx(), DefineOptions()] },
    vuePluginOptions: {}
  }),
  theme: defaultTheme({
    editLink: false,
    navbar: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/introduce" },
      { text: "组件", link: "/components/basic/button" }
    ],
    sidebarDepth: 0,
    sidebar: {

    }
  })
});
