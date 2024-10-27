// DOMContentLoaded is fired when the DOM is ready to be manipulated
document.addEventListener("DOMContentLoaded", () => {
    // Let's grab the DOM elements we need
    const input = document.getElementById("todo-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    // Here for the very first lot it will be empty array. If there is a task saved in localStorage, we will get it.
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    todoList.innerHTML = ""

    // Immedialtely we there is anything to display, let's display it
    tasks.forEach((task) => getTaskFromLocalStorage(task));

    // Let's add a task when the button is clicked
    addTaskBtn.addEventListener("click", () => {
        const taskText = input.value.trim(); // Get the text from the input

        if (taskText === "") return; // If the input is empty, don't add the task

        let taskItem = {
            id: Date.now(), // Generate a unique id for the task
            text: taskText,
            completed: false,
        };

        tasks.push(taskItem); // Add the task to the array
        saveTasksToLocalStorage();

        getTaskFromLocalStorage(taskItem);

        input.value = ""; // Clear the input
        console.log(tasks); // This will console when we add task
    });

    // Now to add the tasks to the localStorage and get them back
    /*
        1. To save anything to localStorage, we need to stringify it first
        2. We can use JSON.stringify() to do that, because in localStorage, everything is stored as a string.
        3. Always remember value in a localStorage is always a string.
        4. To get the value from localStorage, we need to use JSON.parse() to convert it back to a JavaScript object.
        */

    // Get the task from localStorage
    function getTaskFromLocalStorage(task) {
        console.log(task);
        let li = document.createElement("li");
        li.setAttribute("data-id", task.id);
        li.innerHTML = `<span>${task.text}</span>
        <button>delete</button>
        `;

        li.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") return;
            task.completed = !task.completed;
            li.classList.toggle("completed");
            saveTasksToLocalStorage(); // Any slight change in the task will be saved to localStorage
        })

        // Now we are specifying the button inside the li.
        li.querySelector("button").addEventListener("click", (e) => {
            e.stopPropagation();  // This will prevent the further propagation of the event
            tasks = tasks.filter((t) => t.id !== task.id); // Remove the task from the array
            li.remove(); // Remove the li
            saveTasksToLocalStorage();
        })

        // Now append the task to the list
        todoList.appendChild(li);
    }

    // Save the tasks to localStorage
    function saveTasksToLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

});
