<img src="./readme-assets/reciplease-logo.svg" width="250" style="display: block; margin: 0 auto;">

## A full-stack MERN app which acts as a central repository for its users’ recipes.

### What is Reciplease?

We've all encountered the frustration of having recipes scattered across websites, cookbooks, magazines and handwritten notes. Reciplease aims to solve this problem by providing a central hub for all of your recipes, regardless of their origin. This allows you to easily organise, access, and personalise your favourite culinary creations, all in one convenient place.

---

### Tech Stack

#### Back-end:
- Node.js
- Express
- MongoDB
- Mongoose

#### Front-end:
- Figma
- React + Vite
- Zustand
- Cloudinary
- React-Toastify

---

### Features

- Log In/Register page
- A dashboard of the users recipes
- A three step form to create recipes
- The ability to filter recipes based on their category, if they are a favourite or through a search query
- Each recipe on the dashboard links to its own recipe detail page where users can see the details, ingredients and method

Reciplease is responsive across a range of devices and has both a light and dark mode:

<img src="./readme-assets/Devices.png" width="750" style="display: block; margin: 0 auto;">

---

### Future developments

- Recipe editing
- Smoother carousel navigation on the dashboard
- A robust authentication system using JWT
- The integration of the Edamam API’s recipe search to provide users with recipes based off of their available ingredients
- Make the app a social platform where users can share their recipes with other users

---

### **How to Install and Run the Project**

**Prerequisites:**

- Except for the regular suspects (git, Node and npm), ensure you have MongoDB installed and running on your system.

**Instructions:**

1. Fork the repositiory

2. Clone the repository in your chosen destination:

```bash
git clone <repository_url>
```

4. Install dependencies:
   - Navigate to the *server* folder and run:

```bash
npm install
```

   - Navigate to the *client* folder and run:
```bash
npm install
```

5. Start the server:
   - Open a terminal window, navigate to the *server* folder and run:
```bash
npm start
```

6. Start the client:

   - Open another terminal window, navigate to the *client* folder and run:
```bash
npm run dev
```
   - Open the link in your browser to display the Reciplease app (default link: `http://localhost:5173/`)

   **Note:** You may need to adjust the port numbers if you have other applications using port 3000 (the server’s default port) or port 5173 (the frontend’s default port).

7. Create an account to begin using Reciplease

---

### Developers

* Anna Ewbank: [GitHub](https://github.com/annaewbank) | [LinkedIn](https://www.linkedin.com/in/annaewbank/)
