# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

deploy on matic:-

npx hardhat run scripts/sample-script.js --network matic 

verify on matic:-

Contracts with constructor arguments - edit arguments.js accordingly
npx hardhat verify 0x19c1f24561252223cbfbf5d63734d00b4985b477 --network matic --constructor-args arguments.js

Contracts without constructor arguments -
npx hardhat verify 0x19c1f24561252223cbfbf5d63734d00b4985b477 --network matic



