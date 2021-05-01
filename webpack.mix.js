const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/plugins/Chart.extension.js', 'public/js/plugins')
    .js('resources/assets/js/soft-ui-dashboard.js', 'public/js')
    .sass('resources/assets/scss/soft-ui-dashboard.scss', 'public/css')

