import {
	ContentAlbums,
	ContentArtists,
	ContentBeatpacks,
	ContentPlaylists,
	ContentProducers,
	ContentTop,
	ContentTracks,
} from '@/widgets';

export const Main = () => {
	return (
		<>
			<ContentTop />
			<ContentTracks />
			<ContentArtists />
			<ContentProducers />
			<ContentBeatpacks />
			<ContentAlbums />
			<ContentPlaylists />
		</>
	);
};
