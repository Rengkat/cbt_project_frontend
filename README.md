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



  # CBT API — Data Structures

This document shows the **actual JSON** for each request and response —
the way Postman's "Body" / "Example" tabs show it — plus a plain-language
field table under each one for screen readers.

Where the exact response JSON isn't shown anywhere in the reference file,
the example is labeled **(EXPECTED — not confirmed)**. Everything else is
labeled **(CONFIRMED)** because the reference file proves that field
exists (usually by chaining it into the next request).

---

## 1. Health Check

### GET `/api/health`

No request body.

**Response — (EXPECTED, not confirmed):**
```json
{
  "status": "ok"
}
```

---

## 2. Admin Endpoints

### 2.1 POST `/api/admin/login`

**Request:**
```json
{
  "username": "admin",
  "password": "admin123"
}
```

**Response — (CONFIRMED: `token` field only):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "admin": {
    "_id": "EXPECTED — not confirmed",
    "username": "EXPECTED — not confirmed"
  }
}
```
> Only `token` is proven to exist. The `admin` object is a reasonable
> guess, not a confirmed field — treat it as placeholder until verified.

**Fields**

| Field | Type | Description |
|---|---|---|
| `token` | string | JWT — use as `Authorization: Bearer <token>` on all admin requests |

---

### 2.2 GET `/api/admin/students`

No request body.

**Response — (EXPECTED, not confirmed):**
```json
[
  {
    "_id": "6a88119f052af14a527e4a67",
    "fullName": "Test Student",
    "regNumber": "STU999",
    "studentClass": "SS1"
  }
]
```

**Fields**

| Field | Type | Description |
|---|---|---|
| `_id` | string | Student's unique ID |
| `fullName` | string | Full name |
| `regNumber` | string | Login ID |
| `studentClass` | string | Class, e.g. `"SS1"` |

---

### 2.3 POST `/api/admin/students`

**Request:**
```json
{
  "fullName": "Test Student",
  "regNumber": "STU999",
  "password": "test1234",
  "studentClass": "SS1"
}
```

**Response — (CONFIRMED: `student._id` only, rest EXPECTED):**
```json
{
  "student": {
    "_id": "6a88119f052af14a527e4a67",
    "fullName": "Test Student",
    "regNumber": "STU999",
    "studentClass": "SS1"
  }
}
```

**Fields**

| Field | Type | Description |
|---|---|---|
| `student._id` | string | Confirmed — needed for update/delete requests |
| `student.fullName`, `.regNumber`, `.studentClass` | string | Expected to echo the request |

---

### 2.4 PUT `/api/admin/students/:id`

**Request:**
```json
{
  "fullName": "Test Student Updated",
  "regNumber": "STU999",
  "studentClass": "SS1"
}
```
> `password` is optional — add it only if you want to change it, e.g.
> `"password": "newpass123"`. Leave it out entirely otherwise.

**Response — (EXPECTED, not confirmed):**
```json
{
  "student": {
    "_id": "6a88119f052af14a527e4a67",
    "fullName": "Test Student Updated",
    "regNumber": "STU999",
    "studentClass": "SS1"
  }
}
```

---

### 2.5 DELETE `/api/admin/students/:id`

No request body.

**Response — (EXPECTED, not confirmed):**
```json
{
  "message": "Student deleted"
}
```

---

### 2.6 POST `/api/admin/exams`

**Request:**
```json
{
  "title": "Basic Maths Test",
  "subject": "Mathematics",
  "examClass": "SS1",
  "durationMinutes": 30,
  "questions": [
    {
      "passage": "",
      "questionText": "What is 2 + 2?",
      "options": ["3", "4", "5", "6"],
      "answer": "4"
    },
    {
      "passage": "",
      "questionText": "What is 10 / 2?",
      "options": ["2", "4", "5", "10"],
      "answer": "5"
    }
  ]
}
```

**Response — (CONFIRMED: `exam._id` only, rest EXPECTED):**
```json
{
  "exam": {
    "_id": "EXAM_ID_HERE",
    "title": "Basic Maths Test",
    "subject": "Mathematics",
    "examClass": "SS1",
    "durationMinutes": 30,
    "questions": [
      {
        "_id": "QUESTION_ID_1",
        "passage": "",
        "questionText": "What is 2 + 2?",
        "options": ["3", "4", "5", "6"],
        "answer": "4"
      }
    ]
  }
}
```

**Fields**

| Field | Type | Description |
|---|---|---|
| `exam._id` | string | Confirmed — needed for student exam-taking requests |
| `questions[].answer` | string | Included here on the admin side; **stripped out** when a student fetches the exam (see 3.4) |

---

### 2.7 GET `/api/admin/exams`

No request body.

**Response — (EXPECTED, not confirmed):**
```json
[
  {
    "_id": "EXAM_ID_HERE",
    "title": "Basic Maths Test",
    "subject": "Mathematics",
    "examClass": "SS1",
    "durationMinutes": 30
  }
]
```

---

### 2.8 GET `/api/admin/results`

No request body.

**Response — (EXPECTED, not confirmed — no field names shown anywhere in the reference file):**
```json
[
  {
    "_id": "RESULT_ID",
    "student": "STUDENT_ID_OR_OBJECT",
    "exam": "EXAM_ID_OR_OBJECT",
    "score": 0,
    "submittedAt": "2026-08-25T00:00:00.000Z"
  }
]
```
> This entire shape is a guess based on common patterns — none of it is
> proven by the reference file. Confirm with the backend before relying
> on any of these field names.

### 2.9 GET `/api/admin/results?examId=:examId`

Same response shape as 2.8, filtered to one exam.

---

## 3. Student Endpoints

### 3.1 POST `/api/student/login`

**Request:**
```json
{
  "regNumber": "STU001",
  "password": "student123"
}
```

**Response — (CONFIRMED: `token` field only):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "student": {
    "_id": "EXPECTED — not confirmed",
    "fullName": "EXPECTED — not confirmed"
  }
}
```

