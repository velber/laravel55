let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.scripts([
    'node_modules/jquery/dist/jquery.min.js',
    "node_modules/popper.js/dist/umd/popper.min.js",
    'node_modules/pace-progress/pace.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    "node_modules/bootstrap-daterangepicker/daterangepicker.js",
    "node_modules/datatables.net/js/jquery.dataTables.js",
    "node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js",
    "node_modules/fullcalendar/dist/fullcalendar.min.js",
    "node_modules/fullcalendar/dist/gcal.min.js",
    "node_modules/gaugeJS/dist/gauge.min.js",
    "node_modules/ion-rangeslider/js/ion.rangeSlider.min.js",
    "node_modules/jquery-ui-dist/jquery-ui.min.js",
    "node_modules/jquery-validation/dist/jquery.validate.min.js",
    "node_modules/jquery.maskedinput/src/jquery.maskedinput.js",
    "node_modules/ladda/dist/ladda.min.js",
    "node_modules/ladda/dist/spin.min.js",
    "node_modules/moment/min/moment.min.js",
    "node_modules/quill/dist/quill.min.js",
    "node_modules/select2/dist/js/select2.min.js",
    "node_modules/chart.js/dist/Chart.min.js",
    "node_modules/toastr/toastr.js"
], 'public/js/vendor.js');

mix.styles([
    "node_modules/datatables.net-bs4/css/dataTables.bootstrap4.css",
    "node_modules/ladda/dist/ladda-themeless.min.css",
    "node_modules/quill/dist/quill.snow.css",
    "node_modules/simple-line-icons/css/simple-line-icons.css",
    "node_modules/spinkit/css/spinkit.css"
    ],
    'public/css/vendor.css');

mix.sass('resources/assets/sass/style.scss', 'public/css');

mix.js('resources/assets/js/app.js', 'public/js');
