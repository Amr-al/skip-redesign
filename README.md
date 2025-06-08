# 🛠️ Skip Page Redesign

This project is a custom-built version of the “Choose Your Skip” page from [WeWantWaste.co.uk](https://wewantwaste.co.uk), reimagined with a modern stack:

- ⚛️ **React (Vite)**
- 🎨 **Tailwind CSS**
- 🧩 **Framer Motion**
- 📦 **Deployed via Vercel**

🔗 Live Redesign: [https://skip-redesign.vercel.app/](https://skip-redesign.vercel.app/)  
🔗 Original Site: [https://wewantwaste.co.uk/](https://wewantwaste.co.uk/)

---

## 📊 Table of Differences

| Feature | Original Site | Custom Redesign |
|--------|----------------|------------------|
| **Layout Structure** | Top-down, centered layout | Responsive grid with sidebar and main content |
| **Color Palette** | Blue/gray brand colors | Custom green `#0e8974` palette |
| **Stepper/Progress UI** | Not present or embedded in flow | Explicit, animated stepper using Heroicons |
| **Card Design** | Minimal, static info card | Animated, interactive cards with motion effects |
| **Card Selection** | Page reload / redirection | Smooth selection with animation and highlight |
| **Action Buttons** | "Continue" takes user to next page | Fixed bottom bar with “Back” and “Continue” |
| **Responsiveness** | Basic responsiveness | Fully responsive layout optimized for mobile |
| **Animations** | Minimal | Hover, tap, and entrance animations via Framer Motion |
| **Fonts** | Default or web-safe fonts | Custom modern web font (e.g., Inter or Roboto) |
| **Filter Sidebar** | not existed | Visible on larger screens, always present |

---

## 🧩 Enhancements in the Redesign

### 1. **Improved User Experience**
- Clearer selection experience with highlighted cards
- Immediate visual feedback when a skip is selected
- Summary bar reduces guesswork before proceeding

### 2. **Modern Interface**
- Interactive elements (hover, tap) using `Framer Motion`
- Animated stepper to guide users through the booking process
- Smooth transitions to make the experience feel fluid and intuitive

### 3. **Responsive Design**
- Optimized for mobile-first
- Sidebar collapses on smaller screens
- Bottom panel adapts to screen size and scroll behavior

---

## 🧪 Tech Stack Overview

| Tool        | Purpose                             |
|-------------|-------------------------------------|
| React       | UI Framework                        |
| Vite        | Fast dev server and bundler         |
| TailwindCSS | Utility-first CSS styling           |
| Framer Motion | Animations and transitions       |
| Heroicons   | Beautiful, accessible icons         |
| Vercel      | Zero-config deployment              |

---

## 🚀 How to Use Locally

1. **Clone the Repo**
   ```bash
   git clone https://github.com/YOUR_USERNAME/skip-redesign.git
   cd skip-redesign
