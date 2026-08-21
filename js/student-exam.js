// This script runs on the "Take Exam" page.
// It loads one exam's questions, builds the on-screen form, runs a
// countdown timer, and submits the student's answers.

// Read the query string from the current page URL (e.g. "?examId=123")
const urlParams = new URLSearchParams(window.location.search);
// Pull out the examId value from the query string
const examId = urlParams.get("examId");

// Find the loading message element
const loadingMsg = document.getElementById("loadingMsg");
// Find the exam area (hidden until questions are ready)
const examArea = document.getElementById("examArea");
// Find the result area (hidden until the exam is submitted)
const resultArea = document.getElementById("resultArea");
// Find the exam title heading
const examTitle = document.getElementById("examTitle");
// Find the exam meta line
const examMeta = document.getElementById("examMeta");
// Find the container where questions will be inserted
const questionsArea = document.getElementById("questionsArea");
// Find the exam form
const examForm = document.getElementById("examForm");
// Find the submit message area
const submitMessage = document.getElementById("submitMessage");
// Find the timer display
const timerDisplay = document.getElementById("timerDisplay");
// Find the timer announcement area (screen readers speak from this one)
const timerAnnouncement = document.getElementById("timerAnnouncement");
// Find the score text area
const scoreText = document.getElementById("scoreText");

// Keep a reference to the running timer so we can stop it later. Start it as null.
let timerInterval = null;
// Track whether the exam has already been auto-submitted. Start it as false.
let autoSubmitted = false;


// ============================================================
// PART 1: A function that loads the exam and builds the form
// ============================================================

// 1. Define an "async function" called loadExam that takes no parameters.

// Inside loadExam, do the following, IN THIS ORDER:

// a. Check "if (!examId)" — this means no exam id was found in the URL.
//    If true:
//    - set loadingMsg.textContent to
//      "No exam was selected. Please go back and choose an exam."
//    - use "return" to stop here

// b. Read the saved login token out of local storage
//    (call localStorage.getItem("token")) and store it in a variable called token

// c. Start a try block.

//    Inside the try block:

//    i. Use "await fetch(...)" to send a request to the URL
//       `/api/student/exams/${examId}` (a template literal)
//       The options object needs:
//         - method: "GET"
//         - headers: an object with "Authorization" set to `Bearer ${token}`
//       Store what fetch returns in a variable called response

//    ii. Use "await response.json()" to read the response body.
//        Store the result in a variable called exam

//    iii. Check "if (!response.ok)". If true:
//         - set loadingMsg.textContent to exam.message, or, if missing,
//           "Could not load this exam."
//         - use "return" to stop here

//    iv. Set examTitle.textContent to exam.title

//    v. Create a variable called durationWord and set it to "minutes"
//       Check "if (exam.durationMinutes === 1)". If true, set durationWord
//       to "minute" instead (so the sentence reads correctly for exactly 1)

//    vi. Set examMeta.textContent using a template literal:
//        `Subject: ${exam.subject}. Total questions: ${exam.questions.length}. Time allowed: ${exam.durationMinutes} ${durationWord}.`

//    vii. Clear questionsArea by setting questionsArea.innerHTML to an
//         empty string ""

//    viii. Use a "for" loop, with a counter "i" from 0 up to (but not
//          including) exam.questions.length, to go through every question
//          one at a time. Inside the loop:

//          1. Get the current question: exam.questions[i]. Store it in a
//             variable called q

//          2. Create a new <div> element. Store it in a variable called block
//             Set block.className to "question-block"

//          3. Create a new <h2> element. Store it in a variable called heading
//             Set heading.textContent using a template literal:
//             `Question ${i + 1} of ${exam.questions.length}`
//             Add heading inside block

//          4. Check "if (q.passage && q.passage.trim() !== "")" — this
//             means the question has a non-empty reading passage. If true:
//             - create a new <p> element called passageLabel
//             - create a new <strong> element called strong
//             - set strong.textContent to "Reading Passage:"
//             - add strong inside passageLabel
//             - add passageLabel inside block
//             - create a new <p> element called passageBox
//             - set passageBox.className to "passage-box"
//             - set passageBox.textContent to q.passage
//             - add passageBox inside block

//          5. Create a new <fieldset> element. Store it in a variable
//             called fieldset

//          6. Create a new <legend> element. Store it in a variable called legend
//             Set legend.textContent to q.questionText
//             Add legend inside fieldset

//          7. Use another "for" loop, with a counter "j" from 0 up to (but
//             not including) q.options.length, to go through every option
//             for this question. Inside this inner loop:

//             a. Get the current option: q.options[j]. Store it in a
//                variable called option

//             b. Create a new <div> element called row.
//                Set row.className to "option-row"

//             c. Build a unique id using a template literal:
//                `q${q._id}-opt${j}`
//                Store it in a variable called radioId

