(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "qulog", "../../src/jquery.typeof.js"], factory); // AMD/Require.js
    } else {
        factory(root.jQuery, root.qulog); // Browser globals
    }
}(this, function factory($, log) {
    $(); // this is needed in order to run tests properly in jasmine_node

    // Sanity checks, whether the dependencies (jQuery and qulog and the plugin) are loaded properly
    describe('if "jQuery" exists', function() {
        it('-> have to return "function"', function() {
            expect(typeof $).toEqual("function");
        });
    });
    describe('if "qulog" exists', function() {
        it('-> have to return "function"', function() {
            expect(typeof log).toEqual("function");
        });
    });
    describe('if "jquery.typeof" loaded', function() {
        it('-> have to return "function"', function() {
            expect(typeof $.typeof).toEqual("function");
        });
    });

    describe('check for $.typeof()', function() {
        it('-> have to return "undefined"', function() {
            expect($.typeof()).toEqual("undefined");
        });
    });
    describe('check for $.typeof(undefined)', function() {
        it('-> have to return "undefined"', function() {
            expect($.typeof(undefined)).toEqual("undefined");
        });
    });
    describe('check for $.typeof(null)', function() {
        it('-> have to return "null"', function() {
            expect($.typeof(null)).toEqual("null");
        });
    });
    describe('check for $.typeof(true/false)', function() {
        it('-> have to return "boolean"', function() {
            expect($.typeof(true)).toEqual("boolean");
        });
        it('-> have to return "boolean"', function() {
            expect($.typeof(false)).toEqual("boolean");
        });
    });
    describe('check for $.typeof(-1/0/1)', function() {
        it('-> have to return "number"', function() {
            expect($.typeof(-1)).toEqual("number");
        });
        it('-> have to return "number"', function() {
            expect($.typeof(0)).toEqual("number");
        });
        it('-> have to return "number"', function() {
            expect($.typeof(1)).toEqual("number");
        });
    });
    describe('check for $.typeof(-Infinity/Infinity)', function() {
        it('-> have to return "number"', function() {
            expect($.typeof(-Infinity)).toEqual("number");
        });
        it('-> have to return "number"', function() {
            expect($.typeof(Infinity)).toEqual("number");
        });
    });
    describe('check for $.typeof(NaN)', function() {
        it('-> have to return "number"', function() {
            expect($.typeof(NaN)).toEqual("number");
        });
    });
    describe('check for $.typeof("string")', function() {
        it('-> have to return "string"', function() {
            expect($.typeof("string")).toEqual("string");
        });
    });
    describe('check for $.typeof([])', function() {
        it('-> have to return "array"', function() {
            expect($.typeof([])).toEqual("array");
        });
    });
    describe('check for $.typeof({})', function() {
        it('-> have to return "object"', function() {
            expect($.typeof({})).toEqual("object");
        });
    });
    describe('check for $.typeof(function)', function() {
        it('-> have to return "function"', function() {
            expect($.typeof(function(){})).toEqual("function");
        });
    });
    describe('check for $.typeof(Boolean()/Number()/String())', function() {
        it('-> have to return "boolean"', function() {
            expect($.typeof(Boolean(true))).toEqual("boolean");
            expect($.typeof(Boolean(false))).toEqual("boolean");
        });

        it('-> have to return "number"', function() {
            expect($.typeof(Number(-1))).toEqual("number");
            expect($.typeof(Number(0))).toEqual("number");
            expect($.typeof(Number(1))).toEqual("number");
            expect($.typeof(Number(-Infinity))).toEqual("number");
            expect($.typeof(Number(Infinity))).toEqual("number");
            expect($.typeof(Number(NaN))).toEqual("number");
        });
    });
    describe('check for $.typeof(new Date())', function() {
        it('-> have to return "object"', function() {
            expect($.typeof(new Date())).toEqual("object");
        });
    });
    describe('check for $.typeof(new Regex())', function() {
        it('-> have to return "object"', function() {
            expect($.typeof(/\s/gi)).toEqual("object");
        });
    });
    describe('check for $.typeof(new Error())', function() {
        it('-> have to return "object"', function() {
            expect($.typeof(new Error())).toEqual("object");
        });
    });
}));