var students = [{
    id: 1, name: 'Dima',
    marks: [{name: 'Physics', mark: 3.4}, {name: 'Math', mark: 4.5}, {name: 'Informatics', mark: 4.2}]
}, {
    id: 2, name: 'Denis',
    marks: [{name: 'Physics', mark: 3.2}, {name: 'Math', mark: 4.2}, {name: 'Informatics', mark: 4.3}]
}, {
    id: 3, name: 'Helen',
    marks: [{name: 'Physics', mark: 4.2}, {name: 'Math', mark: 3.8}, {name: 'Informatics', mark: 4.5}]
}, {
    id: 4, name: 'Vasya',
    marks: [{name: 'Physics', mark: 4.8}, {name: 'Math', mark: 3.8}, {name: 'Informatics', mark: 4.0}]
}, {
    id: 4, name: 'Petya',
    marks: [{name: 'Physics', mark: 4.6}, {name: 'Math', mark: 3.6}, {name: 'Informatics', mark: 4.0}]
}]

var names = [];

function setAvarage() {
    for(var student of students) {
        var sum = student.marks.reduce(function(acc, markObj) {
            return acc + markObj.mark;
        }, 0)
        var avarage = sum / student.marks.length;
        student.avarage = +avarage.toFixed(2);
    }
}

function getAvarage() {
    setAvarage();
    var sum = students.reduce(function(acc, student) {
        return acc + student.avarage;
    }, 0)
    var avarage = sum / students.length
    alert('Среднее арифм. по студентам: ' + (+avarage.toFixed(2)));
    //выдает на экран ср. арифм. оценку по всем студентам (взять avarage у каждого студента, сложить и разделить на к-во студентов)
}

function setNames() {
    for(var student of students) {
        names.push(student.name);
    }
    //добавить в массив names (объявление на 18й строке) все имена из массива студентов
}

function getMax() {
    setAvarage();
    // var highestMark = 0;
    // var highestName = '';
    // for(var student of students) {
    //     if(student.avarage > highestMark) {
    //         highestMark = student.avarage;
    //         highestName = student.name;
    //     }
    // }
    // alert(highestName);
    var sortedStudents = students.sort(function(studentA, studentB) {
        return studentB.avarage - studentA.avarage; //0 1 -1
    })
    console.log(sortedStudents);
    alert(students[0].name);
    //вывести на экран имя студента с максимальной оценкой
}

// function checkName() {
//     setNames();
//     var name = prompt('Введите имя');
//     if(names.indexOf(name) > -1) {
//         return true;
//     }
//     return false;
//     //здесь вводим через prompt имя и проверяем есть ли оно в массиве names (функция возвращает true или false)
// }

function checkName() {
    setNames();
    var name = prompt('Введите имя');
    for(var student of students) {
        var studentName = student.name.trim().toLowerCase();
        if(studentName === name.toLowerCase().trim()) {
            return true;
        }
    }
    return false;
    //здесь вводим через prompt имя и проверяем есть ли оно в массиве names (функция возвращает true или false)
}