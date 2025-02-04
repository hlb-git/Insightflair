# Welcome to the Insightflair Repository

This repository contains the source code for the Insightflair project. Follow the instructions below to set up and run the application on a **Linux (Debian-based)** system.

---

## Prerequisites

Before proceeding, ensure the following tools are installed on your system:

- **Git**: For cloning the repository.
- **Docker**: Ensure you have Docker installed and running.
  - Check your Docker version: `docker --version`.
  - If you're using **Docker Compose v2**, the command is `docker compose` (without a hyphen).
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
