const path = require('path');
const execSync = require('child_process').execSync;
const $tw = require('@tiddlygit/tiddlywiki/boot/boot.js').TiddlyWiki();

const tiddlyWikiPort = require('../package.json').port;
const userName = require('../package.json').userName;
const tiddlyWikiFolder = path.join(path.dirname(__filename), '..');
const tiddlersFolder = path.join(tiddlyWikiFolder, 'tiddlers');
process.env['TIDDLYWIKI_PLUGIN_PATH'] = `${tiddlyWikiFolder}/plugins`;
process.env['TIDDLYWIKI_THEME_PATH'] = `${tiddlyWikiFolder}/themes`;

$tw.boot.argv = [
    '+plugins/tiddlywiki/filesystem',
    '+plugins/tiddlywiki/tiddlyweb',
    tiddlyWikiFolder,
    '--listen',
    `anon-username=${userName}`,
    `port=${tiddlyWikiPort}`,
    'host=0.0.0.0',
    'root-tiddler=$:/core/save/lazy-images',
];

try {
execSync(`find ${tiddlersFolder} -name '*StoryList.tid' -delete`);
} catch (error) {
console.log(String(error));
}

module.exports = function startNodeJSWiki() {
$tw.boot.boot();
};
  