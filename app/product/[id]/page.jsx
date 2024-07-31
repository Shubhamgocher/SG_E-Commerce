import { singleProduct } from "@/constant/singleproduct";
import ProductDetailedCard from "@/components/products/ProductDetailedCard";
import { Container } from "@/components";

const Product = ({ params }) => {
  return (
    <div className="p-8">
      <Container>
        <ProductDetailedCard singleProduct={singleProduct} />
      </Container>
    </div>
  );
};

export default Product;
