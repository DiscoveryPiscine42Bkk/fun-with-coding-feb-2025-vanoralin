$(document).ready(function () {
    function createTodoNode(name, todo) {
        let new_node = $('<div></div>').text(todo);

        new_node.on('click', function () {
            if (confirm("Do you want to delete this to-do?")) {
                new_node.remove();
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
            }
        });

        $('#ft_list').prepend(new_node);
    }

    function loadTodos() {
        let cookies = document.cookie.split(";");
        cookies.forEach((cookie) => {
            let [name, value] = cookie.trim().split("=");
            if (value) {
                createTodoNode(name, value);
            }
        });
    }

    $('#button').on('click', function () {
        let todo = prompt("Add new to-do");
        if (todo) {
            let name = Date.now();
            document.cookie = `${name}=${todo}`;
            createTodoNode(name, todo);
        }
    });

    loadTodos();
});