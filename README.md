# Technologic

Modular consumer electronics. Built to last. Built to scale. Built for what comes next.

**[technologic.computer](https://technologic.computer)**

## Setup

```sh
bun install
cp .env.example .env  # fill in Supabase credentials
```

## Development

```sh
bun run dev
```

## Build

```sh
bun run build
```

Static output goes to `build/`. Deployed to GitHub Pages via Actions on push to `main`.

## Stack

- SvelteKit + Svelte 5
- Static adapter (GitHub Pages)
- Supabase (email capture)
- Roboto Flex variable font
