export const dateFormat = (inputDate) => {

    const date = new Date(inputDate)
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(date);

    return formattedDate
}