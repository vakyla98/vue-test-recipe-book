module.exports = {
    publicPath:
        process.env.NODE_ENV === 'production' ? '/vue-test-recipe-bookgit/dist' : '/dist',
    transpileDependencies: ['vuetify'],
}
