function toggleTable(tableName) {
    const table = document.getElementById(`${tableName}Table`);
    table.classList.toggle('hidden');
}
function switchTab(tabNumber) {
    for (let i = 1; i <= 4; i++) {
        const tabContent = document.getElementById(`tabContent${i}`);
        const tab = document.getElementById(`tab${i}`);
        if (i === tabNumber) {
            tabContent.classList.remove('hidden');
            tab.classList.add('is-active');
        } else {
            tabContent.classList.add('hidden');
            tab.classList.remove('is-active');
        }
    }
}