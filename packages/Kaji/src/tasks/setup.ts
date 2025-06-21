import { execCommand } from "../utils/exec.js";
import fs from "fs";

export default function setup() {
  execCommand("git init");

  try {
    fs.copyFileSync(".env.example", ".env");
    console.log("📄 .env.example copiado para .env");
  } catch {
    console.warn("⚠️  .env.example não encontrado ou erro ao copiar.");
  }

  execCommand("npm install");
}
