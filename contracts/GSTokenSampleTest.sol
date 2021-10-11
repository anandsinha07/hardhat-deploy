// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract GSTokenSampleTest is ERC20 {
    constructor(uint256 initialSupply) public ERC20("G Token", "TGS") {
        _mint(msg.sender, initialSupply);
    }
}