---

### 3.2 GET `/api/student/me`

No request body.

**Response — (EXPECTED, not confirmed):**
```json
{
  "_id": "6a88119f052af14a527e4a67",
  "fullName": "Test Student",
  "regNumber": "STU001",
  "studentClass": "SS1"
}
```

---

### 3.3 GET `/api/student/exams`

No request body.

**Response — (EXPECTED, not confirmed):**
```json
[
  {
    "_id": "EXAM_ID_HERE",
    "title": "Basic Maths Test",
    "subject": "Mathematics",
    "durationMinutes": 30
  }
]
```

---

### 3.4 GET `/api/student/exams/:id`

No request body.

**Response — (EXPECTED shape; the one confirmed rule is that `answer` is stripped out):**
```json
{
  "_id": "EXAM_ID_HERE",
  "title": "Basic Maths Test",
  "subject": "Mathematics",
  "durationMinutes": 30,
  "questions": [
    {
      "_id": "QUESTION_ID_1",
      "passage": "",
      "questionText": "What is 2 + 2?",
      "options": ["3", "4", "5", "6"]
    }
  ]
}
```
> Note there's no `answer` field on each question here — that's
> intentional, confirmed by the reference file's own comment
> ("answers stripped out").

---

### 3.5 POST `/api/student/exams/:id/submit`

**Request:**
```json
{
  "answers": [
    { "questionId": "QUESTION_ID_1", "selectedOption": "4" },
    { "questionId": "QUESTION_ID_2", "selectedOption": "5" }
  ]
}
```

**Response — (EXPECTED, not confirmed — no field names shown anywhere in the reference file):**
```json
{
  "score": 2,
  "total": 2,
  "results": [
    { "questionId": "QUESTION_ID_1", "correct": true },
    { "questionId": "QUESTION_ID_2", "correct": true }
  ]
}
```
> This is a guess based on common patterns for scoring endpoints — confirm
> the real shape with the backend before building the results screen
> around it.

---

## 4. Reading the Labels

- **(CONFIRMED)** — the reference file proves this field exists, because
  it's used directly in a later request (e.g. `response.body.token`,
  `response.body.student._id`, `response.body.exam._id`).
- **(EXPECTED, not confirmed)** — a reasonable, best-guess example so you
  can start writing code against *something*, but the backend has not
  actually shown this response anywhere. Treat these JSON blocks as
  placeholders, not guarantees.

**Before shipping any screen that reads one of the "EXPECTED" fields:**
call that endpoint for real (Postman, browser console, or a quick
`console.log(await response.json())`) and swap the placeholder JSON above
for what actually comes back.

