export const formatDate = (isDate) =>{
    const date = new Date(isDate);
    return date.toLocaleDateString('en-us',{
        year:'numeric',
        month:'long',
        day:'numeric'
    })
}