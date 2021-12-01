export class Student {
   
    grade: string;

    constructor(public firstName: string, public lastName: string, public course: string, grade:  (number | string)){
        this.grade = this.standardizeGrade(grade.toString());
    }

    isPassing = (): boolean => {
        return this.grade < 'D';
    }

     standardizeGrade = (stringGrade:string): string => {
        let standardGrade: string = "I", grade = +stringGrade;
        if(grade >= 0 && grade <= 100){
            if(grade < 70){
                standardGrade = "D";
            }else if(grade < 80){
                standardGrade = "C";
            }else if(grade < 90){
                standardGrade = "B";
            }else{
                standardGrade = "A";
            }
        }else if(stringGrade.toUpperCase() >= "A" && stringGrade.toUpperCase() <= "D"){
            standardGrade = stringGrade.toUpperCase();
        }
        return standardGrade;
    }
}