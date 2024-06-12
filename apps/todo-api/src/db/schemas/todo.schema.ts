// import { pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const todoTable = sqliteTable('users_table', {
  id: text('id').$defaultFn(() => createId()),
  title: text('title').notNull(),
});
export const todoTable2 = sqliteTable('users_table', {
  id: text('id').$defaultFn(() => createId()),
  title: text('title').notNull(),
});
// export default todoTable;
export type InsertTodo = typeof todoTable.$inferInsert;
export type SelectTodo = typeof todoTable.$inferSelect;
