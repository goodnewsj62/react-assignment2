


export default function CharComp({letter, pop, index}){
    const style = {display:"inline-block", textAlign:"center",margin:"16px",border:"1px solid black"};
    return (
        <div onClick={()=>{pop(index)}} style={style}>
            {letter}
        </div>
    );
}