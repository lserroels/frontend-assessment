
export default {
formatDate(inputDate) {
    const date = new Date(inputDate);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const formattedDate = `${monthNames[month-1]} ${day}, ${year}`;
  
    return formattedDate;
  }
}