# Prueba Nivel JS: Lista de Tareas (To-Do App)

El objetivo de este ejercicio es evaluar tu capacidad para desarrollar una pequeña aplicación web utilizando JavaScript (ES6+), manipular el DOM y escribir pruebas unitarias.

## Objetivo

Debes crear una aplicación funcional de "Lista de Tareas". Los archivos base y la estructura del proyecto ya están creados. Tu misión es implementar la lógica y la interacción necesarias.

## Requisitos Funcionales

1.  Un usuario debe poder escribir texto en el `input`.
2.  Al hacer clic en el botón "Añadir tarea" (_BONUS-TRACK_ o pulsar "Enter" en el input), la tarea debe aparecer en la lista en pantalla.
3.  El campo de texto debe limpiarse después de añadir una tarea.
4.  La aplicación no debe permitir añadir tareas vacías o que solo contengan espacios en blanco.
5.  Las tareas añadidas deben ser únicas. No se debe poder añadir un texto que ya existe en la lista (la comparación no debe distinguir mayúsculas de minúsculas).

## Configuración y Tareas

Para empezar, sigue estos pasos en tu terminal:

1.  **Instala las dependencias:**
    Este proyecto utiliza `vitest` para las pruebas.
    ¿Qué comando utilizarás para hacer la instalación de dependencias?

2.  **Implementa la funcionalidad:**
    Escribe el código necesario en los ficheros del directorio `src/` para cumplir con todos los requisitos. Eres libre de decidir cómo nombrar y estructurar tus funciones, siempre que respetes la separación de responsabilidades sugerida por la estructura de archivos.

3.  **Supera los tests:**
    Para verificar tu solución, ejecuta los tests. La prueba se considerará superada cuando todos los tests se completen con éxito. Hay un test de ejemplo ya resuelto.

## Criterios de Evaluación

* **Funcionalidad:** La aplicación cumple con todos los requisitos descritos.
* **JavaScript (ES6+):** Demuestras un uso competente de la sintaxis y los métodos modernos de JavaScript.
* **Buenas Prácticas:**
    * **Separación de Responsabilidades:** La lógica de datos (`todos.js`) está desacoplada de la lógica de la interfaz (`ui.js`).
    * **Calidad del Código:** El código es legible, mantenible y sigue principios como la Responsabilidad Única.
* **Testing:** Demuestras la capacidad de entender y resolver los casos de prueba proporcionados.

