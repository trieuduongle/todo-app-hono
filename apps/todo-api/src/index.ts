import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { todoRoutes } from './controllers';
import { Environment } from './types';

const app = new Hono<Environment>().basePath('/api');

app.use(
  '*',
  cors({
    origin: ['http://localhost:8000'],
  })
);

app.route('/todo', todoRoutes);

export default app;
