module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('post', '_layouts/post.njk');
    return {
        dir: {
            includes: "_includes",
            layouts: "_layouts",
        },
    }
};