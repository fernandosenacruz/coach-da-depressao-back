/**
* Generate a random INT number with limiter
* @param {Integer} limiter - Inteiro limitador do Math.random
*/

module.exports = (limiter) => Math.floor((Math.random() * limiter) + 1);