import { createRef, useEffect, useState } from "react";
import throttle from "lodash.throttle";

//Checks if an element is in viewport
//@param {number} throttleMilliseconds - listener throttle in ms

export default function CheckVisibility<Element extends HTMLElement>(
    throttleMilliseconds = 100
): [Boolean, React.RefObject<Element>] {
    const [isVisible, setIsVisible] = useState(false);
    const currentElement = createRef<Element>();

    const onScroll = throttle(() => {
        if (!currentElement.current) {
            setIsVisible(false);
            return;
        }
        const top = currentElement.current.getBoundingClientRect().top;
        setIsVisible(top >= 0 && top <= window.innerHeight);
    }, throttleMilliseconds);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    });

    return [isVisible, currentElement];
}
