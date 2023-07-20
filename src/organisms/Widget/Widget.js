import { Tab, Typography } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import CardGrid from '../../organisms/CardGrid/CardGrid';
import { userData } from '../../static/mock/data';

import Banner from '../../molecules/Banner/Banner';
import FilterCriteria from '../FilterCriteria/FilterCriteria';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import StudentCard from '../../molecules/StudentCards/StudentCard';
import WidgetFooter from '../../molecules/WidgetFooter/WidgetFooter';
import { fetchStudents } from '../../api/students';
import { widgetTabElements } from '../../utils/constants';
import { contentFilter } from '../../utils/helper';

const Widget = () => {
	const [ value, setValue ] = useState('0');
	const [ studentData, setStudentData ] = useState(userData);
	const [ searchParams, setSearchParams ] = useState({
		country: '',
		degree: '',
		major: ''
	});

	useEffect(() => {
		fetchStudents().then((res) => res.json()).then((res) => res.data.users && setStudentData(res.data.users));
	}, []);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const filteredData = contentFilter(searchParams, studentData);
	console.log(filteredData, 'filteredData');
	return (
		<Fragment>
			<TabContext value={value}>
				<TabList
					onChange={handleChange}
					aria-label="lab API tabs example"
					variant="fullWidth"
					sx={{
						borderBottom: '1px solid #d1dde5'
					}}
					centered>
					{widgetTabElements.map((tabElement) => (
						<Tab
							key={tabElement.value}
							value={tabElement.value}
							label={
								<Fragment>
									<img src={tabElement.image} alt={tabElement.title} />
									<Typography
										sx={{
											fontWeight: '800',
											letterSpacing: '0.5px'
										}}>
										{tabElement.title}
									</Typography>
								</Fragment>
							}
						/>
					))}
				</TabList>
				<TabPanel value={'0'}>
					<Banner />
					<FilterCriteria searchParams={searchParams} setSearchParams={setSearchParams} />
					<CardGrid>{filteredData.map((data) => <StudentCard data={data} key={data.id} />)}</CardGrid>
				</TabPanel>
			</TabContext>
			<WidgetFooter />
		</Fragment>
	);
};

export default Widget;
