'use client';

import s from './AudioPlayer.module.scss';
import { ActionIcon } from '@/shared/ui';
import { useRef, useState } from 'react';
import { TrackItemType } from '@/shared/ui/track-item/TrackItem';
import { AUDIO_ICONS, TEXT } from '@/shared/constants/constants';

type AudioPlayerProps = {
	tracks: TrackItemType[];
};

export const AudioPlayer = ({ tracks }: AudioPlayerProps) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [trackIndex, setTrackIndex] = useState(0);
	const [isAudioPlaying, setIsAudioPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const [durationFormatted, setDurationFormatted] = useState(TEXT.StartTime);
	const [currentTime, setCurrentTime] = useState(0);
	const [currentTimeFormatted, setCurrentTimeFormatted] = useState(
		TEXT.StartTime
	);
	const [volume, setVolume] = useState(1);
	const [muted, setMuted] = useState(false);

	const handleMusicProgressBar = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);

		if (audioRef.current && !isNaN(value)) {
			audioRef.current.currentTime = value;
			setCurrentTime(value);
		}
	};

	const handlePlayTrack = () => {
		if (audioRef.current) {
			if (audioRef.current.paused) {
				audioRef.current.play();
				setIsAudioPlaying(true);
			} else {
				audioRef.current.pause();
				setIsAudioPlaying(false);
			}
		}
	};

	const handlePlayNextTrack = () => {
		if (trackIndex >= tracks.length - 1) setTrackIndex(0);
		else setTrackIndex(trackIndex + 1);

		updateCurrentMusicDetails(trackIndex);
	};

	const handlePlayPrevTrack = () => {
		if (trackIndex === 0) setTrackIndex(tracks.length - 1);
		else setTrackIndex(trackIndex - 1);

		updateCurrentMusicDetails(trackIndex);
	};

	const updateCurrentMusicDetails = (number: number) => {
		const musicObject = tracks[number];

		if (audioRef.current) {
			audioRef.current.src = musicObject.trackUrl!;

			audioRef.current.addEventListener(
				'loadedmetadata',
				() => {
					audioRef.current?.play().catch((error: unknown) => {
						console.error('Ошибка воспроизведения:', error);
						console.log('Ошибка воспроизведения:', error);
					});
				},
				{ once: true }
			);

			setIsAudioPlaying(true);
		}
	};

	const handleAudioUpdate = () => {
		if (audioRef.current) {
			setDuration(audioRef.current.duration);
			const durMinutes = Math.floor(audioRef.current.duration / 60);
			const durSeconds = Math.floor(audioRef.current.duration % 60);
			if (isNaN(durMinutes) || isNaN(durSeconds)) {
				setDurationFormatted(TEXT.StartTime);
			} else {
				const formattedTime = `${durMinutes < 10 ? `0${durMinutes}` : durMinutes} : ${durSeconds < 10 ? `0${durSeconds}` : durSeconds}`;
				setDurationFormatted(formattedTime);
			}

			setCurrentTime(audioRef.current.currentTime);
			const currentMinutes = Math.floor(audioRef.current.currentTime / 60);
			const currentSeconds = Math.floor(audioRef.current.currentTime % 60);
			const musicCurrentT = `${currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes} : ${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;
			setCurrentTimeFormatted(musicCurrentT);
		}
	};

	const handleMute = () => {
		if (audioRef.current) {
			const newMuted = !muted;
			setMuted(newMuted);
			audioRef.current.muted = newMuted;
		}
	};

	const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newVolume = parseFloat(event.target.value);
		setVolume(newVolume);
		if (audioRef.current) {
			audioRef.current.volume = newVolume;

			if (newVolume > 0 && muted) {
				setMuted(false);
				audioRef.current.muted = false;
			}
		}
	};

	return (
		<div className={s.audioWrapper}>
			<audio
				src={tracks[trackIndex].trackUrl}
				ref={audioRef}
				onEnded={handlePlayNextTrack}
				onTimeUpdate={handleAudioUpdate}
			/>
			<div className={s.audioPlayer}>
				<div className={s.left}>
					<div className={s.picture}></div>
					<div className={s.titles}>
						<div className={s.title1}>{tracks[trackIndex].name.title}</div>
						<div className={s.title2}>{tracks[trackIndex].album}</div>
					</div>
				</div>
				<div className={s.center}>
					<div className={s.time}>{currentTimeFormatted}</div>
					<ActionIcon icon={AUDIO_ICONS.IconShuffle} />
					<ActionIcon
						icon={AUDIO_ICONS.IconPrev}
						handler={handlePlayPrevTrack}
					/>
					<ActionIcon
						icon={isAudioPlaying ? AUDIO_ICONS.IconPause : AUDIO_ICONS.IconPlay}
						handler={handlePlayTrack}
					/>
					<ActionIcon
						icon={AUDIO_ICONS.IconNext}
						handler={handlePlayNextTrack}
					/>
					<ActionIcon icon={AUDIO_ICONS.IconRepeat} />
					<div className={s.time}>{durationFormatted}</div>
				</div>
				<div className={s.right}>
					<ActionIcon
						icon={muted ? AUDIO_ICONS.IconMute : AUDIO_ICONS.IconSound}
						handler={handleMute}
					/>
					<div className={s.volumeWrapper}>
						<input
							type="range"
							min="0"
							max="1"
							step="0.01"
							value={volume}
							onChange={handleVolumeChange}
							style={
								{ '--curVolume': `${volume * 100}%` } as React.CSSProperties
							}
							className={s.volume}
						/>
					</div>
					<ActionIcon icon={AUDIO_ICONS.IconLink} />
				</div>
				<div className={s.durationWrapper}>
					<input
						type="range"
						min="0"
						max={isNaN(duration) ? '1' : duration}
						value={currentTime}
						onChange={handleMusicProgressBar}
						style={
							{
								'--durProgress': `${(currentTime / duration) * 100}%`,
							} as React.CSSProperties
						}
						className={s.duration}
					/>
				</div>
			</div>
		</div>
	);
};
