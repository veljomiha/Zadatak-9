import { useParams } from "react-router";
import data from "./data.js";

const ProductDetails = () =>{
    const {id} = useParams();
    const {products} = data;
    return(
        <div className="product-single-page">
            <div className="psp-img-name-price">
                <img src={products[id-1].image} alt="" />
                <div className="psp-details">
                    <div className="psp-details1"><div className="psp-details11">Name</div> <div className="psp-details12">{products[id-1].name}</div></div>
                    <div className="psp-details1"><div className="psp-details11">Price</div> <div className="psp-details12">{products[id-1].price}€</div></div>
                    <div className="psp-details1"><div className="psp-details11">RAM Memory</div> <div className="psp-details12">{products[id-1].ram}</div></div>
                    <div className="psp-details1"><div className="psp-details11">Storage memory:</div> <div className="psp-details12">{products[id-1].memory}</div></div>
                    <div className="psp-details1"><div className="psp-details11">Battery:</div> <div className="psp-details12">{products[id-1].battery}</div></div>

                </div>
                
            </div>
            

        </div>
    )
}

export default ProductDetails;