const tailwindcss = require("tailwindcss");

const autoprefixer = require("autoprefixer");

const purgecss = require("@fullhuman/postcss-purgecss");

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {

    plugins: [

        tailwindcss("./tailwind.js"),

        autoprefixer({
            add: true,
            grid: true
        }),

        //Only add purgecss in production
        process.env.NODE_ENV === "production"? purgecss({
            content: [
                "./src/**/*.html", 
                "./src/**/*.vue"
            ],
            extractors: [
                {
                    extractor: TailwindExtractor,
                    extensions: ['html', 'vue']
                }
            ]
        }): ""
    ]
};
