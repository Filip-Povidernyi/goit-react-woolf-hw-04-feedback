import React from "react";
import sectionStyles from './style.module.css'

export const Section = ({ title, children }) => {
    return (<div className={sectionStyles.wrap}>
        <div className={sectionStyles.title}>{title}</div>
        <div className={sectionStyles.title}>{children}</div>
        </div>
    )
}
