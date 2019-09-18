module.exports = function(grunt) {
    var rewrite = require('connect-modrewrite');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        debug: {
            options: {
                open: false // do not open node-inspector in Chrome automatically
            }
        },
        connect: {
            server: {
                options: {
                    port: 10000,
                    base: 'app',
                    keepalive: true,
                    // http://danburzo.ro/grunt/chapters/server/
                    middleware: function(connect, options, middlewares) {
                        // 1. mod-rewrite behavior
                        var rules = [
                            '!\\.html|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png|\\.gif$ /index.html'
                        ];
                        middlewares.unshift(rewrite(rules));
                        return middlewares;
                    },
                    open: {
                        target: 'http://localhost:10000',
                        app: 'Google Chrome'
                    }
                }
            }

        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'fGunselLinesPublicFrontEndNew/styles/',
                    src: ['common.css','standards.css','animation.css','daterangepicker.css','select2.css'],
                    dest: 'build/css',
                    ext: '.min.css'
                }]
            },
            anotherTarget: {
                files: {
                    'release/src/css/all.min.css': ['build/css/*.css']
                }
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: [{
                    expand: true,
                    cwd: 'fGunselLinesPublicFrontEndNew/scripts/',
                    src: ['**/*.js'],
                    dest: 'build/js'
                }],
            }
        },
        concat: {
            js: { //target
                src: ['build/js/app.js', 'build/js/**/*.js'],
                dest: 'build/app.js'
            }
        },
        uglify: {
            js: { //target
                src: ['build/app.js'],
                dest: 'release/src/scripts/app.js'
            }
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true
                },
                files: [{
                    expand: true,
                    cwd: 'fGunselLinesPublicFrontEndNew/views',
                    src: ['**/*.html', '*.html'],
                    dest: 'release/views'
                }]
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'fGunselLinesPublicFrontEndNew/images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'release/images'
                }]
            }
        },
        sitemap_xml: {
            options: {
                siteRoot: 'https://dev-ticket.gunsel.ua/'
            },
            build: {
                files: [
                    {
                        cwd: 'fGunselLinesPublicFrontEndNew/views',
                        src: ['**/*.html', '*.html'],
                        dest: 'release/sitemap.xml'
                    }
                ]
            }
        },
        prerender: {
            production: {
                options: {
                    sitemap: 'https://dev-ticket.gunsel.ua/sitemap.xml',
                    dest: 'release/snapshots/',
                    hashPrefix: '!' // it is common for AngularJS applications to enable the hash prefix !
                }
            }
        }
    });
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['connect']);
    grunt.registerTask('build', ['ngAnnotate', 'concat', 'uglify','cssmin','htmlmin']);
    grunt.registerTask('only-js', ['ngAnnotate', 'concat', 'uglify']);
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');
    // grunt.loadNpmTasks('grunt-prerender');
    // grunt.loadNpmTasks('grunt-sitemap-xml');
};
