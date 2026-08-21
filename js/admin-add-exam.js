// This script runs on the "Add New Exam" admin page.
// It lets the admin add/remove questions, add/remove options within a
// question, mark the correct option, and submit the whole exam.

// Find the container that holds all question blocks
const questionsContainer = document.getElementById("questionsContainer");
// Find the <template> that defines what one question block looks like
const questionTemplate = document.getElementById("questionTemplate");
// Find the <template> that defines what one option row looks like
const optionRowTemplate = document.getElementById("optionRowTemplate");
// Find the "Add Another Question" button
const addQuestionBtn = document.getElementById("addQuestionBtn");
// Find the exam form itself
const examForm = document.getElementById("examForm");
// Find the message area
const formMessage = document.getElementById("formMessage");

// Keep a running count of how many questions have been added, for numbering.
// Start it at 0.
let questionCount = 0;
// Keep a running counter to build unique ids for radio buttons/labels.
// Start it at 0.
let uniqueIdCounter = 0;


// ============================================================
// PART 1: A function that adds ONE option row into ONE question
// ============================================================

// 1. Define a regular function called addOptionRow that takes two
//    parameters: block, and groupName.

// Inside addOptionRow, do the following, IN THIS ORDER:

// a. Clone the option row template's content, using
//    optionRowTemplate.content.cloneNode(true)
//    Store the result in a variable called clone

// b. Find the row element inside the cloned content, using
//    clone.querySelector(".optionRow")
//    Store it in a variable called row

// c. Find the radio button inside row, using row.querySelector(".answerRadio")
//    Store it in a variable called radio

// d. Find the label inside row, using row.querySelector(".optionLabel")
//    Store it in a variable called label

// e. Find the "Remove" button inside row, using
//    row.querySelector(".removeOptionBtn")
//    Store it in a variable called removeBtn

// f. Increase uniqueIdCounter by 1 (uniqueIdCounter = uniqueIdCounter + 1)

// g. Build a unique id string using a template literal:
//    `${groupName}-${uniqueIdCounter}`
//    Store it in a variable called radioId

// h. Set radio.name to groupName (this groups all radios in one question together)

// i. Set radio.id to radioId

// j. Set the label's "for" attribute to radioId, using
//    label.setAttribute("for", radioId)

// k. Add a "click" event listener to removeBtn.
//    Inside that listener function, do the following:

//    i. Find this question's options container, using
//       block.querySelector(".optionsContainer")
//       Store it in a variable called optionsContainer

//    ii. Check "if (optionsContainer.querySelectorAll(".optionRow").length <= 2)"
//        — this means only 2 options are left. If true:
//        - call alert("A question needs at least 2 options.")
//        - use "return" to stop here, without removing anything

//    iii. Call row.remove() to remove this option row from the page

//    iv. Call renumberOptions(block) — the function we define in Part 2 below

// l. Find this question's options container again, using
//    block.querySelector(".optionsContainer")
//    Store it in a variable called optionsContainer

// m. Add the finished row into it, using optionsContainer.appendChild(clone)

// n. Call renumberOptions(block)


// ============================================================
// PART 2: A function that relabels all options as "Option 1", "Option 2", etc.
// ============================================================

// 2. Define a regular function called renumberOptions that takes one
//    parameter, called block.

// Inside renumberOptions, do the following, IN THIS ORDER:

// a. Find every option row inside this question block, using
//    block.querySelectorAll(".optionRow")
//    Store the result in a variable called rows

// b. Use a "for" loop, with a counter variable "i" starting at 0 and going
//    up to (but not including) rows.length. Inside the loop:

//    i. Find the label inside rows[i], using rows[i].querySelector(".optionLabel")
//       Store it in a variable called label

//    ii. Set label.textContent to `Option ${i + 1}`


// ============================================================
// PART 3: A function that adds a brand new question block
// ============================================================

// 3. Define a regular function called addQuestionBlock that takes no parameters.

// Inside addQuestionBlock, do the following, IN THIS ORDER:

// a. Increase questionCount by 1 (questionCount = questionCount + 1)

// b. Clone the question template's content, using
//    questionTemplate.content.cloneNode(true)
//    Store the result in a variable called clone

