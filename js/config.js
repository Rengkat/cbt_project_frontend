// ---------------------------------------------------------------------------
// This is the ONE place to edit when the backend lives on a different host
// than this frontend (e.g. this frontend on Netlify/Vercel/GitHub Pages,
// the backend on Render/Railway/etc).
//
// Set this to the full base URL of the deployed backend, with NO trailing
// slash, e.g.:
//   const API_BASE_URL = "https://cbt-backend.onrender.com";
//
// This file just defines the constant — it is loaded before your other
// script on the page, so API_BASE_URL is available wherever you write your
// fetch() calls (e.g. fetch(API_BASE_URL + "/api/student/login", ...)).
// ---------------------------------------------------------------------------
const API_BASE_URL = "https://bethesda-cbt-studet-project.onrender.com";
