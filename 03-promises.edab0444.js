function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o);var l=o("7Y9D8");function r(e,t){return new Promise(((n,i)=>{const o=Math.random()>.3;setTimeout((()=>{o?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n=parseInt(this.elements.delay.value),i=parseInt(this.elements.step.value),o=parseInt(this.elements.amount.value);isNaN(n)||isNaN(i)||isNaN(o)?e(l).Notify.failure("Please fill in all fields with valid numbers"):function(t,n,i){for(let o=1;o<=t;o++)r(o,n).then((({position:t,delay:n})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),n+=i}(o,n,i)}));
//# sourceMappingURL=03-promises.edab0444.js.map