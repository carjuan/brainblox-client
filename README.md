# Brainblox

## Overview

BrainBlox is a web note-taking app that allows users to create, organize, and prioritize notes using sticky notes that can be dragged around the screen. The app integrates task management and reminders within the note-taking experience, providing a comprehensive and intuitive solution for users to stay organized and productive as well as syncing their notes across multiple devices.

### Problem

In today's fast-paced world, people often need a quick and reliable way to quickly capture their thoughts/notes and reminders. Many users, including myself for a long time, struggle with organizing their notes, especially when working on multiple projects simultaneously. Physical sticky notes are often used to remember tasks, leading to cluttered desks and wasted paper. Additionally, switching between different work environments (e.g., home, office) with varying operating systems can make it challenging to keep track of notes and tasks. Existing note-taking and task management apps often have a steep learning curve and are not easy to use at first. BrainBlox addresses these pain points by providing a single, browser-based platform and a visual and intuitive way to create, organize, and prioritize their notes or tasks, ensuring a seamless and consistent experience across different environments and operating systems.

### User Profile

- **Who will use your app?**

  BrainBlox is designed for individuals who need to manage quick notes efficiently. This includes students, professionals, and anyone looking to stay organized and productive. Users will interact with the app by creating notes, dragging them around the screen to prioritize tasks, and setting reminders for important tasks. The app must be user-friendly, accessible across multiple devices, and easy to set up and use.

- **How will they use it?**

  - Users will create and organize notes in workspaces.
  - They will benefit from AI suggestions to improve their notes.
  - They will sync notes across multiple devices for accessibility.

### Features

- **Workspaces:** Users can create workspaces to categorize notes by projects/themes.
- **Quick Notes:** Users can create quick notes that are unassigned to any workspace.
- **New Notes:** Users can create new notes and optionally assign them to a workspace.
- **Drag Notes:** Users can drag and reposition notes on the screen.
- **Organize Notes:** Users can organize notes within and across workspaces.
- **Edit Notes:** Users can edit the content of their notes.
- **Remove Notes:** Users can delete notes.
- **Auto-save Notes:** Notes are automatically saved after a certain delay while typing.
- **Visual Prioritization**: Users can visually prioritize tasks by placing more important notes in prominent positions on the screen. The app can provide visual cues (e.g., color coding, highlighting) to indicate the priority of tasks.
- **Save & Sync Positions:** The position of notes on the screen is saved and synced across devices.
- **Sync Across Devices:** Users can access their notes from any device.

## Implementation

### Tech Stack

- **Frontend:** React.js, React Draggable, TypeScript, SASS
- **Backend:** Node.js, Express.js, Bull
- **Database:** MongoDB
- **Authentication**: JWT, Passport.js
- **Notifications**: SendGrid (email), Twilio (SMS)
- **AI Integration:** OpenAI API or similar for Generative AI features

### APIs

- **OpenAI API:** For generating AI suggestions and insights (Nice-to-haves).
- **Email API (e.g., SendGrid):** For sending notification emails.
- **Push Notification Service:** For mobile notifications.

### Sitemap

- **Home:** Overview of the app and its features.
- **Dashboard:** Main user interface showing workspaces and notes.
- **Workspace:** Specific workspace view with associated notes.
- **Note Editor:** Interface for creating and editing notes.
- **Settings:** User settings including notification preferences.
- **Login/Signup:** Authentication pages.

### Mockups

![Home Page](link-to-home-page-mockup)
![Dashboard](link-to-dashboard-mockup)
![Note Editor](link-to-note-editor-mockup)
![Settings](link-to-settings-mockup)

### Data

- **Users**: `user_id`, `username`, `email`, `password_hash`, `created_at`, `updated_at`
- **Notes**: `note_id`, `user_id`, `content`, `position` (`x`, `y`), `tags`, `priority`, `created_at`, `updated_at`
- **Tasks**: `task_id`, `note_id`, `task_content`, `due_date`, `priority`, `created_at`, `updated_at`
- **Notifications**: `notification_id`, `user_id`, `note_id`, `task_id`, `notification_time`, `notification_method`, `status`

### Endpoints

- **User Endpoints:**

- **POST /api/users/register**: Register a new user.

  - Parameters: `username`, `email`, `password`
  - Response: `user_id`, `username`, `email`, `created_at`

- **POST /api/users/login**: Log in a user.

  - Parameters: `email`, `password`
  - Response: `user_id`, `username`, `email`, `token`

- **Workspace Endpoints:**

  - `POST /api/workspaces`: Create a new workspace.
  - `GET /api/workspaces/:id`: Get a specific workspace.
  - `PUT /api/workspaces/:id`: Update a workspace.
  - `DELETE /api/workspaces/:id`: Delete a workspace.

- **Note Endpoints:**

  - `POST /api/notes`: Create a new note.
  - `GET /api/notes/:id`: Get a specific note.
  - `PUT /api/notes/:id`: Update a note.
  - `DELETE /api/notes/:id`: Delete a note.

- **POST /api/notifications**: Schedule a notification.
  - Parameters: `user_id`, `note_id`, `task_id`, `notification_time`, `notification_method`
  - Response: `notification_id`, `user_id`, `note_id`, `task_id`, `notification_time`, `notification_method`, `status`

### Auth

- **User Authentication:**
  BrainBlox includes user authentication and authorization. Users will be able to register, log in, and manage their profiles. Authentication will be implemented using JWT (JSON Web Tokens) and Passport.js. Authorization will ensure that users can only access and modify their own notes and tasks.

## Roadmap

### Sprint 1: Basic Setup and Authentication (Week 1-2)

- Set up the project structure and environment.
- Implement user registration and login.
- Set up the database and user schema.

### Sprint 2: Note Creation and Management (Week 3-4)

- Implement note creation, updating, and deletion.
- Implement drag-and-drop functionality for notes.
- Save and sync note positions across devices.

### Sprint 3: Task Identification and Prioritization (Week 5-6)

- Implement manual task identification using tags or markers.
- Integrate AI for task identification and date extraction.
- Implement visual prioritization of tasks.

### Sprint 4: Notifications and Reminders (Week 7-8)

- Implement notification scheduling and delivery.
- Integrate email and SMS notification services.
- Implement real-time syncing of notifications.

### Sprint 5: Final Testing and Deployment (Week 9-10)

- Conduct thorough testing of all features.
- Fix any bugs or issues.
- Deploy the app

## Nice-to-haves

- **Generative AI Suggestions:** Users receive AI-driven suggestions to improve their notes.
- **Generative AI Insights:** Users get insights into their reminders data over time.
- **Collaboration:** Users can invite others to edit and share a workspace.
- **Notifications:** Users can subscribe to mobile/email notifications for important reminders.
- Advanced AI features for deeper insights.
- Customizable themes and layouts.
- Integration with third-party services (e.g., calendar apps).
- Offline support.
- Enhanced real-time collaboration with live updates.
- Real-time updates using WebSockets.
