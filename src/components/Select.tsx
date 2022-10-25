import styles from "../select.module.css";

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
    return (
        <>
            <div tabIndex={0} className={styles.container}>
                <span className={styles.value}>Value</span>
                <button className={styles["clear-btn"]}>X</button>
                <div className={styles.divider}></div>
                <div className={styles.caret}></div>
                <ul className={`${styles.options} ${styles.show}`}>
                    {options.map((option) => (
                        <li key={option.label} className={option.value}>
                            {option.label}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Select;
