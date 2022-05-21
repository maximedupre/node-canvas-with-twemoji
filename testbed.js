const { writeFileSync } = require('fs');
const { createCanvas } = require('canvas');
const { fillTextWithTwemoji } = require('./src/index');

(async () => {
    const canvas = createCanvas(230, 200);
    const context = canvas.getContext('2d');

    context.font = '30px Arial';
    await fillTextWithTwemoji(context, 'Hey! 😉', 10, 100);

    const buffer = canvas.toBuffer();

    writeFileSync('testbed.png', buffer);
})();
