// This script runs on the Admin "View Results" page.
// It fetches every submitted result from the server and displays them in a table.

// Find the area where results will be shown
const resultsArea = document.getElementById("resultsArea");


// ============================================================
// PART 1: A function that loads and displays every result
// ============================================================

// 1. Define an "async function" called loadResults that takes no parameters.

// Inside loadResults, do the following, IN THIS ORDER:

// a. Read the saved login token out of local storage
//    (call localStorage.getItem("token")) and store it in a variable called token

// b. Start a try block.

//    Inside the try block:

//    i. Use "await fetch(...)" to send a request to the URL "/api/admin/results"
//       The options object needs:
//         - method: "GET"
//         - headers: an object with "Authorization" set to `Bearer ${token}`
//       Store what fetch returns in a variable called response

//    ii. Use "await response.json()" to read the response body.
//        Store the result in a variable called results

//    iii. Check "if (!response.ok)". If true:
//         - set resultsArea.textContent to results.message, or, if missing,
//           "Could not load results."
//         - use "return" to stop here

//    iv. Check "if (results.length === 0)". If true:
//        - set resultsArea.textContent to "No results yet."
//        - use "return" to stop here

//    v. Create a new <table> element using document.createElement("table")
//       Store it in a variable called table

//    vi. Create a new <caption> element using document.createElement("caption")
//        Store it in a variable called caption
//        Set caption.textContent to "All submitted exam results"
//        Add caption inside table using table.appendChild(caption)

//    vii. Create a new <thead> element. Store it in a variable called thead
//    viii. Create a new <tr> element. Store it in a variable called headerRow

//    ix. Create an array called columnNames containing these seven strings,
//        in this exact order:
//        "Student", "Reg. No", "Class", "Exam", "Subject", "Score", "Submitted"

//    x. Use a "for" loop, with a counter "i" from 0 up to (but not
//       including) columnNames.length. Inside the loop:
//       - create a <th> element using document.createElement("th")
//       - call th.setAttribute("scope", "col")
//       - set th.textContent to columnNames[i]
//       - add th inside headerRow using headerRow.appendChild(th)

//    xi. Add headerRow inside thead using thead.appendChild(headerRow)
//    xii. Add thead inside table using table.appendChild(thead)

//    xiii. Create a new <tbody> element. Store it in a variable called tbody

//    xiv. Use a "for" loop, with a counter "i" from 0 up to (but not
//         including) results.length, to go through every result one at a
//         time. Inside the loop:

//         1. Get the current result: results[i]. Store it in a variable
//            called result

//         2. Work out studentName: if result.student exists, use
//            result.student.fullName, otherwise use the text "Unknown"

//         3. Work out regNumber: if result.student exists, use
//            result.student.regNumber, otherwise use the text "-"

//         4. Work out studentClass: if result.student exists, use
//            result.student.studentClass, otherwise use the text "-"

//         5. Work out examTitle: if result.exam exists, use
//            result.exam.title, otherwise use the text "Deleted exam"

//         6. Work out examSubject: if result.exam exists, use
//            result.exam.subject, otherwise use the text "-"

//         7. Convert result.submittedAt into a readable date/time using
//            "new Date(result.submittedAt).toLocaleString()"
//            Store it in a variable called date

//         8. Create a new <tr> element. Store it in a variable called tr

//         9. Create an array called cellValues containing, in this exact
//            order: studentName, regNumber, studentClass, examTitle,
//            examSubject, then a template literal
//            `${result.score} out of ${result.totalQuestions}`, then date

//         10. Use a "for" loop, with a counter "j" from 0 up to (but not
//             including) cellValues.length. Inside the loop:
//             - create a <td> element using document.createElement("td")
//             - set td.textContent to cellValues[j]
//             - add td inside tr using tr.appendChild(td)

//         11. Add tr inside tbody using tbody.appendChild(tr)

//    xv. Add tbody inside table using table.appendChild(tbody)

//    xvi. Clear resultsArea by setting resultsArea.innerHTML to an empty string ""

//    xvii. Add table inside resultsArea using resultsArea.appendChild(table)

// c. After the try block, add a "catch (err)" block.
//    Inside it, set resultsArea.textContent to
//    "Could not reach the server. Please try again."


// ============================================================
// PART 2: Load the results as soon as the page opens
// ============================================================

// 2. Call loadResults() one time, on its own, at the very bottom of the
//    file, so the table is filled in as soon as this page loads.
