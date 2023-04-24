interface DiscountAttributes {
  quantity: number,
  discountPercent: number
}
interface FruitAttributes {
  id: number,
  name: string,
  price: number,
  amount: number,
  discount: DiscountAttributes[]
}

interface CartAttributes {
  products: FruitAttributes[],
  total: any
}

export default class FruitShop {
  products: FruitAttributes[];
  carts: CartAttributes;

  constructor (product: FruitAttributes[]) {
    this.products = product;
    this.carts = {
      products: [],
      total: 0
    };
  }

  addToCart(itemId: number) {
    const productExisted = this.carts?.products?.find((cart) => cart.id === itemId);
    if (productExisted) {
      this.carts.products.find((cart) => cart.id === itemId).amount++;
    } else {
      if (itemId) {
        const newItemCart = this.products.find((product) => product.id === itemId);
        this.carts.products.push(newItemCart);
      }
    }
    this.carts.total = this.calculateTotal();
  }

  removeItemFromCart(itemId: number) {
    const productExisted = this.carts.products.find((cart) => cart.id === itemId);
    if (productExisted.amount >= 2) {
      this.carts.products.find((product) => product.id === itemId).amount--;
    } else {
      console.log('aaa', this.carts.products.filter((product) => product.id !== itemId))
      return this.carts.products = this.carts.products.filter((product) => product.id !== itemId);
    }
    this.carts.total = this.calculateTotal();
  }

  calculateTotal() {
    return this.products.reduce((sum, product: FruitAttributes) => {
      let discountMax = 0;
      product.discount.forEach((discount: DiscountAttributes) => {
        if (product.amount >= discount.quantity && discount.discountPercent > discountMax) {
          discountMax = discount.discountPercent;
        }
      });
      return sum + product.price * product.amount * (100 - discountMax) / 100;
    }, 0);
  }
}
