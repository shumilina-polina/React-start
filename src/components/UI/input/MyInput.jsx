import React from "react";
import classes from "./MyInput.module.css";

const MyInput = React.forwardRef((props, ref) => {
    return <input ref={ref} className={classes.myInput} {...props} />;
});
// оборачивание компонента в forwardRef позволяет ссылаться на собственно созданный компонент используя useRef()
// Вторым параметром принимается сама ссылка, обозначить в какой блок ее передать(тут input)
export default MyInput;
