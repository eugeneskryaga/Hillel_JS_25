// TASK #1

// Завдання: викликати sayName так,
// щоб вона надрукувала "Hero: Link"

const hero = {
  name: "Link",
};

function sayName() {
  console.log("Hero:", this.name);
}

sayName.call(hero);

// TASK #2

// Завдання: викликати introduce так, щоб вийшло:
// "Shadow — level 27, rank Gold"

const player = {
  nickname: "Shadow",
};

function introduce(level, rank) {
  console.log(`${this.nickname} — level ${level}, rank ${rank}`);
}

introduce.call(player, "27", "Gold");

// TASK #3

// Завдання: викликати sum для calc,
// передавши nums через apply

const calc = {
  name: "calc1",
};

function sum(a, b, c) {
  console.log(`${this.name} result =`, a + b + c);
}

const nums = [4, 2, 10];

sum.apply(calc, [...nums]);

// TASK #4

// Завдання: створити нову функцію correctStart,
// у якої this завжди буде robot (через bind),
// і викликати її.

const robot = {
  id: "RX-77",
  start() {
    console.log("Robot", this.id, "started");
  },
};

const startFn = robot.start;

const correctStart = startFn.bind(robot)();

// TASK #5

// Завдання:
// правильно викликати discountFn, щоб змінити shop.price (до 80),
// а потім викликати shop.showPrice(), щоб вивело:
// "GigaShop price: 80"

const shop = {
  title: "GigaShop",
  price: 100,
  showPrice() {
    console.log(this.title + " price:", this.price);
  },
};

function applyDiscount(percent) {
  this.price = this.price - this.price * (percent / 100);
}

const discountFn = applyDiscount.call(shop, 20);
shop.showPrice();
