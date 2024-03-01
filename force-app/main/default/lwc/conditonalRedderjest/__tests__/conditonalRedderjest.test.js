import { createElement } from "lwc";
import ConditonalRedderjest from "c/conditonalRedderjest";

describe("c-conditonal-redderjest", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
  beforeEach(() => {
    // Arrange
    const element = createElement("c-conditonal-redderjest", {
      is: ConditonalRedderjest
    });
    document.body.appendChild(element);

  });

  it("case1ForDefualt", () => {
    const element = document.querySelector('c-conditonal-redderjest')
    const password = element.shadowRoot.querySelector('.userinfo')
    expect(password.textContent).toBe('Hy Password is ********');
  });
  it("show-password-when-checkbox-checked", ()=>{
    const element = document.querySelector('c-conditonal-redderjest')
        const input = element.shadowRoot.querySelector('lightning-input')
        input.checked=true;
        input.dispatchEvent(new CustomEvent('change'))
        const div = element.shadowRoot.querySelector(".userinfo")
        return Promise.resolve().then(() => {
           expect(div.textContent).toBe("My Password Is Nikhilkarkra ")
        })
    })
});
