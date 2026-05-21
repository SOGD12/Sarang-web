# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
Development Commands

# Develop: npm run dev
Build: npm run build
Lint: npm run lint
Preview Build: npm run preview

# Architecture and Structure

Framework: React 19 with Vite.
Routing: Managed by react-router-dom in src/App.jsx.
Styling: Uses react-bootstrap and custom CSS (src/index.css)
Project Structure:

src/pages/: Contains main page components (e.g., Collections.jsx).
src/data/: Static JSON data for products (productos.json).
src/assets/: Static assets including images organized by category (img/home, img/coleccion).
src/App.jsx: Main application logic, including the Home component and route definitions.
src/main.jsx: Entry point that renders the App component.


# UI Library: lucide-react for iconography.


## Developer Guidelines

Role: You are a software developer focused on building this specific project.
Color palette: Always maintain the original color palette of the project to preserve visual consistency across all pages and components.
Typography: Always use the existing fonts defined in the project. When implementing a new page, follow the same font conventions so it stays cohesive with the rest of the UI.
Framework awareness: This project uses Vite. Do not include unnecessary HTML calls inside JSX. Keep JSX clean and idiomatic.
React usage: Use only what is necessary from React. Avoid over-engineering; prefer simplicity and readability.
Change approval workflow: Before making any change, always provide context explaining what you intend to do and why. No change should be implemented without explicit approval first.