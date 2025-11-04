export const createDropDownMenu = (...strings) => {
	const ddmUl = document.createElement('ul');
	strings.forEach((string) => {
		const ddmLi = document.createElement('li');
		const ddmLink = document.createElement('a');
		ddmLink.textContent = string;
		ddmLi.append(ddmLink);
		ddmUl.append(ddmLi);
	});
	return ddmUl;
};
