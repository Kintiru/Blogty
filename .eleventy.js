module.exports = function(eleventyConfig) {
    eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
    return {
        dir: {
            includes: "layouts",
        },
    }
};