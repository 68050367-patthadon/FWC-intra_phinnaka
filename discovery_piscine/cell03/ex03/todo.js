const list = document.getElementById("ft_list");
const newButton = document.getElementById("new");

function saveTasks() {
    let tasks = [];

    for (let item of list.children) {
        tasks.push(item.textContent);
    }

    document.cookie = "tasks=" + JSON.stringify(tasks) + ";path=/";
}

function createTask(text) {
    const item = document.createElement("div");

    item.textContent = text;

    item.onclick = function() {
        if (confirm("Do you want to remove this TO DO?")) {
            item.remove();
            saveTasks();
        }
    };

    list.insertBefore(item, list.firstChild);
}

newButton.onclick = function() {
    const text = prompt("New TO DO:");

    if (text !== null && text.trim() !== "") {
        createTask(text);
        saveTasks();
    }
};

function loadTasks() {
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        cookie = cookie.trim();

        if (cookie.startsWith("tasks=")) {
            const value = cookie.substring(6);
            const tasks = JSON.parse(value);

            for (let i = tasks.length - 1; i >= 0; i--) {
                createTask(tasks[i]);
            }
        }
    }
}

loadTasks();