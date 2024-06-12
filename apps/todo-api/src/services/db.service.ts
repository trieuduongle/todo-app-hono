import { drizzle } from 'drizzle-orm/d1';
import * as schema from '~/db/schemas';

export const initDrizzleD1Database = (env: D1Database) =>
  drizzle(env, { schema });

export type TodoAppD1Database = ReturnType<typeof initDrizzleD1Database>;
