/*global module:false*/
module.exports = function (grunt) {
    grunt.initConfig({
        htmlhint: {
            build: {
                options: {
                    'tag-pair':true,
                    'tagname-lowercase':true,
                    'attr-lowercase':true,
                    'attr-value-double-quotes':true,
                    'doctype-first':true,
                    'spec-char-escape':true,
                    'id-unique':true,
                    'head-script-disabled':true,
                    'style-disabled':true
                },
                src:['index.html']
            }
        }
    });
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.registerTask('html', ['htmlhint']);
    //在app目录下执行grunt html
};