//Commom tools
'use strict';
/**
 * Test string argument
 * @param  {String} argument  Argument value
 * @param  {Number} minLength Min string length
 * @param  {Number} maxLength Max string length
 * @return {Boolen}
 */
exports.testStringArgument = function(argument,minLength,maxLength){
    return new RegExp('^[a-zA-Z][a-zA-Z0-9\-\_\:]{'+(minLength-1)+','+(maxLength-1)+'}$').test(argument);
};

/**
 * Applay methods
 * @param  {Function} constructor
 */
exports.applyMethods = function(constructor){
    let methods=Array.prototype.slice.call(arguments, 1);
    methods.forEach((method)=>{
        Object.assign(constructor.prototype,method);
    });
};

/**
 * Trans First word to uppercase
 * @param  {String} word
 * @return {String}
 */
exports.firstWordUpper = function(word) {
    return word.replace(/^[a-zA-Z](\S+)$/,word[0].toUpperCase()+'$1');
};

/**
 * Get gaussian weight
 * @param  {Number} dist  Distance
 * @param  {Number} sigma Sigma Constant
 * @return {Number}       Gaussian weight,0-1
 */
// exports.gaussian = function(dist,sigma){
//     sigma=sigma?sigma:10;
//     let exponent=-Math.pow(dist,2)/(2*Math.pow(sigma,2));
//     return 1-Math.pow(Math.E,exponent);
// };

/**
 * 请求下个Promise
 * @param  {Object} err  错误信息
 * @param  {Object} data 传递数据
 * @return {Object}      Promise对象
 */
exports.nextPromise = function(err,data){
    return new Promise(function(resolve,reject){
        if(err) reject(err);
        else resolve(data);
    });
};