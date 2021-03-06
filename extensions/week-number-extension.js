/**
 * 
 * @returns {number} Número da semana do ano
 */
export function getWeekNumber() {

    const originalDate = new Date();

    // Copy date so don't modify original
    const d = new Date(Date.UTC(originalDate.getFullYear(), originalDate.getMonth(), originalDate.getDate()));

    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));

    return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};

// Date.prototype.getWeekNumber = getWeekNumber;