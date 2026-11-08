function search() {
    let roll = prompt("Enter Roll Number:");

    let s = students.find(x => x.roll === roll);

    if (s)
        alert("Student Name: " + s.name);
    else
        alert("Student Not Found!");
}

