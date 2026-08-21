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

## Task Assignments

Each person should only write code inside the file(s) listed under their name.
Follow the numbered comments already in that file, from top to bottom — they
walk you through exactly what to write.

**Backend base URL:** `https://bethesda-cbt-studet-project.onrender.com`

### Emeka

- **File:** `js/admin-add-exam.js`
- **Page:** `admin-add-exam.html`
- **Endpoints:**
  - `POST /api/admin/exams` — create a new exam with its questions
  - `GET /api/student/exams/:id` — load one exam's questions to take it
  - `POST /api/student/exams/:id/submit` — submit answers and get a score

### Ahmed

- **File:** `js/admin-students.js`
- **Page:** `admin-students.html`
- **Endpoints:**
  - `GET /api/admin/students` — list all students
  - `POST /api/admin/students` — add a student
  - `PUT /api/admin/students/:id` — edit a student
  - `DELETE /api/admin/students/:id` — delete a student

### Osas

- **File:** `js/admin-results.js`
- **Page:** `admin-results.html`
- **Endpoints:**
  - `GET /api/admin/results` — view all submitted results

### Leonard

- **File:** `js/student-exams.js`
- **Page:** `student-exams.html`
- **Endpoints:**
  - `GET /api/student/me` — get the logged-in student's own info
  - `GET /api/student/exams` — list exams available to their class

### Okon

- **File:** `js/student-exam.js`
- **Page:** `student-exam.html`
- **Endpoints:**
  - `POST /api/admin/login` — admin login
  - `POST /api/student/login` — student login
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
