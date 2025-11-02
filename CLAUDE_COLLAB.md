# CreatorRate - Claude AI Collaboration Guide

## Project Overview

CreatorRate is a Yelp-style platform for rating and reviewing social media influencers and content creators. Users can browse influencers from various platforms (TikTok, YouTube, Twitch, Twitter/X), search by name/category/platform, view detailed profiles with stats, and read authentic user reviews.

**Primary Goal**: Help users discover and evaluate influencers based on community feedback and engagement metrics.

## Tech Stack

### Core Technologies
- **React 19.1.1** - UI framework
- **React Router DOM 7.9.4** - Client-side routing
- **Vite 7.1.7** - Build tool and dev server
- **Tailwind CSS 4.1.14** - Utility-first styling

### Development Tools
- ESLint 9.36.0 - Linting
- PostCSS - CSS processing
- Autoprefixer - CSS vendor prefixing

## Project Structure

```
/workspaces/CreatorRate/
├── creator-rate/              # Main application directory
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Header.jsx           # Navigation header
│   │   │   ├── SearchBar.jsx        # Search functionality
│   │   │   ├── CategoryFilter.jsx   # Category filtering
│   │   │   ├── InfluencerCard.jsx   # Card display for influencer list
│   │   │   ├── StarRating.jsx       # Rating display component
│   │   │   ├── ReviewCard.jsx       # Individual review display
│   │   │   └── ReviewForm.jsx       # Form for submitting reviews
│   │   ├── pages/             # Page-level components
│   │   │   ├── Home.jsx             # Main landing/browse page
│   │   │   └── InfluencerProfile.jsx # Individual influencer detail page
│   │   ├── data/              # Static data files
│   │   │   └── influencers.js       # Influencer data and reviews
│   │   ├── App.jsx            # Root component with routing
│   │   ├── App.css            # App-level styles
│   │   ├── main.jsx           # Application entry point
│   │   └── index.css          # Global styles
│   ├── public/
│   │   └── images/            # Influencer avatars
│   ├── package.json           # Dependencies and scripts
│   ├── vite.config.js         # Vite configuration
│   ├── eslint.config.js       # ESLint rules
│   └── postcss.config.js      # PostCSS configuration
├── public/                    # Additional public assets
└── README.md                  # Project documentation
```

## Data Structure

### Influencer Object Schema
Located in: `creator-rate/src/data/influencers.js`

```javascript
{
  id: number,                    // Unique identifier
  name: string,                  // Full name
  handle: string,                // Social media handle (with @)
  category: string,              // One of: Lifestyle, Comedy, Business, Food, Entertainment, Gaming
  followers: string,             // Formatted follower count (e.g., "2.3M")
  platform: string,              // TikTok, YouTube, Twitch, or Twitter/X
  avatar: string,                // Path to image in /images/
  rating: number,                // Average rating (0-5)
  reviewCount: number,           // Total number of reviews
  bio: string,                   // Brief description
  verified: boolean,             // Verification status
  tags: string[],                // Related topics/categories
  engagement: string,            // Engagement rate percentage
  reviews: Review[]              // Array of review objects
}
```

### Review Object Schema
```javascript
{
  id: number,           // Unique review ID
  author: string,       // Reviewer name
  rating: number,       // Star rating (1-5)
  date: string,         // ISO date format
  comment: string       // Review text
}
```

### Categories
Available categories: All, Lifestyle, Comedy, Business, Food, Entertainment, Gaming

## Current Features

1. **Browse Influencers** - Grid view of all influencers with cards
2. **Search** - Real-time search by name, handle, category, platform, or bio keywords
3. **Category Filtering** - Filter influencers by content category
4. **Influencer Profiles** - Detailed view with stats, bio, tags, and reviews
5. **Rating Display** - Visual star ratings and review counts
6. **Responsive Design** - Mobile-optimized layout

## Current Influencers (8 total)

1. Kay Poyer (@kay.poyer) - Lifestyle/TikTok - 2.3M followers
2. Brandon Edelman (@brandonedelman) - Comedy/TikTok - 1.8M followers
3. Dave Portnoy (@stoolpresidente) - Business/Twitter - 4.2M followers
4. Meredith Hayden (@wishbonekitchen) - Food/TikTok - 3.1M followers
5. Alix Earle (@alixearle) - Lifestyle/TikTok - 6.5M followers
6. MrBeast (@mrbeast) - Entertainment/YouTube - 60M followers
7. Kai Cenat (@kaicenat) - Gaming/Twitch - 8.7M followers
8. IShowSpeed (@ishowspeed) - Gaming/YouTube - 27M followers

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Routing Structure

- `/` - Home page with search, filters, and influencer grid
- `/influencer/:id` - Individual influencer profile page

## Code Style & Conventions

1. **Components**: Functional components with hooks
2. **Styling**: Tailwind utility classes (no custom CSS when possible)
3. **File naming**: PascalCase for components (e.g., `InfluencerCard.jsx`)
4. **Imports**: ES6 module syntax
5. **State management**: React hooks (useState, useEffect, etc.)
6. **Data flow**: Props for component communication, no global state management currently

