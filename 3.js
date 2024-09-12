let user = {
    name: "Иван",
    age: 10,
    email: "poc@mail.ru",
};

function displayUserInfo(user) {
    console.log(`Имя: ${user.name}, Возраст: ${user.age}, Email: ${user.email}`);
    user.greet = function() {
        console.log(`Привет, ${user.name}!`);
    }
}

displayUserInfo(user);
user.greet();
