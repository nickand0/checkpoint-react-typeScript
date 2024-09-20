import React from 'react'; 

//definir le type de props
interface GreratingProps {
    name:string
}

//ajout et l'interface gretingprops le type de return
const Greeting:React.FC<GreratingProps> = ({ name }):JSX.Element => { 
        return <div>Hello, {name}!</div>;
    };
    
export default Greeting;