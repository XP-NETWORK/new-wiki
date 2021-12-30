---
sidebar_label: 'QuiChain'
sidebar_position: 4
---

# <center>QuiChain</center>

**Vision**

Blockchain technology combines the most advanced Internet, cryptographic, decentralized automatic decision making, and distributed data storage technologies. QuiChain is the one-stop security solution for the Quigon Bridge and Quigon NFT Aggregator.

**Free Minting**

NFTs *minted* (coined) via the NFT Aggregator initially reside on the QuiChain and can later bridge to any supported chain. It is more secure and verifiable than creating assets and metadata for NFTs but not minting them until someone buys them. QuiChain not only securely seals ownership of the assets, but its Explorer allows to view them both to the minter and the potential buyers. Minting NFTs on QuiChain is free. However, to avoid DoS attacks, the chain limits the number of assets a user can create in one block.

**Bridge Relay Validators**

Quigon Bridge security partially relies on a pool of distributed validators. The bigger the number of validators, the more secure the bridge is. However, submitting multiple transactions and collecting a multisignature on the target chain is expensive. Therefore, the bridge validators arrive at a consensus and collect the multisignature on the QuiChain for free. Then they select a leader to submit the transaction to the target chain and start listening to the event confirming the transaction is successful. They repeat the attempt if they did not catch the event in a reasonable time.

**Quigon Token Home**

QuiChain is the residence of the QUIGON token. The fungible token bridge allows transferring QUIGON from QuiChain to all the blockchains supported by the Quigon Bridge and back.
 Gasless QUIGON staking is possible exclusively on the QuiChain.

**Definition**

QuiChain is a *public distributed ledger* (database of successful and rejected transactions shared among the network participants), also known as a *blockchain*. 


**Transaction**

To change a record on QuiChain, a user has to *submit a transaction*. Usually, a user must specify where the user’s assets should go or what new assets should be *minted* (created). Every change of a record on QuiChain requires computational effort, and therefore, the user has to pay the *transaction fee* to compensate for it. Besides, transaction fees protect the network from DoS attacks. The only exceptions on QuiChain are NFT minting and QUIGON token staking. Both are protected from DoS attacks by transaction rate limiting. Reading the current state of the blockchain does not involve changing records and is free.

**Blocks**

Transactions comprise *blocks*. Blocks are *immutable* (cannot be changed once added to QuiChain). Each block uses a hash as an ID.  It is a hash of the transactions it includes and the previous block’s hash. It explains the name *blockchain* (a chain of blocks). 

**Block security & finality**

At least six other blocks must follow a block to achieve *finality* (impossibility to change or forge its data). Apart from an array of transactions, each block has a *hash*. The hash is by no means random. The hashing algorithm runs through the transactions data and the previous block’s hash ensuring the data integrity inside the block, meanwhile tightly linking it to its predecessor.

**Merkle Tree**

Finalized blocks become leaves of a *hash graph* called Merkle Tree. The tree structure serves for efficient and secure commitment and verification of the content validity of the large data structures. By contrast with a list where finding an element requires an `O(n)` complexity algorithm, the Merkle Tree will take only `O(log(n))` steps to do the same. The hash of the tree’s root ensures the validity of the child nodes. The child nodes verify their descendants. It continues until every branch and leaf matches its nearest root’s hash.

**Mealy Machine**

QuiChain is a kind of a Mealy Machine (a finite state machine whose output values are determined both by its last state and the current inputs). Formally,  Mealy Machine looks like a 6-tuple:

<center><code>( S, S<sub>0</sub>, ∑,𝛬, T, G )</code>, where</center>

|Symbol|Description|On QuiChain|
|:----:|:----------|:---------:|
|S|It is a finite set of possible states of QuiChain, also known as the state domain (𝕊).| Entropy grows with every transaction:<br></br>`∀S ∈ 𝕊, where 𝕊 → ∞`|
|S<sub>0</sub>|The *initial* state before the first block of transactions S<sup>0</sup> = [ I<sub>genesis</sub> ] | It is known as the Genesis of the chain, a JSON file containing the initial setup.|
| ∑ | The input alphabet (theoretically a finite set) | Entropy grows with every transaction|
| 𝛬 | The output alphabet (theoretically a finite set) | Entropy grows with every transaction |
| T | The transition function   `T:S x ∑ → S` <br></br>Mapps the (State & Input ⇒ new State) | Ex.: Transaction is<br></br> (Successful \| Rejected) |
| G | The output function      `G:S x ∑ → 𝛬` <br></br>Mapps the (State & Input ⇒ new Output) | Ex.: Event emission |

**QuiChain Validators**

Validators are responsible for transaction verification on QuiChain. They are the ones who do the computation the users pay for when they submit transactions. Validators attempt to run the transactions in a *sandbox* (local node of the QuiChain). If the transactions succeed locally, the validators add them to the nearest block and label them SUCCESS. If the transactions fail, they still appear in the block but bear the REJECTED mark. After processing all the proposed transactions, validators sign the block with their private keys and propose it for inclusion in the Merkle Tree of the blockchain. 

QuiChain validators guarantee that the Quigon Bridge validators observe all the security procedures. The report on the Bridge Validators if the Bridge transactions fail because the Bridge validators are unresponsive and cannot arrive at a consensus. Because the QuiChain records all such transactions, the assets remain secure and continue their journey between chains once enough Bridge validators become operational.

**Consensus mechanism**

Validators must arrive at a *consensus* (agreement) that the transactions in the candidate block bear correct labels (SUCCESS or REJECTED). To avoid dependency on one or several validators, the *Byzantine Fault Tolerance* (BFT) threshold of 67% of voters must support the block before it joins the Merkle Tree as a leaf.
