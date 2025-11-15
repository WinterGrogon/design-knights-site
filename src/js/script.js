document.querySelectorAll('.numeric-section > .container').forEach((container, index) => {
    const sectionName = document.createElement('div');
    sectionName.className = 'section-name';
    container.prepend(sectionName);
});