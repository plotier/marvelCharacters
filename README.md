# Marvel App

## Descripción del Proyecto
Marvel App es una aplicación web que consume la API de Marvel para mostrar información sobre personajes, cómics y otros elementos del universo Marvel. 

## Tecnologías Utilizadas
- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **Tailwind CSS**: Framework de estilos para un diseño responsivo y escalable.
- **TanStack React Query**: Manejo eficiente de llamadas a la API con cacheo y sincronización automática.
- **Axios**: Cliente HTTP para realizar solicitudes a la API de Marvel.
- **useContext + useReducer**: Manejo del estado global de la aplicación.
- **Jest + React Testing Library**: Pruebas unitarias y de integración.

## Arquitectura del Proyecto
El proyecto sigue una arquitectura modular basada en componentes y separación de responsabilidades:

- **`/pages`**: Contiene las vistas principales de la aplicación, organizadas por rutas.
- **`/components`**: Contiene componentes reutilizables como botones, inputs y el navbar.
- **`/services`**: Contiene las llamadas a la API utilizando `axios` y los hooks de `react-query`.
- **`/context`**: Implementación del estado global con `useContext` y `useReducer`.

### Elección de Arquitectura
Esta arquitectura está basada en principios de separación de responsabilidades y reutilización de componentes. La elección de **React Query** permite una mejor gestión de la caché y evita llamadas innecesarias a la API, mientras que el uso de `useContext` y `useReducer` mantiene el estado global de manera eficiente sin sobrecargar la aplicación con soluciones más complejas como Redux.

## Manejo de Caché
Se usa **React Query** para manejar la caché de las solicitudes a la API. Esto mejora el rendimiento de la aplicación evitando llamadas redundantes y almacenando datos previamente consultados. React Query permite:
- **Revalidación automática**: Los datos se actualizan automáticamente en segundo plano.
- **Evitar llamadas innecesarias**: La caché persiste los datos y evita realizar múltiples solicitudes si ya se tienen los datos almacenados.
- **Manejo de sincronización**: Si la API cambia, React Query actualiza los datos automáticamente sin intervención del usuario.

## Pruebas
El proyecto utiliza **Jest** y **React Testing Library** para asegurar la calidad del código.
### Para ejecutar los tests:
```sh
npm test
```
Se incluyen pruebas unitarias de componentes y pruebas de integración para asegurar que la aplicación funcione correctamente.

## Instalación y Ejecución
### Requisitos previos
- Node.js instalado

### Pasos para correr el proyecto
1. Clonar el repositorio:
```sh
git clone <repo-url>
cd MarvelApp
```
2. Instalar dependencias:
```sh
npm install
```
3. Ejecutar la aplicación:
```sh
npm start
```
4. Abrir en el navegador: `http://localhost:3000`

## Decisiones de Diseño
1. **Uso de Tailwind CSS**: Se eligió Tailwind por su enfoque **mobile-first** y facilidad para crear diseños consistentes. Las personalizaciones se encuentran en `tailwind.config.js`.
2. **Uso de React Query**: Permite optimizar el rendimiento evitando llamadas innecesarias y mejorando la experiencia del usuario con sincronización automática.
3. **Estructura Modular**: Separar `pages`, `components`, `services` y `context` facilita la escalabilidad y el mantenimiento del código.

## Deployment

The project is deployed at [Marvel Characters](https://marvel-characters-mu.vercel.app/).


