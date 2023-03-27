---
sidebar_label: 'V1-V3 Explained'
sidebar_position: 2
---
# Version 1-3 High Level

AnetaBTC is a research-driven protocol. The birth of AnetaBTC is the combination of concepts from research papers including, but not limited to, Bitcoin, wBTC, REN, Ergo, and Interlay. The key part of our approach is writing smart contracts that send Bitcoin to a vault if a user wants to mint anetaBTC. Upon minting, users will be able to freely use anetaBTC as a Bitcoin-backed asset on the Ergo and Cardano blockchains.

V1 is under our governance and is not decentralized. For v1, there is a public bitcoin address under our governance. Users send it using the wallet address when minting and our backend programmatically sends it out during redemption. V1 has a vault where BTC is sent and the offchain code programmatically verifies the BTC deposit transaction containing metadata with the user’s Ergo address. This is the most centralized version and will become fully decentralized as we transition to v3 implementation.

V2 will utilize the Rosen bridge architecture and be under governance of guardians which consists of well-known projects in the ecosystem and a multi-signature schematic. This approach is uncollaterized and the guardians have custody of the anetaBTC vaults. 

V3 will be most decentralized where anyone can run a vault by providing collateral. V3’s solution is inspired by the [Xclaim whitepaper](https://eprint.iacr.org/2018/643.pdf), where vault operators have a vested interest in maintaining the security of the protocol. Vault operators have the ability to act maliciously, but would lose their collateral, which is less than the amount of BTC they have in their custody. In this case, effected users receive more tokens than the amount of BTC they minted on the protocol. 
