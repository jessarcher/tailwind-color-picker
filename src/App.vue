<template>
    <div class="flex flex-col min-h-screen max-h-screen font-sans leading-normal text-grey-darkest bg-grey-lightest p-4">
        <header class="flex justify-between items-center">
            <h1 class="text-3xl text-teal-dark inline-flex items-center">
                <svg version="1.1" class="w-16 h-16 mr-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><defs><linearGradient id="a" x1="11.797" x2="29.563" y1="3.4576" y2="19.873" gradientUnits="userSpaceOnUse"><stop stop-color="#ae2323" offset="0"/><stop stop-color="#b5ae31" offset=".19492"/><stop stop-color="#42bf45" offset=".38583"/><stop stop-color="#52c5c8" offset=".59914"/><stop stop-color="#6b63d1" offset=".79855"/><stop stop-color="#d76dd4" offset="1"/></linearGradient></defs><path transform="translate(4 12)" d="M10 8c1.333-5.333 4.667-8 10-8 8 0 9 6 13 7 2.667.667 5-.333 7-3-1.333 5.333-4.667 8-10 8-8 0-9-6-13-7-2.667-.667-5 .333-7 3zM0 20c1.333-5.333 4.667-8 10-8 8 0 9 6 13 7 2.667.667 5-.333 7-3-1.333 5.333-4.667 8-10 8-8 0-9-6-13-7-2.667-.667-5 .333-7 3z" fill="url(#a)"/></svg>
                Tailwind Color Picker
            </h1>
            <div>
                <p class="text-grey-dark mb-2">By <a class="text-grey-darker font-bold no-underline hover:text-grey-darkest" href="https://twitter.com/jessarchercodes">@jessarchercodes</a></p>
                <a href="https://github.com/jessarcher/tailwind-color-picker"><img alt="star this repo" src="https://githubbadges.com/star.svg?user=jessarcher&repo=tailwind-color-picker&style=default"/></a>
                <a href="https://github.com/jessarcher/tailwind-color-picker/fork"><img alt="fork this repo" src="https://githubbadges.com/fork.svg?user=jessarcher&repo=tailwind-color-picker&style=default" class="ml-2" /></a>
            </div>
        </header>
        <main class="flex-grow flex mt-4">
            <div class="flex-1 flex flex-col mr-2">
                <div class="flex justify-between items-baseline">
                    <h2 class="text-sm uppercase tracking-wide mb-2 text-grey-dark">Paste Your Config</h2>
                    <div class="text-sm text-grey-dark mr-2">Tailwind Version: <code>{{ tailwindVersion }}</code></div>
                </div>
                <div class="flex-1 relative">
                    <textarea class="leading-normal text-black border rounded p-4 w-full h-full font-mono" v-model="colorDefinition"></textarea>
                </div>
            </div>
            <div class="flex-1 flex flex-col ml-2">
                <h2 class="text-sm uppercase tracking-wide mb-2 text-grey-dark">Tweak Your Colors</h2>
                <div class="flex-1 relative">
                    <div class="absolute pin overflow-y-scroll border rounded bg-white">
                        <color-picker v-for="color in colorsFlat" :key="color.name" :name.sync="color.name" :color.sync="color.code" @input="dump"></color-picker>
                    </div>
                </div>
            </div>
        </main>
        <footer class="mt-4 text-center text-sm text-grey-dark">
            Made with love for <a class="text-grey-darker font-bold no-underline hover:text-grey-darkest" href="https://tailwindcss.com/">Tailwind CSS</a>.
            Hosted with <a class="text-grey-darker font-bold no-underline hover:text-grey-darkest" href="https://netlify.com/">Netlify</a>
        </footer>
    </div>
</template>

<script>
import ColorPicker from './components/ColorPicker'

