export const setStorage = (text: string | null) => {
  if (text) localStorage.setItem("Data", text);
  else localStorage.setItem("Data", "");
};

export const getStorage = () => {
  if (localStorage.length === 0) return null;
  else return localStorage.getItem("Data");
};

export const markdownCreator = (text: string | null) => {
  if(text == null) return "";
  const textArray = text.split(" ");
  const notations = ["#", "##", "###", "####", "#####", "######", "**"];
  let stateManager = false;
  for (let i = 0; i < textArray.length; i++) {
    for (let j = 0; j < notations.length; j++) {
      if (textArray[i] === notations[j]) {
        stateManager = !stateManager;
        if(textArray[i]==="#"){
          if(stateManager) textArray[i] = "<h1>"
          else textArray[i] = "</h1>"
        }
        else if(textArray[i] === "##"){
          if(stateManager) textArray[i] = "<h2>"
          else textArray[i] = "</h2>"
        }
        else if(textArray[i] === "###"){
          if(stateManager) textArray[i] = "<h3>"
          else textArray[i] = "</h3>"
        }
        else if(textArray[i] === "####"){
          if(stateManager) textArray[i] = "<h4>"
          else textArray[i] = "</h4>"
        }
        else if(textArray[i] === "#####"){
          if(stateManager) textArray[i] = "<h5>"
          else textArray[i] = "</h5>"
        }
        else{
          if(stateManager) textArray[i] = "<b>"
          else textArray[i] = "</b>"
        }
      }
    }
  }
  return textArray.join(" ")
};
