# Portfolio Website

My personal portfolio website. Contains a React frontend plus Express API (Mailgun contact endpoint). Live: [amcwong.onrender.com](https://amcwong.onrender.com).

## Stack

- **Client:** Create React App (`client/`) — Home, About, Resume, Links
- **Server:** Express (`server.js`) — `POST /contact` via Mailgun (optional; unused in the live UI)
- **Deploy:** Render — frontend as a **static site**, backend as a **web service**

## Setup

```bash
# Root (API)
cp .env.example .env
npm install

# Client
cd client && npm install && cd ..
```

### Mailgun (optional)

The contact form / Mailgun path is **not used** on the live site anymore (Links section is social/email only). Skip this unless you restore a form that posts to `POST /contact`.

1. Create a [Mailgun](https://www.mailgun.com/) account and verify a sending domain.
2. Copy the API key and domain into root `.env`:
   - `MAILGUN_API_KEY`
   - `MAILGUN_DOMAIN`
3. Set `PORT` (default `8000`) and `NODE_ENV` as needed.
4. Start the API (`npm run server` or `npm run dev`) and send a JSON body `{ name, email, message }` to `/contact`.

## Run locally

```bash
npm run dev            # API + CRA together (concurrently)
# or separately:
npm run server         # Express on PORT (default 8000)
npm run client         # React on :3000 (proxies API to :8000)
```

For frontend-only work, you can skip the API and Mailgun env entirely.

## Deploy (Render)

This project is deployed on [Render](https://render.com/) as **two services**:

| Service | Type | Role |
|---------|------|------|
| Frontend | **Static Site** | Serves the CRA build from `client/` (build command e.g. `npm install && npm run build` in `client/`; publish `client/build`) |
| Backend | **Web Service** | Runs `server.js` (Node). Set `MAILGUN_*` and `PORT` in the service env if you use contact email |

Point the static site at your Render web service URL only if you re-enable API calls from the client.

## Env

| Variable | Where | Purpose |
|----------|--------|---------|
| `PORT` | root `.env` | API port |
| `NODE_ENV` | root `.env` | environment |
| `MAILGUN_API_KEY` | root `.env` | Mailgun API key (optional) |
| `MAILGUN_DOMAIN` | root `.env` | Mailgun sending domain (optional) |

Copy from `.env.example`. Do not commit real secrets.
