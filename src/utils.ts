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
  const notations = ["#","##","###","####","#####","######","**"]
  let stateManager = false;
  for(let i = 0; i<textArray.length; i++)
  {
    for(let j=0; j<notations.length; j++){
      if(textArray[i] === notations[j]){
        stateManager = !stateManager
      }
    }
  }
};
