# NASA Space Apps Challenge 2026 – submission text

Copy each section into the matching field of the submission form.

## Project Name

Mission Dino: Design, Launch and Operate Your Own Space Mission

## Summary

Mission Dino is a browser game that lets anyone design, launch and operate their own space mission. Players choose a destination (Earth orbit, Mars or Jupiter) and build a spacecraft within a budget: orbit, power, battery, computer, pointing, communications, science instruments and rocket. A launch review blocks designs that are too heavy, over budget or missing instruments. Once launched, players must keep the mission alive through solar storms, hardware failures, budget cuts and surprise discoveries, then receive a mission report explaining why it succeeded or failed.

The game addresses the Space Mission Design Game challenge by turning the hidden trade-offs of real missions into decisions players can feel. It uses simplified but genuine engineering (the rocket equation, inverse-square sunlight, data link limits and radiation) and compares each design with real NASA missions. Around the game, a space exploration site built from NASA imagery, the APOD API and live feeds from the NASA Image and Video Library connects players to real discoveries. It matters because it helps students and the public understand that every mission is a chain of compromises, and that good engineering is about balancing them.

## Project Demonstration

https://github.com/itznisila/Mission-Dino/blob/main/docs/Mission-Dino-presentation.pdf

## Project

https://itznisila.github.io/Mission-Dino/

The game runs there in any browser. The code is at https://github.com/itznisila/Mission-Dino.

## Project Details

**What it does and how it works**

Mission Dino follows a mission from idea to operations in seven steps:

1. **Team:** play alone or with up to 4 people on one screen. Each player takes a role (Mission Lead, Spacecraft Engineer, Science Lead, Comms & Ops) that owns part of the design and has its own goal, such as keeping 10% of the budget unspent or a 20% power margin. Roles must negotiate, just like a real mission team.
2. **Destination:** Earth Watch (easy), Red Planet Mapper (medium) or Giant Planet Explorer (hard), each with its own budget, science target and duration.
3. **Briefing:** objectives, resources, environmental conditions, constraints and risks for the chosen mission.
4. **Design:** pick the orbit, structure, power source, battery, computer, attitude control, antenna, instruments and launch vehicle. A live dashboard shows mass against rocket capacity, power made against power used, cost against budget, data rate against downlink, expected lifetime and expected science.
5. **Launch readiness review:** blocks unsafe designs and lists risks the board noticed.
6. **Mission control:** three random operations events, such as a solar storm, a reaction wheel failure, a ground station outage, an instrument glitch, a budget cut, a long eclipse season or a surprise opportunity. Each option shows what is at stake. The outcome depends on the player's earlier design choices, and projected science, lifetime and budget update live.
7. **Mission report:** full success, partial success or failure, a score, achievements, target-vs-actual charts, an explanation of every factor, a comparison with Landsat 9, Mars Reconnaissance Orbiter or Juno, and a leaderboard on the device. Designs can be shared as a link.

The model uses simplified real physics:

- The Tsiolkovsky rocket equation turns hardware mass into fuel mass.
- Solar power falls with distance squared, using sunlight values from the NASA Planetary Fact Sheet: 43% of Earth's at Mars and under 4% at Jupiter.
- The data link weakens with distance.
- Radiation shortens lifetime unless the spacecraft has shielding or radiation-hardened electronics.

The site around the game includes:

- **Landing page:** a NASA Lunar Reconnaissance Orbiter Moon image and the live Astronomy Picture of the Day, with a cached archive fallback.
- **Explore Space:** all eight planets with NASA photographs and fact-sheet data, a featured Pluto discovery, a to-scale size chart and a discovery timeline.
- **Space News:** hand-picked stories plus live, paginated feeds from the NASA Image and Video Library API.

**Benefits and intended impact**

It makes mission engineering tangible for students, classrooms and space fans. Instead of reading about subsystems one at a time, players see how one choice ripples through the rest: a heavier camera needs more fuel, a bigger rocket and more budget. Failure is treated as a lesson, and the report explains exactly why it happened. The multiplayer roles encourage discussion and teamwork, and every image and fact links back to NASA sources so players can keep exploring.

