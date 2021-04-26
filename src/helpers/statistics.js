export const getMinValue = data => {
    const values = data.map(element => parseFloat(element.Valor.replace(',', '.')));
    const minValue = Math.min(...values);

    return minValue;
}

export const getAvgValue = data => {
    const values = data.map(element => parseFloat(element.Valor.replace(',', '.')));
    const sum = values.reduce((previous, current) => current += previous);
    const avg = sum / values.length;

    return avg.toFixed(2);

}

export const getMaxValue = data => {
    const values = data.map(element => parseFloat(element.Valor.replace(',', '.')));
    const maxValue = Math.max(...values);

    return maxValue;
}