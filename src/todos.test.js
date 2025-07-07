import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import { addTodo, getTodos, _resetTodos } from './todos.js';
import { renderTodos } from './ui.js';

// Configuración del entorno DOM y reseteo del estado antes de cada test
beforeEach(() => {
  const dom = new JSDOM(`<!DOCTYPE html><html><body><ul id="todo-list"></ul></body></html>`);
  global.document = dom.window.document;
  _resetTodos(); // Resetea el array de tareas para aislar los tests
});

// --- Tests de Lógica ---
describe('addTodo()', () => {

  // ---- TEST RESUELTO (EJEMPLO) ----
  // Este test sirve como guía de la sintaxis de Vitest.
  it('debería añadir una nueva tarea y devolver la lista actualizada', () => {
    // Arrange: Preparamos el estado inicial
    const newTodoText = 'Aprender Vitest';

    // Act: Ejecutamos la función que queremos probar
    const updatedTodos = addTodo(newTodoText);

    // Assert: Verificamos que el resultado es el esperado
    expect(updatedTodos).toHaveLength(1);
    expect(updatedTodos[0].text).toBe(newTodoText);
  });
  
  // ---- TEST POR RESOLVER (LÓGICA) ----
  // El alumno debe hacer que este test pase.
  it('debería lanzar un error si el texto de la tarea está vacío o solo contiene espacios', () => {
    expect(() => addTodo('')).toThrow('El texto de la tarea no puede estar vacío.');
    expect(() => addTodo('   ')).toThrow('El texto de la tarea no puede estar vacío.');
  });
  
  // ---- TESTS POR IMPLEMENTAR (EL ALUMNO DEBE ESCRIBIR EL TEST) ----
  // El alumno debe reemplazar `it.todo` con `it` y escribir el cuerpo del test.
  
  it.todo('debería asignar un ID numérico y único que se incremente con cada tarea');
  
  it.todo('debería eliminar los espacios en blanco al principio y al final del texto antes de añadir la tarea');
  
  it.todo('debería lanzar un error si se intenta añadir una tarea duplicada (la comparación debe ser insensible a mayúsculas y minúsculas)');

});

// --- Test de DOM ---
describe('renderTodos()', () => {

  // Este test está completo para que el alumno se enfoque en la implementación del DOM.
  it('debería renderizar correctamente los elementos <li> en la lista del DOM', () => {
    // Arrange
    addTodo('Tarea 1 de DOM');
    addTodo('Tarea 2 de DOM');
    const listElement = document.getElementById('todo-list');

    // Act
    renderTodos(getTodos(), listElement);

    // Assert
    const listItems = listElement.querySelectorAll('li');
    expect(listItems.length).toBe(2);
    expect(listItems[0].textContent).toBe('Tarea 1 de DOM');
    expect(listItems[1].textContent).toBe('Tarea 2 de DOM');
  });
});