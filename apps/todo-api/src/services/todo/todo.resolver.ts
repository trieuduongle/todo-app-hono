import { Context } from 'hono';
import { Environment } from '~/types';
import { initDrizzleD1Database } from '../db.service';
import { TodoService } from './todo.service';

export const resolveTodoService = (c: Context<Environment>) => {
  const db = initDrizzleD1Database(c.env.DB);
  return new TodoService(db);
};
