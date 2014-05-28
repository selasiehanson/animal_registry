export default function (date){
  if (date){
    return moment.utc(date).format('YYYY-MM-DD');
  }
  return '';
}