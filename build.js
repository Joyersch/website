// import libs
const fs = require('fs-extra');
const path = require('path');
const marked = require('marked');
const nunjucks = require('nunjucks');

const paths = {
    output: {
        root: path.join(__dirname, 'public'),
    },
    input: {
        statics: path.join(__dirname, 'src/static'),
        views: path.join(__dirname, 'src/views'),
    },
};

nunjucks.configure(paths.input.views, {
    autoescape: true
});

const renderAsHtml = (content, title) => `
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <div class="container">
        <main class="content">
            ${content}
        </main>
    </div>
</body>
</html>
`;

if (!fs.pathExistsSync(paths.output.root)) {
    fs.mkdirSync(paths.output.root);
}

fs.ensureDirSync(paths.input.statics);

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