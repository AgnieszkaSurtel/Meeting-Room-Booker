# Meeting Room Booker

A responsive, interactive web application prototype designed for managing meeting room reservations. Built with **Vanilla JavaScript** and **Bootstrap 5**, focusing on clean architecture, performance optimization via event delegation, and a seamless user experience.

## 🚀 Live Demo

You can check out the working application here: **[https://agnieszkasurtel.github.io/Meeting-Room-Booker/](https://agnieszkasurtel.github.io/Meeting-Room-Booker/)**

## ✨ Features

*   **Interactive Booking Interface:** Visual selection of time slots with real-time status updates (Available, Selected, Booked).
*   **Dynamic Content Rendering:** Rooms and schedules are generated dynamically from data structures, ensuring scalability.
*   **Optimized Event Handling:** Utilizes **Event Delegation** pattern to manage interactions efficiently across the DOM.
*   **Responsive Design:** Fully adaptive layout built on **Bootstrap 5** grid system, ensuring usability on mobile and desktop devices.
*   **Simulated Async Flow:** Mimics backend API calls with loading states and success feedback to demonstrate UX best practices.

## 🛠️ Tech Stack

*   **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
*   **Framework:** Bootstrap 5 (CDN)
*   **Architecture:** Component-based rendering logic, State Management
*   **Deployment:** GitHub Pages

## ⚡ Performance & Best Practices

*   **Event Delegation:** Instead of attaching listeners to every button, a single listener on the parent container handles all slot selections, reducing memory footprint.
*   **State-Driven UI:** The interface is a direct reflection of the application state (`currentSelection`, `bookings`), preventing UI desynchronization.
*   **Clean Code Structure:** Logic is separated into distinct modules: Data, State, Rendering, and Event Handling for better maintainability.
*   **Zero Dependencies:** Beyond Bootstrap, the app relies on zero external libraries, showcasing strong fundamental JavaScript skills.

## 📂 Project Structure

```text
mediaconnect-demo/
├── index.html      # Main entry point
├── style.css       # Custom styles and overrides
├── script.js       # Application logic and state management
└── assets/         # Local images
