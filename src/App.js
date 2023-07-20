import { Container, createTheme, ThemeProvider } from '@mui/material';
import Widget from './organisms/Widget';

const theme = createTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#8c1d41'
		}
	},
	typography: {
		fontFamily: [ 'TTCommons-Regular' ].join(','),
		button: {
			textTransform: 'none'
		},
		color: '#000c3d'
	}
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="lg">
				<Widget />
			</Container>
		</ThemeProvider>
	);
};

export default App;
