import { useEffect, useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "react-bootstrap";
import '../css/consumer.css'
const ConsumerPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetch(`https://dummyjson.com/products`, {
          signal: controller.signal,
        });
        const result = await data.json();
        setProducts(result.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
      setLoading(false);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row mb-2">
          {products.length > 0 &&
            products.map((product) => (
              <div key={product.id} className="col-md-4">
                <Card style={{ width: "18rem" }}>
                  <CardImg variant="top" src={product.thumbnail} />
                  <CardBody>
                    <CardTitle>{product.title}</CardTitle>
                    <CardText>Price: ${product.price}</CardText>
                  </CardBody>
                </Card>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ConsumerPage;
