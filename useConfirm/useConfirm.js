export const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function" && rejection !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};