// c. Find the block element inside the cloned content, using
//    clone.querySelector(".question-block")
//    Store it in a variable called block

// d. Find the element that shows this question's number, using
//    block.querySelector(".qNumber")
//    Store it in a variable called qNumber

// e. Set qNumber.textContent to questionCount

// f. Build a unique radio group name using a template literal:
//    `answer-${Date.now()}-${questionCount}`
//    Store it in a variable called groupName

// g. Use a "for" loop, with a counter variable "i" starting at 0 and going
//    up to (but not including) 4, so this runs exactly 4 times.
//    Inside the loop, call addOptionRow(block, groupName)
//    (this gives every new question 4 starting options)

// h. Find this question's "Add Another Option" button, using
//    block.querySelector(".addOptionBtn")
//    Store it in a variable called addOptionBtn

// i. Add a "click" event listener to addOptionBtn.
//    Inside that listener function, call addOptionRow(block, groupName)

// j. Find this question's "Remove This Question" button, using
//    block.querySelector(".removeQuestionBtn")
//    Store it in a variable called removeQuestionBtn

// k. Add a "click" event listener to removeQuestionBtn.
//    Inside that listener function:
//      - call block.remove()
//      - call renumberQuestions() (the function we define in Part 4 below)

// l. Add the finished question block into the page, using
//    questionsContainer.appendChild(clone)


// ============================================================
// PART 4: A function that relabels all questions as "Question 1", etc.
// ============================================================

// 4. Define a regular function called renumberQuestions that takes no parameters.

// Inside renumberQuestions, do the following, IN THIS ORDER:

// a. Find every question block on the page, using
//    questionsContainer.querySelectorAll(".question-block")
//    Store the result in a variable called blocks

// b. Use a "for" loop, with a counter variable "i" starting at 0 and going
//    up to (but not including) blocks.length. Inside the loop:

//    i. Find the number element inside blocks[i], using
//       blocks[i].querySelector(".qNumber")
//       Store it in a variable called qNumber

//    ii. Set qNumber.textContent to i + 1


// ============================================================
// PART 5: Wiring up the "Add Another Question" button, and starting
//         the form with one question already on it
// ============================================================

// 5. Add a "click" event listener to addQuestionBtn.
//    Inside that listener function, call addQuestionBlock()

// 6. Call addQuestionBlock() one time, on its own, so the form does not
//    start out completely empty.


// ============================================================
// PART 6: Submitting the whole exam
// ============================================================

// 7. Add a "submit" event listener to examForm.
//    The listener function should be declared as "async function (e) { ... }"

// Inside the event listener function, do the following, IN THIS ORDER:

// a. Prevent the browser's normal full-page reload on submit
//    (call e.preventDefault())

// b. Clear any old message:
//    - set formMessage.textContent to an empty string ""
//    - set formMessage.className to an empty string ""

// c. Find the title input by id "title". Read its value, trim it, and
//    store the result in a variable called title

// d. Find the subject input by id "subject". Read its value, trim it, and
//    store the result in a variable called subject

// e. Find the class input by id "examClass". Read its value, trim it, and
//    store the result in a variable called examClass

// f. Find the duration input by id "durationMinutes". Read its value, trim
//    it, and store the result in a variable called durationMinutes

// g. Check whether title is empty OR subject is empty OR examClass is
//    empty. If any are missing:
//    - set formMessage.textContent to "Exam title, subject and class are required."
//    - set formMessage.className to "message error"
//    - use "return" to stop here

// h. Check "if (!durationMinutes || parseInt(durationMinutes, 10) < 1)".
//    If true:
//    - set formMessage.textContent to "Please enter a valid duration in minutes."
//    - set formMessage.className to "message error"
//    - use "return" to stop here

// i. Find every question block on the page, using
//    questionsContainer.querySelectorAll(".question-block")
//    Store the result in a variable called blocks

// j. Check "if (blocks.length === 0)". If true:
//    - set formMessage.textContent to "Add at least one question."
//    - set formMessage.className to "message error"
//    - use "return" to stop here

// k. Create an empty array called questions

// l. Use a "for" loop, with a counter variable "i" starting at 0 and going
//    up to (but not including) blocks.length, to go through every question
//    one at a time. Inside the loop:

