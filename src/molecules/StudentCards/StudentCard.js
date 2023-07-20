import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import EllipsisWrapper from '../EllipsisWrapper';
import { Box, Button } from '@mui/material';

const StudentCard = (props) => {
	const { user_profile, user_bio, major, country_image, country_of_origin, graduation_year, full_name } = props.data;
	const firstName = full_name.split(' ')[0];
	return (
		<Card
			sx={{
				fontWeight: '700',
				borderRadius: '0.5rem',
				padding: '1rem',
				boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
			}}>
			<Box sx={{ width: '100%', padding: '0' }}>
				<Box sx={{ display: 'flex', gap: '1rem' }}>
					<Avatar
						sx={{ bgcolor: red[500], height: '4.5rem', width: '4.5rem' }}
						aria-label="recipe"
						src={user_profile}
					/>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between'
						}}>
						<Typography variant="subtitle">{full_name}</Typography>
						<Typography>
							{major}, {graduation_year}
						</Typography>
						<Box style={{ display: 'flex', gap: '0.5rem' }}>
							<img
								src={country_image}
								alt={country_of_origin}
								style={{
									width: '1.5rem',
									height: '1rem',
									borderRadius: '0.1rem'
								}}
							/>
							<Typography variant="subtitle"> From {country_of_origin}</Typography>
						</Box>
					</Box>
				</Box>
				<EllipsisWrapper
					text={user_bio}
					actionComp={
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								marginTop: '1rem'
							}}>
							<Button
								sx={{
									backgroundColor: 'primary.main',
									color: '#fff',
									fontWeight: '500',
									padding: '0.5rem 1rem 0.5rem 1rem',
									borderRadius: '2rem',
									letterSpacing: '0.5px',
									fontSize: '1.15rem'
								}}>
								Chat with {firstName}
							</Button>
						</Box>
					}
				/>
			</Box>
		</Card>
	);
};
export default StudentCard;
