<template>
    <div
        v-if="!!Object.keys(addressBalanceMap).length || !!Object.keys(optInAddressBalanceMap).length"
        class="account-selection-container"
        @keyup.enter="submit"
    >
        <div class="dialog-sub-tips">
            {{ $t('address_to_interact_with') }}
        </div>
        <div class="choose-hd-path scroll">
            <div class="address-list">
                <div class="table-title">
                    <span class="address-id">{{ $t('id') }}</span>
                    <span class="address-value">{{ $t('address') }}</span>
                    <span class="address-balance">{{ $t('balance') }}</span>
                </div>
                <div class="table-body">
                    <div v-for="(a, index) in optInAddressesList" :key="'opt-in-' + index" @click="onAddAddressOptIn(a.index)">
                        <div v-if="!selectedOptInAccounts.includes(a.index)" class="table-item pointer">
                            <span class="address-id">{{ a.index + 1 }} (Opt In)</span>
                            <span class="address-value">{{ formatters.miniAddress(a.address) }}</span>
                            <span v-if="optInAddressBalanceMap[a.address.plain()] != null" class="address-balance overflow_ellipsis">
                                <MosaicAmountDisplay :absolute-amount="optInAddressBalanceMap[a.address.plain()]" />
                            </span>
                            <span v-else class="address-balance overflow_ellipsis">
                                N/A
                            </span>
                        </div>
                    </div>
                    <div v-for="(a, index) in addressesList" :key="index" @click="onAddAddress(index)">
                        <div v-if="!selectedAccounts.includes(index)" class="table-item pointer">
                            <span class="address-id">{{ index + 1 }}</span>
                            <span class="address-value">{{ formatters.miniAddress(a) }}</span>
                            <span v-if="addressBalanceMap[a.plain()] != null" class="address-balance overflow_ellipsis">
                                <MosaicAmountDisplay :absolute-amount="addressBalanceMap[a.plain()]" />
                            </span>
                            <span v-else class="address-balance overflow_ellipsis">
                                N/A
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="button-container flex-container">
            <button class="solid-button button-style create-account-style" @click="previous">
                {{ $t('back') }}
            </button>
            <button class="solid-button button-style create-account-style inverted-button" @click="submit">
                {{ $t('next') }}
            </button>
        </div>
    </div>
    <div v-else>
        <Spin size="large" fix class="absolute" />
    </div>
</template>

<script>
import AccountSelectionTs from './AccountSelectionTs';
export default class AccountSelection extends AccountSelectionTs {}
</script>
<style lang="less" scoped>
@import './AccountSelection.less';
</style>
