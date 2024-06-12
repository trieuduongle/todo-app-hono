import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { validator } from 'hono/validator';
import { z } from 'zod';
import { resolveTodoService } from '~/services';
import { Environment } from '~/types';

export const todoRoutes = new Hono<Environment>();

const createTodoSchema = z.object({
  title: z.string(),
});

todoRoutes.get('/', async (c) => {
  const todoService = resolveTodoService(c);

  const result = await todoService.getTodos();
  return c.json(result);
});

todoRoutes.post(
  '/',
  validator('json', (value, c) => {
    const parsed = createTodoSchema.safeParse(value);
    if (!parsed.success) {
      return c.text('Invalid Create Todo Schema', 400);
    }
    return parsed.data;
  }),
  async (c) => {
    try {
      const { title } = c.req.valid('json');
      const todoService = resolveTodoService(c);

      const result = await todoService.createTodo({ title });

      return c.json(
        { message: 'Todo item created', insertedId: result[0].id },
        201
      );
    } catch (error) {
      console.error(error);
      throw new HTTPException(400, { message: 'Cannot create Todo item' });
    }
  }
);

todoRoutes.delete('/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const todoService = resolveTodoService(c);

    await todoService.deleteTodoById(id);
    return c.json({ message: 'Todo item deleted' }, 200);
  } catch (error) {
    console.error(error);
    throw new HTTPException(400, { message: 'Cannot create Todo item' });
  }
});
