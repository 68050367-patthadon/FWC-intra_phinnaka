function saveTasks() {
    const tasks = [];

    $("#ft_list").children().each(function() {
        tasks.push($(this).text());
    });

    document.cookie = "tasks=" + encodeURIComponent(JSON.stringify(tasks)) + ";path=/";
}

function createTask(text) {
    const item = $("<div>");

    item.text(text);

    item.click(function() {
        if (confirm("Do you want to remove this TO DO?")) {
            $(this).remove();
            saveTasks();
        }
    });

    $("#ft_list").prepend(item);
}

$("#new").click(function() {
    const text = prompt("New TO DO:");

    if (text !== null && text.trim() !== "") {
        createTask(text);
        saveTasks();
    }
});

function loadTasks() {
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        cookie = cookie.trim();

        if (cookie.startsWith("tasks=")) {
            const value = cookie.substring(6);
            const tasks = JSON.parse(decodeURIComponent(value));

            for (let i = tasks.length - 1; i >= 0; i--) {
                createTask(tasks[i]);
            }
        }
    }
}

loadTasks();