import { createElement } from 'lwc';
import component from 'c/helloWorld';

describe("c-hello-world", () => {
   beforeEach(() => {
      const element = createElement("c-hello-world", {
         is: component
      });
      document.body.appendChild(element);
   })
   it("display greeting", () => {
      const element = document.querySelector("c-hello-world")
      const div = element.shadowRoot.querySelector("div")
      expect(div.textContent).toBe("Hello kartik")
   })
   it("change gretting", () => {
      const element = document.querySelector("c-hello-world");
      const inputElement = element.shadowRoot.querySelector("lightning-input")
      inputElement.value = 'bansal'
      inputElement.dispatchEvent(new CustomEvent('change'))
      const div = element.shadowRoot.querySelector("div")
      return Promise.resolve().then(() => {
         expect(div.textContent).toBe("Hello bansal")
      })
   })
})