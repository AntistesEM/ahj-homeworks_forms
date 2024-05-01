import Popover from "../Popover";

const innerHtml = `  
  <div class="container">
    <div class="tooltip hidden">
      <div class="tooltip-content">
        <h3 class="tooltip-title">Popover title</h3>
        <p class="tooltip-text">And here's some amazing content.It's very engaging.Right?</p>
      </div>
    </div>
    <button class="popover-btn">Click to toggle popover</button>
  </div>`;
const body = document.querySelector("body");
body.appendChild(innerHtml);
const container = document.querySelector(".container");
const popover = new Popover(container);
popover.init();

test("showTooltip should toggle hidden class on tooltip element", () => {
  const buttonEl = container.querySelector(".popover-btn");
  const tooltip = container.querySelector(".tooltip");

  buttonEl.click();
  expect(tooltip.classList.contains("hidden")).toBe(false);

  buttonEl.click();
  expect(tooltip.classList.contains("hidden")).toBe(true);
});
