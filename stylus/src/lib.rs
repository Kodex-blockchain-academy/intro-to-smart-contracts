//!
//! Stylus Hello World
//!
//! The following contract implements the Counter example from Foundry.
//!
//! ```solidity
//! contract Counter {
//!     uint256 public number;
//!     function setNumber(uint256 newNumber) public {
//!         number = newNumber;
//!     }
//!     function increment() public {
//!         number++;
//!     }
//! }
//! ```
//!
//! The program is ABI-equivalent with Solidity, which means you can call it from both Solidity and Rust.
//! To do this, run `cargo stylus export-abi`.
//!
//! Note: this code is a template-only and has not been audited.
//!

// Allow `cargo stylus export-abi` to generate a main function.
#![cfg_attr(not(any(test, feature = "export-abi")), no_main)]
extern crate alloc;

use alloy_primitives::U256;
use stylus_sdk::storage::{StorageAddress, StorageBool, StorageVec};
/// Import items from the SDK. The prelude contains common traits and macros.
use stylus_sdk::{alloy_primitives::Address, prelude::*};

// Define some persistent storage using the Solidity ABI.
// `Counter` will be the entrypoint.
sol_storage! {
    #[entrypoint]
    pub struct State {
        StorageVec<StorageAddress> receivers;
        StorageVec<StorageAddress> investors;
        mapping (address => uint8) withdrawn;
        bool initialised;

    }

}

/// Declare that `Counter` is a contract with the following external methods.
#[public]
impl State {
   
   fn constructor(&mut self, receivers: Vec<Address>) {
    if self.initialised.get() == true {
        panic!("Already initialised");
    }
        receivers.iter().for_each(|receiver| {
            self.receivers.push(*receiver);
        });
        unsafe {
            let mut storage_bool = StorageBool::new(U256::from(30000),0);
            storage_bool.set_by_wrapped(true);
            self.initialised = storage_bool;
        }
    }
       
   
}
