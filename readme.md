# Voby App CLI

## The official CLI for starting a new Voby project quickly.

> **Compatibility Note:**
> Vite requires [Node.js](https://nodejs.org/en/) version >=14.6.0. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

With NPM:

```bash
$ npm init voby-app@latest
```

```bash
$ npx create-voby-app@latest
```

With Yarn:

```bash
$ yarn create voby-app
```

With PNPM:

```bash
$ pnpm create voby-app
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Voby + Tailwind CSS project, run:

```bash
# npm 6.x
npm init voby-app@latest my-voby-app --template [template]

npx create-voby-app@latest my-voby-app --template [template]

# npm 7+, extra double-dash is needed:
npm init voby-app@latest my-voby-app -- --template [template]

npx create-voby-app@latest my-voby-app -- --template [template]

# yarn
yarn create voby-app my-voby-app --template [template]

# pnpm
pnpm create voby-app my-voby-app -- --template [template]
```

Currently supported template presets include:

- `minimal`
- `minimal-ts`
- `tailwindcss`
- `tailwindcss-ts`
- `windicss`
- `windicss-ts`
- `unocss`
- `unocss-ts`
- `bootstrap`
- `bootstrap-ts`
- `scss`
- `scss-ts`
- `pwa`
- `pwa-ts`

## Community Templates

voby-app-cli is a tool to quickly start a project from a basic template for Voby frameworks. You can use a tool like [degit](https://github.com/Rich-Harris/degit) to scaffold your project with one of the templates listed above.

```bash
npx degit vobyjs/voby-app-cli/template my-project
cd my-project

npm install
npm run dev
```

If the project uses `master` as the default branch, suffix the project repo with `#master`

```bash
npx degit vobyjs/voby-app-cli/template#master my-project
```

## I don't see a template that matches my need?

You wish there was a template with your favorite library?

Feel free to make a pull request. Copy one of the template already available, tweak it, name it properly and make a PR. See [contributing](#contributing) below.

## Contributing

You can create your own template and prefix it with `template-[name]` for JS template or `template-[name]-ts` for TS template and giving it a name that describe the purpose.
