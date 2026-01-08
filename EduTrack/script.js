let currentRole = "";
const students = [];

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "teacher" && pass === "1234") {
        currentRole = "Teacher";
    } else if(user === "student" && pass === "1234") {
        currentRole = "Student";
    } else {
        alert("Invalid login");
        return;
    }

    document.getElementById("login").style.display = "none";
    document.getElementById("system").style.display = "block";
    document.getElementById("roleText").innerText = "Logged in as: " + currentRole;

    if(currentRole === "Teacher") {
        document.getElementById("teacherArea").style.display = "block";
    } else {
        document.getElementById("teacherArea").style.display = "none";
    }

    displayStudents();
}

function logout() {
    document.getElementById("system").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function addStudent() {
    let name = document.getElementById("studentName").value;
    let grade = document.getElementById("grade").value;
    let attendance = document.getElementById("attendance").value;

    if(name === "" || grade === "" || attendance === "") {
        alert("Please fill all fields");
        return;
    }

    let status = grade >= 75 ? "Pass" : "Fail";

    students.push({name, grade, attendance, status});
    displayStudents();

    document.getElementById("studentName").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("attendance").value = "";
}

function displayStudents() {
    let table = document.getElementById("records");
    table.innerHTML = "";

    for(let i = 0; i < students.length; i++) {
        table.innerHTML += `
            <tr>
                <td>${students[i].name}</td>
                <td>${students[i].grade}</td>
                <td>${students[i].attendance}</td>
                <td>${students[i].status}</td>
            </tr>
        `;
    }
}
