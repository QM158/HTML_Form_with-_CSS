const resultsList = document.getElementById('results')
new URLSearchParams(window.location.search).forEach((name, value) => {
    resultsList.insertAdjacentHTML('beforeend', `<div><label>${value}:</label><label>${name}</label></div>`);
});