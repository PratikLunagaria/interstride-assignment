export const contentFilter = (params, studentsData) => {
	if (params.country.length) {
		studentsData = studentsData.filter(
			(studentData) => studentData.country_of_origin.toLowerCase() === params.country
		);
	}
	if (params.degree.length) {
		studentsData = studentsData.filter((studentData) => studentData.degree.toLowerCase() === params.degree);
	}
	if (params.major.length) {
		studentsData = studentsData.filter((studentData) => studentData.major.toLowerCase() === params.major);
	}
	return studentsData;
};
