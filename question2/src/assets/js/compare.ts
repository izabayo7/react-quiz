export const initComparisons = () => {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.querySelectorAll<HTMLElement>(".component-comp-overlay");
    for (i = 0; i < x.length; i++) {
      /*once for each "overlay" element:
      pass the "overlay" element as a parameter when executing the compareImages function:*/
      compareImages(x[i]);
    }
    function compareImages(component: HTMLElement) {
      var slider: HTMLElement, component: HTMLElement, clicked = 0, w: number, h: number;
      /*get the width and height of the component element*/
      w = component.offsetWidth;
      h = component.offsetHeight;
      /*set the width of the component element to 50%:*/
      component.style.width = (w / 2) + "px";
      /*create slider:*/
      slider = document.createElement("DIV");
      slider.setAttribute("class", "component-comp-slider");
      /*insert slider*/
      component.parentElement?.insertBefore(slider, component);
      /*position the slider in the middle:*/
      slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      /*execute a function when the mouse button is pressed:*/
      slider.addEventListener("mousedown", slideReady);
      /*and another function when the mouse button is released:*/
      window.addEventListener("mouseup", slideFinish);
      /*or touched (for touch screens:*/
      slider.addEventListener("touchstart", slideReady);
      /*and released (for touch screens:*/
      window.addEventListener("touchend", slideFinish);
      function slideReady(e: { preventDefault: () => void; }) {
        /*prevent any other actions that may occur when moving over the image:*/
        e.preventDefault();
        /*the slider is now clicked and ready to move:*/
        clicked = 1;
        /*execute a function when the slider is moved:*/
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {
        /*the slider is no longer clicked:*/
        clicked = 0;
      }
      function slideMove(e: any) {
        var pos;
        /*if the slider is no longer clicked, exit this function:*/
        if (clicked == 0) return false;
        /*get the cursor's x position:*/
        pos = getCursorPos(e)
        /*prevent the slider from being positioned outside the image:*/
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        /*execute a function that will resize the overlay image according to the cursor:*/
        slide(pos);
      }
      function getCursorPos(e: { changedTouches: any[]; pageX: number; }) {
        var a, x = 0;
        e = (e.changedTouches) ? e.changedTouches[0] : e;
        /*get the x positions of the image:*/
        a = component.getBoundingClientRect();
        /*calculate the cursor's x coordinate, relative to the image:*/
        x = e.pageX - a.left;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x: string | number) {
        /*resize the image:*/
        component.style.width = x + "px";
        /*position the slider:*/
        slider.style.left = component.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
  }
  