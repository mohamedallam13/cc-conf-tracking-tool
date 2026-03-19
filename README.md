# CC Confession Tracking Tool

A Google Apps Script WebApp that lets users look up the status of their submitted confessions or applications. Users enter an identifier and instantly see where their submission stands in the review pipeline.

![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=flat&logo=google&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-WebApp-blue)

---

## Features

- Submission status lookup by identifier (name, ID, or reference code)
- Status pipeline display — shows current stage in the review process
- Clean, minimal UI with real-time feedback
- Google Sheets as the status data store
- Client/server split architecture

---

## Tech Stack

| Layer    | Technology                      |
|----------|---------------------------------|
| Platform | Google Apps Script              |
| UI       | HTML5, CSS3, Vanilla JavaScript |
| Database | Google Sheets                   |
| Deploy   | clasp CLI                       |

---

## Project Structure

```
cc-conf-tracking-tool/
├── README.md
├── AGENT.md
├── .gitignore
└── src/
    ├── appsscript.json  # GAS manifest
    ├── client/          # Lookup UI — form, status display
    └── server/          # doGet(), Sheets lookup logic
```

---

## Getting Started

### Prerequisites

- A Google account with Google Apps Script access
- [clasp](https://github.com/google/clasp) installed globally

```bash
npm install -g @google/clasp
clasp login
```

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedallam13/cc-conf-tracking-tool.git
   cd cc-conf-tracking-tool
   ```

2. Link to your Apps Script project:
   ```bash
   clasp create --type webapp --title "CC Tracking Tool" --rootDir src
   ```

3. Push source files:
   ```bash
   clasp push
   ```

---

## Deployment

1. In the Apps Script editor, go to **Deploy > New deployment**
2. Select type: **Web app**
3. Set **Who has access**: Anyone
4. Click **Deploy** and share the Web App URL

---

## Author

**Mohamed Allam** — [GitHub](https://github.com/mohamedallam13) · [Email](mailto:mohamedallam.tu@gmail.com)
