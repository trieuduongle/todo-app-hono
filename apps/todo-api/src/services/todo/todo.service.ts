import { eq } from 'drizzle-orm';
import { InsertTodo, todoTable } from '~/db';
import { TodoAppD1Database } from '../db.service';

export class TodoService {
  private readonly db: TodoAppD1Database;

  constructor(db: TodoAppD1Database) {
    this.db = db;
  }

  getTodos() {
    return this.db.select().from(todoTable);
  }

  createTodo(data: InsertTodo) {
    return this.db
      .insert(todoTable)
      .values(data)
      .returning({ id: todoTable.id });
  }

  deleteTodoById(id: string) {
    return this.db.delete(todoTable).where(eq(todoTable.id, id));
  }
}
