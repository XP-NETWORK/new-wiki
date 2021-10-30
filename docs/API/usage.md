---
sidebar_label: 'Home'
sidebar_position: 1
---

# XPNET JavaScript API library

<hr/>

## General description

The JavaScript APY is a lightweight library to aid the dApp developers in their seamless integration of the XP.network NFT multi-chain bridge into the NFT centered application. The library abstracts away the inner complexity of the bridge and offers a simple to use interface as a gateway to the bridge functionality.

## 1. Installation

```bash
npm install --save xpnet-js ethers 
```
or
```bash
yarn add xpnet-js ethers 
```

## 2. Importing dependencies
JavaScript:
```javascript
const { ethers } = require('ethers');
const { ChainFactory } = require('xpnet-js');
```
TypeScript:
```typescript
import { ethers } from 'ethers';
import { ChainFactory } from 'xpnet-js';
```

## 3. Use cases:
There are several use cases the xpnet-js library supports.

- [x] Minting NFTs on all the bridged blockchains in a generic way
- [x] Transfering NFTs from chain A to chains B ... Z
- [x] Listing NFTs by a user account
- [x] Fetching an NFT URI from a blockchain

### Minting an NFT


### Sending an NFT


### Listing NFTs by user account


## Signing Transactions




