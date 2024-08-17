// contracts/NFTGating.sol
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface INFT {
    function balanceOf(address owner) external view returns (uint256);
}

contract NFTGating is Ownable {
    INFT public nftContract;
    mapping(address => bool) public hasAccess;

    event AccessGranted(address indexed user);

    constructor(address initialOwner, address _nftContract) Ownable(initialOwner) {
        nftContract = INFT(_nftContract);
    }

    function checkAccess() external {
        require(nftContract.balanceOf(msg.sender) > 0, "No NFT, no access");
        hasAccess[msg.sender] = true;
        emit AccessGranted(msg.sender);
    }

    function userHasAccess(address user) external view returns (bool) {
        return hasAccess[user];
    }
}

// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

// contract NFTGating is Ownable {
//     IERC721 public nftCollection;
//     mapping(uint => bool) public hasAccess;

//     function setNftCollection(address nftAddress) public onlyOwner {
//         nftCollection = IERC721(nftAddress);
//     }

//     function grantAccess(uint tokenId) public onlyOwner {
//         hasAccess[tokenId] = true;
//     }

//     function checkAccess(uint tokenId) public view returns (bool) {
//         require(nftCollection.ownerOf(tokenId) == msg.sender, "Not the owner of the NFT.");
//         return hasAccess[tokenId];
//     }
// }
