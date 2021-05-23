//const BASE_URL = process.env.NODE_ENV === "production"?"./":"/";
module.exports = {
    chainWebpack: config => {
        config.plugin("html").tap(args => {
            args[0].title = "炸金花—从小玩到大的娱乐游戏";
            return args;
        });
    },
    publicPath:"./"
};
