// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0 <= 0.9.0;

contract Coffee {
    struct Memo {
        string name;
        string message;
        uint timestamp;
        address from;
    }

    Memo[] memos;

    address payable owner;              // owner will receive funds

    constructor() {
        owner = payable(msg.sender);
    }

    function buyCoffee(string calldata _name, string calldata _message) external payable {
        require(msg.value > 0, "Value required!");

        (bool sent,) = owner.call{value: msg.value}("");

        require(sent, "Transaction failed!");

        memos.push(Memo(_name, _message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}