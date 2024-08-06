import type { Config } from "@userway/cicd-core";

export default {
  organization: "1-wjwzn",
  project: "cicd-action-sample",
  token: process.env.USERWAY_TOKEN,
  reportPaths: ["./uw-a11y-reports"],
  server: 'https://api.qa.userway.org',
} satisfies Config;
//asd