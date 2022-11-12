### Hi there! 👋

## What is inside?
- [Next](https://nextjs.org/docs)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Sass Css](https://sass-lang.com/)
- [Eslint](https://eslint.org)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Getting Started

```bash
git clone git@github.com:RafaelRRhocha/Onesight.git
```

```bash
cd Onesight
```

### Install dependencies:

#### With Docker:

```bash
docker build -t <image-name> .
```

```bash
docker container run --name <container-name> -p 3001:3000 <image-name>
```

#### Without Docker:

```bash
yarn install
```

or

```bash
npm install
```

### Run development server

```bash
yarn run dev
```

or 

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

```
└── src
  ├── components
  ├── interfaces
  ├── localStorage
  ├── pages
  ├── styles
```

| Folder           | Description                                          |
| ----------       | -------------------------------------------          |
| **components**   | Folder with application components                   |
| **interfaces**   | Folder with application interfaces                   |
| **localStorage** | Folder with local storage methods                    |
| **pages**        | Pages Routes                                         |
| **styles**       | Application styles                                   |

## Commands

- `dev`: run development server
- `build`: creates the production build version
- `lint`: runs the linter in all components and pages