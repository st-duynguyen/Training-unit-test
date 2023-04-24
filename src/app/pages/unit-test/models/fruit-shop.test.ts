import FruitShop from './fruit-shop';

describe('Test Fruit Shop Class', () => {
  const data = new FruitShop([
    {
      id: 1,
      name: 'Apple',
      price: 10000,
      amount: 2,
      discount: [
        { quantity: 1, discountPercent: 5 },
        { quantity: 2, discountPercent: 10 }
      ]
    },
    {
      id: 2,
      name: 'Banana',
      price: 5000,
      amount: 4,
      discount: [
        { quantity: 2, discountPercent: 10 },
        { quantity: 4, discountPercent: 20 }
      ]
    }
  ],
  );

  describe('Add to Cart', () => {
    it('Add array null to cart', () => {
      data.addToCart(null);
      expect(data.carts?.products).toHaveLength(0);
    });

    it('Add item when item already in cart', () => {
      data.addToCart(1);
      data.addToCart(1);
      expect(data.carts.products[0].amount).toEqual(3);
      expect(data.carts.products).toHaveLength(1);
    });

    it('Add item when item dont have in cart', () => {
      data.addToCart(1);
      expect(data.carts?.products).toHaveLength(1);
      data.addToCart(2);
      expect(data.carts?.products).toHaveLength(2);
      expect(data.carts.products[1].amount).toEqual(4);
      data.addToCart(2);
      expect(data.carts.products[1].amount).toEqual(5);
    });
  });

  describe('Remove Item From Cart', () => {
    it('Remove item when item have more 2 amount', () => {
      data.removeItemFromCart(1);
      expect(data.carts.products[0].amount).toEqual(3);
      expect(data.carts.products).toHaveLength(2);
    });

    it('Remove item when item have one amount', () => {
      data.removeItemFromCart(1);
      data.removeItemFromCart(1);
      expect(data.carts.products[0].amount).toEqual(1);
      data.removeItemFromCart(1);
      expect(data.carts.products).toHaveLength(1);
    });
  });

  describe('Get Total Payment', () => {
    it('get Total Payment after add item', () => {
      data.addToCart(1);
      expect(data.carts.total).toBe(29500);
    });
    it('get Total Payment after update item', () => {
      data.addToCart(1);
      expect(data.carts.total).toBe(38000);
    });
  });
});
