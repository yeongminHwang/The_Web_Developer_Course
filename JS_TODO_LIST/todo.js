let command = "";
let todo_list = ["Collect Chicken Eggs", "Clean Letter Box"];

do {
  if (command == "new") {
    const newTodo = prompt("Ok, what is the new todo?");
    todo_list.push(newTodo);
    console.log(`${newTodo} added to the list!`);
  } else if (command == "list") {
    console.log("*****************");
    for (var i = 0; i < todo_list.length; i++) {
      console.log(`${i} : ${todo_list[i]}`);
    }
    console.log("*****************");
  } else if (command == "delete") {
    const delete_index = parseInt(prompt("Ok, enter an index to delete"));
    if (!Number.isNaN(delete_index)) {
      const deleted = todo_list.splice(delete_index, 1);
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log("Unknown index");
    }
  }

  command = prompt("What would you like to do?");
} while (command !== "quit" && command !== "q");

console.log("OK QUIT THE APP!");
