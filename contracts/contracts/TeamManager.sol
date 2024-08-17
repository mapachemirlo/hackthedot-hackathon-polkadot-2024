// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TeamManager {
    mapping(address => uint) public teamId;
    mapping(uint => address[]) public teams;

    function joinTeam(uint _teamId) external {
        teamId[msg.sender] = _teamId;
        teams[_teamId].push(msg.sender);
    }

    function getTeamMembers(uint _teamId) external view returns (address[] memory) {
        return teams[_teamId];
    }
}
