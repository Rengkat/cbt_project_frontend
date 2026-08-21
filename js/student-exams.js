// This script runs on the Student "My Exams" page.
// It loads the logged-in student's info, then loads the exams available
// for their class, and lets them jump into an exam or log out.

// Find the welcome message area
const welcomeMsg = document.getElementById("welcomeMsg");
// Find the area where the exam list will be shown
const examList = document.getElementById("examList");
// Find the logout button
const logoutBtn = document.getElementById("logoutBtn");


// ============================================================
// PART 1: A function that loads "who am I" and "my exams"
// ============================================================

// 1. Define an "async function" called loadExams that takes no parameters.

// Inside loadExams, do the following, IN THIS ORDER:

// a. Read the saved login token out of local storage
//    (call localStorage.getItem("token")) and store it in a variable called token

// b. Start a try block.

//    Inside the try block:

//    i. Use "await fetch(...)" to send a request to the URL "/api/student/me"
//       The options object needs:
//         - method: "GET"
//         - headers: an object with "Authorization" set to `Bearer ${token}`
//       Store what fetch returns in a variable called meResponse

//    ii. Use "await meResponse.json()" to read the response body.
//        Store the result in a variable called me

//    iii. Check "if (!meResponse.ok)". If true:
//         - set examList.textContent to me.message, or, if missing,
//           "Could not load your details."
//         - check "if (meResponse.status === 401)" — this means we are not
//           logged in. If true, redirect the browser by setting
//           window.location.href to "student-login.html"
//         - use "return" to stop here (either way)

//    iv. Set welcomeMsg.textContent using a template literal:
//        `Welcome, ${me.fullName} (Class: ${me.studentClass})`

//    v. Use "await fetch(...)" to send a request to the URL "/api/student/exams"
//       The options object needs:
//         - method: "GET"
//         - headers: an object with "Authorization" set to `Bearer ${token}`
//       Store what fetch returns in a variable called examsResponse

//    vi. Use "await examsResponse.json()" to read the response body.
//        Store the result in a variable called exams

//    vii. Check "if (!examsResponse.ok)". If true:
//         - set examList.textContent to exams.message, or, if missing,
//           "Could not load your exams."
//         - use "return" to stop here

//    viii. Check "if (exams.length === 0)". If true:
//          - set examList.textContent to
//            "No exams are available for your class right now."
//          - use "return" to stop here

//    ix. Clear examList by setting examList.innerHTML to an empty string ""

//    x. Use a "for" loop, with a counter "i" from 0 up to (but not
//       including) exams.length, to go through every exam one at a time.
//       Inside the loop:

//       1. Get the current exam: exams[i]. Store it in a variable called exam

//       2. Create a new <div> element. Store it in a variable called item
//          Set item.className to "list-item"

//       3. Create a new <p> element called titleLine.
//          Set titleLine.textContent to `Title: ${exam.title}`
//          Add titleLine inside item

//       4. Create a new <p> element called subjectLine.
//          Set subjectLine.textContent to `Subject: ${exam.subject}`
//          Add subjectLine inside item

//       5. Check "if (exam.alreadySubmitted)". If true:
//          - create a new <p> element called done
//          - set done.textContent to "You have already submitted this exam."
//          - add done inside item

//          Otherwise (the exam has NOT been submitted yet):
//          - create a new <button> element called startBtn
//          - set startBtn.type to "button"
//          - set startBtn.textContent to `Start ${exam.title}`
//          - add a "click" event listener to startBtn. Inside that
//            listener function, redirect the browser by setting
//            window.location.href to `student-exam.html?examId=${exam._id}`
//          - add startBtn inside item

//       6. Add item inside examList using examList.appendChild(item)

// c. After the try block, add a "catch (err)" block.
//    Inside it, set examList.textContent to
//    "Could not reach the server. Please try again."


// ============================================================
// PART 2: Wiring up the Log Out button
// ============================================================

// 2. Add a "click" event listener to logoutBtn.
//    Inside that listener function:
//      - call localStorage.removeItem("token")
//      - redirect the browser by setting window.location.href to
//        "student-login.html"


// ============================================================
// PART 3: Load the exams as soon as the page opens
// ============================================================

// 3. Call loadExams() one time, on its own, at the very bottom of the
//    file, so the list is filled in as soon as this page loads.