## Common Tasks & How to Approach Them

### Adding a New Influencer
1. Add new entry to `influencers` array in `src/data/influencers.js`
2. Add influencer avatar image to `public/images/`
3. Follow the existing data schema
4. Ensure category matches existing categories

### Adding a New Category
1. Update `categories` array in `src/data/influencers.js`
2. Update CategoryFilter component if needed
3. Ensure existing influencers use valid categories

### Modifying UI Components
- Components are in `src/components/`
- Use Tailwind utility classes for styling
- Maintain responsive design (test mobile views)
- Keep components focused and reusable

### Adding New Features
Consider impact on:
- Data structure (might need to update influencers.js schema)
- Routing (might need new routes in App.jsx)
- Search/filter logic (update Home.jsx)
- Component reusability

## Known Limitations & Future Enhancement Ideas

### Current Limitations
- Static data (no backend/database)
- No user authentication
- Reviews are pre-populated (can't submit new ones yet)
- No sorting options (by rating, followers, etc.)
- No pagination for large lists
- No influencer comparison feature

### Potential Enhancements
1. **Backend Integration**
   - API for influencers and reviews
   - Database (PostgreSQL, MongoDB, etc.)
   - User authentication system

2. **User Features**
   - Submit reviews (ReviewForm.jsx exists but not connected)
   - User profiles
   - Favorite/bookmark influencers
   - Follow influencers for updates

3. **Enhanced Discovery**
   - Advanced search filters (follower range, rating range, platform)
   - Sorting options (rating, followers, recent reviews)
   - Trending influencers section
   - Similar influencer recommendations

4. **Analytics & Insights**
   - Engagement rate charts
   - Growth trends
   - Category popularity
   - Platform comparisons

5. **Social Features**
   - Share influencer profiles
   - Helpful/unhelpful review voting
   - Report inappropriate reviews
   - Comment on reviews

6. **Content Enhancements**
   - Influencer social media feed integration
   - Video/image galleries
   - Brand partnership history
   - Controversy/drama tracking

## Architecture Notes

### State Management
Currently using local component state (useState). For future scaling, consider:
- Context API for global state (user preferences, auth)
- React Query or SWR for server state
- Redux/Zustand if complexity increases significantly

### Routing
React Router DOM is configured in App.jsx. Simple two-route setup currently.

### Styling Strategy
Tailwind CSS v4 is used exclusively. Key patterns:
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Color palette: Primarily gray scale with blue accents
- Component-scoped styles in JSX, no separate CSS modules

### Image Handling
- Static images in `public/images/`
- Referenced with `/images/filename.ext` in data
- Vite serves these directly

## Testing Considerations

Currently no testing framework. If adding tests, consider:
- Vitest (pairs well with Vite)
- React Testing Library for component tests
- Playwright or Cypress for E2E tests

## Performance Considerations

- Image optimization not implemented (consider lazy loading, WebP format)
- No virtualization for long lists (consider react-window if scaling)
- Bundle size is small currently, monitor as features grow

## Deployment

Project includes Vercel configuration (`.vercel/project.json`), suggesting Vercel deployment.

**Deployment checklist:**
1. Run `npm run build` to ensure production build works
2. Test with `npm run preview`
3. Check environment variables if any are added
4. Verify image paths work in production
5. Test routing (ensure SPA routing works with hosting provider)

## Questions to Ask Before Making Changes

1. **Data changes**: Will this require modifying the influencer schema?
2. **UI changes**: Does this maintain mobile responsiveness?
3. **Routing**: Do we need new routes or can this fit in existing pages?
4. **Performance**: Will this impact load time or rendering performance?
5. **Scalability**: If we add a backend later, will this design still work?

## Quick Reference: File Locations

- **Add influencer data**: `creator-rate/src/data/influencers.js`
- **Modify home page**: `creator-rate/src/pages/Home.jsx`
- **Modify profile page**: `creator-rate/src/pages/InfluencerProfile.jsx`
- **Update header/nav**: `creator-rate/src/components/Header.jsx`
- **Change search logic**: `creator-rate/src/components/SearchBar.jsx`
- **Modify routing**: `creator-rate/src/App.jsx`
- **Global styles**: `creator-rate/src/index.css`
- **Dependencies**: `creator-rate/package.json`

## Git Information

- **Current branch**: main
- **Main branch for PRs**: main
- **Recent commits**: Initial project setup and file uploads

---

## Working with Claude AI on This Project

When collaborating with Claude:

1. **Be specific** about which part of the app you're modifying
2. **Reference component names** and file paths clearly
3. **Consider mobile responsiveness** for any UI changes
4. **Maintain data consistency** when modifying the influencers array
5. **Test search and filter** functionality after data/UI changes
6. **Keep the existing code style** and Tailwind patterns
7. **Think about scalability** - designs should work with 100+ influencers

Claude has access to all files and can read/modify code. Point to this README for context on the project structure and conventions.
