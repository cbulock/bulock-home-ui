/* eslint-disable import/no-extraneous-dependencies */
const imageinfo = require('imageinfo');
const fs = require('fs');
const console = require('console');

const IMAGES_DIR = '../public/media/portraits/';
const imagesList = fs
	.readdirSync(IMAGES_DIR)
	.filter((image) => image !== 'thumbs');

const getImageData = imagesList.map((image) => {
	const data = fs.readFileSync(IMAGES_DIR + image);
	const info = imageinfo(data);

	return {
		src: `/media/portraits/${image}`,
		width: info.width,
		height: info.height,
	};
});

console.log(getImageData);
