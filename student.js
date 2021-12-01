export class Student {
    constructor(firstName, lastName, course, grade) {
        this.isPassing = () => {
            return this.grade < 'D';
        };
        this.standardizeGrade = (stringGrade) => {
            let standardGrade = "I", grade = +stringGrade;
            if (grade >= 0 && grade <= 100) {
                if (grade < 70) {
                    standardGrade = "D";
                }
                else if (grade < 80) {
                    standardGrade = "C";
                }
                else if (grade < 90) {
                    standardGrade = "B";
                }
                else {
                    standardGrade = "A";
                }
            }
            else if (stringGrade.toUpperCase() >= "A" && stringGrade.toUpperCase() <= "D") {
                standardGrade = stringGrade.toUpperCase();
            }
            return standardGrade;
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.course = course;
        this.grade = this.standardizeGrade(grade.toString());
    }
}
