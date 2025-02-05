let ft_list = document.getElementById("ft_list");
let button = document.getElementById("button");

function createTodoNode(name, todo) {
    let new_node = document.createElement("div");
    new_node.textContent = todo;

    new_node.addEventListener("click", function () {
        let confirmDelete = confirm("Do you want to delete this to-do?");
        if (confirmDelete) {
            new_node.remove();
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
        }
    });
    ft_list.prepend(new_node);
}

window.addEventListener("load", function () {
    let cookies = document.cookie.split(";");
    cookies.forEach((cookie) => {
        let [name, value] = cookie.trim().split("=");
        if (value) {
            createTodoNode(name, value);
        }
    });
});

button.addEventListener("click", function () {
    let todo = prompt("Add new to-do");
    if (todo) {
        let name = Date.now();
        document.cookie = `${name}=${todo}`;
        createTodoNode(name, todo);
    }
});
