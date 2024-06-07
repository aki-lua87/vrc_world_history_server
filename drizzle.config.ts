import type { Config } from "drizzle-kit";

export default {
    schema: "./src/schema.ts",
    out: "./drizzle/migrations",
    driver: "d1",
    dbCredentials: {
        wranglerConfigPath: "wrangler.toml",
        dbName: "vrc-history-database",
    },
} satisfies Config;
