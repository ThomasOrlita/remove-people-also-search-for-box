// removes the "people also search for" box
document.querySelectorAll('div[id^=eob], div[id^=aob]').forEach(e => {
    const parentElement = e.parentElement;
    e.remove();
    parentElement.style.height = 'auto';
});
