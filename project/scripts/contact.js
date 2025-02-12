function incrementFormCount() {
	let formCount = parseInt(localStorage.getItem('formCount')) || 0;
	formCount++;
	localStorage.setItem('formCount', formCount);
	console.log(`Total forms completed: ${formCount}`);
  }