<template>
    <div class="import-profile-wrapper radius">
        <div class="explanation-box">
            <div class="text-wrapper">
                <div v-if="getCurrentStep() === 0">
                    <div class="right-hints-section">
                        <p class="text1">
                            {{ $t('restore_profile') }}
                        </p>
                        <p class="text">
                            {{ $t('restore_profile_description_tip1') }}
                        </p>
                    </div>
                </div>
                <div v-if="getCurrentStep() === 1">
                    <div class="right-hints-section">
                        <p class="text1">
                            {{ $t('profile_import') }}
                        </p>
                        <p class="text">
                            {{ $t('input_mnemonic_tips') }}
                        </p>
                    </div>
                </div>
                <div v-if="getCurrentStep() === 2" class="selected-accounts-container">
                    <div class="right-hints-section">
                        <p class="text1">
                            {{ $t('profile_import') }}
                        </p>
                        <div class="accounts-container">
                            <div class="accounts-container-title">
                                {{ $t('select_accounts') }}
                            </div>
                            <div v-if="selectedAccounts.length" class="address-list-container radius">
                                <div class="address-list">
                                    <div class="table-title">
                                        <span class="address-id">{{ $t('id') }}</span>
                                        <span class="address-value">{{ $t('address') }}</span>
                                    </div>
                                    <div v-if="!!addressesList.length" class="address-list-body">
                                        <div
                                            v-for="index in selectedAccounts"
                                            :key="index"
                                            class="table-item pointer"
                                            @click="onRemoveAddress(index)"
                                        >
                                            <div class="address-item">
                                                <span class="address-id"> {{ index + 1 }} </span>
                                                <div class="table-item-content">
                                                    <div class="row">
                                                        <span class="address-value overflow_ellipsis">{{
                                                            formatters.miniAddress(addressesList[index])
                                                        }}</span>
                                                    </div>
                                                    <div class="row balance-row">
                                                        <div class="row">
                                                            <span class="address-balance">{{ $t('balance') }}: </span>
                                                            <span
                                                                v-if="addressMosaicMap[addressesList[index].plain()]"
                                                                class="address-balance"
                                                            >
                                                                <MosaicAmountDisplay
                                                                    :absolute-amount="addressMosaicMap[addressesList[index].plain()]"
                                                                />
                                                            </span>
                                                            <span v-else class="address-balance">
                                                                0
                                                            </span>
                                                        </div>
                                                        <span class="remove-icon"
                                                            ><img src="@/views/resources/img/Invisible@2x.png"
                                                        /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="optInSelectedAccounts.length" class="accounts-container-title">
                                {{ $t('select_opt_in_accounts') }}
                            </div>
                            <div v-if="optInSelectedAccounts.length" class="address-list-container radius">
                                <div class="address-list">
                                    <div class="table-title">
                                        <span class="address-id">{{ $t('id') }}</span>
                                        <span class="address-value">{{ $t('address') }}</span>
                                    </div>
                                    <div v-if="!!optInAddressesList.length" class="address-list-body">
                                        <div
                                            v-for="index in optInSelectedAccounts"
                                            :key="'optin-' + index"
                                            class="table-item pointer"
                                            @click="onRemoveOptInAddress(index)"
                                        >
                                            <div class="address-item">
                                                <span class="address-id"> {{ index + 1 }} </span>
                                                <div class="table-item-content">
                                                    <div class="row">
                                                        <span class="address-value overflow_ellipsis">{{
                                                            formatters.miniAddress(optInAddressesList[index])
                                                        }}</span>
                                                    </div>
                                                    <div class="row balance-row">
                                                        <div class="row">
                                                            <span class="address-balance">{{ $t('balance') }}: </span>
                                                            <span
                                                                v-if="addressMosaicMap[optInAddressesList[index].plain()]"
                                                                class="address-balance"
                                                            >
                                                                <MosaicAmountDisplay
                                                                    :absolute-amount="addressMosaicMap[optInAddressesList[index].plain()]"
                                                                />
                                                            </span>
                                                            <span v-else class="address-balance">
                                                                0
                                                            </span>
                                                        </div>
                                                        <span class="remove-icon"
                                                            ><img src="@/views/resources/img/Invisible@2x.png"
                                                        /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="getCurrentStep() === 3">
                    <img src="@/views/resources/img/icons/Incoming.svg" style="width: 30%;" />
                    <p class="text text-big">
                        {{ $t('restore_successful') }}
                    </p>
                </div>
            </div>
        </div>
        <div class="form-box">
            <div class="steps">
                <div class="step-group">
                    <div v-for="(text, index) in StepBarTitleList" :key="index" :class="['single-step', getStepClassName(index)]">
                        <div class="check-container">
                            <img src="@/views/resources/img/icons/check-mark.png" alt="checked icon" />
                        </div>
                        <p>{{ $t(text) }}</p>
                    </div>
                </div>
            </div>
            <div class="form">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import ImportProfileTs from './ImportProfileTs';
export default class ImportProfile extends ImportProfileTs {}
</script>
<style lang="less" scoped>
@import './ImportProfile.less';
</style>
