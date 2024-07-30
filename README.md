# Bower Search

Responsive web app that mimics the behavior of [Bower's search page](https://bower.io/search/). 
This application allows users to search for and view details of various modules with sorting and pagination features.
<p>
  <img src="https://github.com/user-attachments/assets/523cb661-cb73-4d4c-9989-ee3cc2eb7f52" width="250px" height="535px" />
  <img src="https://github.com/user-attachments/assets/10c6b1c1-230b-48d8-ba77-2419c5500c96" width="250px" height="535px" />
</p>

## Demo

A live demo of the application is available [here](https://bower-search-d3dca7deb9a5.herokuapp.com/).

## Features

- **Responsive Design:** Adapts seamlessly to all screen sizes, including mobile, tablet, and desktop.
- **Search Functionality:** Search for modules by name.
- **Module Info:** View module details including name, description, stars, forks, and homepage link.
- **Pagination:** Navigate through the search results with pagination.
- **Sorting:** Sort modules by various criteria.

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI](https://mui.com/)
- [Axios](https://axios-http.com/)
- [Libraries.io API](https://libraries.io/api)
- [Husky](https://typicode.github.io/husky/)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install)

### Project local setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/bower-search.git
cd bower-search
   ```

2. Install dependencies
  ```bash
  yarn install
```

3. Create .env file in the project root:
  ```bash
  touch .env
  VITE_APP_LIBRARIES_IO_TOKEN=your-libraries-io-token-here
  ```

4. Start the development server:

```bash
yarn dev
```

5. Visit http://localhost:5173/ and start developing.

### Run your tests

```
yarn run test
```
