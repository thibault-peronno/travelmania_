# travelmania_
The interface for the technic test of Santiane.

# Install

Before to first run the vite server, if it is your first install with this repository.

Run this commands

```ci``` is clean install

```bash
npm ci
```

To have the tailwind css file

```bash
npx tailwindcss -i ./src/index.css -o ./src/assets/style/output.css --watch
```
Check the tailwind.config.js file on content part. It is where we indicate at tailwind where it has to look to create his file.
Check the index.html file, normally you have this line ```<link href="./src/assets/style/output.css" rel="stylesheet">```

You could get more [here](https://tailwindcss.com/docs/installation)

Maybe the vite server runned automatically. If not, use this command

```bash
npm run dev
```
