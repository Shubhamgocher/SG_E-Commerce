import { Container, HomeBanner, ProducdCard } from "@/components";
import Image from "next/image";
import { products } from "@/constant/product";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div >
          <HomeBanner />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 my-5">
          {products.map((product)=>(
            <ProducdCard key={product.id} name={product.name} price={product.price} reviews={product.reviews} image={product.images[0].image} productId={product.id}/>

          ))}

        </div>
      </Container>
    </div>
  );
}
