import { execCommand } from "../utils/exec.js";

export default function open() {
  execCommand("code .");
}
