// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SupplyChain {
    struct Product {
        uint id;
        string name;
        string supplier;
        string status;
        address responsible;
    }

    uint public productCount = 0;
    mapping(uint => Product) public products;

    event ProductUpdated(uint id, string status, address responsible);

    function addProduct(string memory _name, string memory _supplier) public {
        productCount++;
        products[productCount] = Product(
            productCount,
            _name,
            _supplier,
            "Pending",
            msg.sender
        );
    }

    function updateStatus(uint _id, string memory _status) public {
        require(products[_id].id > 0, "Not found ");
        products[_id].status = _status;
        products[_id].responsible = msg.sender;
        emit ProductUpdated(_id, _status, msg.sender);
    }
}
