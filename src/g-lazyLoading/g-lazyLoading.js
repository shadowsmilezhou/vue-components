function isInViewport(ele) {
    // 元素顶部 距离 视口左上角 的距离top <= 窗口高度 （反例：元素在屏幕下方的情况）
    // 元素底部 距离 视口左上角 的距离bottom > 0 (反例：元素在屏幕上方的情况)
    // 元素display样式不为none
    const notBelow = ele.getBoundingClientRect().top <= window.innerHeight;
    const notAbove = ele.getBoundingClientRect().bottom >= 0;
    const visable = getComputedStyle(ele).display !== "none";
    return notBelow && notAbove && visable;
}


function LazyLoad() {
    let active = false;
    const lazyLoad = () => {
        if (active) return;
        active = true;
        console.log(active);
        setTimeout(() => {

            let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
            lazyImages.forEach(lazyImage => {
                if (isInViewport(lazyImage)) {
                    console.log('i am coming');
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.srcset = lazyImage.dataset.srcset;
                    // 删除class  防止下次重复查找到改img标签
                    lazyImage.classList.remove("lazy");
                }

                if (lazyImages.length === 0) {
                    document.removeEventListener("scroll", lazyLoad);
                    window.removeEventListener("resize", lazyLoad);
                    window.removeEventListener("orientationchange", lazyLoad);
                }
            });

            active = false;
        }, 2000);
    };
    document.addEventListener("scroll", lazyLoad);
    document.addEventListener("resize", lazyLoad);
    document.addEventListener("orientationchange", lazyLoad);
}


export {LazyLoad}
