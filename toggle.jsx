import react, { useState } from "react";

function Toggle(){
    const [isOn , SetIson] = useState(false);
    return(
        <button onClick={() => SetIson(!isOn)}>{isOn? 'ON' : 'OFF'}</button>
    );
}
export default Toggle;