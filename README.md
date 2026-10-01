# Developer Tinder

A Tinder-style web app for developers: log in, browse a feed of other developers, and manage your profile and connections.

## Tech stack

- React 19 + Vite
- Redux Toolkit / React Redux (state and async API calls)
- React Router 7
- Tailwind CSS 4 + daisyUI
- Axios

## Getting started

Requires Node.js 20+ and the companion backend API running locally.

```bash
npm install
npm run dev
```

The app runs at http://localhost:5173.

### Backend

The API base URL is set in [src/utils/constants.js](src/utils/constants.js) (default `http://localhost:7777`). Requests are sent with `withCredentials: true`, so the backend must enable CORS for the Vite origin with credentials and use cookie-based auth.

Endpoints used:

| Method | Path | Purpose |
| ------ | ---- | ------- |
| POST | `/login` | Log in |
| POST | `/logout` | Log out |
| GET | `/profile/view` | Current user (restores the session on refresh) |
| PATCH | `/profile/edit` | Update profile |
| GET | `/users/feed` | Feed of developers |
| GET | `/api/connections` | Your connections |

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  components/
    common/   NavBar, Footer, UserCard, ToastMessage
    pages/    Feed, Login, ViewProfile, EditProfile, Connections, Error
  layouts/    RootLayout (navbar, footer, session restore)
  routes/     Router configuration
  store/      Redux store and slices (user, feed, connection, request)
  utils/      Constants
```

## Routes

| Path | Page |
| ---- | ---- |
| `/` | Feed |
| `/login` | Login |
| `/profile/view` | View profile |
| `/profile/edit` | Edit profile |
| `/connections` | Connections |
