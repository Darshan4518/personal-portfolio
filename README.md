# Hacker-Themed Personal Portfolio

A **hacker-themed personal portfolio** web application built using cutting-edge technologies. This portfolio showcases projects, skills, and experiences in an engaging, hacker-style design, along with an **admin panel** for managing content dynamically.

---

## 🚀 Live Demo

Check out the live application:

**[Live Demo](https://your-live-demo-link.com)**

---

## 🖼️ Screenshots



## 📚 Features

- **Hacker-Themed Design**: Unique, dark, hacker-style UI to captivate visitors.
- **Admin Panel**: Manage portfolio content dynamically.
- **Projects Showcase**: Highlight personal projects with descriptions, links, and screenshots.
- **Responsive Design**: Fully optimized for all devices.
- **Contact Form**: Integrated with **Nodemailer** for seamless communication.
- **Cloudinary Integration**: Efficient image hosting and management.
- **Docker Support**: Deploy and run the application in a containerized environment.

---

## 🛠️ Technologies Used

### Frontend:

- **Next.js 15**: For server-rendered, modern React applications.
- **TailwindCSS**: Rapid styling with utility-first CSS framework.
- **shadcn/ui**: Pre-styled components for consistent design.
- **GSAP**: Smooth animations for a dynamic user experience.

### Backend:

- **Server Actions**: Direct data mutations for efficient workflows.
- **MongoDB & Mongoose**: Database for managing portfolio data.
- **Nodemailer**: Send emails directly from the portfolio.

### State Management:

- **Zustand**: Lightweight, scalable state management for React.

### Media Management:

- **Cloudinary**: Store and deliver images efficiently.

### Deployment:

- **Docker**: Simplified containerized deployment for consistent environments.

---

## ⚙️ Installation

Follow these steps to set up the project locally:

### Prerequisites:

- [Node.js](https://nodejs.org/) (v18 or later)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster
- [Cloudinary Account](https://cloudinary.com/)
- [Docker](https://www.docker.com/) installed on your machine

### Steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root of your project:

   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>
   CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>
   EMAIL_HOST=smtp.your-email-provider.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Build for production:**

   ```bash
   npm run build
   npm start
   ```

6. **Run with Docker:**

   Build and run the application using Docker:

   - Build the Docker image:
     ```bash
     docker build -t hacker-portfolio .
     ```

   - Run the Docker container:
     ```bash
     docker run -p 3000:3000 --env-file .env hacker-portfolio
     ```

---

## 🖥️ Admin Panel

The admin panel allows you to manage:

- **Projects**: Add, update, or delete projects.
- **Contact Submissions**: View messages from users.
- **Portfolio Sections**: Update personal details and descriptions.

Access the admin panel at `/admin` after logging in.

---

## 🛡️ Security

- **Authentication**: Secure admin panel using role-based access.
- **Environment Variables**: Keep sensitive data secure with `.env` files.

---

## 🌟 Acknowledgements

- **Next.js** for an amazing framework.
- **TailwindCSS** and **shadcn/ui** for effortless UI design.
- **Cloudinary** for seamless media management.
- **MongoDB** for robust database solutions.
- **Docker** for simplifying deployment.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

### Contact

For any inquiries, feel free to reach out:

- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/your-profile)
- **GitHub**: [Your GitHub Profile](https://github.com/your-username)

