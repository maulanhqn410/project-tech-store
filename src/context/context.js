import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
import { items } from "./productData";
const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    sidebaOpen: false,
    cartOpen: false,
    links: linkData,
    socialData: socialData,
    carts: [],
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true,
    search: "",
    price: 0,
    min: 0,
    max: 0,
    company: "all",
    companyArray: [],
    shipping: false
  };
  componentDidMount() {
    this.setProducts(items);
  }
  // set products
  setProducts = products => {
    console.log(products)
    const storeProducts = products.map(item => {
      const id = item.sys.id;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });
    const featuredProducts = storeProducts.filter(
      item => item.featured === true
    );
    // filter maxprice
    const maxPrice = Math.max(...storeProducts.map(item => item.price));
    // company array
    let findArray=[]
    let companyArray = storeProducts.map(item => item.company);
    companyArray.forEach(item => {
      if(findArray.indexOf(item) === -1) {
        findArray.push(item)
      }
    })
    
    companyArray = ["all", ...findArray];

    this.setState(
      {
        storeProducts,
        filteredProducts: [...storeProducts],
        featuredProducts,
        carts: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: false,
        max: maxPrice,
        price: maxPrice,
        companyArray
      },
      () => {
        this.addTotals();
      }
    );
  };

  //get cart from local storage
  getStorageCart = () => {
    let carts;
    if (localStorage.getItem("carts")) {
      carts = JSON.parse(localStorage.getItem("carts"));
    } else {
      carts = [];
    }
    return carts;
  };
  //get Product from local storage
  getStorageProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };
  //get totals
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.carts.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.2;
    tax = parseFloat(tax.toFixed(2));
    let total = tax + subTotal;

    return {
      total,
      subTotal,
      tax,
      cartItems
    };
  };

  addTotals = () => {
    const total = this.getTotals();
    this.setState({
      cartItems: total.cartItems,
      cartSubTotal: total.subTotal,
      cartTax: total.tax,
      cartTotal: total.total
    });
  };
  //sync storage
  syncStorage = () => {
    localStorage.setItem("carts", JSON.stringify(this.state.carts));
  };
  //handle siderbar
  handleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  };
  //handle cart
  handleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    });
  };
  // open cart
  openCart = () => {
    this.setState({
      cartOpen: true
    });
  };
  // close cart
  closeCart = () => {
    this.setState({
      cartOpen: false
    });
  };
  // add to cart
  addToCart = id => {
    let tempCart = [...this.state.carts];
    let tempProduct = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);
    if (!tempItem) {
      tempItem = tempProduct.find(item => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.count * tempItem.price;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }

    this.setState(
      {
        carts: tempCart
      },
      () => {
        this.openCart();
        this.addTotals();
        this.syncStorage();
      }
    );
  };
  //set singleproduct
  setSingleProduct = id => {
    let product = this.state.storeProducts.find(item => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState({
      singleProduct: product,
      loading: false
    });
  };
  //cart function
  // increment
  increment = id => {
    const clone = [...this.state.carts];
    const itemFilter = clone.find(item => item.id === id);
    console.log(itemFilter);
    itemFilter.count++;
    itemFilter.total = itemFilter.count * itemFilter.price;
    const index = clone.findIndex(item => item.id === id);
    clone[index] = itemFilter;
    console.log(clone);
    this.setState(
      {
        carts: [...clone]
      },
      () => {
        this.syncStorage();
        this.addTotals();
      }
    );
  };
  // decrement
  decrement = id => {
    const clone = [...this.state.carts];
    const itemFilter = clone.find(item => item.id === id);
    const index = clone.findIndex(item => item.id === id);
    if (itemFilter.count > 1) {
      itemFilter.count--;
      itemFilter.total = itemFilter.count * itemFilter.price;
      clone[index] = itemFilter;
      this.setState(
        {
          carts: [...clone]
        },
        () => {
          this.syncStorage();
          this.addTotals();
        }
      );
    } else {
      this.removeItem(id);
    }
  };
  // removeItem
  removeItem = id => {
    console.log(id);
    const remove = this.state.carts.filter(item => item.id !== id);
    console.log(remove);
    this.setState(
      {
        carts: [...remove]
      },
      () => {
        this.syncStorage();
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      {
        carts: []
      },
      () => {
        this.syncStorage();
        this.addTotals();
      }
    );
  };

  // filter data
  handleChange = e => {
    const target = e.target;
    const name = e.target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    console.log(name, value)
    this.setState(
      {
        [name]: value
      },
      () => this.sortData()
    );
  };

  sortData = () => {
    const {storeProducts, search, company, shipping, price} = this.state;
    let tempProduct = [...storeProducts];
    // filter search 
    let count = search.length;
    let searchProduct = tempProduct.filter(item =>{
      const value = item.title.slice(0, count);
      return value === search
    })
    tempProduct = [...searchProduct];
    //filter company
    
    if(company !== "all"){
      const companyProduct = tempProduct.filter(item => item.company === company);
      console.log(companyProduct);
      tempProduct = [...companyProduct];
    } else{
      tempProduct = [...tempProduct];
    }
    //filter shipping
    if(shipping){
      const shippingProduct = tempProduct.filter(item => item.shipping === true);
    tempProduct = [...shippingProduct];
    } else{
      tempProduct= [...tempProduct]
    }
    //filter price
    const priceProduct = tempProduct.filter(item => item.price <= price);
    tempProduct=[...priceProduct]
    this.setState({
      filteredProducts: tempProduct
    })

  };
    

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleCart: this.handleCart,
          handleSidebar: this.handleSidebar,
          openCart: this.openCart,
          closeCart: this.closeCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
