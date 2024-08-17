// contracts/ValidationManager.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract ValidationManager is Ownable {
    mapping(address => bool) public validatedUsers;

    event UserValidated(address indexed user);

    constructor(address initialOwner) Ownable(initialOwner) {}

    function validateUser(address user) external onlyOwner {
        require(!validatedUsers[user], "User already validated");
        validatedUsers[user] = true;
        emit UserValidated(user);
    }

    function isUserValidated(address user) external view returns (bool) {
        return validatedUsers[user];
    }
}

// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/access/Ownable.sol";

// contract ValidationManager is Ownable {
//     bytes32 private correctSolution;
//     mapping(address => bool) public challengeCompleted;

//     function setSolution(string memory solution) public onlyOwner {
//         correctSolution = keccak256(abi.encodePacked(solution));
//     }

//     function validateSolution(string memory solution) external {
//         require(!challengeCompleted[msg.sender], "Challenge already completed.");
//         if (keccak256(abi.encodePacked(solution)) == correctSolution) {
//             challengeCompleted[msg.sender] = true;
//         }
//     }

//     function isChallengeCompleted(address user) external view returns (bool) {
//         return challengeCompleted[user];
//     }
// }
