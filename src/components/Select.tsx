import styles from "../select.module.css";
import { useState } from "react";
type SelectOption = {
    label: string;
    value: any;
};

type SelectProps = {
    value?: SelectOption;
    onChange: (value: SelectOption | undefined) => void;
    options: SelectOption[];
};

function Select({ value, onChange, options }: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);

    function clearOptions() {
        onChange(undefined);
    }

    function selectOption(option: SelectOption) {
        onChange(option);
    }

    return (
        <>
            <div
                tabIndex={0}
                className={styles.container}
                onClick={() => setIsOpen((prev) => !prev)}
                onBlur={() => setIsOpen(false)}
            >
                <span className={styles.value}>{value?.label}</span>
                <button
                    className={styles["clear-btn"]}
                    onClick={(e) => {
                        e.stopPropagation();
                        clearOptions();
                    }}
                >
                    X
                </button>
                <div className={styles.divider}></div>
                <div className={styles.caret}></div>
                <ul
                    className={`${styles.options} ${isOpen ? styles.show : ""}`}
                >
                    {options.map((option) => (
                        <li
                            onClick={(e) => {
                                e.stopPropagation();
                                selectOption(option);
                                setIsOpen(false);
                            }}
                            key={option.label}
                            className={option.value}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Select;
