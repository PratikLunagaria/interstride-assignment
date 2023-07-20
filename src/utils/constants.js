import CommunityImage from '../static/assets/img/Community.svg';
import StudentsImage from '../static/assets/img/Students.svg';
import StaffImage from '../static/assets/img/Staff.svg';
import MessagesImage from '../static/assets/img/Messages.svg';
import ResourcesImage from '../static/assets/img/Resources.svg';

export const countryList = [
	{ value: 'albania', label: 'Albania' },
	{ value: 'india', label: 'India' },
	{ value: 'angola', label: 'Angola' },
	{ value: 'andorra', label: 'Andorra' },
	{ value: 'american samoa', label: 'American Samoa' },
	{ value: 'algeria', label: 'Algeria' }
];

export const degreeList = [ { value: 'bachelors', label: 'Bachelors' }, { value: 'masters', label: 'Masters' } ];

export const majorList = [
	{ value: 'actuarial science', label: 'Actuarial Science' },
	{ value: 'actuarial mathematics', label: 'Actuarial Mathematics' },
	{ value: 'aboriginal studies', label: 'Aboriginal Studies' },
	{ value: 'accounting', label: 'Accounting' },
	{ value: 'accountancy', label: 'Accountancy' }
];

export const widgetTabElements = [
	{
		image: StudentsImage,
		title: 'Students',
		value: '0'
	},
	{
		image: StaffImage,
		title: 'Staff',
		value: '1'
	},
	{
		image: CommunityImage,
		title: 'Community',
		value: '2'
	},
	{
		image: MessagesImage,
		title: 'Messages',
		value: '3'
	},
	{
		image: ResourcesImage,
		title: 'Resources',
		value: '4'
	}
];
