export default function getFormatedDate(dateString: string): string {
  return new Intl.DateTimeFormat('id-ID', { dateStyle: 'long' }).format(
    new Date(dateString)
  );
}
