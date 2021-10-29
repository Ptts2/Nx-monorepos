export class StyledLinkElement extends HTMLElement {

    constructor(){
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        
        const style = document.createElement('style'); 
        const template = document.createElement('template');

        template.innerHTML = `<a href=""></a>`;
        shadowRoot.appendChild(style);
        shadowRoot.append(template.content.cloneNode(true));

        /*
        let slot = document.createElement('slot') ;
        slot.addEventListener('slotchange', ()=> {
            slot.assignedNodes()[0].nodeValue                   
            this.connectedCallback();
        });

        shadowRoot.appendChild(slot);  */
    }
    
    connectedCallback(){

      updateElem(this);
      /*
      const shadow = this.shadowRoot;
      if(shadow!==null){
        const link = shadow.querySelector("a");
        if(link!==null)
          link.textContent = this.innerText;
      }
      console.log(this.textContent);
      */
    }


}

function updateElem(elem: { shadowRoot: any; hasAttribute: (arg0: string) => any; getAttribute: (arg0: string) => any; }){
  
  const shadow = elem.shadowRoot;

  let color =  '#fff';
  let bg_color = '#3f525c';
  let hover_bg_color = '#000';
  let border_radius = '2px';

  if( elem.hasAttribute('color') ) {
      const c = elem.getAttribute('color'); 
      if(c !== null && CSS.supports('color', c))
          color = c;
  }
  if( elem.hasAttribute('bg_color') ) {
      const c = elem.getAttribute('bg_color'); 
      if(c !== null && CSS.supports('color', c))
          bg_color = c;
  }
  if( elem.hasAttribute('hover_bg_color') ) {
      const c = elem.getAttribute('hover_bg_color'); 
      if(c !== null && CSS.supports('color', c))
      hover_bg_color = c;
  }
  if( elem.hasAttribute('border_radius') ) {
      const c = elem.getAttribute('border_radius'); 
      if(c !== null && CSS.supports('border-radius', c))
      border_radius = c;
  }
  
  shadow.querySelector('style').innerHTML =
  ` 
  a {
      background-color: `+bg_color+`;
      border-radius: `+border_radius+`;
      padding: 1rem;
      font-size: 1.2rem;
      text-decoration: none;
      display: inline-block;
      color: `+color+`;
      text-align: center;
      width: 100%;
      min-width: 70px;
      margin: .5rem auto;
      box-sizing: border-box;
    }
    
    @media (min-width: 600px) {
      a {
        width: 18%;
        box-sizing: content-box;
      }
    }
    
    a:hover {
      background-color: `+hover_bg_color+`;
    }
  `;

  let title = "Click here";
  let href = "./";

  if( elem.hasAttribute('title') ){
      let t = elem.getAttribute('title');
      if(t)
        title = t;
  }

  if( elem.hasAttribute('href') ){
    let h = elem.getAttribute('href');
    console.log(h)
    if(h)
      href = h;
  }

  const anchorElement = shadow.querySelector("a")
  anchorElement.setAttribute('href', href);
  anchorElement.text = title;
}


customElements.define('styled-link', StyledLinkElement);