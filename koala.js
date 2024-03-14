// import render engine and HyperScript Tagged Markup from Preact
import { render } from "https://esm.sh/preact";
import { html as template } from "https://esm.sh/htm/preact";

const Koala = () => {
    // secret variable that no one has access to 
    const settings = {}
    // and can just create props through assignment
    const html = func => settings.html = func
    const data = obj => settings.data = obj
    
    const initiate = () => render(settings.html(settings.data), document.body)
    
    return { data, html, initiate }
  }
  
export default Koala