module.exports = {
    publicPath:
        process.env.NODE_ENV === 'production'
            ? '/vue-test-recipe-book/dist'
            : '/dist',
}
