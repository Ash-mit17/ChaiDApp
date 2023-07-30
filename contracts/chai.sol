//SPDX-License-Identifier: MIT

pragma solidity >=0.5.2 <0.9.0;

contract chai{

    struct Memo{
        string name;
        string message;
        address from;
        uint time;
    }

    Memo[] memos;
    address payable owner;

    constructor(){
        owner = payable(msg.sender);
    }

    //make payment to buy a chai for me
    function buyChai(string memory _name,string memory _message) public payable{
        require(msg.value > 0 , "Send some ether");
        memos.push(Memo(_name,_message,msg.sender,block.timestamp));
        owner.transfer(msg.value);
    }

    //all the transactions
    function getMemos() public view returns(Memo[] memory){
        return memos;
    }
}