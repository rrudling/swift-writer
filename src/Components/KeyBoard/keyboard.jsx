import React from 'react';
import classes from './keyboard.module.scss';
import Key from './Key/Key';

const Keyboard = ({
    keys, 
    keyEnter, 
    keyLeave, 
    clearIndicators, 
    activeKey,
    updateTime,
    allKeysActive
}) => {

    const keyIsActive = (_key) => {
        if (_key.char === 'Space') {
            return activeKey === " ";
        } else {
            return activeKey === _key.char;
        }
    } 

    return (
        <div 
            className={classes.Keyboard}
            onMouseEnter = {clearIndicators}
        >
            {
                keys.map(keyRow => (
                    <div className={classes.row}>
                        {
                            keyRow.map(key => (
                                <Key 
                                    char = {key.char}
                                    shiftChar = {key.shiftChar} 
                                    altGrChar = {key.altChar}
                                    width = {key.width}
                                    finger = {key.finger}
                                    keyLeave = {keyLeave}
                                    keyEnter = {keyEnter}
                                    active = {keyIsActive(key)}
                                    updateTime = {updateTime}
                                    allKeysActive = {allKeysActive}
                                />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Keyboard;