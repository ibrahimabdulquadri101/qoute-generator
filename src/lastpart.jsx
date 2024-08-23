import {React} from "react"
import { FaTwitter } from "react-icons/fa"
import { PiFacebookLogoBold } from "react-icons/pi"
const Lastpart = ({getQoute,quote,author}) => {
    const tweetUrl = `https://twitter.com/intent/tweet?text="${encodeURIComponent(quote)}" - ${encodeURIComponent(author)}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(document.URL)}`;
    const iconStyle = {
        color: "#fffff", // Applying the desired color
    };
    return(
        <>
        <div className="last">
            <div className="social-media">
                <a  className="twitter1" 
                        href={tweetUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                <FaTwitter className="twitter" style={iconStyle}/>
                </a>
                <a
                    className="facebook1" 
                    href={facebookUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                <PiFacebookLogoBold className="facebook" style={iconStyle}/>
                </a>
            </div>
            <div className="new-qoute">
                <button className="newqoute" onClick={() =>{getQoute()}}>New qoute</button>
            </div>
        </div>
        </>
    )
}
 export default Lastpart