**Tools and technology**

- A single HTML file with plain HTML, CSS and JavaScript, with no framework, build step or install. It runs in any modern browser on phone, tablet or desktop.
- NASA APOD API and NASA Image and Video Library API for live content.
- A Node.js self-check script that tests game logic, input safety and a full playthrough.
- Git and GitHub for version control and hosting.
- Google Chrome, run headless, for screenshots and the PDF presentation.
- An AI assistant (Claude) for coding, design and writing help, disclosed in the code, the README and the slides.

**Creativity**

- It combines a strategy game, a mission simulator and a space news and exploration site in one product.
- Clashing role goals create real negotiation between players.
- Operations events reward or punish earlier design decisions, so players learn cause and effect.
- Results are compared with real NASA spacecraft.

**Factors we considered**

- **Accuracy:** values are simplified but grounded in NASA data, and nothing on the page is invented. The news shows real NASA items, and fact-sheet numbers are cited.
- **Accessibility:** a responsive layout, keyboard focus styles and reduced-motion support.
- **Reliability:** fallbacks when NASA services are unreachable or rate-limited.
- **Security:** escaping of player-typed and API text.
- **Simplicity:** one file that is easy to run and inspect.
- **Respect for NASA branding:** no NASA logos are used.

## Use of Super Intelligence (SI)

Tick these:

- Research or Information Gathering
- Coding, Debugging, or Troubleshooting
- Writing, Editing, or Translation
- Visual Design or Image Creation (interface layout and styling only; no images were generated, and all photos are from NASA)
- Presentation, Video, or Audio

Also tick **Ideation or Brainstorming** if your team used AI for ideas.

Where SI use is disclosed in the project:

- the `ai-assistance` meta tag and the site footer in `index.html`;
- the "AI assistance" section of `README.md`;
- the footer and final slide of the presentation, plus a meta tag in `docs/presentation.html`.

## NASA Data

| Link Text | Link URL |
|---|---|
| NASA Image and Video Library | https://images.nasa.gov/ |
| NASA Image and Video Library API | https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf |
| NASA Open APIs (APOD API) | https://api.nasa.gov/ |
| Astronomy Picture of the Day | https://apod.nasa.gov/apod/ |
| NASA Planetary Fact Sheet | https://nssdc.gsfc.nasa.gov/planetary/factsheet/ |
| NASA Science: Planets | https://science.nasa.gov/solar-system/planets/ |
| Lunar Reconnaissance Orbiter Full Moon image | https://images.nasa.gov/details/GSFC_20171208_Archive_e001861 |
| Landsat 9 | https://landsat.gsfc.nasa.gov/satellites/landsat-9/ |
| Mars Reconnaissance Orbiter | https://science.nasa.gov/mission/mars-reconnaissance-orbiter/ |
| Juno | https://science.nasa.gov/mission/juno/ |
| New Horizons | https://science.nasa.gov/mission/new-horizons/ |
| James Webb Space Telescope | https://science.nasa.gov/mission/webb/ |
| NASA's Eyes on the Solar System | https://eyes.nasa.gov/apps/solar-system/ |

## Space Agency Partner & Other Data

| Link Text | Link URL |
|---|---|
| ESA/Webb (James Webb Space Telescope images, co-credited ESA) | https://esawebb.org/ |
| Canadian Space Agency – James Webb Space Telescope | https://www.asc-csa.gc.ca/eng/satellites/jwst/ |
| ESA/Hubble (Hubble images, co-credited ESA) | https://esahubble.org/ |
| Google Fonts – Barlow (SIL Open Font License) | https://fonts.google.com/specimen/Barlow |
| Claude AI assistant (coding, design and writing help) | https://www.anthropic.com/claude |
| Node.js (self-check script) | https://nodejs.org/ |
| GitHub (code hosting) | https://github.com/itznisila/Mission-Dino |