//             d. Create a new <input> element using
//                document.createElement("input")
//                Store it in a variable called radio
//                - set radio.type to "radio"
//                - set radio.name using a template literal: `q-${q._id}`
//                - set radio.id to radioId
//                - set radio.value to option
//                - set radio.dataset.questionId to q._id

//             e. Create a new <label> element. Store it in a variable
//                called label
//                - call label.setAttribute("for", radioId)
//                - set label.style.marginTop to "0"
//                - set label.style.fontWeight to "normal"
//                - set label.textContent to option

//             f. Add radio inside row, then add label inside row

//             g. Add row inside fieldset

//          8. Add fieldset inside block

//          9. Add block inside questionsArea

//    ix. Set loadingMsg.hidden to true (this hides the loading message)

//    x. Set examArea.hidden to false (this reveals the exam)

//    xi. Call startTimer(exam.durationMinutes * 60) — the function we
//        define in Part 2 below. This converts minutes into seconds.

// d. After the try block, add a "catch (err)" block.
//    Inside it, set loadingMsg.textContent to
//    "Could not reach the server. Please try again."


// ============================================================
// PART 2: The countdown timer
// ============================================================
// The visible countdown updates every second, but the screen-reader
// announcement only speaks at a few key moments, so it isn't overwhelming.

// 2. Define a regular function called startTimer that takes one
//    parameter, called totalSeconds.

// Inside startTimer, do the following, IN THIS ORDER:

// a. Create a variable called secondsLeft and set it to totalSeconds

// b. Call updateTimerDisplay(secondsLeft) — the function we define in Part 3

// c. Set timerInterval equal to the result of calling setInterval(...).
//    setInterval takes two things:
//      - a function (with no parameters) to run repeatedly
//      - the number 1000 (meaning "every 1000 milliseconds", i.e. every second)
//    Inside that repeating function, do the following, IN ORDER:

//    i. Decrease secondsLeft by 1 (secondsLeft = secondsLeft - 1)

//    ii. Call updateTimerDisplay(secondsLeft)

//    iii. Call announceTimerMilestone(secondsLeft) — the function we
//         define in Part 4

//    iv. Check "if (secondsLeft <= 0)". If true:
//        - call clearInterval(timerInterval) to stop the repeating timer
//        - call handleTimeUp() — the function we define in Part 5


// ============================================================
// PART 3: A function that displays the countdown as "mm:ss"
// ============================================================

// 3. Define a regular function called updateTimerDisplay that takes one
//    parameter, called secondsLeft.

// Inside updateTimerDisplay, do the following, IN THIS ORDER:

// a. Create a variable called safeSeconds and set it to secondsLeft

// b. Check "if (safeSeconds < 0)". If true, set safeSeconds to 0
//    (this makes sure the display never shows a negative number)

// c. Calculate the whole minutes using "Math.floor(safeSeconds / 60)"
//    Store the result in a variable called minutes

// d. Calculate the leftover seconds using "safeSeconds % 60"
//    Store the result in a variable called seconds

// e. Turn minutes into text with a leading zero if needed, using
//    "String(minutes).padStart(2, "0")"
//    Store the result in a variable called minutesText

// f. Turn seconds into text the same way, using
//    "String(seconds).padStart(2, "0")"
//    Store the result in a variable called secondsText

// g. Set timerDisplay.textContent using a template literal:
//    `${minutesText}:${secondsText}`


// ============================================================
// PART 4: A function that decides when to speak a timer update
// ============================================================

// 4. Define a regular function called announceTimerMilestone that takes
//    one parameter, called secondsLeft.

// Inside announceTimerMilestone, do the following:

// a. Check "if (secondsLeft === 300)" (exactly 5 minutes left). If true,
//    set timerAnnouncement.textContent to "5 minutes remaining."

// b. Otherwise, check "if (secondsLeft === 120)" (exactly 2 minutes
//    left). If true, set timerAnnouncement.textContent to
//    "2 minutes remaining."

// c. Otherwise, check "if (secondsLeft === 60)" (exactly 1 minute left).
//    If true, set timerAnnouncement.textContent to "1 minute remaining."

// d. Otherwise, check "if (secondsLeft === 30)" (exactly 30 seconds
//    left). If true, set timerAnnouncement.textContent to
//    "30 seconds remaining."

// e. Otherwise, check "if (secondsLeft > 0 && secondsLeft <= 10)" (the
//    final 10 seconds). If true:
//    - create a variable called secondWord and set it to "seconds"
//    - check "if (secondsLeft === 1)". If true, set secondWord to "second" instead
//    - set timerAnnouncement.textContent using a template literal:
//      `${secondsLeft} ${secondWord} remaining.`


// ============================================================
// PART 5: A function that runs exactly once, when time runs out
// ============================================================

