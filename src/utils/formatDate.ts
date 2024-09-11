import i18n from "./i18n";

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(i18n.language, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
