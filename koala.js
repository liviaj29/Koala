// import render engine and HyperScript Tagged Markup from Preact
import { render } from "preact";
import { html } from "htm/preact";

// main Koala function
const Koala = (data={}) => {
    // secret variable that no one has access to. Access is controlled through methods
    const settings = {
        element: document.body,
        data,
    };

    // return object that gets assigned to the app variable
    return {
        // view template is stored in the settings object
        template: func => settings.html = func,
        update: func => {
            settings.data = {...structuredClone(settings.data), ...func(settings.data)}
            render(settings.html(settings.data), document.body)
        },
        // set the root element to render to
        root: el => settings.element = el,
        // renders the template to the page, used for the initial page render
        render: () => render(settings.html(settings.data), settings.element)
    };
  };
  
export { Koala, html }
