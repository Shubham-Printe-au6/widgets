import React, {useState} from "react";


const Accordion = ({items}) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };


    const renderedItems = items.map((item, index) => {

        // assigning value of a ternary operator to a variable;
        const active = index === activeIndex? 'active': '';

        return ( 
            <React.Fragment key = {item.title}>
                <div 
                className={`title ${active}`}
                onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        ) 
    })

    return( 
        <div className="ui styled accordion segment">
            <h1>Accordion</h1>
            {renderedItems}
        </div>
    )
};

export default Accordion;