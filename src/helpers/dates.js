export const getLastWeek = () => {
    let today = new Date();
    let dayMilliseconds = 24 * 60 * 60 * 1000;
    let lastWeek = new Date(today.getTime() - dayMilliseconds * 7);
    
    return lastWeek;
}