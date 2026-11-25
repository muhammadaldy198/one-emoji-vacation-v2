// One Emoji, One Dream Vacation — rebuild #2
// Pick: one tulip — spring tulip fields, one place, one season.
import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

const EMOJI = "🌷";
const target = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(target, EMOJI, "utf8");
chmodSync(target, 0o644);
