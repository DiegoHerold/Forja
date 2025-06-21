import { execCommand } from "../utils/exec.js";

export default function build() {
  execCommand("npm run build");
}
