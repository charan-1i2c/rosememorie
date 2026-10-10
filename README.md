# 🌹 RoseMemoire



### Where words bloom, and memories take root.

🌐 **Live here:** [RoseMemoire](https://rosememorie.vercel.app/)

**RoseMemoire** is an interactive botanical art experience that transforms typed words into a living digital garden. As you type, roses bloom, vines weave around your text, and delicate botanical elements grow across a dark, cinematic canvas.

Combining creative coding, interactive typography, and generative botanical art, RoseMemoire turns a simple typing experience into something personal, expressive, and beautiful.

> *Every word leaves a trace. Every garden tells a story.*

---

## ✨ Features

### 🌱 1. Type to Grow
- Type words and watch a botanical garden grow around your text.
- Experience progressive vine growth and unfolding roses.
- Enjoy organic arrangements shaped by deterministic botanical geometry.
- Use Backspace to remove characters and trigger botanical withering.
- Keep typography at the center of the composition.

### 🌿 2. A Living Garden
- Gentle idle breathing brings stems and leaves to life.
- Subtle cursor interaction makes nearby vines respond to movement.
- Sparse falling petals add a delicate sense of motion.
- A soft atmospheric vignette creates cinematic depth.
- Flower placement protects the readability of important text.

### 🎨 3. Creative Modes
- **Type Mode:** Create a garden by typing.
- **Poster Mode:** Explore the existing animated botanical poster experience.
- **Freeze:** Capture a still garden composition, if enabled in your current version.
- **Save & Restore:** Preserve and revisit a garden, if enabled in your current version.

### 🖼️ 4. Artwork Export
- Export artwork using the available PNG and SVG controls.
- Explore the existing poster export workflow.
- Preserve the garden's visual composition in exported artwork.

### 🎵 5. Ambient Music
- Integrated music player with a 16-track playlist.
- Playback controls and automatic track advancement.
- A listening experience designed to complement the garden's quiet, romantic atmosphere.

Music availability depends on the audio files included in the deployment and the rights to use them.

### 🌹 6. Signature Visual Identity
- Deep black backgrounds.
- Crimson roses and midnight-blue vines.
- Elegant serif typography.
- A custom floral monogram.
- A minimalist rose loading screen.

---

## 🛠️ Built With

- **HTML5 Canvas** — botanical rendering and interactive visuals.
- **CSS** — layout, styling, and responsive presentation.
- **JavaScript** — typing interactions, growth logic, animation, and application behavior.
- **SVG** — scalable vector artwork where used.
- **Browser APIs** — local storage, audio, and image export where supported.

The botanical engine uses deterministic geometry and a shared animation loop to support consistent visual results and smooth movement.

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser.
- Git.
- A local development server or the project's configured build environment.

### Installation

**1. Clone the repository**

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

**2. Navigate to the project directory**

```bash
cd <YOUR_PROJECT_DIRECTORY>
```

**3. Run the project**

If `public/type-garden.html` is the standalone entry point, serve the project through a local web server.

For example, if Python is installed:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/public/type-garden.html
```

If the project uses a framework or a configured build system, follow its existing installation instructions and scripts instead.

> Replace the repository URL and directory placeholders with your actual values. The correct startup command depends on the repository's current structure.

---

## 🎮 How to Use

1. Open RoseMemoire in your browser.
2. Select **Type** mode.
3. Start typing to grow your garden.
4. Use Backspace to remove characters and observe the withering effect.
5. Pause typing to see the subtle idle animation.
6. Move your cursor near the botanical elements to explore their response.
7. Experiment with the available color palettes and controls.
8. Open **Poster** mode to explore the existing poster experience.
9. Use the available export controls to preserve your artwork.
10. Enjoy the ambient music while creating your garden.

Some controls may differ depending on the version currently deployed.

---

## 🌸 Design Philosophy

RoseMemoire explores the relationship between **words, nature, and memory**.

A typed character becomes more than a letter. It becomes part of a visual ecosystem where stems grow, roses unfold, and vines weave around typography.

The experience is intentionally dark, romantic, and minimal. Rather than overwhelming the user with effects, RoseMemoire uses restrained motion and delicate botanical details to create a sense of life.

Its central idea is simple:

**Words can disappear from a screen, but the feelings behind them can remain.**

---

## 🧠 How It Works

RoseMemoire combines text layout with procedural botanical artwork.

- **Text rendering:** Characters are arranged using the existing typography and layout logic.
- **Deterministic growth:** Seeds and botanical parameters help generate repeatable arrangements.
- **Animation:** A shared animation loop updates growth, blooming, withering, and ambient movement.
- **Interaction:** Typing, deletion, and pointer movement influence the garden.
- **Persistence:** Browser-local storage can preserve saved garden state when Garden Memory is enabled.
- **Export:** Available canvas and vector export features allow users to preserve their creations.

Implementation details may evolve as the project develops.

---

## 🔒 Privacy

- No user account is required for the local garden experience.
- Saved garden data, when enabled, can be stored in the browser.
- Browser-local data may be lost if site data is cleared or the storage environment changes.
- Music playback depends on the locally available audio assets.
- This README does not claim that the application has been independently audited for privacy or security.

---

## 📁 Project Structure

The core standalone garden file is located at `public/type-garden.html`.

A simplified example of the project structure is:

```text
RoseMemoire/
├── public/
│   ├── type-garden.html
│   ├── audio/                 # Audio files, if included
│   └── assets/                # Images and other assets, if included
├── README.md
└── ...
```

The actual repository may contain additional files, assets, and framework configuration.

---

## 🌐 Deployment

RoseMemoire can be deployed to a static hosting platform or through the project's existing deployment configuration.

For a Vercel deployment:

1. Connect the GitHub repository to Vercel.
2. Configure the appropriate framework preset and build settings.
3. Confirm that the entry point and public assets are served correctly.
4. Deploy the project.
5. Test typing, animations, audio, exports, and saved-state restoration on the deployed website.

Ensure that all required assets are included in the deployment.

---

## 🗺️ Roadmap

Potential future improvements include:

- More botanical varieties and flower styles.
- Additional artistic palettes.
- Refined poster composition and export options.
- Improved garden preservation and restoration.
- More ambient soundscapes.
- Accessibility and performance refinements.
- Further visual polish for mobile devices.

The roadmap may change as RoseMemoire evolves.

---

## 📜 License

RoseMemoire is currently published without an open-source license.

All rights are reserved by the respective copyright holders. No permission is granted to copy, modify, distribute, or reuse this project's code or artwork beyond what applicable law permits.

A license may be added in the future if the project is intentionally released under specific terms.

Third-party assets, including music, images, fonts, and libraries, remain subject to their respective licenses and permissions.

---

## 🌹 The Story Behind RoseMemoire

RoseMemoire is an experiment in turning a familiar interaction—typing—into a living visual experience.

It brings together code and art, structure and spontaneity, fleeting words and lasting memories.

Every garden begins with a single character.

**RoseMemoire — Where words bloom, and memories take root.**

*Made with code, patience, and a little imagination.* 🖋️
