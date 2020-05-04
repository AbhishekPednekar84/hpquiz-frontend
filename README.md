# [Yet Another Harry Potter Quiz](https://yahpq.rocks) (Frontend)

[![buddy pipeline](https://app.buddy.works/abhiap/hpquiz-frontend/pipelines/pipeline/254058/badge.svg?token=738f35b97ec3ce6a9a115c59e582b088fde6fcee2a92780b69cf9e293e60d114 "buddy pipeline")](https://app.buddy.works/abhiap/hpquiz-frontend/pipelines/pipeline/254058)

This repository contains the `React.js` frontend code for the **[yahpq.rocks](https://yahpq.rocks)** website.

## Creating a local setup
### Backend setup
1. Clone the repository for the backend [Django REST api](https://github.com/AbhishekPednekar84/hpquiz-rest-api) and follow the setup instructions

### Frontend setup
1. Install `node.js` from [nodejs.org](https://nodejs.org/en/) (if needed)
2. Clone this repository - `git clone https://github.com/AbhishekPednekar84/hpquiz-frontend`
3. Install dependencies from `package.json` - `npm install`
4. Verify the backend api endpoint in `/src/config.js`
5. Run the application locally - `npm start`

### Testing a production build locally
1. Create the build - `npm run build`
2. Run the build - `node server.js`
---  
## Mini production checklist
1. Verify the backend api endpoint in `/src/config.js`
2. In `server.js`, ensure that the path to the `static` folder is `app.use(express.static(path.join(__dirname, "./")));`
---
## Screenshots

<p align="center"><img src="https://github.com/AbhishekPednekar84/hpquiz-frontend/blob/master/assets/yahpq.jpg" alt="Home"></p>
<p align="center"><img src="https://github.com/AbhishekPednekar84/hpquiz-frontend/blob/master/assets/quiz.jpg" alt="Home"></p>
