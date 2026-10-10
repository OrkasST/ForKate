document.addEventListener("DOMContentLoaded", () => {
    const filler = document.getElementById("movable");
    const loader = document.getElementById("loader");
    const back = document.getElementById("main");
    StartLoadingAnimation(back, loader, filler);
})

function StartLoadingAnimation(outer, parent, element, animation = null, yOffset = 100, gap = 1, opacity = 1) {
    if (animation == null) parent.classList.remove("hidden")
    if (animation != null && yOffset >= 0) yOffset -= 0.4

    element.style.transform = `translate(0, ${yOffset}%)`

    if (yOffset <= 0 && gap > 0) {
        gap -= 0.1
    }
    else if (yOffset <= 0 && opacity > 0) {
        opacity -= 0.02
        parent.style.opacity = opacity
    }
    if (yOffset <= 0 && opacity <= 0) {
        cancelAnimationFrame(animation)
        outer.classList.remove("hidden")
    }
    else animation = requestAnimationFrame(() => StartLoadingAnimation(outer, parent, element, animation, yOffset, gap, opacity))
}