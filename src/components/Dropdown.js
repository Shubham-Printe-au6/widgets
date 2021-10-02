import React, {useState, useEffect, useRef} from "react";

const Dropdown = ({options, selected, onSelectedChange, label}) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {

        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick, {capture: true});

        // clean-up function to remove added eventlistener
        return() => {
            document.body.removeEventListener('click', onBodyClick, {capture: true})
        };

    }, []);

    const renderedOptions = options.map((option) => {

        if(selected.value===option.value){
            return null;
        }            

        return ( 
            <div 
            key = {option.value} 
            className="item" 
            onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    });

    return ( 
        <div ref={ref} className='ui form segment'>
            <div className='field'>
                <label className='label'>{label}</label>
                <div 
                onClick={() => setOpen(!open)} 
                className={`ui selection dropdown ${open?'visible active':null}`}
                >
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open?'menu visible transition':null}`}>
                        {renderedOptions}
                    </div>
                </div>
                {/* <p style={{color:selected.value}}>This text changes color based on dropdown menu.</p> */}
            </div>
        </div>
    )
};

export default Dropdown;