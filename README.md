# Marvel App

## Project Description
Marvel App is a web application that consumes the Marvel API to display information about characters, comics, and other elements from the Marvel universe.

## Technologies Used
- **React**: Main library for building the user interface.
- **Tailwind CSS**: Styling framework for responsive and scalable design.
- **TanStack React Query**: Efficient API call management with caching and automatic synchronization.
- **Axios**: HTTP client for making requests to the Marvel API.
- **useContext + useReducer**: Managing the global state of the application.
- **Jest + React Testing Library**: Unit and integration testing.

## Project Architecture
The project follows a modular architecture based on components and separation of concerns:

- **`/pages`**: Contains the main views of the application, organized by routes.
- **`/components`**: Contains reusable components such as buttons, inputs, and the navbar.
- **`/services`**: Contains the API calls using `axios` and the `react-query` hooks.
- **`/context`**: Implements the global state with `useContext` and `useReducer`.

### Architecture Choice
This architecture is based on principles of separation of concerns and component reuse. The choice of **React Query** allows for better cache management and avoids unnecessary API calls, while using `useContext` and `useReducer` keeps the global state efficient without overloading the application with more complex solutions like Redux.

## Cache Management
**React Query** is used to manage the cache of API requests. This improves the performance of the application by avoiding redundant calls and storing previously fetched data. React Query enables:
- **Automatic revalidation**: Data is automatically updated in the background.
- **Avoid unnecessary calls**: The cache persists data and avoids making multiple requests if the data is already stored.
- **Synchronization management**: If the API changes, React Query updates the data automatically without user intervention.

## Testing
The project uses **Jest** and **React Testing Library** to ensure code quality.

### To run tests:
```sh
npm test

```
Unit tests for components and integration tests are included to ensure the application works correctly.

## Installation and Running

### Prerequisites
- Node.js installed

### Steps to run the project
1. Clone the repository:
```sh
git clone <repo-url>
cd MarvelApp

```
2. Install dependencies:
```sh
npm install
```
3. Run the application:
```sh
npm start
```
4. Open in the browser: `http://localhost:3000`

## Design Decisions
1. **Use of Tailwind CSS**: Tailwind was chosen for its **mobile-first** approach and ease of creating consistent designs. Customizations are found in `tailwind.config.js`.
2. **Use of React Query**: It helps optimize performance by avoiding unnecessary calls and improving the user experience with automatic synchronization.
3. **Modular Structure**: Separating `pages`, `components`, `services`, and `context` facilitates scalability and code maintainability.

## Deployment

The project is deployed at [Marvel Characters](https://marvel-characters-mu.vercel.app/).


