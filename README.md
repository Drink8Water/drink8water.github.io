# Yutian Qi's academic homepage

A small static academic homepage adapted from [Minimal Light](https://github.com/yaoyao-liu/minimal-light), by Yaoyao Liu. No build tools, package installation, or backend are required.

## Edit the content

- `index.html`: biography, education, email, GitHub link, and CV link.
- `assets/css/style.css`: layout, typography, and light/dark colors.
- `assets/js/theme.js`: optional theme switch with a locally saved preference.
- `assets/files/Yutian-Qi-CV.pdf`: the supplied CV. Replace this file when updating the CV, keeping the filename unchanged.

The first version intentionally contains no project, publication, news, or service sections. There are no third-party fonts, analytics scripts, placeholder profiles, or package dependencies.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open <http://127.0.0.1:8000>.

## Deploy to GitHub Pages

1. Create a public repository named `drink8water.github.io` under the `Drink8Water` account.
2. Upload this folder's **contents** to the repository's `main` branch. `index.html` must be at the repository root. Include the `assets` folder, `LICENSE`, and `.nojekyll`.
3. Open the repository's **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/(root)**, and save.
5. After GitHub finishes publishing, the website will be available at <https://drink8water.github.io/>.

Future pushes to `main` update the website automatically. The empty `.nojekyll` file tells GitHub Pages to serve these static files directly.

Official documentation: <https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site>.

## Template attribution

The layout and stylesheet are adapted from Minimal Light, upstream commit `1ea07f39518ac44644406380c83da6f89037c4fc`. The template's CC0-1.0 text is retained in `LICENSE`; it applies to the template code. The CV and personal content belong to Yutian Qi.
