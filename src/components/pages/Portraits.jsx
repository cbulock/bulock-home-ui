import React, { useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import { useLightbox, SRLWrapper } from 'simple-react-lightbox';
import portraitImages from './portraitImages.json';

export default () => {
	const { openLightbox } = useLightbox();

	const triggerLightbox = useCallback(
		(event, { index }) => {
			openLightbox(index);
		},
		[openLightbox],
	);

	return (
		<>
			<Gallery photos={portraitImages} onClick={triggerLightbox} />
			<SRLWrapper images={portraitImages} />
		</>
	);
};
