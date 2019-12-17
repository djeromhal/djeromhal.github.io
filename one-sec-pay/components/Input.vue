<template>
    <div class="input-wrapper">
        <input class="input" :type="type" :placeholder="placeholder" required v-model="inputVal">
    </div>
</template>

<script>
export default {
    props:['type', 'placeholder', 'value'],
    data() {
        return { inputVal: this.value }
    },
    watch: {
        inputVal(val) {
        this.$emit('input', val);
        }
    }
}
</script>