# AGENT.md — cc-conf-tracking-tool

## Purpose
A Google Apps Script WebApp that lets users track their confession/submission statuses. Client/server split architecture.

## Structure
```
cc-conf-tracking-tool/
├── README.md
├── AGENT.md
├── .gitignore
└── src/
    ├── appsscript.json  ← GAS manifest
    ├── client/          ← HTML/CSS/JS frontend
    └── server/          ← GAS server-side scripts (doGet, Sheets access)
```

## Key Facts
- **Platform:** Google Apps Script WebApp
- **Purpose:** Users enter an identifier to track status of their submission
- **Data store:** Google Sheets
- **Entry point:** `server/` contains the `doGet()` function

## Development Notes
- All source files live under `src/` — push with clasp from that directory
- No Node/npm at runtime; ES5-compatible GAS code only
