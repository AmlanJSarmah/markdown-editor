export const setStorage = (text: string | null) => {
  if (text) localStorage.setItem("Data", text);
  else localStorage.setItem("Data", "");
};

export const getStorage = () => {
  if (localStorage.length === 0) return null;
  else return localStorage.getItem("Data");
};

export const markdownCreator = (text: string) => {
  const textArray = text.split(" ");
};
