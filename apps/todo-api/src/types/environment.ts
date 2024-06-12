import { Env } from 'hono';

export interface Environment extends Env {
  Bindings: {
    DB: D1Database;
    BUCKET: R2Bucket;
    ENV_TYPE: 'dev' | 'prod' | 'stage';
  };
}
