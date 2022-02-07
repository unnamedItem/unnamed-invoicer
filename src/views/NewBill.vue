<template>
    <b-container>
        <h2 class="mt-3">{{$t('new-bill-title')}}</h2>
        <BaseBiller/>
    </b-container>
</template>


<script>
import BaseBiller from '@/components/BaseBiller.vue'

export default {
    name: "LoadBill",

    components: {
        BaseBiller,
    }
}
</script>