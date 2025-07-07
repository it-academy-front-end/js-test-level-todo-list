// El estado de la aplicación: un array de objetos de tarea.
let todos = [];
let nextId = 1;

/**
 * Gestiona la lógica de las tareas.
 * Debes implementar las funciones necesarias para añadir y obtener tareas.
 * La función para añadir debe cumplir con los requisitos del README.
 */

// Ejemplo de lo que podrías exportar. Eres libre de cambiarlo.
export const addTodo = (text) => {
  // Debe validar texto vacío, espacios, y duplicados (insensible a mayúsculas/minúsculas).
  // Debe añadir un objeto { id, text } al array `todos`.
  // Y devolver la lista actualizada.
}

export const getTodos = () => todos;

// Función interna para resetear el estado durante los tests.

export const _resetTodos = () => {
  todos = [];
  nextId = 1;
}

