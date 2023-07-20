import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterSelect = ({ selectLabel, selectItems, selectedItem, selectAction }) => {
	const handleChange = (event) => {
		selectAction(event.target.value);
	};

	return (
		<FormControl sx={{ minWidth: 120, fontWeight: '800' }}>
			<InputLabel sx={{ fontWeight: '800', letterSpacing: '0.5px' }}>{selectLabel}</InputLabel>
			<Select
				value={selectedItem}
				label={selectLabel}
				onChange={handleChange}
				sx={{
					borderRadius: '2rem',
					minWidth: '10rem'
				}}>
				{selectItems.map((selectItem) => (
					<MenuItem value={selectItem.value} key={selectItem.value}>
						{selectItem.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
export default FilterSelect;
