import { Box, Typography } from '@mui/material';
import React from 'react';
import InterstrideLogo from '../../static/assets/img/interstride.png';

const WidgetFooter = () => {
	return (
		<footer>
			<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '2rem' }}>
				<Typography variant="h6">Powered by</Typography>
				<img src={InterstrideLogo} alt="interstride" style={{ width: '10rem', height: '2.25rem' }} />
			</Box>
		</footer>
	);
};

export default WidgetFooter;
