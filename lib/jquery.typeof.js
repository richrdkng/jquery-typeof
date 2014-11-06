/*
 jquery.typeof 1.0.1 Copyright (c) 2014 "Richard KnG" Richárd Szakács
 Licensed under the MIT license.
 see: https://github.com/richard-kng/jquery-typeof for details
*/
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module depending on jQuery.
        define(["jquery"], factory);
    } else {
        // No AMD. Register plugin with global jQuery object.
        factory(jQuery);
    }
}(function ($) {
    "use strict";

    /**
     * Returns the proper type of passed value
     * @param {} value - One accepted value of any type
     * @returns {string}
     * */
    $.typeof = function(value) {
        if( typeof value === "object" ) {
            if( value ) {
                if( Object.prototype.toString.call(value) === "[object Array]" ) {
                    return "array";
                }
                return "object";
            }
            return "null";
        }
        return typeof value;
    };
}));