import browserSync from 'browser-sync'
import gulp from 'gulp'
import yargs from 'yargs'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackSettings from '../../webpack/webpack.config.babel'
import pkg from '../../package.json'

const argv = yargs.argv

const bundler = webpack(webpackSettings)

const browserSyncTask = () => {
    const browserSyncWatch = [
        `${pkg.dist.markup}**/*.{html,php,twig,rss}`,
        `${pkg.dist.images.base}**/*.{jpg,jpeg,webp,gif,png,svg,ico}`,
    ];

    // Build a condition when Proxy is active
    let bsProxy,
        bsServer
    const url = argv.url || pkg.browsersync.proxy

    // Condition for Proxy
    if (pkg.browsersync.proxy !== false) {
        bsProxy = url
        bsServer = false
    } else {
        bsProxy = false
        bsServer = {baseDir: pkg.dist.browserSyncDir}
    }

    const browserSyncConfig = {
        proxy: bsProxy,
        ghostMode: {
            clicks: true,
            forms: true,
            links: true,
            scroll: true
        },
        logLevel: 'info', // info, debug, warn, silent
        watchTask: true,
        open: pkg.browsersync.openbrowser, // false if you don't want to automatically open the browser
        server: bsServer,
        stream: true,
        middleware: [
            webpackDevMiddleware(bundler, {
                quiet: true,
                path: webpackSettings.output.path,
                stats: {
                    colors: true
                }
            }),
            webpackHotMiddleware(bundler, {
                log: () => {
                }
            })
        ],
        notify: {
            styles: [
                'padding: 20px 40px;',
                'font-family: arial;',
                'line-height: 1',
                'position: fixed;',
                'font-size: 16px;',
                'font-weight: bold',
                'z-index: 9999;',
                'top: inherit',
                'border-radius: 0',
                'right: 0;',
                'bottom: 0;',
                'color: #fff;',
                'background-color: rgba(255,0,0, .8)',
                'text-transform: uppercase'
            ]
        }
    }

    browserSync.init(browserSyncWatch, browserSyncConfig)
}

gulp.task('browser-sync', browserSyncTask)

module.exports = browserSyncTask
