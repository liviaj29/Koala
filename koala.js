// import render engine and HyperScript Tagged Markup from Preact
import { render } from "https://esm.sh/preact";
import { html } from "https://esm.sh/htm/preact";

// main Koala function
const Koala = () => {
    // secret variable that no one has access to 
    const settings = {}
    // and can just create props through assignment
    const data = obj => settings.data = obj
    // save template to settings
    const template = func => settings.html = func  

    // return object that gets assigned to the app variable
    return { 
        data, 
        template, 
        render: () => render(settings.html(settings.data), document.body)
    }
  }
  
export default Koala
