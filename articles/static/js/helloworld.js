var groupmates = [
  { name: "Александр", surname: "Иванов", group: "БВТ1702", marks: [4, 3, 5] },
  { name: "Иван", surname: "Петров", group: "БСТ1702", marks: [4, 4, 4] },
  { name: "Кирилл", surname: "Смирнов", group: "БАП1801", marks: [5, 5, 5] },
];

// Функция для добавления пробелов справа (выравнивание)
var rpad = function (str, length) {
  str = str.toString();
  while (str.length < length) {
    str = str + " ";
  }
  return str;
};

// Функция вывода таблицы студентов
var printStudents = function (students) {
  console.log(
    rpad("Имя", 15),
    rpad("Фамилия", 15),
    rpad("Группа", 10),
    rpad("Оценки", 20),
  );
  for (var i = 0; i < students.length; i++) {
    console.log(
      rpad(students[i]["name"], 15),
      rpad(students[i]["surname"], 15), // Исправил опечатку методички
      rpad(students[i]["group"], 10),
      rpad(students[i]["marks"].join(", "), 20),
    );
  }
  console.log("\n");
};

// ЗАДАНИЕ 1: Фильтрация по группе
var filterByGroup = function (students, groupName) {
  var result = [];
  for (var i = 0; i < students.length; i++) {
    if (students[i]["group"] === groupName) {
      result.push(students[i]);
    }
  }
  return result;
};

// ЗАДАНИЕ 2: Фильтрация по среднему баллу (выше заданного)
var filterByAverageMark = function (students, minAverage) {
  var result = [];
  for (var i = 0; i < students.length; i++) {
    var marks = students[i]["marks"];
    var sum = 0;
    for (var j = 0; j < marks.length; j++) {
      sum += marks[j];
    }
    var average = sum / marks.length;
    if (average > minAverage) {
      result.push(students[i]);
    }
  }
  return result;
};

// --- ТЕСТИРОВАНИЕ (вывод в консоль) ---
console.log("Все студенты:");
printStudents(groupmates);

var searchGroup = prompt(
  "Введите группу для фильтрации (например, БВТ1702):",
  "БВТ1702",
);
if (searchGroup) {
  console.log("Студенты группы " + searchGroup + ":");
  printStudents(filterByGroup(groupmates, searchGroup));
}

var minMark = parseFloat(
  prompt("Введите минимальный средний балл (например, 4.5):", "4.5"),
);
if (!isNaN(minMark)) {
  console.log("Студенты со средним баллом выше " + minMark + ":");
  printStudents(filterByAverageMark(groupmates, minMark));
}
