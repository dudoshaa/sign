export function formatLastSeen(input) {
  if (input.length == 0) return;
  let date;

  // Firebase Timestamp bo‘lsa
  if (input?.seconds !== undefined && input?.nanoseconds !== undefined) {
    date = new Date(input.seconds * 1000 + Math.floor(input.nanoseconds / 1e6));
  } else if (input instanceof Date) {
    date = input;
  } else {
    throw new Error(
      "Noto‘g‘ri format: Date yoki Firebase Timestamp bo‘lishi kerak"
    );
  }

  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHrs = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHrs / 24);

  // 🔥 Faqatgina bir soniyaga ham farq qilsa
  if (diffSec < 60) return `${diffSec} seconds ago online`;
if (diffMin < 60) return `${diffMin} minutes ago online`;
if (diffHrs < 24) return `${diffHrs} hours ago online`;
if (diffDays === 1)
  return `yesterday at ${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")} online`;
if (diffDays < 7) return `${diffDays} days ago online`;

return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
  .toString()
  .padStart(2, "0")}.${date.getFullYear()} ${date
  .getHours()
  .toString()
  .padStart(2, "0")}:${date
  .getMinutes()
  .toString()
  .padStart(2, "0")} online`;

}
