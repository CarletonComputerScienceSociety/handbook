# CCSS Handbook

The Carleton Computer Science Society internal handbook for volunteers and developers.

## Installation

```bash
npm install
```

## Local Development

1. **Create ``.env`` file at the project root**

```bash
echo > .env
```

2. **Add environment variables to the ``.env`` file**

Open the ``.env`` file and define the variables from ``.env.example``. Reach out to Matthew for the values:

```text
ALGOLIA_APP_ID=
ALGOLIA_API_KEY=
ALGOLIA_INDEX_NAME=
```

3. **Run Start Command**

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Formatting

To format the codebase to match the style defined by Prettier:

```bash
npm run format
```

### Build

```bash
npm run build
```

This creates an optimized static `build` in the build directory.

## Deployment

**Using SSH:**

```bash
USE_SSH=true npm run deploy
```

**Not using SSH:**

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

This will build the site and push it to the ``gh-pages`` branch.

## Contributing

We welcome new developers! Make sure you are properly [onboarded](https://handbook.carletoncomputersciencesociety.ca/docs/guides/onboarding/development-volunteers) to be able to contribute to this project.
