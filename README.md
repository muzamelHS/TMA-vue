# Task Management Application

## Overview

This project is a Vue 3 TypeScript Composition API application implementing CRUD operations for tasks. Business logic and form validation are encapsulated in services, while components focus on UI and interaction by leveraging shadcn-vue for UI components.

## Features

- **Task Management:** Implement CRUD functionality for tasks.
- **Separation of Concerns:** Business logic and validation are encapsulated in service files; components handle only UI interactions.
- **UI Components:** Utilizes pre-built components from shadcn-vue for a streamlined UI.
- **Form Validation:** Incorporates Vee-Validate and Zod for comprehensive form validation.
- **Automatic Routing:** Uses Vite Page Plugins to create routes from the pages directory.

## Project Structure

The project follows a modular structure to separate concerns:

- `/api`: API-related configuration and functions.
- `/components`: Vue components focused on UI, such as forms, tables, and buttons. Components interact with services for business logic.
- `/lib`: Shared libraries or utilities.
- `/pages`: Directory for automatic route generation using the Vite Page Plugin.
- `/plugins`: Application-level plugins.
- `/services`: Contains business logic and validation, using Vee-Validate, Zod, and other utilities. Includes task services for CRUD operations.
- `/stores`: State management using Pinia.
- `/ts`: TypeScript types and interfaces, including models, services, enums, and globals.
- `/utils`: General utility functions.
- `/views`: Main views for the application.

## Tech Stack

- **Vue 3** with TypeScript and Composition API
- **ShadCN-Vue** for UI components
- **Vee-Validate** and **Zod** for form validation
- **@tanstack/vue-table** for data table management
- **Radix-Vue** for additional UI elements
- **Pinia** for state management
- **Axios** for API requests
- **Vite Page Plugins** for automatic route generation

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Key Dependencies

- **@radix-ui/react-icons:** For SVG icon sets
- **@tanstack/vue-table:** For managing complex table data
- **@vee-validate/zod:** Integration of Vee-Validate with Zod schema validation
- **@vueuse/core:** Reusable Vue composition utilities
- **axios:** For API requests
- **pinia:** State management
- **radix-vue:** Accessible and customizable UI primitives
- **shadcn-vue:** UI components
- **vee-validate:** Validation library for Vue
- **zod:** Schema validation

## Development Tools

- **Vite**: A fast and modern build tool for Vue 3 applications.
- **Vite Plugin Pages**: Automatically generates routes based on the directory structure in `/pages`.
- **TypeScript**: Ensures type safety across the application.
- **ESLint**: Linting for code quality and consistency.
- **Prettier**: Code formatter to maintain clean and uniform code style.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.

## Folder Structure

```bash
├── src
│   ├── api         # API functions
│   ├── assets      # Static assets
│   ├── components  # UI components
│   ├── lib         # Shared libraries or utilities
│   ├── pages       # Pages for routing (Vite Page Plugin)
│   ├── plugins     # App-wide plugins
│   ├── services    # Business logic and validation
│   ├── stores      # Pinia store for state management
│   ├── ts          # TypeScript types and interfaces
│   │   ├── interfaces
│   │   ├── models
│   │   ├── services
│   │   ├── enums.ts
│   │   └── globals.ts
│   ├── utils       # Utility functions
│   ├── views       # Application views
│   └── App.vue     # Main app component
└── package.json     # Project dependencies
```
