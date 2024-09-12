let array = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"]

for (let i = 0; i < array.length; i++) {
    console.log(`Студент ${array[i]}, ваш порядковый номер: ${i}`);
}

function findLongestName(students) {
    let [longName, longNameLen] = ['', 0];

    for (let i = 0; i < students.length; i++) {
        if (students[i].length > longNameLen) {
            [longName, longNameLen] = [students[i], students[i].length];
        }
    }

    return longName;
}

console.log(findLongestName(array))
