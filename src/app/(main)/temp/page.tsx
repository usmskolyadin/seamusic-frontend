import { List } from '@/entities/list/ui/list';
import { Checkbox } from '@/shared/ui';
import { TextField } from '@/shared/ui/text-field/text-field';

const Page = () => {
	const ipsum = [
		'List item',
		'List item',
		'List item',
		'List item',
		'List item',
	];
	return (
		<>
			<List items={ipsum} listName="List name" />
			<div style={{ marginTop: '40px' }}>
				<Checkbox />
				<Checkbox figure="round" />
				<Checkbox filling="empty" />
				<Checkbox figure="round" filling="empty" />
			</div>
			<div style={{ display: 'flex', gap: '40px', marginTop: '40px' }}>
				<TextField name="Name" hint="Hint" status="default" />
				<TextField name="Name" hint="Hint" status="error" />
				<TextField name="Name" hint="Hint" status="success" />
				<TextField name="Name" hint="Hint" status="attention" />
			</div>
			<div style={{ display: 'flex', gap: '40px', marginTop: '40px' }}>
				<TextField name="Name" hint="Hint" status="default" text="Some TEXT" />
				<TextField name="Name" hint="Hint" status="error" text="Some TEXT" />
				<TextField name="Name" hint="Hint" status="success" text="Some TEXT" />
				<TextField
					name="Name"
					hint="Hint"
					status="attention"
					text="Some TEXT"
				/>
			</div>
		</>
	);
};

export default Page;
