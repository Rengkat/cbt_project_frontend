// This script runs on the "Manage Students" admin page.
// It loads the list of students, and adds/edits/deletes students.
// The same <form> on the page is reused for both "add" and "edit".

// Find the form and store it in a variable
const studentForm = document.getElementById("studentForm");

// Find the hidden field that stores the id of the student being edited
const studentIdField = document.getElementById("studentId");

// Find each visible input field and store it in a variable
const fullNameField = document.getElementById("fullName");
const regNumberField = document.getElementById("regNumber");
const studentClassField = document.getElementById("studentClass");
const passwordField = document.getElementById("password");

// Find the heading and buttons whose text changes between "add" and "edit" mode
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");

// Find the message area and the list area
const formMessage = document.getElementById("formMessage");
const studentList = document.getElementById("studentList");


// ============================================================
// PART 1: A function that loads every student and shows them
// ============================================================

// 2. Define an "async function" called loadStudents. It takes no parameters.

// Inside loadStudents, do the following, IN THIS ORDER:

// a. Start a try block, because the network request below might fail.

//    Inside the try block:

//    i. Read the saved login token out of local storage
//       (call localStorage.getItem("token")) and store it in a variable called token

//    ii. Use "await fetch(...)" to send a request to the URL "/api/admin/students"
//        The options object needs:
//          - method: "GET"
//          - headers: an object with "Authorization" set to the text
//            "Bearer " followed by the token (use a template literal:
//            `Bearer ${token}`)
//        Store what fetch returns in a variable called response

//    iii. Use "await response.json()" to read and parse the response body.
//         Store the result in a variable called students

//    iv. Check "if (!response.ok)". If true:
//         - set studentList.textContent to students.message, or, if that is
//           missing/empty, the fallback text "Could not load students."
//         - use "return" to stop the function here

//    v. Check "if (students.length === 0)". If true:
//         - set studentList.textContent to "No students added yet."
//         - use "return" to stop the function here

//    vi. Clear out whatever was in the list before, by setting
//        studentList.innerHTML to an empty string ""

//    vii. Use a "for" loop, with a counter variable "i" starting at 0 and
//         going up to (but not including) students.length, to go through
//         every student one at a time. Inside the loop:

//         1. Get the current student out of the array: students[i].
//            Store it in a variable called student

//         2. Create a new <div> element using document.createElement("div").
//            Store it in a variable called item

//         3. Set item.className to "list-item"

//         4. Create a new <p> element. Store it in a variable called nameLine.
//            Set nameLine.textContent to the text "Name: " followed by
//            student.fullName (use a template literal: `Name: ${student.fullName}`)
//            Add nameLine inside item using item.appendChild(nameLine)

//         5. Create another <p> element called regLine, the same way, but its
//            text should be `Reg. No: ${student.regNumber}`
//            Add regLine inside item

//         6. Create another <p> element called classLine, the same way, but its
//            text should be `Class: ${student.studentClass}`
//            Add classLine inside item

//         7. Create a <button> element using document.createElement("button").
//            Store it in a variable called editBtn.
//            Set editBtn.type to "button"
//            Set editBtn.className to "secondary"
//            Set editBtn.textContent to `Edit ${student.fullName}`

//         8. Add a "click" event listener to editBtn. Inside that listener
//            function, call startEdit(student) — the function we will define
//            in Part 2 below.

//         9. Add editBtn inside item using item.appendChild(editBtn)

//         10. Create another <button> element called deleteBtn, the same way.
//             Set deleteBtn.type to "button"
//             Set deleteBtn.className to "danger"
//             Set deleteBtn.textContent to `Delete ${student.fullName}`

//         11. Add a "click" event listener to deleteBtn. Inside that listener
//             function, call deleteStudent(student) — the function we will
//             define in Part 4 below.

//         12. Add deleteBtn inside item using item.appendChild(deleteBtn)

//         13. Add the whole item into the visible list using
//             studentList.appendChild(item)

// b. After the try block, add a "catch (err)" block.
//    Inside it, set studentList.textContent to
//    "Could not reach the server. Please try again."


// ============================================================
// PART 2: A function that fills the form to edit one student
// ============================================================

// 3. Define a regular function called startEdit that takes one parameter,
//    called student.

// Inside startEdit, do the following, IN THIS ORDER:

// a. Set studentIdField.value to student._id
// b. Set fullNameField.value to student.fullName
// c. Set regNumberField.value to student.regNumber
// d. Set studentClassField.value to student.studentClass
// e. Set passwordField.value to an empty string "" (blank means "don't change the password")
// f. Set formTitle.textContent to `Edit Student: ${student.fullName}`
// g. Set submitBtn.textContent to "Save Changes"
// h. Set cancelEditBtn.hidden to false (this reveals the Cancel button)
// i. Call fullNameField.focus() to move the keyboard cursor there


// ============================================================
// PART 3: A function that resets the form back to "add" mode
// ============================================================

// 4. Define a regular function called resetForm that takes no parameters.

// Inside resetForm, do the following, IN THIS ORDER:

// a. Call studentForm.reset() to clear every field back to empty
// b. Set studentIdField.value to an empty string ""
// c. Set formTitle.textContent to "Add New Student"
// d. Set submitBtn.textContent to "Add Student"
// e. Set cancelEditBtn.hidden to true (this hides the Cancel button again)


// ============================================================
// PART 4: Wiring up the Cancel button
// ============================================================

// 5. Add a "click" event listener to cancelEditBtn.
//    Inside that listener function, call resetForm()


// ============================================================
// PART 5: Submitting the form (covers BOTH add and edit)
// ============================================================

// 6. Add a "submit" event listener to studentForm.
//    The listener function should be declared as "async function (e) { ... }"

