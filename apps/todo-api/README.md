# Todo API

2 endpoint:

- GET /api/todo: get all current todo items
- POST /api/todo: create new todo item (payload must in form: { title: string })

# How to start:

Step 1: Create wrangler.toml from wrangler.toml.template + config variables correctly
Step 2: Call "npm run db:local" to setup d1 database in local
Step 3: Call "npm run dev" to start Honojs server

# Pending works:

- Refactor controllers folder to split routes to separate files
- Setup to Github Actions + deploy to Cloudflare Worker.
- All services currently are transient, consider to support singleton/scoped...
