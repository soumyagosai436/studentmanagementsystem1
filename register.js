let students = [];

function register() {
    let name = prompt("Enter Student Name:");
    let roll = prompt("Enter Roll Number:");

    students.push({name, roll});

    alert("Student Registered Successfully!");
}
