'use strict';

var sumcore = module.exports;

// module information
sumcore.version = 'v' + require('./package.json').version;
sumcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of sumcore-lib found. ' +
      'Please make sure to require sumcore-lib and check that submodules do' +
      ' not also include their own sumcore-lib dependency.';
    throw new Error(message);
  }
};
sumcore.versionGuard(global._litecore);
global._litecore = sumcore.version;

// crypto
sumcore.crypto = {};
sumcore.crypto.BN = require('./lib/crypto/bn');
sumcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
sumcore.crypto.Hash = require('./lib/crypto/hash');
sumcore.crypto.Random = require('./lib/crypto/random');
sumcore.crypto.Point = require('./lib/crypto/point');
sumcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
sumcore.encoding = {};
sumcore.encoding.Base58 = require('./lib/encoding/base58');
sumcore.encoding.Base58Check = require('./lib/encoding/base58check');
sumcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
sumcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
sumcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
sumcore.util = {};
sumcore.util.buffer = require('./lib/util/buffer');
sumcore.util.js = require('./lib/util/js');
sumcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
sumcore.errors = require('./lib/errors');

// main bitcoin library
sumcore.Address = require('./lib/address');
sumcore.Block = require('./lib/block');
sumcore.MerkleBlock = require('./lib/block/merkleblock');
sumcore.BlockHeader = require('./lib/block/blockheader');
sumcore.HDPrivateKey = require('./lib/hdprivatekey.js');
sumcore.HDPublicKey = require('./lib/hdpublickey.js');
sumcore.Networks = require('./lib/networks');
sumcore.Opcode = require('./lib/opcode');
sumcore.PrivateKey = require('./lib/privatekey');
sumcore.PublicKey = require('./lib/publickey');
sumcore.Script = require('./lib/script');
sumcore.Transaction = require('./lib/transaction');
sumcore.URI = require('./lib/uri');
sumcore.Unit = require('./lib/unit');

// dependencies, subject to change
sumcore.deps = {};
sumcore.deps.bnjs = require('bn.js');
sumcore.deps.bs58 = require('bs58');
sumcore.deps.Buffer = Buffer;
sumcore.deps.elliptic = require('elliptic');
sumcore.deps.scryptsy = require('scryptsy');
sumcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
sumcore.Transaction.sighash = require('./lib/transaction/sighash');
