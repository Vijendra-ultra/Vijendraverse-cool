export const DateConverter = (rawDate: string) => {
  const date = new Date(rawDate);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  const parts = formattedDate.split(" ");
  const finalDate = `${parts[0] + ", "} ${parts[1]} ${parts[2]}`;
  return finalDate;
};

export function DarkModeSwitcher() {
  const mode = localStorage.getItem("mode");
  if (mode === "dark") {
    localStorage.setItem("mode", "light");
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.setItem("mode", "dark");
    document.documentElement.classList.add("dark");
  }
}
