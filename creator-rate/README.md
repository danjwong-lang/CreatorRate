# CreatorRate

A Yelp-style platform for rating and reviewing influencers. Built with React, Tailwind CSS, and Vite.

## Features

- Browse influencers from various platforms (TikTok, YouTube, Twitch, Twitter/X)
- Search functionality to find influencers by name, category, platform, or bio
- Filter by category (Lifestyle, Comedy, Business, Food, Entertainment, Gaming)
- View detailed influencer profiles with stats and engagement metrics
- Read authentic reviews and ratings from users
- Fully responsive design optimized for mobile devices

## Influencers Included

The platform features 8 real influencers:
- Kay Poyer - Lifestyle content creator
- Brandon Edelman - Comedy skits specialist
- Dave Portnoy - Barstool Sports founder
- Meredith Hayden - Food and cooking content
- Alix Earle - Beauty and lifestyle
- MrBeast - Entertainment and philanthropy
- Kai Cenat - Gaming and streaming
- IShowSpeed - High-energy gaming content

## Tech Stack

- React 19
- React Router for navigation
- Tailwind CSS for styling
- Vite for build tooling

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── CategoryFilter.jsx
│   ├── InfluencerCard.jsx
│   ├── StarRating.jsx
│   └── ReviewCard.jsx
├── pages/           # Page components
│   ├── Home.jsx
│   └── InfluencerProfile.jsx
├── data/            # Static data
│   └── influencers.js
└── App.jsx          # Main app component with routing
```
