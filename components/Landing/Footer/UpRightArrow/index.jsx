import { RiArrowRightUpLine } from "@remixicon/react";
import styles from "./styles.module.scss";

export default function Arrow({size, ...attributes}) {
    return (
        <RiArrowRightUpLine
            size={size} // set custom `width` and `height`
            className={styles.arrow} // add custom class name
        />
    );
};