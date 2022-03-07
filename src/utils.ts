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
  let tracker = ""
  const textArray = text.split(" ");
  const notations = ["#", "##", "###", "####", "#####", "######", "**"];
  let stateManager = false;
  for (let i = 0; i < textArray.length; i++) {
    for (let j = 0; j < notations.length; j++) {
      if (textArray[i] === notations[j]) {
        stateManager = !stateManager;
        if(textArray[i]==="#"){
          if(stateManager) {
            textArray[i] = "<h1>" 
            tracker = "</h1>"
          }
          else textArray[i] = "</h1>"
        }
        else if(textArray[i] === "##"){
          if(stateManager) {
            textArray[i] = "<h2>" 
            tracker = "</h2>"
          }
          else textArray[i] = "</h2>"
        }
        else if(textArray[i] === "###"){
          if(stateManager) {
            textArray[i] = "<h3>"
            tracker = "</h3>"
          }
          else textArray[i] = "</h3>"
        }
        else if(textArray[i] === "####"){
          if(stateManager) {
            textArray[i] = "<h4>" 
            tracker = "</h4>"
          }
          else textArray[i] = "</h4>"
        }
        else if(textArray[i] === "#####"){
          if(stateManager) {
            textArray[i] = "<h5>" 
            tracker = "</h5>"
          }
          else textArray[i] = "</h5>"
        }
        else{
          if(stateManager) textArray[i] = "<b>"
          else textArray[i] = "</b>"
        }
      }
    }
    if(textArray[i] === "<br/>" && tracker !== ""){
      textArray[i] = tracker + "<br/>"
      tracker = ""
      stateManager = false;
    }
  }
  return textArray.join(" ")
};
