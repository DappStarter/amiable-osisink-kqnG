require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note saddle honey inflict enter onion gate'; 
let testAccounts = [
"0xe9836a956d6abd4fedfbcd0ea7a00f101a6844c0d1308054eb16b2877d91e059",
"0x6de6b8fe2fd6f08cffcdf5e59f82501e18d9e9f9d5e71c24ef59c17556e78652",
"0xf0c74880de96edd0168e38d1570a86cc6f945f9d72718cecf2395bcaeaaeccde",
"0x8f0ed35e4a28c68810c6be23907c1e9e0551626fd357da0f647055d81963dd2f",
"0x515f6ad78336cddac1642998eece67e95a30798d844b47773783bdec55b8de37",
"0xdb5d460a411daeb95886551db222e3d29f4b794d0f80d09545827b8619b5e08e",
"0xd3561ae35e332a3afb12bb28d6a8ab7d232ca757dac22ce8b24d1b71ccae9ff1",
"0x40999fdd3a84bcfb11ac309103b30c5f728b33bbe72787b561297c593a32d088",
"0x9e91c19ce2405d362b5902a332c7ff7533e05d0861a4cc606a9f565aaba4d25a",
"0x624350e2ea2e5bbe4cc9f022ade3704f6af7f28f85b71cb7055f6ef6e827ddca"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


