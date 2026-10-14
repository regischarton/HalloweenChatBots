# Halloween Chat Bots

A full-screen fake chatbot for iPad costumes (Claude / ChatGPT). Guests tap the screen and get a random
canned "AI hallucination" or "AI slop image". No typing. After the first visit it runs with no internet.

## Files
- `docs/` - **the built app, served by GitHub Pages.** Don't edit by hand; `build.py` regenerates it.
  - `index.html` is the whole app in one file (text and images baked in).
  - `sw.js` + `manifest.webmanifest` make it work offline and launch full screen from the home screen.
- `app/index.html` - the app (layout, styles, logic). Open it in a desktop browser to test.
- `app/content.js` - **all the text**: hallucinations, image prompts/captions, greetings, disclaimers.
- `app/images/` - the slop images. The `sample-*.svg` files are placeholders; delete them when you add real ones
  (and remove their entries from `content.js`).
- `app/icons/` - home-screen icon.
- `build.py` - bakes `app/` into `docs/`.

## Adding content
1. Add hallucinations to `app/content.js` (`prompt` + `answer`, optional fake `source`, optional `bot: "claude"`/`"chatgpt"`).
2. Drop images into `app/images/`. Either list them in `content.js` with their own prompt and caption, or just
   leave them unlisted: the build picks them up and gives them a random prompt/caption from `imagePrompts` / `imageCaptions`.
3. Run `python build.py` (Windows: `py build.py`). Resize big photos to ~1600px first; the build warns about anything over 3 MB.
4. Commit and push. GitHub Pages updates in a minute or two.

## Publishing on GitHub Pages (one time)
1. Create a repo on GitHub (it must be **public** for free Pages) and push this folder to it.
2. Repo **Settings > Pages > Build and deployment**: Source = *Deploy from a branch*, Branch = `main`, Folder = `/docs`. Save.
3. After a minute the site is at `https://<your-username>.github.io/<repo-name>/`.

## Setting up each iPad (while on Wi-Fi)
1. Open the site in **Safari**, tap Share > **Add to Home Screen**.
2. Launch it from the home-screen icon (not from Safari). It opens full screen and saves itself for offline use.
3. Open the hidden settings and pick the chatbot for that iPad. Settings made in Safari don't carry over to the
   home-screen app, so do this from the icon.
4. Test: turn on Airplane Mode, close the app (swipe it away), reopen it. It should load normally.

**After you change content:** push, wait a minute or two for GitHub Pages, then bring the home-screen app to the
front while on Wi-Fi. It checks for updates every time it comes back on screen and reloads itself onto the new
version (only from the start screen, never mid-answer). The build time is shown at the top of the hidden settings,
so you can confirm which version each iPad is running.

## Using it
- Tap anywhere on the start screen (or the prompt / a suggestion chip) to "ask".
- Tap during typing to skip to the end of the answer.
- **Reload button** (top right) returns to the start screen. It also returns on its own after 45 s (configurable).
- **Hidden owner settings:** hold the reload button for 2 seconds, or tap it 5 times quickly
  (Ctrl+S on a desktop). Pick the chatbot, hallucinations / images / both, typing speed, idle timeout.
  Settings are remembered on that iPad.
- URL shortcuts also work: `?bot=chatgpt&mode=images` (`mode` = `hallucinations`, `images` or `both`).

## iPad prep
- Settings > Display & Brightness > Auto-Lock > Never.
- Settings > Accessibility > Guided Access > On, then triple-click the top/home button inside the app to lock guests in.
