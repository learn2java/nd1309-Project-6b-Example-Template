##  Project Details

**1. Rinkeby Deployment Details**

**Contract Address**

`0xc7c968889277C7A6c358c1aD9F07e69603177Bfe`

https://rinkeby.etherscan.io/address/0xc7c968889277C7A6c358c1aD9F07e69603177Bfe

**Transaction Hash**

`0x7926ecbb72c9f13a5ef9641d4c979c5322263bb3058aea83ec24bab6b62cbefc`

**Account**

`0x11c223D1E31D083641aEE615A116e1b1B46eC868`

----

**2. Deployment Logs for Rinkeby**

```reStructuredText
$ truffle migrate --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.

Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29999943 (0x1c9c347)


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > transaction hash:    0x7926ecbb72c9f13a5ef9641d4c979c5322263bb3058aea83ec24bab6b62cbefc
   > Blocks: 0            Seconds: 13
   > contract address:    0x397f2Dc8292f03FD39175185ec620f90EeDa0494
   > block number:        9239115
   > block timestamp:     1630840502
   > account:             0x11c223D1E31D083641aEE615A116e1b1B46eC868
   > balance:             0.890271565998666608
   > gas used:            306684 (0x4adfc)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00306684 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > transaction hash:    0xf25e42c153558803870bb079d1f282098e0cf923fc125d9b2eee51fa888a0f94
   > Blocks: 1            Seconds: 9
   > contract address:    0x9ECeb31CfB8BD064A07Bff90FfF4763e70BD84C7
   > block number:        9239116
   > block timestamp:     1630840517
   > account:             0x11c223D1E31D083641aEE615A116e1b1B46eC868
   > balance:             0.887204845998666608
   > gas used:            306672 (0x4adf0)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00306672 ETH


   Deploying 'RetailerRole'
   ------------------------
   > transaction hash:    0x98b22a92b685e112924353d49a788179e125f881e8afa22c71c1b6044f89e95b
   > Blocks: 2            Seconds: 21
   > contract address:    0x098b3dEF09E678635E8Cb3cc20F37eE76a7291f1
   > block number:        9239118
   > block timestamp:     1630840547
   > account:             0x11c223D1E31D083641aEE615A116e1b1B46eC868
   > balance:             0.884138005998666608
   > gas used:            306684 (0x4adfc)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00306684 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > transaction hash:    0x3b844a3777bc7ee4845dfabe5f28790e8b5564a041898e479fc1bc9f98c81dfa
   > Blocks: 1            Seconds: 9
   > contract address:    0xDeAA4D4D8D1aB5f36336531c3E838f6829C62D2b
   > block number:        9239119
   > block timestamp:     1630840562
   > account:             0x11c223D1E31D083641aEE615A116e1b1B46eC868
   > balance:             0.881071165998666608
   > gas used:            306684 (0x4adfc)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00306684 ETH


   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0xda9ac722a9856cce83d10aa74f70e211b15699ff26d5cde721849a87a1a876ef
   > Blocks: 2            Seconds: 17
   > contract address:    0xc7c968889277C7A6c358c1aD9F07e69603177Bfe
   > block number:        9239121
   > block timestamp:     1630840592
   > account:             0x11c223D1E31D083641aEE615A116e1b1B46eC868
   > balance:             0.854280665998666608
   > gas used:            2679050 (0x28e10a)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0267905 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.03905774 ETH


Summary
=======
> Total deployments:   5
> Final cost:          0.03905774 ETH

```

---

**3. Libraries and Version**

```reStructuredText
$ truffle version
Truffle v5.4.9 (core: 5.4.9)
Solidity v0.5.16 (solc-js)
Node v11.3.0
Web3.js v1.5.2
```

---

**4. IPFS is not used in this project**

---

**5. Test Cases execution on localhost:7545 using Ganache GUI**

```reStructuredText
(base) ip-192-168-0-103:project-6 admin$ truffle test
Using network 'development'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.

ganache-cli accounts used here...
Contract Owner: accounts  0x676627Ce5A96D02470f37BcF8438C8bCd4904E8e
Farmer: accounts  0x676627Ce5A96D02470f37BcF8438C8bCd4904E8e
Distributor: accounts  0x676627Ce5A96D02470f37BcF8438C8bCd4904E8e
Retailer: accounts  0x676627Ce5A96D02470f37BcF8438C8bCd4904E8e
Consumer: accounts  0x676627Ce5A96D02470f37BcF8438C8bCd4904E8e


  Contract: SupplyChain
    ✓ Testing smart contract function harvestItem() that allows a farmer to harvest coffee (187ms)
    ✓ Testing smart contract function processItem() that allows a farmer to process coffee (142ms)
    ✓ Testing smart contract function packItem() that allows a farmer to pack coffee (100ms)
    ✓ Testing smart contract function sellItem() that allows a farmer to sell coffee (87ms)
    ✓ Testing smart contract function buyItem() that allows a distributor to buy coffee (243ms)
    ✓ Testing smart contract function shipItem() that allows a distributor to ship coffee (122ms)
    ✓ Testing smart contract function receiveItem() that allows a retailer to mark coffee received (185ms)
    ✓ Testing smart contract function purchaseItem() that allows a consumer to purchase coffee (166ms)
    ✓ Testing smart contract function fetchItemBufferOne() that allows anyone to fetch item details from blockchain (59ms)
    ✓ Testing smart contract function fetchItemBufferTwo() that allows anyone to fetch item details from blockchain (51ms)


  10 passing (2s)

You have new mail in /var/mail/admin
(base) ip-192-168-0-103:project-6 admin$ 
```

----

**6. Test Cases execution for Rinkeby Test Network**

```
(base) ip-192-168-0-103:project-6 admin$ truffle test --network rinkeby
Using network 'rinkeby'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.

ganache-cli accounts used here...
Contract Owner: accounts  0x11c223D1E31D083641aEE615A116e1b1B46eC868
Farmer: accounts  0x11c223D1E31D083641aEE615A116e1b1B46eC868
Distributor: accounts  0x11c223D1E31D083641aEE615A116e1b1B46eC868
Retailer: accounts  0x11c223D1E31D083641aEE615A116e1b1B46eC868
Consumer: accounts  0x11c223D1E31D083641aEE615A116e1b1B46eC868


  Contract: SupplyChain
    ✓ Testing smart contract function harvestItem() that allows a farmer to harvest coffee (18660ms)
    ✓ Testing smart contract function processItem() that allows a farmer to process coffee (10370ms)
    ✓ Testing smart contract function packItem() that allows a farmer to pack coffee (18853ms)
    ✓ Testing smart contract function sellItem() that allows a farmer to sell coffee (13453ms)
    ✓ Testing smart contract function buyItem() that allows a distributor to buy coffee (15698ms)
    ✓ Testing smart contract function shipItem() that allows a distributor to ship coffee (13337ms)
    ✓ Testing smart contract function receiveItem() that allows a retailer to mark coffee received (14841ms)
    ✓ Testing smart contract function purchaseItem() that allows a consumer to purchase coffee (15007ms)
    ✓ Testing smart contract function fetchItemBufferOne() that allows anyone to fetch item details from blockchain (2278ms)
    ✓ Testing smart contract function fetchItemBufferTwo() that allows anyone to fetch item details from blockchain (2616ms)


  10 passing (2m)

```

---

