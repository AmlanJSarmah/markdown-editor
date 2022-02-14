export const manageStorage = (text: string | null) => {
  if(text) localStorage.setItem('Data',JSON.stringify(text))
  else localStorage.setItem('Data',"")
}
