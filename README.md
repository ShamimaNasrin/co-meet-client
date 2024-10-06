# Co-Meet

[Live Link to Co-Meet Client](https://co-meet-client.vercel.app/)

## Introduction

Co-Meet is an agency that offers co-working spaces for meetings and discussions. This web application facilitates room reservation management, streamlining the booking process for administrators and users.

## Project Description

Co-Meet provides an efficient solution for managing co-working spaces. The application enables administrators to manage room inventories, set available time slots, and keep information accurate. Users can book meeting rooms by selecting from available time slots, with real-time feedback on availability and calculated pricing based on room and time slot selections.

## Features

### Admin Actions

- **Room Management**: Admins can create, update, and delete rooms with specific details (name, room number, floor, capacity, price per slot, and amenities).
- **Time Slot Management**: Admins create time slots for each room, defining date, start time, and end time.
- **Booking Management**: Admins can update, delete and approve or reject bookings.
- **User Management**: Admins manage the user details.

### User Interactions

- **Booking**: Users can create bookings by selecting available time slots and rooms for desired meeting times.
- **Availability Feedback**: Users receive real-time availability feedback to prevent booking conflicts.

### Common features

- **About & Contact Pages**: Learn more about our mission, values, and the team behind Co-Meet. Get in touch with us for any inquiries or support.
- **facqs**: Find answers to commonly asked questions about bookings, room features, pricing, and more.
- **Privacy**: Understand how we handle and protect your personal information in compliance with privacy standards.
- **Terms and condition**: Review the terms and conditions that apply to using Co-Meet’s services and booking policies.

## Technology Stack

- **Frontend**: Built with `React` and `Vite`, leveraging `TypeScript` for type safety and maintainability.
- **State Management**: Utilizes `Redux` and `RTK Query` for efficient state and data management.
- **Backend**: Powered by `Node.js` and `Express.js`, with `MongoDB` as the database solution.
- **Authentication**: Secured with `JWT` (JSON Web Tokens) for user authentication.
- **UI/UX**: Designed with responsiveness and usability in mind, ensuring a smooth experience across all devices.

## Installation Guideline

### Prerequisites

- **Node.js**
- **MongoDB**
- **npm**

## Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/ShamimaNasrin/co-meet-client.git
   cd co-meet-client
   npm i
   ```

2. Run the app:

```bash
  npm run dev
```

## Usage

### Accessing the Frontend

After starting the development server, the frontend will be available at `http://localhost:5173`. Explore the platform by:

- Viewing available rooms, amenities, and their details.
- Browsing through available time slots and room options for booking.
- Checking room capacities, pricing, and amenities for each room.
- Creating bookings by selecting rooms and preferred time slots.
- Receiving real-time feedback on room and slot availability.

### Interacting with the Backend

With the backend server up and running, it will be accessible on the port defined in your `.env` file (default: `http://localhost:5000`). You can:

- Use the API to manage rooms, time slots, and bookings.
- Authenticate and authorize users and admins through JWT tokens.
- Allow admins to handle room creation, updates, and deletions, as well as manage slot availability.
- Enable users to view room options, check booking statuses, and manage their reservations.
- Process administrative tasks, including updating room details, inventory, and slot schedules.
