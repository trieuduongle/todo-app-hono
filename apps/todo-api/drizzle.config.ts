import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schemas',
  out: './migrations',
  dialect: 'sqlite',
  migrations: {
    table: 'migrations',
    schema: 'public',
  },
});
