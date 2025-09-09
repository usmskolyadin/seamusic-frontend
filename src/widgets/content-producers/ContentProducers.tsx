import s from './ContentProducers.module.scss';
import producerItemImg from '@/shared/assets/images/Producer_item_01.png';
import { ArtistProducerItem, ContentTitle } from '@/shared/ui';
import { ContentProducersData } from '@/shared/constants/constants';

const PRODUCER_ITEMS = [
	{
		id: '1',
		photo: producerItemImg,
		name: 'Rhythmix',
		text: 'Bizzarap: “some info” mb about next concert or smth either ',
		tags: [
			{ id: '1', value: 'hip-hop' },
			{ id: '2', value: 'retrowave' },
		],
	},
	{
		id: '2',
		photo: producerItemImg,
		name: 'Rhythmix',
		text: 'Bizzarap: “some info” mb about next concert or smth either ',
		tags: [
			{ id: '1', value: 'hip-hop' },
			{ id: '2', value: 'retrowave' },
		],
	},
	{
		id: '3',
		photo: producerItemImg,
		name: 'Rhythmix',
		text: 'Bizzarap: “some info” mb about next concert or smth either ',
		tags: [
			{ id: '1', value: 'hip-hop' },
			{ id: '2', value: 'retrowave' },
		],
	},
	{
		id: '4',
		photo: producerItemImg,
		name: 'Rhythmix',
		text: 'Bizzarap: “some info” mb about next concert or smth either ',
		tags: [
			{ id: '1', value: 'hip-hop' },
			{ id: '2', value: 'retrowave' },
		],
	},
	{
		id: '5',
		photo: producerItemImg,
		name: 'Rhythmix',
		text: 'Bizzarap: “some info” mb about next concert or smth either ',
		tags: [
			{ id: '1', value: 'hip-hop' },
			{ id: '2', value: 'retrowave' },
		],
	},
	{
		id: '6',
		photo: producerItemImg,
		name: 'Rhythmix',
		text: 'Bizzarap: “some info” mb about next concert or smth either ',
		tags: [
			{ id: '1', value: 'hip-hop' },
			{ id: '2', value: 'retrowave' },
		],
	},
];

export const ContentProducers = () => {
	return (
		<div className={s.wrapper}>
			<ContentTitle data={ContentProducersData} />
			<div className={s.contentMain}>
				<div className={s.contentItems}>
					{PRODUCER_ITEMS.map((item) => (
						<ArtistProducerItem key={item.id} data={item} />
					))}
				</div>
			</div>
		</div>
	);
};
