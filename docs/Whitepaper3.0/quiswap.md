---
sidebar_label: 'QuiSwap'
sidebar_position: 3
---

# <center>QuiSwap</center>

**Vision**

Some users historically reside on one blockchain, its ecosystem, and currency. They feel secure using the native wallets and only own the native coins of the network. Once they spot NFTs they want to have as collectors or for resale in the domestic marketplaces, they will face the problem of purchasing assets in a foreign currency. One option is to open an account on a foreign chain and buy foreign tokens. Another is to use QuiSwap and enjoy the experience of purchasing foreign goods paying with the domestic currency, while QuiSwap will handle the exchange in the background.

**Definition**

*QuiSwap* is a *derivative contract* used for nearly instantaneous conversion of one cryptocurrency into another at the best rate currently available in the market at a minimal transaction cost. The Quigon NFT Aggregator uses this tool behind the scenes. However, it is a self-sufficient product and can be used by any cryptocurrency enthusiast or professional trader as an effective exchange instrument while buying assets on foreign chains. 




**Swap Mechanics**

The user submits the *principal amount* (the equivalent of the NFT price in the local currency) at the s*pot rate* (the best exchange rate available in the market for the target coin at the moment of submission). Additionally, a fee of X% of the principal amount is withdrawn from the user’s account to cover the interest rates of the *liquidity pool providers* (other users - holders of the (native - foreign) token pairs who staked their tokens for interest to make the swap mechanism possible). X is a variable that differs from one token pair to another and can vary in time due to the token price fluctuations.

**Supported Tokens**

At the moment of writing, the following tokens are available for instant swapping:

*ETH, BNB, MATIC, SOL, AVAX, ALGO, TRX, EGLD, FTM, XTZ, xDAI.*

The exchange rates are dynamic and will change in time depending on the market price of the tokens. We will keep adding more liquidity pairs as we integrate more chains into our ecosystem.

**Slippage**

Potentially, by the time QuiSwap displays the estimated price to the user, and the user decides to purchase, the price of the target coins could rise or fall to the native token. For the transaction to succeed, the user should set the *slippage*, the difference between the initially observed, and the current price of the target token the user can accept. For example, if the slippage is 0.50% and the price of the target coin grows by half a per cent or less, the transaction will succeed.

**Deadline**

If the user has confirmed the slippage lower than the actual, the transaction will be pending until the slippage matches the desired one. However, this may not happen in a reasonable time. To avoid waiting forever, the user can set the *deadline* (the length of time the user is ready to wait for slippage to match the one set by the user). If the deadline expires before the slippage matches the set value, QuiSwap will cancel the transaction. However, the user can resubmit the same transaction with a higher slippage, extended deadline, or a combination of both.
