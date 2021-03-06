/*
 * Copyright 2020 NEM (https://nem.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 *
 */

export interface NodeConfig {
    roles: number;
    friendlyName: string;
    url: string;
}

export interface NetworkConfigurationDefaults {
    maxTransactionsPerAggregate: number;
    maxMosaicDuration: number;
    lockedFundsPerAggregate: string;
    maxNamespaceDuration: number;
    maxCosignatoriesPerAccount: number;
    maxMosaicAtomicUnits: number;
    blockGenerationTargetTime: number;
    currencyMosaicId: string;
    namespaceGracePeriodDuration: number;
    harvestingMosaicId: string;
    minNamespaceDuration: number;
    maxCosignedAccountsPerAccount: number;
    maxNamespaceDepth: number;
    defaultDynamicFeeMultiplier: number;
    maxMosaicDivisibility: number;
    maxMessageSize: number;
    epochAdjustment: number;
    totalChainImportance: number;
    generationHash: string;
}

export interface NetworkConfig {
    faucetUrl: string;
    nodes: NodeConfig[];
    defaultNetworkType: number;
    explorerUrl: string;
    networkConfigurationDefaults: NetworkConfigurationDefaults;
}

export const defaultTestnetNetworkConfig: NetworkConfig = {
    explorerUrl: 'http://explorer-test.lared.superhow.net/',
    faucetUrl: 'http://faucet-test.lared.superhow.net/',
    defaultNetworkType: 152,
    networkConfigurationDefaults: {
        maxMosaicDivisibility: 6,
        namespaceGracePeriodDuration: 30,
        lockedFundsPerAggregate: '10000000',
        maxCosignatoriesPerAccount: 25,
        blockGenerationTargetTime: 15,
        maxNamespaceDepth: 3,
        maxMosaicDuration: 315360000,
        minNamespaceDuration: 60,
        maxNamespaceDuration: 315360000,
        maxTransactionsPerAggregate: 1000,
        maxCosignedAccountsPerAccount: 25,
        maxMessageSize: 4096,
        maxMosaicAtomicUnits: 5000000000000000,
        currencyMosaicId: '69A4831E1A6D8303',
        harvestingMosaicId: '2B3D7AE3878D9E5B',
        defaultDynamicFeeMultiplier: 100,
        epochAdjustment: 1642674928,
        totalChainImportance: 420000,
        generationHash: '1E10AF1BC04485E48A2536A5683EC8F55C3B76086F65ED1F1CCB3EDA5CF623A7',
    },
    nodes: [
        { friendlyName: 'LARED-testnet-dual-1', roles: 7, url: 'http://testnet-dual-1.lared.superhow.net:3000' },
    ],
};

export const defaultMainnetNetworkConfig: NetworkConfig = {
  explorerUrl: 'http://explorer.lared.superhow.net/',
    faucetUrl: 'http://faucet.lared.superhow.net/',
    defaultNetworkType: 104,
    networkConfigurationDefaults: {
        maxMosaicDivisibility: 6,
        namespaceGracePeriodDuration: 30,
        lockedFundsPerAggregate: '10000000',
        maxCosignatoriesPerAccount: 25,
        blockGenerationTargetTime: 15,
        maxNamespaceDepth: 3,
        maxMosaicDuration: 315360000,
        minNamespaceDuration: 60,
        maxNamespaceDuration: 315360000,
        maxTransactionsPerAggregate: 1000,
        maxCosignedAccountsPerAccount: 25,
        maxMessageSize: 4096,
        maxMosaicAtomicUnits: 5000000000000000,
        currencyMosaicId: '046A12946D5734F9',
        harvestingMosaicId: '0D5D413AC84F523A',
        defaultDynamicFeeMultiplier: 100,
        epochAdjustment: 1655719200,
        totalChainImportance: 420000,
        generationHash: '7A7BB5E6CDC05C7E86B2D278A84D08FF8A17F96957B575F58CF49202888AE022',
    },
    nodes: [
        { friendlyName: 'LARED-testnet-dual-1', roles: 7, url: 'http://mainnet-dual-1.lared.superhow.net:3000' },
        { friendlyName: 'LARED-testnet-dual-2', roles: 7, url: 'http://mainnet-dual-1.lared.superhow.net:3000' },
        { friendlyName: 'LARED-testnet-dual-3', roles: 7, url: 'http://mainnet-dual-1.lared.superhow.net:3000' }
    ],
};

const defaultNetworkConfig: Record<number, NetworkConfig> = {
    152: defaultTestnetNetworkConfig,
    104: defaultMainnetNetworkConfig,
};

const resolvedNetworkConfig: NetworkConfig = window['networkConfig'] || defaultNetworkConfig;
console.log('networkConfig resolved!', resolvedNetworkConfig);
export const networkConfig = resolvedNetworkConfig;
