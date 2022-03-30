name_of_the_studt_array=[];
function submit()

var name_1 = document.getElementById("name_of_the_student_1").value;
var name_2 = document.getElementById("name_of_the_student_2").value;
var name_3 = document.getElementById("name_of_the_student_3").value;
var name_4 = document.getElementById("name_of_the_student_4").value;
name_of_the_studt_array.push(name_1)
name_of_the_studt_array.push(name_2)
name_of_the_studt_array.push(name_3)
name_of_the_studt_array.push(name_4)
console.log(name_of_the_studt_array);
document.getElementById("display_name").innerHTML = name_of_the_studt_array;
document.getElementById("submit_button").style.display = "none";
document.getElementById("submit_button").style.display = "inline-block";
function Sort();
console.log(name_of_the_studt_array);
document.getElementById("display_name").innerHTML = name_of_the_studt_array;
var display_studt_array = [];
for (var j = 1; j <= 4; j++)
{

    var name_of_student = document.getElementById("name_of_the_student"+j).value;
    console.log(name_of_student);
    name_of_the_studt_array.push(name_of_student);
    console.log(name_of_the_studt_array);
    var lenth_of_name_of_student_array = name_of_the_studt_array.length;
    console.log(lenth_of_name_of_student_array);

}
for (var k = 0; k<lenth_of_name_of_student_array; k++)
{
    display_studt_array.push("<h4>NAME - "+ name_of_the_studt_array[k] + "</h4>");
    console.log(display_studt_array);
    var remove_commas = display_studt_array.join("");
    console.log(remove_commas);
}

