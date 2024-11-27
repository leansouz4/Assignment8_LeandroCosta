let tasks = [];

// Add a new task
function addTask(description, priority) {
    const id = tasks.length + 1; // Auto-generate a unique ID
    tasks.push({ id, description, priority });
    console.log(`Task Added: ${description} (${priority})`);
}

// Display all tasksss
function displayTasks() {
    console.clear();
    console.log("To-Do List:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Description: ${task.description}, Priority: ${task.priority}`);
    });
}


// Delete a task by ID
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    console.log(`Task with ID ${id} deleted.`);
}

// Filter tasks by priority
function filterByPriority(priority) {
    console.log(`Tasks with priority: ${priority}`);
    tasks.filter(task => task.priority === priority).forEach(task => {
        console.log(`ID: ${task.id}, Description: ${task.description}`);
    });
}

// Interactive Menu
function interactiveMenu() {
    let option;
    do {
        option = prompt(`Choose an option:
        1. Add Task
        2. View All Tasks
        3. Delete Task
        4. Filter by Priority
        5. Exit`);

        switch (option) {
            case '1':
                const description = prompt("Enter task description:");
                const priority = prompt("Enter task priority (high, medium, low):");
                addTask(description, priority);
                break;
            case '2':
                displayTasks();
                break;
            case '3':
                const idToDelete = parseInt(prompt("Enter Task ID to delete:"));
                deleteTask(idToDelete);
                break;
            case '4':
                const priorityToFilter = prompt("Enter priority to filter (high, medium, low):");
                filterByPriority(priorityToFilter);
                break;
            case '5':
                alert("Exiting application.");
                break;
            default:
                alert("Invalid option!");
        }
    } while (option !== '5');
}

interactiveMenu();
