# Bower Search

Responsive web app that mimics the behavior of [Bower's search page](https://bower.io/search/). 
This application allows users to search for and view details of various modules with sorting and pagination features.
<p>
  <img src="https://github.com/user-attachments/assets/7274d001-10b8-4ed6-a7bd-87d18d73b95a" width="250px" />
  <img src="https://github.com/user-attachments/assets/a71221e0-2c7d-474b-a143-7634d9feb462" width="250px" />
</p>

## Demo

A live demo of the application is available [here](https://your-demo-link.com).

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

### Installation

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
  VITE_APP_API_URL=http://localhost:3000
  ```
4. Run tests:

```bash
yarn test
```

5. Start the development server:

```bash
yarn dev
```