// 5. Define a regular function called handleTimeUp that takes no parameters.

// Inside handleTimeUp, do the following, IN THIS ORDER:

// a. Check "if (autoSubmitted)". If true (we have already auto-submitted
//    once), use "return" to stop here, so this never runs twice

// b. Set autoSubmitted to true

// c. Set timerAnnouncement.textContent to
//    "Time is up. Submitting your exam now."

// d. Call submitExam(true) — the function we define in Part 7. Passing
//    "true" tells it this is an automatic submission.


// ============================================================
// PART 6: Wiring up the Submit button
// ============================================================

// 6. Add a "submit" event listener to examForm.
//    The listener function should be declared as "async function (e) { ... }"

// Inside the event listener function, do the following, IN THIS ORDER:

// a. Prevent the browser's normal full-page reload on submit
//    (call e.preventDefault())

// b. Call submitExam(false) — passing "false" tells it this is a manual
//    submission (the student clicked the button themselves)


// ============================================================
// PART 7: A function that collects answers and submits the exam
// ============================================================

// 7. Define an "async function" called submitExam that takes one
//    parameter, called isAutoSubmit.

// Inside submitExam, do the following, IN THIS ORDER:

// a. Clear any old message:
//    - set submitMessage.textContent to an empty string ""
//    - set submitMessage.className to an empty string ""

// b. Find every radio button currently on the page, using
//    document.querySelectorAll('#questionsArea input[type="radio"]')
//    Store the result in a variable called radios

// c. Create a new, empty Set using "new Set()"
//    Store it in a variable called questionIds
//    (a Set automatically ignores duplicate values)

// d. Use a "for" loop, with a counter "i" from 0 up to (but not
//    including) radios.length. Inside the loop:
//    - call questionIds.add(radios[i].dataset.questionId)

// e. Create an empty array called answers

// f. Create a variable called unanswered and set it to 0

// g. Use questionIds.forEach(...) to loop through every unique question
//    id. The function passed to forEach takes one parameter, called qId.
//    Inside that function:

//    i. Find a checked radio button belonging to this question, using a
//       template literal: `input[name="q-${qId}"]:checked`
//       passed into document.querySelector(...)
//       Store the result in a variable called checked

//    ii. Check "if (checked)". If true:
//        - push an object into the answers array, shaped like this:
//          { questionId: qId, selectedOption: checked.value }

//        Otherwise (nothing was selected for this question):
//        - increase unanswered by 1

// h. Check "if (!isAutoSubmit && unanswered > 0)" — this means the
//    student clicked Submit themselves, and some questions are blank.
//    If true:
//    - call confirm() with a message built using a template literal:
//      `${unanswered} question(s) are unanswered. Do you want to submit anyway? Unanswered questions will be marked wrong.`
//      Store what confirm() returns (true or false) in a variable
//      called proceed
//    - check "if (!proceed)". If true, use "return" to stop here
//      without submitting

// i. Check "if (timerInterval)". If true, call clearInterval(timerInterval)
//    (this stops the countdown, since we are submitting either way)

// j. Read the saved login token out of local storage
//    (call localStorage.getItem("token")) and store it in a variable called token

// k. Start a try block.

//    Inside the try block:

//    i. Use "await fetch(...)" to send a request to the URL
//       `/api/student/exams/${examId}/submit` (a template literal)
//       The options object needs:
//         - method: "POST"
//         - headers: an object with "Content-Type" set to "application/json"
//           AND "Authorization" set to `Bearer ${token}`
//         - body: JSON.stringify() of an object containing one property,
//           "answers", set to the answers array
//       Store what fetch returns in a variable called response

//    ii. Use "await response.json()" to read the response body.
//        Store the result in a variable called result

//    iii. Check "if (!response.ok)". If true:
//         - set submitMessage.textContent to result.message, or, if
//           missing, "Could not submit exam."
//         - set submitMessage.className to "message error"
//         - use "return" to stop here

//    iv. Set examArea.hidden to true (hides the exam-taking area)

//    v. Set resultArea.hidden to false (reveals the result area)

//    vi. Create a variable called prefix and set it to an empty string ""
//        Check "if (isAutoSubmit)". If true, set prefix to
//        "Time was up, so your exam was submitted automatically. "

//    vii. Set scoreText.textContent using a template literal:
//         `${prefix}You scored ${result.score} out of ${result.totalQuestions}.`

// l. After the try block, add a "catch (err)" block.
//    Inside it:
//      - set submitMessage.textContent to
//        "Could not reach the server. Please try again."
//      - set submitMessage.className to "message error"


// ============================================================
// PART 8: Load the exam as soon as the page opens
// ============================================================

// 8. Call loadExam() one time, on its own, at the very bottom of the
//    file, so the exam is fetched and shown as soon as this page loads.
