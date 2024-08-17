# hack the dot

## Hack the Dot: Training Smart Contract Auditors on Polkadot

Hack the Dot is a learning platform that addresses the challenge of training smart contract auditors using rewards as incentives. This platform features technical and educational challenges designed for users to develop deep auditing skills within the Polkadot ecosystem. Hack the Dot provides a transparent and immutable record of users' achievements and rewards, ensuring verifiable progress tracking.

Users learn through a series of challenges that simulate real-world auditing scenarios, preparing them as future auditors to ensure the security of smart contracts within the Polkadot ecosystem. These challenges include various levels that follow a specific learning curve. To incentivize them, the platform allows the configuration of rewards in the form of HTD tokens, which users can exchange for DOT or another currency deemed appropriate by the administrators.

Upon completing all levels, users earn a certification backed by Polkadot, validating their knowledge as smart contract auditors. Additionally, a user ranking with the highest scores (hall of fame) will be generated to gain recognition within the community.

This approach promotes an ecosystem where learning and rewards are deeply interconnected. Hack the Dot offers a robust educational environment for users, helps Polkadot identify, train, and foster skilled auditing talent, and ensures that its ecosystem becomes more secure, achieving significant impact.

Progress and Rewards Metrics:

Users accumulate HTD tokens for their progress in the challenges, which can be exchanged for DOT as a tangible reward. As they surpass different levels of auditing, their achievements are recorded on the blockchain, creating a transparent history of their performance. The certifications awarded to users who complete the program provide clear validation of their blockchain security competence, enhancing their visibility for future job opportunities within Polkadot.

## Features
improvements migrate this MVP to Substrate

## Tech Stacks

Frontend uses the following tech stacks:
    * [React](https://es.react.dev/)
    * [Firebase](https://firebase.google.com/?hl=es)
Smart Contracts are built with:
    * [Hardhat](https://hardhat.org/) for contract deployment
Deploy in Moonbeam
    * [ChallengeGovernance](https://moonbase.moonscan.io/address/0xACDDa47A43d704ADaaC5b049288C94e5cb401fdE)
    
## Quickstart
To get started, follow the steps below:

### Frontend
Navigate to frontend and install dependencies

`cd frontend/`

`npm install`

Start React app:

`npm start`

App will run on localhost:3000

### Smart Contracts
Navigate to contracts folder and install dependencies

`cd contracts/`

Install Dependencies

`npm install`

Copy the .env.example file and name it .env Make sure to fill in the values for each var on the created env file

`cp .env.example .env`

To deploy smart contracts, run

`npm run deploy:network`

Network sent must be configured in hardhat.config.js file on contracts folder

### Pitch

[Video]('https://www.youtube.com/watch?v=L09ARH0C02M')