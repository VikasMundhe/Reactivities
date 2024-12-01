import { FC } from "react";
import { Duck } from "./demo";

interface DuckItemProps {
    duck:Duck
    
}
 
const DuckItem: FC<DuckItemProps> = ({duck}:DuckItemProps) => {
    return (  
        <div key={duck.name}>
            <span>{duck.name}</span>
            <button className="ui primary button" onClick={()=>duck.makeSound('Quack')}> Make Sound</button>
          </div>

    );
}
 
export default DuckItem;