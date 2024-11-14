const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'index.js',
    }, module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
};
