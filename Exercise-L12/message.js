//arrow function
const message = () => {
    const header = "<div style='text-align:center;'><h1>Personal Information</h1></div>";
    const name = "Joshua";
    const age = 33;
    const status = "Busy";
    const major = "Information System";
    const faculty = "Computer Science";
    const address = "Jln. Manado-Kema, Kauditan satu";
    const interests = "Programmer, Robotics";
    return header +'<hr> <strong>Name: </strong>' + name + '<br> <strong>Age : </strong>' + age + '<br> <strong> Status: </strong>' + status +'<br> <strong> Major: </strong>' + major +'<br> <strong> Faculty: </strong>' + faculty +'<br> <strong> Address: </strong>' + address +'<br> <strong> interests: </strong>' + interests;
}

//export
export default message;