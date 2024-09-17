// contracts/TokenizedShares.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenizedShares is ERC20, Ownable {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    function issueShares(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function transferShares(address recipient, uint256 amount) public {
        transfer(recipient, amount);
    }
}
