import { element } from "prop-types";
import {shimmer_card_unit} from "./utils/constants";
const CardShimmer = () =>{
    return (
        <div className="shimmer-card">
        <div className="shimmer-title storke animate"></div>
        <div className="shimmer-tags storke animate"></div>
        <div className="shimmer-details storke animate"></div>
        </div>
        )
};
const Shimmer = () =>{
    return(
        <div className="shimmer-conitaner">
            {new Array(shimmer_card_unit).fill(0).map((element,index) => { return <CardShimmer key = {index}/>
            })};
        </div>
    )
}
export default Shimmer;
    
