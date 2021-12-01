import { Student } from './student.js';

const students: Student[] = [];

//function to create student object and add to students array
const addStudent = (form:{firstName:string, lastName:string, course:string, grade:string}):void => {
    students.push(new Student(form.firstName, form.lastName, form.course, form.grade));
    showStudents()
}

//function to remove student object from students array
const removeStudent = (index:number):void => {
    students.splice(index, 1);
    showStudents()
}

//function to refresh student table with data from students array
const showStudents = ():void => {
    (document.querySelector('.grades tbody'))!.innerHTML = students.map((student, index) => `
    <tr class="gradeRow" index=${index}>
        <td>${student.isPassing() ? '<i class="far fa-laugh-beam"></i>':'<i class="far fa-sad-cry"></i>'}<input type="text" class="studentName" value="${student.firstName} ${student.lastName}" disabled /></td>
        <td><input type="text" class="studentCourse" value="${student.course}" disabled /></td>
        <td><input type="text" class="studentGrade" value="${student.grade}" disabled size="5" /></td>
        <td><input type="button" id="deleteGrade" class="studentGrade" index=${index} value="X"></td>
    </tr>
    `).join('');
}

//function to sort strings in ascending order
const sortyMcSorter = (a: string, b: string):number => { 
    if(a > b) 
        return 1;
    else if(a < b)
        return -1;
    else
        return 0;
}

document.addEventListener('DOMContentLoaded', (e) => {

    // Adding dummy data
    addStudent({firstName: "Jacob", lastName: "Thomas", course: "Geography", grade: "A"});
    addStudent({firstName: "Smitha", lastName: "Varkey", course: "PE", grade: "87"});
    addStudent({firstName: "Bob", lastName: "Dole", course: "Math", grade: "66"});
    addStudent({firstName: "Chaz", lastName: "Ryan", course: "Algebra", grade: "55"});
    addStudent({firstName: "Nick", lastName: "Patel", course: "Trig", grade: "99"});
    addStudent({firstName: "Jacob", lastName: "Thomas", course: "US History", grade: "70"});

    //handle navigation clicks
    (document.querySelector('nav'))!.addEventListener('click', (e) => {
            switch(e.target.id){
                case 'viewLink':
                    (document.querySelector('#newGrade'))!.style.display = "none";
                    (document.querySelector('.grades'))!.style.display = "table";
                    (document.querySelector('#viewLink'))!.classList.add("selected");
                    (document.querySelector('#addLink'))!.classList.remove("selected");
                    break;
                case 'addLink':
                    document.querySelector('.grades').style.display = "none";
                    document.querySelector('#newGrade').style.display = "block";
                    document.querySelector('#addLink').classList.add("selected");
                    document.querySelector('#viewLink').classList.remove("selected");
                    break;
            }
    })

    //handle non-navigation (ie sorting) clicks
    document.querySelector('main').addEventListener('click', (e) => {
        switch(e.target.id){
            case 'gradeSort':
                students.sort((a,b)=>sortyMcSorter(a.grade, b.grade));
                showStudents()
                break;
            case 'courseSort':
                students.sort((a,b)=>sortyMcSorter(a.course, b.course));
                showStudents()
                break;
                case 'nameSort':
                    students.sort((a,b)=>sortyMcSorter(a.lastName, b.lastName));
                    showStudents()
                    break;
            case 'deleteGrade':
                removeStudent(e.target.getAttribute("index"));
                break;
        }
    })

    document.querySelector('#newGrade').addEventListener('submit', (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        addStudent(data);
        e.target.reset()
    })

});