export default {
    name: 'app',

    components: {
        ColorPicker
    },

    data() {
        return {
            tailwindVersion: null,
            colorDefinition: `    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
      },
      orange: {
        100: '#fffaf0',
        200: '#feebc8',
        300: '#fbd38d',
        400: '#f6ad55',
        500: '#ed8936',
        600: '#dd6b20',
        700: '#c05621',
        800: '#9c4221',
        900: '#7b341e',
      },
      yellow: {
        100: '#fffff0',
        200: '#fefcbf',
        300: '#faf089',
        400: '#f6e05e',
        500: '#ecc94b',
        600: '#d69e2e',
        700: '#b7791f',
        800: '#975a16',
        900: '#744210',
      },
      green: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d',
      },
      teal: {
        100: '#e6fffa',
        200: '#b2f5ea',
        300: '#81e6d9',
        400: '#4fd1c5',
        500: '#38b2ac',
        600: '#319795',
        700: '#2c7a7b',
        800: '#285e61',
        900: '#234e52',
      },
      blue: {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365',
      },
      indigo: {
        100: '#ebf4ff',
        200: '#c3dafe',
        300: '#a3bffa',
        400: '#7f9cf5',
        500: '#667eea',
        600: '#5a67d8',
        700: '#4c51bf',
        800: '#434190',
        900: '#3c366b',
      },
      purple: {
        100: '#faf5ff',
        200: '#e9d8fd',
        300: '#d6bcfa',
        400: '#b794f4',
        500: '#9f7aea',
        600: '#805ad5',
        700: '#6b46c1',
        800: '#553c9a',
        900: '#44337a',
      },
      pink: {
        100: '#fff5f7',
        200: '#fed7e2',
        300: '#fbb6ce',
        400: '#f687b3',
        500: '#ed64a6',
        600: '#d53f8c',
        700: '#b83280',
        800: '#97266d',
        900: '#702459',
      },
    },
`,
            colors: [],
            indentation: '  ',
        }
    },

    computed: {
        colorsFlat() {
            let colorsFlat = [];

            this.colors.forEach(color => {
                if (typeof color.variations === 'object') {
                    color.variations.forEach(variation => {
                        colorsFlat.push(variation)
                    });
                } else {
                    colorsFlat.push(color)
                }
            })

            return colorsFlat
        },
    },

    watch: {
        colorDefinition: function () {
            this.load();
        }
    },

    methods: {
        load() {
            if (/^\s*let colors = {/.test(this.colorDefinition)) {
                this.tailwindVersion = 0.7
                this.loadv07()
                return
            }

            if (/^\s*colors: {/.test(this.colorDefinition)) {
                this.tailwindVersion = 1
                this.loadv1()
                return
            }

            this.tailwindVersion = 'unknown'
        },

        loadv07() {
            let colors = Function(this.colorDefinition + '; return colors')();

            this.colors = [];

            for (let color in colors) {
                this.colors.push({
                    name: color,
                    code: colors[color],
                });
            }
        },

        loadv1() {
            let colors = Function('let theme = {' + this.colorDefinition + '}; return theme.colors')();

            this.colors = [];

            for (let color in colors) {
                if (typeof colors[color] === 'object') {
                    let colorWithVariations = {
                        name: color,
                        variations: [],
                    }

                    for (let variation in colors[color]) {
                        colorWithVariations.variations.push({
                            name: color + '-' + variation,
                            variation: variation,
                            code: colors[color][variation]
                        })
                    }

                    this.colors.push(colorWithVariations)
                } else {
                    this.colors.push({
                        name: color,
                        code: colors[color],
                    });
                }
            }
        },

        dump() {
            if (this.tailwindVersion === 0.7) {
                return this.dumpv07();
            }

            if (this.tailwindVersion === 1) {
                return this.dumpv1();
            }
        },

        dumpv07() {
            this.colorDefinition = "let colors = {\n";
            this.colors.forEach(color => {
                this.colorDefinition += this.indentation
                this.colorDefinition += `'${color.name}': '${color.code}',`
                this.colorDefinition += "\n";
            })
            this.colorDefinition += "}";
        },

        dumpv1() {
            this.colorDefinition = this.indentation + this.indentation + "colors: {\n";
            this.colors.forEach(color => {
                if (typeof color.variations === 'object') {
                    this.colorDefinition += this.indentation + this.indentation + this.indentation
                    this.colorDefinition += `${this.wrapPropertyName(color.name)}: {`
                    this.colorDefinition += "\n";
                    color.variations.forEach(variation => {
                        this.colorDefinition += this.indentation + this.indentation + this.indentation + this.indentation
                        this.colorDefinition += `${this.wrapPropertyName(variation.variation)}: '${variation.code}',`
                        this.colorDefinition += "\n";
                    })
                    this.colorDefinition += this.indentation + this.indentation + this.indentation + "},\n";
                } else {
                    this.colorDefinition += this.indentation + this.indentation + this.indentation
                    this.colorDefinition += `${this.wrapPropertyName(color.name)}: '${color.code}',`
                    this.colorDefinition += "\n";
                }
            })
            this.colorDefinition += this.indentation + this.indentation;
            this.colorDefinition += "},";
        },

        wrapPropertyName(propertyName) {
            return /^[a-zA-Z0-9_]*$/.test(propertyName) ? propertyName : `'${propertyName}'`
        },
    },

    mounted() {
        this.load();
    }
}
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;
</style>
