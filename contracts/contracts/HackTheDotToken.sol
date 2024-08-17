// contracts/HackTheDotToken.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HackTheDotToken is ERC20, Ownable {
    constructor(address initialOwner) ERC20("HackTheDotToken", "HTDT") Ownable(initialOwner) {
        _mint(initialOwner, 1000000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) external onlyOwner {
        _burn(msg.sender, amount);
    }
}

// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

// contract HackTheDotToken is ERC20, Ownable {
//     constructor() ERC20("Hack The Dot", "HTD") {
//         // Opcionalmente, puedes mintear tokens iniciales al deployar el contrato
//         // _mint(msg.sender, initialSupply);
//     }

//     // Función para mintear nuevos tokens
//     function mint(address to, uint256 amount) external onlyOwner {
//         _mint(to, amount);
//     }

//     // Función para quemar tokens si es necesario
//     function burn(address from, uint256 amount) external onlyOwner {
//         _burn(from, amount);
//     }
// }
