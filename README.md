## Project Title

> *Music Player with React Frontend*

---

## Student Information

* **Name:** Darshana Shrestha
* **Roll Number:** 9
* **Course / Program:** Bachelor of Computer Application
* **Semester / Year:** 3rd Semester / 2026

---

## Instructor Information

* **Instructor Name:** Mr. Dipak Shrestha
* **Course Title:** React Development / Frontend Development
* **College Name:** Samriddhi College

---

## Project Overview

> This project is a web-based Music Playlist Manager developed using React for the frontend and styled with Tailwind CSS.
> It allows users to manage their music playlist by adding, editing, and deleting tracks.
> Users can search for songs by title or artist, select a track to highlight it in the now-playing bar, and view playlist stats.
> The application persists data using localStorage so the playlist is retained even after a page refresh.
> The main goal is to demonstrate real-world React concepts including component architecture, state management, CRUD operations, and a custom hook.

---

## Objectives

* Build a responsive React application using Tailwind CSS
* Implement real-world features (playlist, CRUD, search, localStorage)
* Apply component-based architecture with proper props and state management
* Demonstrate use of custom hooks, useEffect, and conditional rendering
* Follow clean UI/UX design principles

---

## Technologies Used

### Frontend

* React.js
* HTML, CSS, JavaScript
* Tailwind CSS

### Backend (if applicable)

* Not applicable — frontend only project

### Database

* localStorage (browser-based persistence)

### Other Tools

* Git & GitHub
* Vite (build tool)
* npm

---

## Key Features

* Component-Based Architecture (`App → PlaylistPage → TrackItem`, etc.)
* State Management (`useState` / `useEffect`)
* Custom Hook (`useLocalStorage`) for data persistence
* Full CRUD Operations (Create, Read, Update, Delete tracks)
* Search / Filter tracks by title or artist
* Inline track editing with validation
* Responsive UI with Tailwind CSS
* Now Playing bar with static UI
* Playlist stats panel

---

## Screens / Modules

* Playlist Page (main view with track list)
* Add Track Form (right sidebar)
* Track Item (inline edit + delete per row)
* Now Playing Bar (bottom bar)
* Stats Panel (tracks count, duration, selected track)

---

## Installation & Setup

```bash
# Clone repository
git clone https://github.com/Samriddhicollege/BCA-2081-3rdSemester-React-MusicPlayerUI.git

# Go to project folder
cd BCA-2081-3rdSemester-React-MusicPlayerUI

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## Project Structure

```
music-player/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    ├── hooks/
    │   └── useLocalStorage.js
    ├── utils/
    │   └── data.js
    ├── pages/
    │   └── PlaylistPage.jsx
    └── components/
        ├── Button.jsx
        ├── TrackItem.jsx
        ├── PlaylistContainer.jsx
        ├── AddTrackForm.jsx
        └── NowPlayingBar.jsx
```

---

## GitHub & Live Demo

* **GitHub Repository:** https://github.com/Samriddhicollege/BCA-2081-3rdSemester-React-MusicPlayerUI.git
* **Live URL :** https://darshana-music-player.vercel.app/
---

## Testing

* Tested UI responsiveness on different screen sizes (mobile, tablet, desktop)
* Verified localStorage persistence by refreshing the page after adding tracks
* Checked edge cases (empty title, empty artist, deleting active track, empty playlist)

---

## Challenges Faced

> Challenges encountered during development:

* Managing state across multiple nested components in React
* Implementing inline editing while keeping the component clean and readable
* Ensuring localStorage stays in sync with React state using a custom hook

---

## Future Enhancements

* Add actual audio playback functionality
* Integrate a music API (e.g. Spotify API) to fetch real songs
* Add drag-and-drop reordering of tracks
* Implement user authentication for personal playlists
* Add dark / light theme toggle

---

## Acknowledgement

> I would like to thank my instructor **Mr. Dipak Shrestha** for guidance and support throughout this project.

---

## Declaration

> I hereby declare that this project is my original work and has been completed as part of my academic submission.
