<template>
    <div class="qrcode-display">
        <span v-if="header !== ''" class="qrcode-display-header">{{ $t(header) }}</span>
        <img :src="qrCodeBase64$" :alt="$t(alt)" @click="copyAsText" />
        <span v-if="showDownload && isValidQR" class="qrcode-display-footer">
            <slot name="download">
                <a :href="qrCodeBase64$" :download="downloadName"
                    ><Icon :type="'md-download'" size="17" /> {{ $t('button_download_qr') }}</a
                >
            </slot>
        </span>
    </div>
</template>

<script lang="ts">
import QRCodeDisplayTs from './QRCodeDisplayTs';
export default class QRCodeDisplay extends QRCodeDisplayTs {}
</script>
<style lang="less" scoped>
@import './QRCodeDisplay.less';
</style>
