const Operators = ({handleClick}) => {

const operatorButtons=["+","-","*","/","="]

    return ( 
        <div class="keyO">
        {operatorButtons.map((button)=>(
            <button onClick={handleClick} key={button}>{button}</button>
        ))}
        </div>
    );
}

export default Operators;