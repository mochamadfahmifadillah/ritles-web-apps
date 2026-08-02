// Format tanggal Indonesia
export function formatDate(date) {
  if (!date) return "-";

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}


// Format tanggal + waktu
export function formatDateTime(date) {
  if (!date) return "-";

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}


// Format hanya hari
export function formatDay(date) {
  if (!date) return "-";

  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
  }).format(new Date(date));
}


// Format bulan dan tahun
export function formatMonthYear(date) {
  if (!date) return "-";

  return new Intl.DateTimeFormat("id-ID", {
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}


// Cek apakah tanggal hari ini
export function isToday(date) {
  if (!date) return false;

  const today = new Date();
  const target = new Date(date);

  return (
    today.getDate() === target.getDate() &&
    today.getMonth() === target.getMonth() &&
    today.getFullYear() === target.getFullYear()
  );
}


// Selisih hari dari tanggal tertentu
export function daysAgo(date) {
  if (!date) return "-";

  const today = new Date();
  const target = new Date(date);

  const diffTime = today - target;

  const diffDays = Math.floor(
    diffTime / (1000 * 60 * 60 * 24)
  );

  if (diffDays === 0) {
    return "Hari ini";
  }

  if (diffDays === 1) {
    return "Kemarin";
  }

  return `${diffDays} hari lalu`;
}