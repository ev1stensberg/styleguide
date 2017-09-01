import React from 'react';

function getTabClassNames(isSelected) {
    const classNames = ['funky-tabs__tab'];

    if (isSelected){
        classNames.push('funky-tabs__tab--selected');
    }

    return classNames.join(' ');
}

const FunkyTab = (props) => {
    const isSelected = (props.selectedTabIndex === props.tabIndex);
    return (
        <li className={getTabClassNames(isSelected)}
            id={"tab-" + props.tabIndex}
            onClick={props.onClick}
            aria-selected={isSelected}
            role="tab"
            aria-controls={"tab-panel-" + props.tabIndex}>
            <a href="#">
                <img className="funky-tabs__tab-image" src={props.tabIconPath} />
                <div className="funky-tabs__tab-text">
                    <span className="link">{props.tabText}</span>
                </div>
            </a>
        </li>
    );
}

export default FunkyTab;