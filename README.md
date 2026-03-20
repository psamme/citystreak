# GeoStreak

GeoStreak is a dark, run-based geography game where each round gives you one country and five city clues. Clues reveal from hardest to easiest, and the earlier you guess correctly, the more points you earn.

## Features

- Supabase-backed sign-up and login flow
- Level-based progression
- One-country rounds with progressive clue reveals
- Profile page with stats and unlocked-country archive
- Static frontend with no build step

## Local Development

Serve the project from the repo root with any static server.

Example:

```bash
python3 -m http.server 5734
```

Then open:

```text
http://127.0.0.1:5734
```

## Deployment

This repo is ready to deploy as a static site.

## Supabase Setup

1. Create a Supabase project.
2. Run [`supabase-schema.sql`](/Users/samuelevans/Documents/geostreak/supabase-schema.sql) in the Supabase SQL editor.
3. Open [`supabase-config.js`](/Users/samuelevans/Documents/geostreak/supabase-config.js) and paste in your project URL and anon key.
4. In Supabase Auth, enable Email auth.
5. Serve or deploy the site normally.

### Vercel

1. Import the GitHub repo into Vercel.
2. Framework preset: `Other`
3. Build command: leave empty
4. Output directory: leave empty
5. Deploy

### GitHub Pages

1. Open the GitHub repo settings.
2. Go to `Pages`.
3. Set source to `Deploy from a branch`.
4. Select branch `main` and folder `/ (root)`.
5. Save.

## Files

- `index.html`: app shell
- `styles.css`: visual styling and animations
- `app.js`: game logic, Supabase auth, stats, and profile persistence
- `supabase-config.js`: frontend Supabase config placeholders
- `supabase-schema.sql`: profile table and RLS policies
- `vercel.json`: static deployment config for Vercel
