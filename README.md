
![](https://i.imgur.com/r8mM1TN.gif)
# LaRed Wallet

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Cross-platform client for Symbol LaRed to manage accounts, mosaics, namespaces, and issue transactions.
***
## Features
### Home 
Sending transfers and invoices, dashboard displaying previous transactions, list of assets, available balance – all in one place.

![](https://i.imgur.com/xsnIzSR.gif)
### Accounts 
Add or remove accounts and contacts, preview information such as account details (public and private keys, Metadata), or back up your profile as a paper wallet.

![](https://i.imgur.com/M08gjMm.png)
### Tokens
View your owned and expired tokens or create new ones, with the options to set the supply, divisibility, duration and fee.

![](https://i.imgur.com/RqqFVR5.jpg)
### Namespaces
View your owned and expired namespaces or create new namespaces and sub-namespaces.

![](https://i.imgur.com/VRgrk77.jpg)
### Multisig
Modify account multisig properties by defining an account as a Multi-Signature Account, adding cosignatories and defining the minimum number of signatures required to sign a transaction, add a cosigner or remove a cosigner.

![](https://i.imgur.com/1VYTgrh.jpg)
### Staking
Use the Delegated Proof of Stake score of an account to create new blocks and receive rewards without having to run a node locally.

![](https://i.imgur.com/iIGQhTe.jpg)
### Aggregate
Aggregate several simple, token or namespace transactions to conveniently merge them into a single transaction.

![](https://i.imgur.com/jmE2LBu.gif)
### News
Get the latest cryptocurrency news and articles, conveniently displayed in the News section.

![](https://i.imgur.com/JEvOgVs.gif)
***
## Installation

LaRed Wallet is available for Mac, Windows, and as a web application.

1. Download LaRed Desktop Wallet from the [releases section](https://github.com/superhow/lared-wallet).

2. Launch the executable file and follow the installation instructions.

3. Create a profile. Remember to save the mnemonic somewhere safe (offline).
***
## Requirements

**Node.js 10 or 12 LTS** is required to run LaRed Wallet as a web application.
It is recommended to install **npm**, the Node.js package manager. This can be done by executing the following command:

   ```
sudo apt install npm
   ```
***
## Building instructions

1. Clone the project.


    ```
git clone https://github.com/superhow/lared-wallet.git
    ```

2. Navigate to the project folder.

    ```
cd lared-wallet
    ```
	
3. Install the dependencies. This may take a while.

    ```
npm install 
    ```

4. Start the development server.

    ```
npm run dev 
    ```

5. Visit http://localhost:8080/#/ in your browser.
***
## Feature status
### Features currently working

* Sending transactions                  ✔️
* Account and contact management        ✔️
* Exporting transactions                ✔️
* Multisig management                   ✔️
* Token creation                        ✔️
* Namespace creation                    ✔️
* Profile Backup (PDF)                  ✔️
* Mnemonic Backup (PDF)                 ✔️
* QR Code Upload (Upload Image)         ✔️
* News section                          ✔️

### Features currently not working

* QR Code Import (Scan via Camera)      ❌
* Staking                               ❌

***
## Main changes
* Changed news source (RSS channel) to cryptonews.com (https://cryptonews.com/news/feed) for more relevant news articles.
* Altered UI elements (colors, text, icons) for a more appealing, consistent and coherent appearance.
* Changed some terms to more popular and understandable ones:
	* Mosaics changed to Tokens
	* Harvesting changed to Staking
	* Importance changed to Delegated Proof of Stake
* Lared-paper-wallets node module has been added to enhance the design of exported PDF paper wallet (when making a backup of accounts or mnemonic phrases). The templates of paper wallets are .PDF files, encoded in Base64 and stored in encodedBasePdf.js and encodedBasePrivateKeyPdf.js files in /modules/lared-paper-wallets/resources.
***
## Known issues
* Staking not working (stuck on Activation in Progress).
* Import QR Code (Scan via Camera) currently not working on Google Chrome (Windows 10) browser.
* Refreshing the page (pressing F5) requires logging in again.
* Namespace duration limit (2592000) is ignored when creating a namespace via Aggregate section. 
***
## License

Copyright 2018-present NEM

Licensed under the [Apache License 2.0](LICENSE)

[self]: https://github.com/superhow/lared-wallet
[docs]: https://nemtech.github.io
