export const highlightSearchText = (obj, searchQuery) => {
  if (!obj || !searchQuery) return "";

  const findMatchingText = (current) => {
    if (typeof current === "string") {
      if (current.toLowerCase().includes(searchQuery.toLowerCase())) {
        return current;
      }
      return null;
    }

    if (Array.isArray(current)) {
      for (const item of current) {
        const result = findMatchingText(item);
        if (result) return result;
      }
      return null;
    }

    if (typeof current === "object" && current !== null) {
      for (const value of Object.values(current)) {
        const result = findMatchingText(value);
        if (result) return result;
      }
    }

    return null;
  };

  const matchingText = findMatchingText(obj);
  if (!matchingText) return "";

  const termIndex = matchingText
    .toLowerCase()
    .indexOf(searchQuery.toLowerCase());
  const contextLength = 20;

  const start = Math.max(0, termIndex - contextLength);
  const end = Math.min(
    matchingText.length,
    termIndex + searchQuery.length + contextLength
  );

  let truncatedText = matchingText.slice(start, end);
  if (start > 0) truncatedText = "..." + truncatedText;
  if (end < matchingText.length) truncatedText = truncatedText + "...";

  const originalTerm = matchingText.slice(
    termIndex,
    termIndex + searchQuery.length
  );
  return truncatedText.replace(
    new RegExp(originalTerm, "i"),
    `<mark>${originalTerm}</mark>`
  );
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const GHOST_AVATAR = "https://www.gravatar.com/avatar/ghost?d=mp";
