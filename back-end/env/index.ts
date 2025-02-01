import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("Environment variables invalid", _env.error.format());
  throw new Error("Environment variables invalid");
}

export const env = _env.data;
