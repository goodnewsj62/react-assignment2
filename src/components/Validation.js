

export default function ValidationComp(props){
    if(props.len < 5){
        return (
            <div>
                lenght is too short
            </div>
        );
    }
    else{
        return (
            <div>
                lenght  long enough
            </div>
        )
    }
}