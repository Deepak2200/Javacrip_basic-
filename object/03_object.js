const course  = {
    course_name :  "javascript_basic",
    course_instrctor : "hitesh choudhary",
    course_price : 999
}

// Always we are using course.course but now use other way to handle this 

//this way we can avoid the big names
const {course_name} = course
console.log(course_name) // this is called destructuring assignment

// if you want another name for the variable then you can use this way
const {course_name : cn} = course
console.log(cn) // this will print the value of course_name with the new variable name cn


{   
    "name_id": "Deepak", 
    "course1": "javascript_basic",
    price: 999
} // this is an object literal
