import { Masonry } from '@mui/lab';
import { Box } from '@mui/material';
import React from 'react';

const CardGrid = (props) => {
	return (
		<Box maxWidth="lg">
			<Masonry columns={3} spacing={1}>
				{props.children}
			</Masonry>
		</Box>
	);
};

export default CardGrid;
