export default class Popover {
  constructor(container) {
    this.container = container;
  }

  init() {
    const buttonEl = this.container.querySelector(".popover-btn");

    buttonEl.addEventListener("click", (e) => {
      e.preventDefault();

      this.showTooltip();
    });
  }

  showTooltip() {
    const tooltip = this.container.querySelector(".tooltip");

    tooltip.classList.toggle("hidden");
  }
}
