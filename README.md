# Welcome to the Insightflair Repository

![image](https://github.com/user-attachments/assets/5d7e9d7f-c1bd-47e7-888b-568a8ccf8d6f)


This repository contains the source code for the InsightFlair project. Follow the instructions below to set up and run the application on a **Linux (Debian-based)** system.


## Features

**InsightFlair** is a full-stack application built with modern technologies to streamline data processing and visualization. Here’s what makes it stand out:

- **Data Pipeline & CSV Visualization**
  - Custom parser to process uploaded CSV files.
  - Securely writes parsed data to the database.
  - Visualizes data using the Recharts.js framework for clear, interactive insights.

- **Robust User Authentication & Access Control**
  - Implements secure user authentication to manage access.
  - Ensures that only authorized users can interact with sensitive data.

- **Scalable Full-Stack Architecture**
  - **Frontend:** Developed with React.js and TypeScript for a dynamic, responsive UI.
  - **Backend:** Powered by Node.js and Express.js with RESTful APIs.
  - **Containerization:** Utilizes Docker for efficient deployment and scalability.
  - **Cloud Integration:** Leverages AWS services for enhanced performance and reliability.


---

## 🛠 Tech Stack

### Backend:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat&logo=amazon-aws&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=flat&logo=nodemon&logoColor=%BBDEAD) ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=flat&logo=mysql&logoColor=white) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=flat&logo=Sequelize&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=flat&logo=docker&logoColor=white) ![Bash Script](https://img.shields.io/badge/bash_script-%23121011.svg?style=flat&logo=gnu-bash&logoColor=white)

### Frontend:

![TypeScript](https://img.shields.io/badge/typescript-%23323330.svg?style=flat&logo=typescript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=flat&logo=docker&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white) 

### Deployment & DevOps:

- Vercel
- Heroku
- AWS
- Docker Compose (for local development)

---

## 📦 Installation & Setup

Before proceeding, ensure the following tools are installed on your system:

- **Git**: For cloning the repository.
- **Docker**: Ensure you have Docker installed and running.
  - Check your Docker version: `docker --version`.
  - If you're using **Docker 20.10+**, the command is `docker compose` (without a hyphen).
  - If you're using an older version, the command remains `docker-compose` (with a hyphen).

---

## Installation and Running the App

Follow these steps to set up and run the application:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/hlb-git/Insightflair.git
```

### 2. Change your pwd to the repo

```
cd Insightflair/
```

### 3. Run the application with one command

```
docker compose up --build
```

- For older version

```
docker-compose up --build
```

### 4 Then go to your browser

```
http://localhost:3000
```

## Additional Note:

- Please make sure no other application is listening on port 3000 before starting the app

  ---

## 🤝 Contribution Guidelines

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request.

---

## 📜 License

InsightFlair is licensed under the MIT License.

---

## 📞 Contact

For inquiries, reach out via:

- Email: [mzeelovegeneral@gmail.com](mailto\:mzeelovegeneral@gmail.com)
- LinkedIn: [Love Omoseebi](https://linkedin.com/in/love-omoseebi)
- Twitter: [@0xHLB](https://twitter.com/0xHLB)

