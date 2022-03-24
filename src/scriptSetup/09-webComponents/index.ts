import { defineCustomElement } from "vue";
import Example from "./example.ce.vue";

const MyCustomElement = defineCustomElement(Example);
customElements.define("my-custom-element", MyCustomElement);
