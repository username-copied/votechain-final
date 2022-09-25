# VoteBlock
## Decentralized blockchain based voting system for oragnizations


## FRONTEND DEMONSTRATION VIDEO - https://www.loom.com/share/c440646fad994695bf7360626778f6ce
## BACKEND DEMONSTRATION VIDEO - https://www.loom.com/share/b3c29599bafd4b93953b57a463bdd305 

VoteBlock is a decentralized blockchain based voting system for oragnization. It is built upon ethereum blockchain with use of truffle framework. The frontend part of it uses react js and backend is on ethereum with smart contracts in solidity. So here an admin of any organisation can create on or multiple elections, where people from that organisations apply to it. Voters here can login using metamask and their identity is completely anonymous. They can see the results, apply and be candidate.

<img src="https://github.com/rohandevray/votechain/blob/main/images/WhatsApp%20Image%202022-09-25%20at%2012.29.22%20PM.jpeg"
     alt="Markdown Monster icon"
     style="float: left; margin-right: 10px;" />
## Features

VoteBlock has 3 roles involves:
- Admin
-- Candidates/Applicants
-- voters
- Admin has certain privileges:
- Admin can approve/ reject applicants application based on certain criteria.
- Create the election and set time limit for it.
- Multiple elections can be created and run at the same time.
- Every user can apply for the any post in election.
- There is privacy for users voting.


## Tech

VoteBank uses a number of open source projects to work properly:

- ReactJS for frontend
- Solidity for smart contracts
- TailwindCSS for styling
- Truffle for creating dApp development enviroment
- Ganache for blockchain environment
- IPFS for storing files 


## Installation

VoteBank requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd VoteBsnk
npm i
node app
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
```



