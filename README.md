# Demo: Sending Messsage between Mandala and Ganache
## Run
### run nodes
- run a mandala node + RPC adaptor listening to http:8545 and ws:3331
- run a eth ganache node listening to http:8546 and ws:8546: `yarn eth`
- send some token from `0x75E480dB528101a381Ce68544611C169Ad7EB342` to `0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1` from metamask, since we will use `0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1` as our dev account. 

### deploy contracts
```bash
cd ethereum
yarn
yarn deploy
yarn register
```

### run guardian
`yarn guard`

### run UI
```bash
cd ui
yarn install
yarn typechain
yarn start
```

### send message around!
if running mandala with `instant-sealing`, need to run a loop to force block production.
