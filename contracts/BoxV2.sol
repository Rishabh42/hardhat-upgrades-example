// contracts/BoxV2.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "./lib/SafeMath.sol";

contract BoxV2 {
    // using SafeMath for uint256;
    uint256 private value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    // Stores a new value in the contract
    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }

    // Increments the stored value by 1
    function increment() public {
        // value = value.add(1);
        value = SafeMath.add(value, 1);
        emit ValueChanged(value);
    }
}
