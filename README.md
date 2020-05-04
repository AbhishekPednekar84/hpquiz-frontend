# [Yet Another Harry Potter Quiz](https://yahpq.rocks) (Frontend)

[![buddy pipeline](https://app.buddy.works/abhiap/hpquiz-frontend/pipelines/pipeline/254058/badge.svg?token=738f35b97ec3ce6a9a115c59e582b088fde6fcee2a92780b69cf9e293e60d114 "buddy pipeline")](https://app.buddy.works/abhiap/hpquiz-frontend/pipelines/pipeline/254058)

This repository contains the `React.js` frontend code for the **[yahpq.rocks](https://yahpq.rocks)** website.

## Creating a local setup
### Backend
1. Clone the repository for the backend [Django REST API](https://github.com/AbhishekPednekar84/hpquiz-rest-api) and follow the setup instructions

### Frontend
1. Install `node.js` from [nodejs.org](https://nodejs.org/en/) (if needed). This website uses **v12.13.1**.
2. Clone the current repository using `git clone https://github.com/AbhishekPednekar84/hpquiz-frontend`
3. Install dependencies from `package.json` using the command `npm install`
4. Verify the backend api endpoint in `/src/config.js`
5. Run the application locally using `npm start`

At this point, assuming that the backend is running in a separate terminal window, the website should be accessible at **http://localhost:3000**.

### Testing a production build locally
1. Create the build using `npm run build`
2. Run the build using the command `node server.js`

Assuming that the backend is up and running, the website should be accessible at **http://localhost:3000**.

---  
## Mini production checklist
1. Verify the backend api endpoint in `/src/config.js`
2. In `server.js`, ensure that the path to the `static` folder is `app.use(express.static(path.join(__dirname, "./")));`
---
## Screenshots

<p align="center"><img src="https://github.com/AbhishekPednekar84/hpquiz-frontend/blob/master/assets/yahpq.jpg" alt="Home"></p>
<p align="center"><img src="https://github.com/AbhishekPednekar84/hpquiz-frontend/blob/master/assets/quiz.jpg" alt="Home"></p>
