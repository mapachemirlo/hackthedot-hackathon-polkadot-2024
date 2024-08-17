// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HackTheDotToken is ERC20, Ownable {
    constructor() ERC20("Hack The Dot", "HTD") {
        // Opcionalmente, puedes mintear tokens iniciales al deployar el contrato
        // _mint(msg.sender, initialSupply);
    }

    // Función para mintear nuevos tokens
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    // Función para quemar tokens si es necesario
    function burn(address from, uint256 amount) external onlyOwner {
        _burn(from, amount);
    }
}