//    1. Get the current question block: blocks[i]. Store it in a variable
//       called block

//    2. Find the passage field inside block, using
//       block.querySelector(".passageField")
//       Read its value, trim it, and store the result in a variable
//       called passage

//    3. Find the question text field inside block, using
//       block.querySelector(".questionTextField")
//       Read its value, trim it, and store the result in a variable
//       called questionText

//    4. Find every option row inside block, using
//       block.querySelectorAll(".optionRow")
//       Store the result in a variable called optionRows

//    5. Check "if (!questionText)". If true:
//       - set formMessage.textContent to `Question ${i + 1} is missing its text.`
//       - set formMessage.className to "message error"
//       - use "return" to stop here

//    6. Create an empty array called options

//    7. Use a "for" loop, with a counter variable "j" starting at 0 and
//       going up to (but not including) optionRows.length. Inside this
//       inner loop:
//       - find the text input inside optionRows[j], using
//         optionRows[j].querySelector(".optionField")
//         Store it in a variable called optionInput
//       - read optionInput.value, trim it, and store the result in a
//         variable called optionValue
//       - check "if (optionValue !== "")". If true, push optionValue into
//         the options array

//    8. Check "if (options.length < 2)". If true:
//       - set formMessage.textContent to
//         `Question ${i + 1} needs at least 2 filled-in options.`
//       - set formMessage.className to "message error"
//       - use "return" to stop here

//    9. Create a variable called checkedRow and set it to null

//    10. Use another "for" loop with a counter "j" from 0 up to (but not
//        including) optionRows.length. Inside this loop:
//        - find the radio button inside optionRows[j], using
//          optionRows[j].querySelector(".answerRadio")
//          Store it in a variable called radio
//        - check "if (radio.checked)". If true, set checkedRow to optionRows[j]

//    11. Check "if (!checkedRow)". If true (no option was marked correct):
//        - set formMessage.textContent to
//          `Question ${i + 1}: please select the correct answer.`
//        - set formMessage.className to "message error"
//        - use "return" to stop here

//    12. Find the text input inside checkedRow, using
//        checkedRow.querySelector(".optionField")
//        Store it in a variable called answerInput

//    13. Read answerInput.value, trim it, and store the result in a
//        variable called answer

//    14. Check "if (!answer)". If true (the marked-correct option is blank):
//        - set formMessage.textContent to
//          `Question ${i + 1}: the option marked correct is empty. Fill it in or choose another option.`
//        - set formMessage.className to "message error"
//        - use "return" to stop here

//    15. Push an object into the questions array, shaped like this:
//        { passage: passage, questionText: questionText, options: options, answer: answer }

// m. Read the saved login token out of local storage
//    (call localStorage.getItem("token")) and store it in a variable called token

// n. Start a try block.

//    Inside the try block:

//    i. Use "await fetch(...)" to send a request to the URL
//       "/api/admin/exams"
//       The options object needs:
//         - method: "POST"
//         - headers: an object with "Content-Type" set to "application/json"
//           AND "Authorization" set to `Bearer ${token}`
//         - body: JSON.stringify() of an object containing title, subject,
//           examClass, durationMinutes, and questions
//       Store what fetch returns in a variable called response

//    ii. Use "await response.json()" to read the response body.
//        Store the result in a variable called data

//    iii. Check "if (!response.ok)". If true:
//         - set formMessage.textContent to data.message, or, if missing,
//           "Could not save exam."
//         - set formMessage.className to "message error"
//         - use "return" to stop here

//    iv. Set formMessage.textContent to "Exam saved successfully."
//    v. Set formMessage.className to "message success"

//    vi. Call examForm.reset() to clear the top-level exam fields

//    vii. Set questionsContainer.innerHTML to an empty string "" to remove
//         every question block from the page

//    viii. Set questionCount back to 0

//    ix. Call addQuestionBlock() once, so a fresh empty question is ready
//        for the admin to start entering the next exam

// o. After the try block, add a "catch (err)" block.
//    Inside it:
//      - set formMessage.textContent to "Could not reach the server. Please try again."
//      - set formMessage.className to "message error"
