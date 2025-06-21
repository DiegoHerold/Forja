import { execCommand } from "../utils/exec.js";

export default function lint() {
  execCommand("npm run lint");
}
