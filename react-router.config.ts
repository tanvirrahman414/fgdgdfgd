import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "./src/app",
  ssr: true,             // <--- Turn this back to TRUE
  prerender: ["/"],      // <--- This will now work and create index.html
} satisfies Config;