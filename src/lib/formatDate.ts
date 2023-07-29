export default function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-KE', {
    dateStyle: 'long',
  }).format(new Date(date));
}
