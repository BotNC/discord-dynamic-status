'use strict';

const axios = require('axios').default;

/**
 * Changes a status.
 * @param {string} status The status text.
 * @param {string} token The user token.
 * @returns {Promise} A promise that resolves when the operation is done.
 */
async function changeStatus(status, token) {
  return axios.patch('https://discord.com/api/v9/users/@me/settings', {
    custom_status: { text: status }
  }, {
    headers: { authorization: token }
  });
}

/**
 * Returns a random element from an array.
 * @param {any[]} arr The array.
 * @returns A random element from the array.
 */
function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Starts the dynamic status.
 * @param {string} token The user token.
 * @param {Object} options The options.
 * @param {function} cb The callback.
 * @returns {number} The interval ID.
 * @example
 * // Import discord-dynamic-status
 * const dynamicStatus = require('discord-dynamic-status');
 * 
 * // Start the dynamic status on the given token and options
 * dynamicStatus('your_token_here', {
 *   statuses: [
 *     'Plot twist: the chicken never crossed the road.',
 *     'I actually do not know what to add to this list',
 *     '2+2 is actually 4. Stop playing around.'
 *   ],
 *   mode: 'random', // Only random is supported as of now
 *   delay: 2 // Set a delay of 2 seconds
 * });
 */
module.exports = function dynamicStatus(
  token,
  { statuses, mode, delay },
  cb = () => { }) {
  let statusIndex = 0;
  
  return setInterval(() => {
    if (mode === 'random') {
      changeStatus(randomElement(statuses), token);
    } else if (mode === 'cycle') {
      changeStatus(statuses[statusIndex], token);
      
      if (statusIndex < statuses.length - 1) {
        statusIndex++;
      } else {
        statusIndex = 0;
      }
    }
    
    cb();
  }, delay * 1000);
}