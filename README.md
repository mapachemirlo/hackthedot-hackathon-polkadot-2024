<p align="center">
  <img src="logo.png" alt="Hack the dot" />
</p>



# hack the dot

## Hack the Dot: Training Smart Contract Auditors on Polkadot

Hack the Dot is a learning platform that addresses the challenge of training smart contract auditors using rewards as incentives. This platform features technical and educational challenges designed for users to develop deep auditing skills within the Polkadot ecosystem. Hack the Dot provides a transparent and immutable record of users' achievements and rewards, ensuring verifiable progress tracking.

Users learn through a series of challenges that simulate real-world auditing scenarios, preparing them as future auditors to ensure the security of smart contracts within the Polkadot ecosystem. These challenges include various levels that follow a specific learning curve. To incentivize them, the platform allows the configuration of rewards in the form of HTD tokens, which users can exchange for DOT or another currency deemed appropriate by the administrators.

Upon completing all levels, users earn a certification backed by Polkadot, validating their knowledge as smart contract auditors. Additionally, a user ranking with the highest scores (hall of fame) will be generated to gain recognition within the community.

This approach promotes an ecosystem where learning and rewards are deeply interconnected. Hack the Dot offers a robust educational environment for users, helps Polkadot identify, train, and foster skilled auditing talent, and ensures that its ecosystem becomes more secure, achieving significant impact.

### Progress and Rewards Metrics:

Users accumulate HTD tokens for their progress in the challenges, which can be exchanged for DOT as a tangible reward. As they surpass different levels of auditing, their achievements are recorded on the blockchain, creating a transparent history of their performance. The certifications awarded to users who complete the program provide clear validation of their blockchain security competence, enhancing their visibility for future job opportunities within Polkadot.

### Overview of the Challenges:

The challenges are divided into three levels: Level 1 (beginner), Level 2 (intermediate), and Level 3 (advanced), each with its respective degree of complexity.

Level 1 is introductory, where users will have the opportunity to learn about various vulnerabilities as they progress through the challenges.

Level 2 will feature more complex challenges, but users will receive hints as assistance. This level aims to reinforce and solidify the knowledge gained in the previous level, as well as to prepare the user for the final level.

Level 3 is the most challenging, where users will receive no assistance and must demonstrate all the knowledge they’ve acquired throughout the previous stages.

### Challenge Configuration:

Challenges should be configured by the administrators, who must adhere to specific rules and guidelines when setting them up. Each challenge must be aligned with its level of complexity. For instance, administrators cannot add complex challenges to Level 1 or include hints in Level 3, as users in this level are not allowed to receive any help. In short, each level’s challenges must be appropriately designed according to its difficulty.

### Challenge Sequence:

Challenges must be completed in sequence. Users cannot attempt challenge 3 without first completing challenge 2.

### Number of Challenges per Level:

Each level will have 20 challenges. As users progress through the challenges within their respective levels, the complexity will also increase.

### Assistance by Level:

Level 1:  Users will have access to bibliographic support, where they can view on-screen explanations of basic or advanced concepts and various vulnerabilities.

Level 2: Users can use up to four hints per challenge. Once all hints are used, they cannot be used again.

Level 3:  Users will not receive any assistance and must demonstrate the knowledge they have acquired throughout each level.

### Currency Configuration:

Administrators must configure the type of currency that users can accumulate as rewards for their learning. These rewards can be exchanged for DOT or any other currency available in the prize pool.

### Prize pool Configuration:

Administrators must set the total amount in the prize pool and configure the amount to be allocated for each level and challenge.

### Reward Configuration per Challenge and User:

Administrators must set the amount of HTD that users will receive when they are rewarded. Once a certain amount is accumulated, these rewards can be exchanged for DOT or another currency.

### How Each Level Works:

Level 1 (Beginner):

This introductory level focuses on teaching users basic to advanced concepts on various vulnerabilities that they might encounter in challenges and real-life situations. Challenges will be categorized by the vulnerability they aim to identify and assess.  

After accessing the necessary concepts, users can start solving challenges. They will be presented with a multiple-choice screen displaying three different code fragments. Users must review these and select the one they believe contains the vulnerability being assessed. This format will continue through the rest of the Level 1 challenges, helping users reinforce their newly acquired knowledge with bibliographic support.

Level 2 (Intermediate):  

This level has a medium level of difficulty. Here, users won’t have the guidance of basic or advanced concepts, and must rely on their knowledge from Level 1. If they get stuck, they can use up to four hints to help solve the challenge. Users will interact with the contract using their browser console, increasing the complexity of the challenges.

Level 3 (Advanced):

This level has the highest complexity, as users will not have bibliographic support or hints. They must demonstrate solid knowledge acquired in previous levels. Users will have access to a list of more complex contracts, which they can explore using the browser console or download from a repository for local auditing. In the final stage, users must audit a complete product to showcase everything they’ve learned throughout the three levels.

### Rewards:

First Level:  

As this level focuses on learning and solidifying knowledge, the challenges are less complex, and rewards serve as incentives. For each correctly identified vulnerability, users will earn 1 $HTD. Once they accumulate 20 $HTD, they can exchange them for 1 $DOT or another equivalent currency determined by the administrator.

Second Level:

Challenges in this level aim to reinforce knowledge from Level 1 while increasing complexity. Rewards also serve as incentives, similar to Level 1, but users can exchange 10 $HTD for 1 $DOT.

Third Level: 

Challenges in this level require users to demonstrate their solid knowledge without any assistance. Given the complexity, users can exchange 5 $HTD for 100 $DOT or another currency determined by the administrators. Upon completing the final stage and successfully auditing a complete product, users will also receive an NFT as a reward.

### Knowledge Validation:

To validate user knowledge, they will receive a POAP for each completed level, certifying their achievements and advanced levels.

### Recognition Ranking:

Users who achieve high performance can join the leaderboard of top auditors. This will give them prestige and increase their visibility, potentially leading to opportunities with companies, including Polkadot.

### Platform Monetization:

If deemed appropriate, the platform can receive a small percentage from each user who completes all three levels

## Features
improvements migrate this MVP to Substrate

## Tech Stacks

Frontend uses the following tech stacks:
    [React](https://es.react.dev/)

    [Firebase](https://firebase.google.com/?hl=es)

Smart Contracts are built with:

    [Hardhat](https://hardhat.org/) for contract deployment

Deploy in Moonbeam
    [ChallengeGovernance](https://moonbase.moonscan.io/address/0xACDDa47A43d704ADaaC5b049288C94e5cb401fdE)
    [HackTheDotToken](https://moonbase.moonscan.io/address/0x7204d112Ef25E664D45c49B1497BA1fB146d5323)
    [ChallengeManager](https://moonbase.moonscan.io/address/0x4A4c2Def8e728A4D209bD8D3211Eb758F85105c1)
    [RewardManager](https://moonbase.moonscan.io/address/0x8c02057a28a4ED422cDfBba180eaC6A24C1612e1)
    [LevelManager](https://moonbase.moonscan.io/address/0xfd6F43bB3C1B0EC381b65f3ba0e33Da3e2785Ad4)
    
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