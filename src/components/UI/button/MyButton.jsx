import React from 'react'
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (//то что я помещу между тегами передастся как props.children и укажет, что это дочерний эл-т
        // получаем стиль для кнопок как свойство объекта classes
        <button {...props} className={classes.myBtn}>
            {children}
            
        </button>
    )
}

export default MyButton
