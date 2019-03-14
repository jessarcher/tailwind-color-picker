<template>
    <div class="flex relative">
        <!-- <input :value="name" @input="$emit('update:name', $event.target.value); $emit('input')" class="flex-1 border rounded py-2 px-3 mr-4 my-2 text-grey-darkest bg-grey-lightest focus:bg-white"> -->
        <div class="flex-1 text-purple p-5 font-mono">.{{ name }}</div>
        <!-- <input type="color" :value="color" @input="$emit('update:color', $event.target.value); $emit('input')" class="flex-1"> -->
        <div class="flex-1">
            <div v-if="color === 'transparent'" class="cursor-not-allowed flex w-full h-full items-center justify-center border text-grey-dark">transparent</div>
            <div v-else class="w-full h-full">
                <button type="button" @click="showPicker = true" class="w-full h-full" :style="'background-color:' + color"></button>
                <div v-if="showPicker" class="absolute pin-t pin-l z-50">
                    <chrome-picker
                        :value="color"
                        @input="updateColor"
                    ></chrome-picker>
                </div>
            </div>
        </div>
        <button type="button" v-if="showPicker" @click="showPicker = false" class="block fixed pin w-full h-full z-40 cursor-default"></button>
    </div>
</template>

<script>
    import { Chrome } from 'vue-color'


    export default {
        components: {
            ChromePicker: Chrome,
        },

        props: {
            name: {
                required: true,
            },

            color: {
                required: true,
            },
        },

        data() {
            return {
                showPicker: false,
            }
        },

        methods: {
            updateColor (color) {
                let h = Math.round(color.hsl.h)
                let s = Math.round(color.hsl.s * 100)
                let l = Math.round(color.hsl.l * 100)
                let a = color.hsl.a.toPrecision(2).replace(/0+$/, '').replace(/\.$/, '')

                let newColor = `hsl(${h}, ${s}%, ${l}%, ${a})`

                this.$emit('update:color', newColor)
                this.$emit('input')
            },
        }
    }
</script>
