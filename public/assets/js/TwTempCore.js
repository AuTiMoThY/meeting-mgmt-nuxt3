const TwTemp = (function (window) {
    const debug = true;
    const updateCursor = ({x, y}) => {
        document.documentElement.style.setProperty("--x", x);
        document.documentElement.style.setProperty("--y", y);
    };
    document.body.addEventListener("pointermove", updateCursor);

    return {
        init() {
            const _ = this;

            console.warn("Initializing TwTemp");
            console.log(_);

        },
        log(label, ...args) {
            if (debug) {
                const stack = new Error().stack;
                const callerInfo = stack.split('\n')[2].trim();  // 取得呼叫 `customLog` 的堆疊資訊
                console.log(
                    `%c=== ${label} === %c${callerInfo}:%c\n`,
                    "color: brown; font-weight: bolder; font-size: 18px;",  // label 的樣式
                    "color: blue; font-size: 10px;",   // callerInfo 的樣式
                    "color: black;",  // 重置為預設風格
                    ...args
                );
            }
        },
    };
})(window);
