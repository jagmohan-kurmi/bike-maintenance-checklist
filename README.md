# Bike Maintenance Checklist

Track bicycle components, service dates, and next checks.

## What it does

- Capture **component**.
- Capture **last checked**.
- Capture **current distance (km)**.
- Capture **check again at (km)**.
- Capture **check again by**.
- Capture **notes**.
- Add, search, complete, and remove entries.
- See due/overdue date badges where a due date is configured.
- Export a JSON backup or CSV list.
- Keep data in this browser's local storage; no account or external service is used.

## Run locally

Open `index.html` in a current browser. No build step, npm install, or network connection is required. For local development, run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Test

Node.js 18 or newer is needed for the dependency-free logic tests. The browser app itself has no runtime dependencies.

```sh
npm test
npm run check
```

## Privacy and scope

Records stay in this browser's `localStorage`. Clearing browser site data removes them. Use manufacturer guidance for maintenance intervals and safety checks.

## License

MIT. See [LICENSE](./LICENSE).
