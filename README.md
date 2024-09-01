![svelte-badge][svelte-badge] ![project][project]

[svelte-badge]: https://img.shields.io/badge/svelte-orange
[project]: https://img.shields.io/badge/v1.0.0-red

# Mirror 🪞

Welcome to the `mirror` repository! This project provides a robust and customizable template for creating a sleek, modern and professional look portfolio website. The template is perfect for developers with a github account to showcase their projects. Most of the information comes from github, thus minimal configuration is required to run.

## Showcase 🦄

![showcase](./showcase.png)

## Getting Started 🤖

### Prerequisites

Everything you need to build this project are listed below:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Fork and clone

Fork the repository and clone to local to run:

```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/mirror.git
cd mirror
```

### Installation

Install the project dependencies by running command below.

```bash
npm install
```

### Running the Project

```bash
npm run start
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## Usage 🐾

### Customize the config file in `config` [directory]


### Google Analytics 4

If you wish to use Google Analytics on your website, copy `.env.example` and rename it to `.env`. Add the id to the file as follows:

```env
PUBLIC_GA4=<your-GA4-ID>
```

## Package used 📦

| Packages               |
| ---------------------- |
| svelte                 |
| tailwindcss            |
| @tanstack/svelte-query |
| lucide-svelte          |
| typed.js               |
| shadcn-svelte          |
