## Run
### run nodes
- run a mandala node listening to http:8545 and ws:8545
- run a eth node listening to http:8546 and ws:8546: `yarn eth`
- run a guardian: `yarn guard`
- send some token from `0x75E480dB528101a381Ce68544611C169Ad7EB342` to `0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1` from metamask, since we will use `0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1` as our dev account. 

### deploy contracts
```bash
cd ethereum
yarn
yarn deploy
yarn register
```

### run UI

```bash
cd ui
npm ci
npm run typechain
npm start
```





# Tech

### Chain side

The Ethereum smart contract is in
`ethereum/contracts/Messenger.sol`
Added function: `receiveBytes`. This function receives VAA from UI and verifies it. There are three checks:

1. Verify Wormhole signatures. This is done via Wormhole SDK `parseAndVerifyVM` method.
2. Verify that VAA was emitted from one of known contract addresses. (Messenger on one of chains in this case). We register all addresses with each Smart contract in `npm run register` script, after all contracts have been migrated.
3. Check if this VAA was already processed. This is done by checking if VAA hash has been already processed.

### Client side

Calling code is in
`ui/src/App.tsx`
`processClickHandler`
All work is done in call `Messenger.receiveBytes`.
Call either returns, which is indication that VAA was verified, or it trows exception if verification fails in one of the steps above.
