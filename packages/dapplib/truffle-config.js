require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net puppy harvest lock swear student'; 
let testAccounts = [
"0xa22ff467258a1b2d8a8ed9fc9c1957a5dd03489bb196061fd86b5c2b8da7b772",
"0x41a76bdd238240ed5d00516182a97d2eaa5da7e8c334c8ce618b7e88a55d8ed2",
"0xeb3705c15ec3ed4396fcbfeda71dbe1b0335a1d432f4850083197f32c72da7ce",
"0x64dc68732d409a5f26c4d5949401ccd03c9b274d83ed3babfad629401eb95581",
"0xf654010be35314b1e33fe8ddeed79a0978f44787b83191b5311fd547482e9a3f",
"0x2205a07bfdd94b0330ef0f65c62c2a105497028281138391e341b7f9ba67c52e",
"0xf26bfaab463f2413ac13673edb0bbf373c56b3aa6a413f7d4be166fdab1b0985",
"0xbd029d8a1473c99edfe6cd9405dba62082dac33fae64c182b07a43211ffff40a",
"0xe8d15f1dfb3d9cecb6bde7cbbd7d7e99023f342a870bb7769b7c99595918bc29",
"0xc923f4ce362bf238bac305f9196526b58294c4b89aa230b3e5edc7ca2c368cd3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
