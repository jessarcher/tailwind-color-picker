<template>
    <div class="flex">
        <input :value="name" @input="$emit('update:name', $event.target.value); $emit('input')" class="flex-1">
        <div class="flex-1" :style="'background-color:' + color"></div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                required: true,
            },

            color: {
                required: true,
            },
        },
    }
</script>
