// import libs
const fs = require('fs-extra');
const path = require('path');
const nunjucks = require('nunjucks');

const paths = {
    output: {
        root: path.join(__dirname, 'public'),
        css: path.join(__dirname, 'public/css'),
        js: path.join(__dirname, 'public/js'),
        fonts: path.join(__dirname, 'public/css/fonts')
    },
    input: {
        statics: path.join(__dirname, 'src/static'),
        views: path.join(__dirname, 'src/views'),
    },
    bootstrap: {
        css: path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.min.css'),
        js: path.join(__dirname, 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'),
        icon: {
            css: path.join(__dirname, 'node_modules/bootstrap-icons/font/bootstrap-icons.css'),
            fonts: path.join(__dirname, 'node_modules/bootstrap-icons/font/fonts'),
        },

    }
};

nunjucks.configure(paths.input.views, {
    autoescape: true
});

fs.ensureDirSync(paths.output.root);
fs.ensureDirSync(paths.output.css);
fs.ensureDirSync(paths.output.js);
fs.ensureDirSync(paths.output.fonts);
fs.ensureDirSync(paths.input.statics);
fs.ensureDirSync(paths.input.views);

fs.copyFileSync(paths.bootstrap.css, path.join(paths.output.css, 'bootstrap.css'));
fs.copyFileSync(paths.bootstrap.js, path.join(paths.output.js, 'bootstrap.js'));
fs.copyFileSync(paths.bootstrap.icon.css, path.join(paths.output.css, 'bootstrap-icons.css'));
fs.copySync(paths.bootstrap.icon.fonts, paths.output.fonts);

const statics = fs.readdirSync(paths.input.statics);

for (const file of statics) {
    const source = path.join(paths.input.statics, file);
    const destination = path.join(paths.output.root, file);
    if (fs.lstatSync(source).isDirectory()) {
        fs.ensureDirSync(destination);
    }
    fs.copySync(source, destination);
}

html = nunjucks.render(path.join(paths.input.views, 'index.njk'), {});
fs.writeFileSync(path.join(paths.output.root, 'index.html'), html);