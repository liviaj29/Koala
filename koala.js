// import render engine and HyperScript Tagged Markup from Preact
import { render } from "preact";
import { html } from "htm/preact";

// main Koala function
const Koala = () => {
    // secret variable that no one has access to. Access is controlled through methods
    const settings = {};

    // return object that gets assigned to the app variable
    return {
        // used to set the initial data object, stored in the settings object
        data:  obj => settings.data = obj,
        // view template is stored in the settings object
        template: func => settings.html = func,
        // renders the template to the page, used for the initial page render
        render: () => render(settings.html(settings.data), document.body)
    };
  };
  
export default Koala