// Inside the event listener function, do the following, IN THIS ORDER:

// a. Prevent the browser's normal full-page reload on submit
//    (call e.preventDefault())

// b. Clear any old message:
//    - set formMessage.textContent to an empty string ""
//    - set formMessage.className to an empty string ""

// c. Read fullNameField.value, remove extra whitespace with .trim(),
//    and store the result in a variable called fullName

// d. Read regNumberField.value, remove extra whitespace with .trim(),
//    and store the result in a variable called regNumber

// e. Read studentClassField.value, remove extra whitespace with .trim(),
//    and store the result in a variable called studentClass

// f. Read passwordField.value (do NOT trim it) and store it in a
//    variable called password

// g. Read studentIdField.value and store it in a variable called id
//    (this will be an empty string if we are adding a new student, or a
//    real id if we are editing an existing one)

// h. Check whether fullName is empty OR regNumber is empty OR studentClass
//    is empty. If any of them are missing:
//      - set formMessage.textContent to
//        "Full name, registration number and class are required."
//      - set formMessage.className to "message error"
//      - use "return" to stop here

// i. Check "if (!id && !password)" — this means we are adding a NEW student
//    but no password was typed in. If true:
//      - set formMessage.textContent to "A password is required for a new student."
//      - set formMessage.className to "message error"
//      - use "return" to stop here

// j. Read the saved login token out of local storage
//    (call localStorage.getItem("token")) and store it in a variable called token

// k. Start a try block.

//    Inside the try block:

//    i. Check "if (id)" — this is true when we are editing an existing student.

//       IF id IS TRUE (we are editing):

//       1. Create an object called body containing three properties:
//          fullName, regNumber, and studentClass, using the variables above.
//          Example shape: { fullName: fullName, regNumber: regNumber, studentClass: studentClass }

//       2. Check "if (password)". If the admin typed a new password:
//          - add a "password" property to the body object, set to the password variable

//       3. Use "await fetch(...)" to send a request to the URL
//          `/api/admin/students/${id}` (a template literal using the id variable)
//          The options object needs:
//            - method: "PUT"
//            - headers: an object with "Content-Type" set to "application/json"
//              AND "Authorization" set to `Bearer ${token}`
//            - body: JSON.stringify(body)
//          Store what fetch returns in a variable called response

//       4. Use "await response.json()" to read the response body.
//          Store the result in a variable called data

//       5. Check "if (!response.ok)". If true:
//          - set formMessage.textContent to data.message, or, if missing,
//            "Could not update student."
//          - set formMessage.className to "message error"
//          - use "return" to stop here

//       6. Set formMessage.textContent to "Student updated."
//       7. Set formMessage.className to "message success"

//       ELSE (id IS FALSE — we are adding a new student):

//       1. Use "await fetch(...)" to send a request to the URL
//          "/api/admin/students"
//          The options object needs:
//            - method: "POST"
//            - headers: an object with "Content-Type" set to "application/json"
//              AND "Authorization" set to `Bearer ${token}`
//            - body: JSON.stringify() of an object containing fullName,
//              regNumber, studentClass, and password
//          Store what fetch returns in a variable called response

//       2. Use "await response.json()" to read the response body.
//          Store the result in a variable called data

//       3. Check "if (!response.ok)". If true:
//          - set formMessage.textContent to data.message, or, if missing,
//            "Could not add student."
//          - set formMessage.className to "message error"
//          - use "return" to stop here

//       4. Set formMessage.textContent to "Student added."
//       5. Set formMessage.className to "message success"

//    ii. After the if/else above (whichever branch ran), call resetForm()

//    iii. Then call loadStudents() again, so the list refreshes and shows the change

// l. After the try block, add a "catch (err)" block.
//    Inside it:
//      - set formMessage.textContent to "Could not reach the server. Please try again."
//      - set formMessage.className to "message error"


// ============================================================
// PART 6: A function that deletes one student
// ============================================================

// 7. Define an "async function" called deleteStudent that takes one
//    parameter, called student.

// Inside deleteStudent, do the following, IN THIS ORDER:

// a. Call confirm() with the message
//    `Delete ${student.fullName}? This cannot be undone.`
//    Store what confirm() returns (true or false) in a variable called confirmed

// b. Check "if (!confirmed)". If the admin clicked Cancel:
//    - use "return" to stop here, without deleting anything

// c. Read the saved login token out of local storage and store it in a
//    variable called token

// d. Start a try block.

//    Inside the try block:

//    i. Use "await fetch(...)" to send a request to the URL
//       `/api/admin/students/${student._id}` (a template literal)
//       The options object needs:
//         - method: "DELETE"
//         - headers: an object with "Authorization" set to `Bearer ${token}`
//       Store what fetch returns in a variable called response

//    ii. Use "await response.json()" to read the response body.
//        Store the result in a variable called data

//    iii. Check "if (!response.ok)". If true:
//         - set formMessage.textContent to data.message, or, if missing,
//           "Could not delete student."
//         - set formMessage.className to "message error"
//         - use "return" to stop here

//    iv. Set formMessage.textContent to `${student.fullName} was deleted.`
//    v. Set formMessage.className to "message success"
//    vi. Call loadStudents() again, so the deleted student disappears from the list

// e. After the try block, add a "catch (err)" block.
//    Inside it:
//      - set formMessage.textContent to "Could not reach the server. Please try again."
//      - set formMessage.className to "message error"


// ============================================================
// PART 7: Load the students as soon as the page opens
// ============================================================

// 8. Call loadStudents() one time, on its own, at the very bottom of the file
//    (not inside any function or event listener), so the list is filled in
//    as soon as this page loads.
