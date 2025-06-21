import { execCommand } from "../utils/exec.js";

export default function format() {
  execCommand("npx prettier --write .");
}
