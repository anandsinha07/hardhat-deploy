# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. 

deploy on matic:-

npx hardhat run scripts/sample-script.js --network matic 

verify on matic:-

Contracts with constructor arguments - edit arguments.js accordingly

$ npx hardhat verify paste-contract-address-here --network matic --constructor-args arguments.js

Contracts without constructor arguments -

$ npx hardhat verify paste-contract-address-here --network matic
