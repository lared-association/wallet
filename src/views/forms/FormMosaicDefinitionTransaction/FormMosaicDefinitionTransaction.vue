<template>
    <FormWrapper>
        <ValidationObserver v-slot="{ handleSubmit }" ref="observer" slim>
            <form onsubmit="event.preventDefault()">
                <SignerSelector v-model="formItems.signerAddress" :root-signer="currentAccountSigner" @input="signerChanged" />

                <!-- hide supply input in aggregate transactions -->
                <SupplyInput v-if="!isAggregate" v-model="formItems.supply" />

                <DivisibilityInput v-model="formItems.divisibility" />

                <SupplyAmount v-if="!isAggregate" :supply="formItems.supply" :divisibility="formItems.divisibility" />

                <DurationInput
                    v-show="!formItems.permanent"
                    v-model="formItems.duration"
                    :show-relative-time="true"
                    target-asset="mosaic"
                />

                <FormRow>
                    <template v-slot:inputs>
                        <div class="inputs-container checkboxes">
                            <Checkbox v-model="formItems.permanent">
                                {{ $t('duration_permanent') }}
                            </Checkbox>
                            <Checkbox v-model="formItems.transferable">
                                {{ $t('transmittable') }}
                            </Checkbox>
                            <Checkbox v-if="!isAggregate" v-model="formItems.supplyMutable">
                                {{ $t('variable_supply') }}
                            </Checkbox>
                            <Checkbox v-model="formItems.restrictable">
                                {{ $t('restrictable') }}
                            </Checkbox>
                        </div>
                    </template>
                </FormRow>
                <RentalFee :rental-type="'mosaic'"></RentalFee>
                <MaxFeeAndSubmit
                    v-if="!isAggregate"
                    v-model="formItems.maxFee"
                    :disable-submit="currentAccount.isMultisig"
                    @button-clicked="handleSubmit(onSubmit)"
                />
                <div v-else-if="!hideSave" class="ml-2" style="text-align: right;">
                    <button
                        type="submit"
                        class="save-button centered-button button-style inverted-button"
                        :disabled="currentAccount.isMultisig"
                        @click="emitToAggregate"
                    >
                        {{ $t('save') }}
                    </button>
                </div>
            </form>
        </ValidationObserver>

        <ModalTransactionConfirmation
            v-if="hasConfirmationModal"
            :command="command"
            :visible="hasConfirmationModal"
            @success="onConfirmationSuccess"
            @error="onConfirmationError"
            @close="onConfirmationCancel"
        />
    </FormWrapper>
</template>

<script lang="ts">
// @ts-ignore
import { FormMosaicDefinitionTransactionTs } from './FormMosaicDefinitionTransactionTs';
export default class FormMosaicDefinitionTransaction extends FormMosaicDefinitionTransactionTs {}
</script>

<style lang="less" scoped>
    .checkboxes {
        display: grid;
        grid-auto-flow: column;
        grid-column-gap: 0.3rem;
        align-items: baseline;
        color: #3d3d3d;
        width: max-content;
    }

/deep/ .form-row {
    .form-row-inner-container {
        grid-template-columns: 3rem calc(100% - 3rem);
    }
}

.save-button {
    text-align: center;
    width: 120px;
}

/deep/.multisig_ban_container {
    padding-left: 0.7rem;
}
</style>
