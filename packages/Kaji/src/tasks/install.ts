import { execCommand } from "../utils/exec.js";

export default function install() {
  const hasYarn = !!process.env.npm_config_user_agent?.includes("yarn");
  execCommand(hasYarn ? "yarn install" : "npm install");
}
