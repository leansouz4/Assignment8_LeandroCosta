let tasks = [];

// Adicionar uma nova tarefa
function addTask(description, priority) {
    const id = tasks.length + 1; // Gera ID único
    tasks.push({ id, description, priority });
    console.log(`Tarefa Adicionada: ${description} (${priority})`);
}

// Exibir todas as tarefas
function displayTasks() {
    console.clear();
    console.log("Lista de Tarefas:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Descrição: ${task.description}, Prioridade: ${task.priority}`);
    });
}

// Deletar uma tarefa pelo ID
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    console.log(`Tarefa com ID ${id} deletada.`);
}

// Filtrar tarefas por prioridade
function filterByPriority(priority) {
    console.log(`Tarefas com prioridade: ${priority}`);
    tasks.filter(task => task.priority === priority).forEach(task => {
        console.log(`ID: ${task.id}, Descrição: ${task.description}`);
    });
}

// Menu Interativo
function interactiveMenu() {
    let option;
    do {
        option = prompt(`Escolha uma opção:
        1. Adicionar Tarefa
        2. Visualizar Todas as Tarefas
        3. Deletar Tarefa
        4. Filtrar por Prioridade
        5. Sair`);

        switch (option) {
            case '1':
                const description = prompt("Digite a descrição da tarefa:");
                const priority = prompt("Digite a prioridade da tarefa (high, medium, low):");
                addTask(description, priority);
                break;
            case '2':
                displayTasks();
                break;
            case '3':
                const idToDelete = parseInt(prompt("Digite o ID da tarefa a ser deletada:"));
                deleteTask(idToDelete);
                break;
            case '4':
                const priorityToFilter = prompt("Digite a prioridade para filtrar (high, medium, low):");
                filterByPriority(priorityToFilter);
                break;
            case '5':
                alert("Encerrando o aplicativo.");
                break;
            default:
                alert("Opção inválida!");
        }
    } while (option !== '5');
}

interactiveMenu();
