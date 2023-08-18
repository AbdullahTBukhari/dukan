
import { useGetProductsQuery } from '../api/FakeStoreAPI';

const ProductsData = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const ini = data;
  return ini;
};

export default ProductsData;
