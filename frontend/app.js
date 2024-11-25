const API_URL = 'https://localhost:3000/api/tasks';

// Elementos da Interface
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Função para carregar tarefas
const loadTask = async () => {
    taskList.innerHTML = ""; // Limpar a lista
    try {
        const response = await fetch(API_URL);
        const tasks = await response.json();
        tasks.forEach((task) => {
            addTaskToUI(task);
        });
    } catch (error) {
        console.error("Erro ao carregar tarefas:", error);
    }
};