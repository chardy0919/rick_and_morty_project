import {Outlet, Link} from "react-router-dom";
const NotFound = () => {
    return (  
        <>
            <h1>This url doesn't exist homie</h1> 
            <Link to ="/">Home</Link>
        </>
    )
}
export default NotFound;