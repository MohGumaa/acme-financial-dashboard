# 🖥️ Acme Dashboard | Built with Next.js 15

Welcome to the **Acme Dashboard**! This is a modern and fully responsive dashboard application built with **Next.js 15**. It leverages the power of React, TypeScript, and TailwindCSS to provide a fast, user-friendly interface.

### 🚀 Technologies Used:

- ⚡ **Next.js 15** – The React framework for production
- ⚛️ **React** – A declarative UI library for building user interfaces
- 🧪 **TypeScript** – Type-safe JavaScript to improve development experience
- 🎨 **TailwindCSS** – A utility-first CSS framework for rapid design
- 🧭 **React Query** – For efficient data fetching and synchronization

<!-- 🔗 **Live Demo:** [Click here to view](#) -->

---

## 📁 Folder Structure

The following is the folder structure for this Next.js app:

```bash
src/
├── app/    # Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
├── public/ # Contains all the static assets for your application, such as images.
```

## 🌟 Features

- **Modern Design**: A sleek and clean interface to manage data.
- **Responsive Layout**: Fully responsive, optimized for desktop, tablet, and mobile devices.
- **Dynamic Routing**: Uses Next.js's file-based routing for simple navigation.
- **State Management**: Built-in React Query for managing server state and caching.
- **Real-time Data**: Display and manage real-time data with ease.

## ⚡ Getting Started

### Prerequisites

- [Node.js (v16+)](https://nodejs.org) – Ensure you have the latest LTS version.
- **pnpm** – For package management.

### 1. Clone the Repository

```bash
git clone https://github.com/MohGumaa/acme-financial-dashboard.git

cd acme-financial-dashboard
```

## Install Dependencies

```bash
pnpm install
```

## Run the Application

To start the application in development mode, run:

```bash
pnpm dev
```

Open your browser and visit: http://localhost:5173

---

## 🏗️ Build for Production

```bash
pnpm build
```

## Preview Production Build

```bash
pnpm preview
```

## 🌐 Routing with Next.js

```tsx
import Link from "next/link";

function Dashboard() {
  return (
    <div>
      <h1>Welcome to the Acme Dashboard</h1>
      <Link href="/settings">Go to Settings</Link>
    </div>
  );
}

export default Dashboard;
```

You can see that pages are automatically mapped from the pages/ directory based on their filenames.

---

## 💅 Styling with TailwindCSS

The app is styled using TailwindCSS, which is already set up and configured for use.

- The global styles are defined in styles/globals.css which includes Tailwind's base styles.

- You can customize Tailwind settings in the tailwind.config.js file.

Example usage of Tailwind utility classes:

```tsx
<div className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
  Welcome to the Acme Dashboard
</div>
```

---

## 🧑‍💻 Data Fetching with React Query

```tsx
import { useQuery } from "react-query";

function Dashboard() {
  const { data, error, isLoading } = useQuery(
    "dashboardData",
    fetchDashboardData
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}

async function fetchDashboardData() {
  const response = await fetch("/api/dashboard");
  const data = await response.json();
  return data;
}
```

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

We would like to thank the following technologies for making this project possible:

- Next.js 15 – The React framework for production.
- React – For building the UI.
- TypeScript – For a more robust, type-safe development experience.
- TailwindCSS – For rapidly building custom designs.
- React Query – For data fetching, caching, and synchronization.
