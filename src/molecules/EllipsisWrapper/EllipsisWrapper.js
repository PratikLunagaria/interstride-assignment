import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { ExpandButton } from '../../atoms/ExpandButton/ExpandButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const EllipsisWrapper = ({ wrapLength = 100, text, actionComp }) => {
	const [ expanded, setExpanded ] = useState(true);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	const shortText = `${text.slice(0, wrapLength)}...`;
	return (
		<Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1rem' }}>
			{expanded ? (
				text && <Typography variant="subtitle">{shortText}</Typography>
			) : (
				<Box sx={{ width: '100%' }}>
					{text && <Typography variant="subtitle">{text}</Typography>}
					{actionComp}
				</Box>
			)}
			<ExpandButton
				expand={!expanded}
				onClick={handleExpandClick}
				aria-expanded={!expanded}
				aria-label="show more">
				<ExpandMoreIcon />
			</ExpandButton>
		</Box>
	);
};
export default EllipsisWrapper;
