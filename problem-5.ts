interface Student {
    name: string,
    age: number,
    grades: number[]
}

const calculateAverageGrade = (args: Student): number => {
    const sum = args.grades.reduce((accumulator: number, currenctValue: number) => (accumulator + currenctValue), 0);
    const average = sum / args.grades.length;
    return average;
}

const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90]
};

calculateAverageGrade(student1);