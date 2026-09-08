const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhOTU3M2NhZmExOWZjNzRkMDg5NmUwMyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc4ODg4Mzg4OCwiZXhwIjoxNzg4ODk4Mjg4fQ.I5zD5AdxzGDyl1EIBfJxCiVSdpIcyV5A6Rvm1ct9Y8M";
// This script runs on the "Manage Students" admin page.
// It loads the list of students, and adds/edits/deletes students.
// The same <form> on the page is reused for both "add" and "edit".

const studentForm = document.getElementById("studentForm");
const studentIdField = document.getElementById("studentId");
const fullNameField = document.getElementById("fullName");
const regNumberField = document.getElementById("regNumber");
const studentClassField = document.getElementById("studentClass");
const passwordField = document.getElementById("password");
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const cancelEditBtn = document.getElementById("cancelEditBtn");
const formMessage = document.getElementById("formMessage");
const studentList = document.getElementById("studentList");

// ============================================================
// PART 1: Load and display all students
// ============================================================

async function loadStudents() {
  try {
    // const token = localStorage.getItem("token");

    const response = await fetch(
      "https://bethesda-cbt-studet-project.onrender.com/api/admin/students",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const students = await response.json();
    // console.log(students);
    if (!response.ok) {
      studentList.textContent = students.message || "Could not load students.";
      return;
    }

    if (students.length === 0) {
      studentList.textContent = "No students added yet.";
      return;
    }

    studentList.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
      const student = students[i];

      const item = document.createElement("div");
      item.className = "list-item";

      // Student name
      const nameLine = document.createElement("p");
      nameLine.textContent = `Name: ${student.fullName}`;
      item.appendChild(nameLine);

      // Registration number
      const regLine = document.createElement("p");
      regLine.textContent = `Reg. No: ${student.regNumber}`;
      item.appendChild(regLine);

      // Class
      const classLine = document.createElement("p");
      classLine.textContent = `Class: ${student.studentClass}`;
      item.appendChild(classLine);

      // Edit button
      const editBtn = document.createElement("button");
      editBtn.type = "button";
      editBtn.className = "secondary";
      editBtn.textContent = `Edit ${student.fullName}`;

      editBtn.addEventListener("click", function () {
        startEdit(student);
      });

      item.appendChild(editBtn);

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "danger";
      deleteBtn.textContent = `Delete ${student.fullName}`;

      deleteBtn.addEventListener("click", function () {
        deleteStudent(student);
      });
      item.appendChild(deleteBtn);

      // Add complete student item to list
      studentList.appendChild(item);
    }
  } catch (err) {
    studentList.textContent = "Could not reach the server. Please try again.";
  }
}
loadStudents();
// ============================================================
// PART 2: Start editing a student
// ============================================================

function startEdit(student) {
  studentIdField.value = student._id;
  fullNameField.value = student.fullName;
  regNumberField.value = student.regNumber;
  studentClassField.value = student.studentClass;

  // Blank means the existing password will remain unchanged
  passwordField.value = "";

  formTitle.textContent = `Edit Student: ${student.fullName}`;
  submitBtn.textContent = "Save Changes";
  cancelEditBtn.hidden = false;

  fullNameField.focus();
}

// ============================================================
// PART 3: Reset form to Add Student mode
// ============================================================

function resetForm() {
  studentForm.reset();

  studentIdField.value = "";

  formTitle.textContent = "Add New Student";
  submitBtn.textContent = "Add Student";
  cancelEditBtn.hidden = true;
}

// ============================================================
// PART 4: Cancel editing
// ============================================================

cancelEditBtn.addEventListener("click", function () {
  resetForm();
});

// ============================================================
// PART 5: Submit form
// Handles BOTH adding and editing
// ============================================================

studentForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Clear previous message
  formMessage.textContent = "";
  formMessage.className = "";

  // Read form values
  const fullName = fullNameField.value.trim();
  const regNumber = regNumberField.value.trim();
  const studentClass = studentClassField.value.trim();

  // Do NOT trim password
  const password = passwordField.value;

  // Empty when adding; contains student ID when editing
  const id = studentIdField.value;

  // ---------- Validation ----------

  if (!fullName || !regNumber || !studentClass) {
    formMessage.textContent =
      "Full name, registration number and class are required.";

    formMessage.className = "message error";
    return;
  }

  // Password is required only when creating a new student
  if (!id && !password) {
    formMessage.textContent = "A password is required for a new student.";

    formMessage.className = "message error";
    return;
  }

  // const token = localStorage.getItem("token");

  try {
    // ========================================================
    // EDIT EXISTING STUDENT
    // ========================================================

    if (id) {
      const body = {
        fullName: fullName,
        regNumber: regNumber,
        studentClass: studentClass,
      };

      // Only send password if admin entered a new one
      if (password) {
        body.password = password;
      }

      const response = await fetch(
        ` https://bethesda-cbt-studet-project.onrender.com/api/admin/students/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        formMessage.textContent = data.message || "Could not update student.";

        formMessage.className = "message error";
        return;
      }

      formMessage.textContent = "Student updated.";

      formMessage.className = "message success";

      // ========================================================
      // ADD NEW STUDENT
      // ========================================================
    } else {
      const response = await fetch(
        " https://bethesda-cbt-studet-project.onrender.com/api/admin/students",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            fullName: fullName,
            regNumber: regNumber,
            studentClass: studentClass,
            password: password,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        formMessage.textContent = data.message || "Could not add student.";

        formMessage.className = "message error";
        return;
      }

      formMessage.textContent = "Student added.";
      formMessage.className = "message success";
    }

    // Reset form and refresh list
    resetForm();
    await loadStudents();
  } catch (err) {
    formMessage.textContent = "Could not reach the server. Please try again.";

    formMessage.className = "message error";
  }
});

// ============================================================
// PART 6: Delete a student
// ============================================================
async function deleteStudent(student) {
  const confirmed = confirm(
    `Delete ${student.fullName}? This cannot be undone.`,
  );

  if (!confirmed) {
    return;
  }

  // const token = localStorage.getItem("token");

  try {
    const response = await fetch(
      `https://bethesda-cbt-studet-project.onrender.com/api/admin/students/${student._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      formMessage.textContent = data.message || "Could not delete student.";

      formMessage.className = "message error";
      return;
    }

    formMessage.textContent = `${student.fullName} was deleted.`;

    formMessage.className = "message success";

    // Refresh the student list
    await loadStudents();
  } catch (err) {
    formMessage.textContent = "Could not reach the server. Please try again.";

    formMessage.className = "message error";
  }
} 