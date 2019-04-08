<template>
    <div class="flex">
        <!-- <input :value="name" @input="$emit('update:name', $event.target.value); $emit('input')" class="flex-1 border rounded py-2 px-3 mr-4 my-2 text-grey-darkest bg-grey-lightest focus:bg-white"> -->
        <div class="flex-1 text-purple p-5 font-mono">.{{ name }}</div>
        <!-- <input type="color" :value="color" @input="$emit('update:color', $event.target.value); $emit('input')" class="flex-1"> -->
        <div class="flex-1">
            <div v-if="color === 'transparent'" class="cursor-not-allowed flex w-full h-full items-center justify-center border text-grey-dark">transparent</div>
            <div v-else class="w-full h-full">
                <button type="button" @click="showPicker = true" class="w-full h-full" :style="'background-color:' + color"></button>
                <div v-if="showPicker" class="fixed pin z-50 flex items-center justify-center" @click="showPicker = false">
                    <div class="relative text-right" @click.stop>
                        <button
                            type="button"
                            class="bg-white rounded-t-lg border py-1 px-2 text-sm shadow-lg"
                            @click="showPicker = false"
                        >&times; close</button>
                        <chrome-picker
                            :value="color"
                            @input="updateColor"
                        ></chrome-picker>
                    </div>
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

        computed: {
            inputFormat: function() {
                if (this.color.match(/^hsla.*/) !== null) {
                    return 'hsla'
                }

                if (this.color.match(/^hsl.*/) !== null) {
                    return 'hsl'
                }

                if (this.color.match(/^rgba.*/) !== null) {
                    return 'rgba'
                }

                if (this.color.match(/^rgb.*/) !== null) {
                    return 'rgb'
                }

                return 'hex';
            },
        },

        methods: {
            updateColor (color) {
                if (color.a !== 1 || this.inputFormat === 'hsla' || this.inputFormat === 'rgba') {
                    if (this.inputFormat === 'rgb' || this.inputFormat === 'rgba') {
                        this.$emit('update:color', this.rgba(color))
                        this.$emit('input')
                        return;
                    }
                    this.$emit('update:color', this.hsla(color))
                    this.$emit('input')
                    return;
                }

                if (this.inputFormat === 'hsl') {
                    this.$emit('update:color', this.hsl(color))
                    this.$emit('input')
                    return;
                }

                if (this.inputFormat === 'rgb') {
                    this.$emit('update:color', this.rgb(color))
                    this.$emit('input')
                    return;
                }

                this.$emit('update:color', color.hex.toLowerCase())
                this.$emit('input')
            },

            hsla (color) {
                let h = Math.round(color.hsl.h)
                let s = Math.round(color.hsl.s * 100)
                let l = Math.round(color.hsl.l * 100)
                let a = color.hsl.a.toPrecision(2).replace(/0+$/, '').replace(/\.$/, '')

                return `hsla(${h}, ${s}%, ${l}%, ${a})`
            },

            hsl (color) {
                let h = Math.round(color.hsl.h)
                let s = Math.round(color.hsl.s * 100)
                let l = Math.round(color.hsl.l * 100)

                return `hsl(${h}, ${s}%, ${l}%)`
            },

            rgba (color) {
                let r = color.rgba.r
                let g = color.rgba.g
                let b = color.rgba.b
                let a = color.rgba.a.toPrecision(2).replace(/0+$/, '').replace(/\.$/, '')

                return `rgba(${r}, ${g}, ${b}, ${a})`
            },

            rgb (color) {
                let r = color.rgba.r
                let g = color.rgba.g
                let b = color.rgba.b

                return `rgb(${r}, ${g}, ${b})`
            },
        }
    }
</script>
