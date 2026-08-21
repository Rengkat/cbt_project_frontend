# CBT Frontend — Student Project

## Backend base URL

This frontend talks to a backend that is already deployed here:

```
https://bethesda-cbt-studet-project.onrender.com
```

That URL is already set as `API_BASE_URL` in `js/config.js`, and that file is
already loaded on every page before your own script. You don't need to
change it — just use `API_BASE_URL` in the `fetch()` calls you write, e.g.:

```js
await fetch(API_BASE_URL + "/api/student/login", { ... })
```

(Render's free tier "sleeps" after inactivity — the first request after a
while can take up to ~30–60 seconds to respond while it wakes up. That's
normal, not a bug in your code.)

## All backend endpoints

| Method | Endpoint | Auth required |
|---|---|---|
| GET | `/api/health` | No |
| POST | `/api/admin/login` | No |
| GET | `/api/admin/students` | Admin token |
| POST | `/api/admin/students` | Admin token |
| PUT | `/api/admin/students/:id` | Admin token |
| DELETE | `/api/admin/students/:id` | Admin token |
| POST | `/api/admin/exams` | Admin token |
| GET | `/api/admin/exams` | Admin token |
| GET | `/api/admin/results` | Admin token |
| POST | `/api/student/login` | No |
| GET | `/api/student/me` | Student token |
| GET | `/api/student/exams` | Student token |
| GET | `/api/student/exams/:id` | Student token |
| POST | `/api/student/exams/:id/submit` | Student token |

"Auth required" means the request needs an `Authorization: Bearer <token>`
header, where `<token>` is what you get back from the login endpoint.

## Who's working on what

Each person below should only write code inside the ONE file listed next to
their name. Follow the numbered comments already in that file, top to
bottom — they walk you through exactly what to write.

| Student | File to work in | Page | Endpoint(s) it uses |
|---|---|---|---|
| **Emeka** | `js/admin-add-exam.js` | admin-add-exam.html | `POST /api/admin/exams` |
| **Ahmed** | `js/admin-students.js` | admin-students.html | `GET /api/admin/students`, `POST /api/admin/students`, `PUT /api/admin/students/:id`, `DELETE /api/admin/students/:id` |
| **Osas** | `js/admin-results.js` | admin-results.html | `GET /api/admin/results` |
| **Leonard** | `js/student-exams.js` | student-exams.html | `GET /api/student/me`, `GET /api/student/exams` |
| **Okon** | `js/student-login.js` AND `js/admin-login.js` | student-login.html, admin-login.html | `POST /api/student/login`, `POST /api/admin/login` |

### Notes for everyone

- Don't edit any `.html` files or `js/config.js` — those are already set up.
- Don't edit anyone else's `.js` file — if your page looks broken, check
  that you're only working inside your own file.
- Test your work by opening your assigned `.html` file in the browser (Live
  Server or similar) and trying it for real — the login pages need a real
  student/admin account to exist in the database first, so ask before
  testing if you're not sure one exists yet.
- Two files are **not** assigned to anyone above: `js/admin-dashboard.js`
  and `js/student-exam.js`. Leave those alone unless told otherwise.
