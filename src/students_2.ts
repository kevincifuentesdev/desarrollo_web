interface Materia {
    name: string;
    note: number;
}

interface Student {
    name: string;
    semester: number;
    courses: Materia[];
}

const students: Student[] = [
    {
        name: "Ana Gómez",
        semester: 3,
        courses: [
            { name: "Matemáticas", note: 4.5 },
            { name: "Programación", note: 5.0 },
            { name: "Física", note: 3.8 }
        ]
    },
    {
        name: "Carlos Pérez",
        semester: 5,
        courses: [
            { name: "Bases de Datos", note: 4.0 },
            { name: "Programación", note: 3.5 },
            { name: "Redes", note: 4.2 }
        ]
    },
    {
        name: "Lucía Fernández",
        semester: 2,
        courses: [
            { name: "Cálculo", note: 3.0 },
            { name: "Álgebra", note: 4.0 }
        ]
    }
];

let totalAveragesSum: number = 0;

students.forEach(student => {
    const notesSum = student.courses.reduce((acc, course) => acc + course.note, 0);

    const studentAvg = notesSum / student.courses.length;

    totalAveragesSum += studentAvg;

    if (studentAvg > 3.5) {
        console.log(`- ${student.name} (Promedio: ${studentAvg.toFixed(2)})`);
    }

    console.log(`Estudiante: ${student.name} | Promedio: ${studentAvg.toFixed(2)}`);
});

const generalAvg: number = totalAveragesSum / students.length;

console.log(`El promedio de todos los estudiantes es: ${generalAvg.toFixed(2)}`);


console.log('Promedios mayores a 3.5:')
students.forEach(student => {
    const notesSum = student.courses.reduce((acc, course) => acc + course.note, 0);

    const studentAvg = notesSum / student.courses.length;

    if (studentAvg > 3.5) {
        console.log(`- ${student.name} (Promedio: ${studentAvg.toFixed(2)})`);
    }
});
