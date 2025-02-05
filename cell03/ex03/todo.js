let ft_list = document.getElementById("ft_list");
let button = document.getElementById("button");
let todoID = 0;

function createTodoNode(name, todo) {
    let new_node = document.createElement("div");
    new_node.textContent = todo;

    new_node.addEventListener("click", function () {
        let confirmDelete = confirm("Do you want to delete this to-do?");
        if (confirmDelete) {
            new_node.remove();
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`; //ลบ cookie
        }
    });

    ft_list.prepend(new_node);
}

window.addEventListener("load", function () { //โหลด cookie ตอนหน้าโหลด
    let cookies = document.cookie.split(";");
    cookies.forEach((cookie) => {
        let [name, value] = cookie.trim().split("=");
        if (name.startsWith("todo_") && value) {
            createTodoNode(name, value);
        }
    });
});

button.addEventListener("click", function () {
    let todo = prompt("Add new to-do");
    if (todo) {
        let name = "todo_" + todoID.toString();
        document.cookie = `${name}=${todo}`;
        todoID++;

        createTodoNode(name, todo);
    }
});
