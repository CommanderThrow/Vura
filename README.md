# Vura

> Build a polished, ATS-friendly resume in minutes — private, local-first, and beautifully simple.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Goal](#goal)

---

## About

Vura is an online tool for creating professional Resume/CVs quickly. It focuses on clarity and ATS compatibility so your resume looks great to humans and parses cleanly for applicant-tracking systems. Personal data is kept locally in the browser by default — no account required — making Vura a fast, private way to produce a resume you can export and share.

Currently the project is an MVP (work in progress) with core local-saving and template functionality implemented.

## Features

- Multiple templates (TBA) — a variety of ATS-friendly layouts will be available so you can pick the look that matches your industry.
- Create your own template (TBA) — support for custom templates is planned to let you control layout and styling.
- Local save — your personal data stays in the browser (local storage) so nothing is uploaded unless you opt in to any future cloud features.

## Prerequisites

- Git (to clone the repository)
- A modern browser (Chrome, Firefox, Edge, Safari) for development and testing
- Node.js (LTS recommended) and a package manager such as npm or yarn to run the development server

If you prefer exact versions, use the latest stable Node.js LTS release.

## Installation

Quick steps to get the project running locally:

1. Clone the repository
   ```bash
   git clone https://github.com/CommanderThrow/Vura.git
   cd Vura
   ```
2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```
3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

Open the URL shown by the dev server (typically http://localhost:3000) to load the app.

## Usage

- Choose a template from the template selector.
- Fill in your details: contact, summary, experience, education, skills, etc.
- Preview updates in real time as you edit.
- Data is saved locally in your browser so you can return later without creating an account.
- Export your resume when ready (export options available depending on the template and implemented features).

## Goal

- Provide a free, easy-to-use online resume builder.
- Learn and practice front-end development through a real project.
- Build a useful portfolio piece and iterate toward a polished public MVP.
