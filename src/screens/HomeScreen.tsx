import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

import ProductView from '../components/ProductView';
import { Product, ProductListProps, ProductRootObject } from '../types';
import colors from '../constants/colors';
import { getProducts } from '../services';
import { LOAD_PRODUCTS_LIMIT } from '../constants';


const HomeScreen: React.FC<ProductListProps> = ({ tab }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchProducts = async () => {
    if (!isLoading) {
      setLoading(true);
      const response: ProductRootObject | null = await getProducts(currentPage) //:- Call products API with page number
      if (response) {
        setProducts((prev) => [...prev, ...response.products]);
        totalItems !== response.total && setTotalItems(response.total);
      }
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (!isLoading && currentPage * LOAD_PRODUCTS_LIMIT < totalItems) {
      setCurrentPage((prev) => prev + 1)
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);


  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (<ProductView item={item} />)}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={isLoading ? <ActivityIndicator color={colors.GREY_TWO} /> : null}
    />
  )
};

export default HomeScreen;