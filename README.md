# Yeahlow! represaents

Best-in-class event event app.

## Dev

Get an API key from a colleague and set replace `API_KEY` in `index.html`. Next, open `index.html`. That's it. All the magic.

### Structure

Everything that should get deployed to firebase has to be located inside `public`.

```
├── public
│   └── resources
│       ├── css
│       ├── data
│       ├── images
│       └── js
└── README.md

```

### Deloy
Before deploying, make sure the `API_KEY` is set.

```
firebase deploy
```