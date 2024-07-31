export const DaysConvertor = (date) => {
  const currentDate = new Date();

  const past = new Date(date);

  const timeDifference = currentDate - past;

  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  if (daysDifference > 30 && daysDifference<365) {
    return Math.floor(daysDifference / 30)+" months ago";
  }
  else if(daysDifference>365){
    return Math.floor(daysDifference/365)+" year ago"
  }

  return daysDifference+"days ago";
};
