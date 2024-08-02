//import { singleProduct } from "@/constant/singleproduct";
import {products} from '../../../constant/product'
import ProductDetailedCard from "@/components/products/ProductDetailedCard";
import { Container } from "@/components";

const Product = ({ params }) => {
  const singleProduct=products.find((item)=>item.id===params.id)
  return (
    <div className="p-8">
      <Container>
        <ProductDetailedCard singleProduct={singleProduct} />
      </Container>
    </div>
  );
};

export default Product;
