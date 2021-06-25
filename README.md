# discord-dynamic-status

Example usage:
```js
// Import discord-dynamic-status
const dynamicStatus = require('discord-dynamic-status');

// Start the dynamic status on the given token and options
dynamicStatus('your_token_here', {
  statuses: [
    'Plot twist: the chicken never crossed the road.',
    'I actually do not know what to add to this list',
    '2+2 is actually 4. Stop playing around.'
  ],
  mode: 'random', // It can be 'random' or 'cycle'
  delay: 2 // Set a delay of 2 seconds
});
```

* Options
  - `statuses` - An array of strings (statuses).
  - `mode` - The mode of switching statuses. Currently only has `random`.
  - `delay` - The delay in seconds.