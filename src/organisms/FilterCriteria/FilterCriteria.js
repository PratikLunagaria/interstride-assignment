import { Box } from '@mui/material';
import React from 'react';
import FilterSelect from '../../molecules/FilterSelect/FilterSelect';
import { countryList, degreeList, majorList } from '../../utils/constants';

const FilterCriteria = ({ searchParams, setSearchParams }) => {
	console.log(searchParams, 'searchParams');
	const handleCountryChange = (country) => setSearchParams({ ...searchParams, country });
	const handleDegreeChange = (degree) => setSearchParams({ ...searchParams, degree });
	const handleMajorChange = (major) => setSearchParams({ ...searchParams, major });
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '1.5rem',
				margin: '1.5rem 0 1.5rem 0'
			}}>
			<FilterSelect
				selectLabel={'Filter by country'}
				selectItems={countryList}
				selectedItem={searchParams.country}
				selectAction={handleCountryChange}
			/>
			<FilterSelect
				selectLabel={'Filter by degree'}
				selectItems={degreeList}
				selectedItem={searchParams.degree}
				selectAction={handleDegreeChange}
			/>
			<FilterSelect
				selectLabel={'Filter by major'}
				selectItems={majorList}
				selectedItem={searchParams.major}
				selectAction={handleMajorChange}
			/>
		</Box>
	);
};

export default FilterCriteria;
