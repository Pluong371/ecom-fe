import { useEffect, useState } from "react";

const Paginate = () => {
  // const [products, setProducts] = useState();
  const products = [
    {
      id: 1,
      name: "Eco-Friendly Notebook",
      category: "Stationery",
      price: 12.99,
      description: "Recycled paper notebook with a bamboo cover.",
    },
    {
      id: 2,
      name: "Wireless Charging Pad",
      category: "Electronics",
      price: 25.99,
      description: "Fast wireless charging for smartphones.",
    },
    {
      id: 3,
      name: "Yoga Mat",
      category: "Fitness",
      price: 29.99,
      description: "Non-slip, eco-friendly yoga mat.",
    },
    {
      id: 4,
      name: "Coffee Maker",
      category: "Home Appliances",
      price: 89.99,
      description: "Brew delicious coffee at home.",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 49.99,
      description: "Portable speaker with high-quality sound.",
    },
    {
      id: 6,
      name: "Smart Watch",
      category: "Wearables",
      price: 199.99,
      description: "Track your fitness and receive notifications.",
    },
    {
      id: 7,
      name: "LED Desk Lamp",
      category: "Furniture",
      price: 39.99,
      description: "Adjustable brightness and color temperature.",
    },
    {
      id: 8,
      name: "Insulated Water Bottle",
      category: "Outdoor",
      price: 24.99,
      description: "Keeps beverages hot or cold for hours.",
    },
    {
      id: 9,
      name: "Folding Bike",
      category: "Transport",
      price: 349.99,
      description: "Compact and portable bike for city commuting.",
    },
    {
      id: 10,
      name: "Pet Camera",
      category: "Pets",
      price: 79.99,
      description: "Monitor your pets from anywhere.",
    },
    {
      id: 11,
      name: "Gourmet Cooking Set",
      category: "Kitchen",
      price: 59.99,
      description: "Everything you need to cook like a chef.",
    },
    {
      id: 12,
      name: "Air Fryer",
      category: "Home Appliances",
      price: 99.99,
      description: "Fry your food with less oil.",
    },
    {
      id: 13,
      name: "Backpack Cooler",
      category: "Outdoor",
      price: 45.99,
      description: "Perfect for picnics and beach trips.",
    },
    {
      id: 14,
      name: "Travel Pillow",
      category: "Travel",
      price: 15.99,
      description: "Memory foam pillow for comfortable journeys.",
    },
    {
      id: 15,
      name: "Board Game Collection",
      category: "Games",
      price: 69.99,
      description: "Fun games for family nights.",
    },
    {
      id: 16,
      name: "Fitness Tracker",
      category: "Wearables",
      price: 59.99,
      description: "Monitor your workouts and health.",
    },
    {
      id: 17,
      name: "Outdoor Hammock",
      category: "Outdoor",
      price: 34.99,
      description: "Relax in your backyard or on the go.",
    },
    {
      id: 18,
      name: "Portable Blender",
      category: "Kitchen",
      price: 39.99,
      description: "Blend smoothies anywhere.",
    },
    {
      id: 19,
      name: "Wireless Earbuds",
      category: "Electronics",
      price: 79.99,
      description: "High-quality sound without the wires.",
    },
    {
      id: 20,
      name: "Personalized Mug",
      category: "Kitchen",
      price: 19.99,
      description: "Customizable ceramic mug.",
    },
    {
      id: 21,
      name: "UV Sterilizer Box",
      category: "Health",
      price: 49.99,
      description: "Sanitize your personal items safely.",
    },
    {
      id: 22,
      name: "Electric Kettle",
      category: "Home Appliances",
      price: 39.99,
      description: "Boil water in minutes.",
    },
    {
      id: 23,
      name: "Digital Camera",
      category: "Electronics",
      price: 499.99,
      description: "Capture high-quality images.",
    },
    {
      id: 24,
      name: "Smart Thermostat",
      category: "Home Automation",
      price: 199.99,
      description: "Control your home temperature remotely.",
    },
    {
      id: 25,
      name: "Scented Candles",
      category: "Home Decor",
      price: 14.99,
      description: "Create a calming atmosphere.",
    },
    {
      id: 26,
      name: "Multi-Tool",
      category: "Outdoor",
      price: 29.99,
      description: "Versatile tool for outdoor adventures.",
    },
    {
      id: 27,
      name: "Vinyl Record Player",
      category: "Music",
      price: 149.99,
      description: "Experience music in a classic way.",
    },
    {
      id: 28,
      name: "Wireless Router",
      category: "Electronics",
      price: 79.99,
      description: "High-speed internet for your home.",
    },
    {
      id: 29,
      name: "House Plant Kit",
      category: "Gardening",
      price: 29.99,
      description: "Grow your own indoor plants.",
    },
    {
      id: 30,
      name: "Pet Grooming Kit",
      category: "Pets",
      price: 39.99,
      description: "Keep your furry friends looking great.",
    },
    {
      id: 31,
      name: "Memory Foam Mattress",
      category: "Furniture",
      price: 499.99,
      description: "Sleep in ultimate comfort.",
    },
    {
      id: 32,
      name: "Portable Fire Pit",
      category: "Outdoor",
      price: 99.99,
      description: "Perfect for camping and backyard gatherings.",
    },
    {
      id: 33,
      name: "Travel Backpack",
      category: "Travel",
      price: 69.99,
      description: "Durable and spacious for all your travel needs.",
    },
    {
      id: 34,
      name: "Cooking Thermometer",
      category: "Kitchen",
      price: 19.99,
      description: "Ensure your food is cooked perfectly.",
    },
    {
      id: 35,
      name: "Mini Projector",
      category: "Electronics",
      price: 129.99,
      description: "Project your favorite movies anywhere.",
    },
    {
      id: 36,
      name: "Electric Toothbrush",
      category: "Health",
      price: 39.99,
      description: "Superior cleaning for a bright smile.",
    },
    {
      id: 37,
      name: "Smart LED Bulbs",
      category: "Home Automation",
      price: 34.99,
      description: "Control your lighting with your phone.",
    },
    {
      id: 38,
      name: "Fishing Rod",
      category: "Outdoor",
      price: 49.99,
      description: "Lightweight and durable for all fishing adventures.",
    },
    {
      id: 39,
      name: "Sketching Set",
      category: "Art",
      price: 29.99,
      description: "Perfect for aspiring artists.",
    },
    {
      id: 40,
      name: "Instant Pot",
      category: "Kitchen",
      price: 89.99,
      description: "Multifunctional cooker for quick meals.",
    },
    {
      id: 41,
      name: "VR Headset",
      category: "Gaming",
      price: 299.99,
      description: "Experience immersive virtual reality.",
    },
    {
      id: 42,
      name: "Portable Battery Charger",
      category: "Electronics",
      price: 29.99,
      description: "Keep your devices powered on the go.",
    },
    {
      id: 43,
      name: "Custom Phone Case",
      category: "Accessories",
      price: 24.99,
      description: "Personalize your phone's look.",
    },
    {
      id: 44,
      name: "Electric Griddle",
      category: "Kitchen",
      price: 59.99,
      description: "Cook breakfast for the whole family.",
    },
    {
      id: 45,
      name: "Subscription Box",
      category: "Miscellaneous",
      price: 39.99,
      description: "Monthly delivery of curated items.",
    },
    {
      id: 46,
      name: "Leather Wallet",
      category: "Accessories",
      price: 49.99,
      description: "Stylish and functional wallet.",
    },
    {
      id: 47,
      name: "Ice Cream Maker",
      category: "Kitchen",
      price: 79.99,
      description: "Make delicious ice cream at home.",
    },
    {
      id: 48,
      name: "Smart Scale",
      category: "Health",
      price: 49.99,
      description: "Track your weight and BMI easily.",
    },
    {
      id: 49,
      name: "Herbal Tea Set",
      category: "Food & Beverage",
      price: 19.99,
      description: "Enjoy a cup of tea anytime.",
    },
    {
      id: 50,
      name: "Portable Espresso Maker",
      category: "Kitchen",
      price: 129.99,
      description: "Make your own espresso on the go.",
    },
  ];


  let totalProducts = products.length;
  let productPerPage = 10;
 
  let totalpage = totalProducts / productPerPage;
  let x = 0;
  console.log(products.slice(x, x + productPerPage));
  // const paginate = (pageNumber) => {
  //   let newProducts = products.slice(41, 50);
  //   console.log(newProducts);
  //   setProducts(newProducts);
  // };
  useEffect(() => {
    // paginate();
    // paginate(1);
    // paginate(2);
    // paginate(3);
    // paginate(4);
    // paginate(5);
  }, [products]);
  return (
    <div>
      {products.map((product) => {
        return (
          <div
            className="grid grid-cols-10 p-5 border-2 border-gray-300 rounded-lg"
            key={product.id}
          >
            <h1>{product.id}</h1>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Paginate;
