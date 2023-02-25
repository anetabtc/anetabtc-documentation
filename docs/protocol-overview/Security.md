---
sidebar_label: 'Security'
sidebar_position: 2
---

There will be 3 versions to anetaBTC. 

All versions will be open sourced, use smart contracts, and have full documentation. 

Currently, we are preparing to launch V1 public testnet on Ergo. 

V1 is under our governance and is not decentralized. For v1, there is a public bitcoin address under our governance. For minting, users send BTC to the provided wallet address and for redeeming, our backend programmatically sends BTC to the BTC address provided by the user.

V1 has one wallet that you send BTC to and the offchain code programmatically verifies the BTC deposit transaction and relays the matching Ergo transaction from the smart contract to the recipient address. Similar to the Rosen bridge, but instead of multiple guards, it's just anetaBTC verifying the transactions. This is the most centralized version and will become fully decentralized as we transition to v3 implementation. 

V2 will utilize the Rosen bridge architecture and be under governance of guardians and have assistance from watchers, which consists of well-known projects in the ecosystem and a multi-signature schematic. 

V3 will be most decentralized where anyone can run a vault that provides enough collateral. 

v3 will be our own solution which is heavily inspired by the Xclaim whitepaper, but has some changes made to it in order to be efficiently implementable to eUTXO model and with addressing possible vulnerabilities of the Xclaim solution in mind. In this solution, anybody can run their own vault by depositing ERG collateral on the Ergo side thus allowing them to receive BTC deposit on Bitcoin side and release the eBTC after such deposit on Ergo side. 

For v3, a main part of the protocol will be using vaults.

Vaults are non-trusted and collateralized and any user can become a Vault by providing collateral. This means as a user, you can freely choose any Vault you like or be your own Vault. You don’t have to trust anyone else if you want to be extra cautious.

The correct behavior of Vaults is enforced by the bridge. Specifically, Vaults must prove correct behavior to the BTC-Relay component - a Bitcoin SPV client implemented directly on top of the bridge. If a Vault tries to steal BTC, this will be automatically detected and the Vault will lose its collateral - and users will be reimbursed using this collateral at a beneficial rate because Vaults are overcollateralized from the start.

The secondary responsibility of a Vault is to monitor both Bitcoin and the bridge to ensure that the BTC-Relay stays up to date with the Bitcoin mainchain by relaying Bitcoin block headers. BTC-Relay is self-healing and automatically detects and recovers from Bitcoin forks.

To issue anetaBTC, the user will be required to pay a security deposit in ERG, hence why the vault sends locked ERG collateral to the anetaBTC bridge. This is a security measure to incentivize genuine activity and prevent griefing of vaults. The ERG security deposit will be released back to the user for completed transactions.

<!-- Source: xchain whitepaper  -->
