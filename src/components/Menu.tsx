interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const sampleMenu: MenuCategory[] = [
  {
    category: "Indian",
    items: [
      { name: "Butter Chicken", description: "Tender chicken in a creamy tomato sauce.", price: "₹550" },
      { name: "Paneer Tikka Masala", description: "Grilled cottage cheese in a spicy gravy.", price: "₹450" },
      { name: "Dal Makhani", description: "Creamy black lentils cooked overnight.", price: "₹350" },
    ],
  },
  {
    category: "Continental",
    items: [
      { name: "Grilled Salmon", description: "Served with asparagus and lemon butter sauce.", price: "₹850" },
      { name: "Mushroom Risotto", description: "Creamy Arborio rice with wild mushrooms.", price: "₹600" },
      { name: "Classic Caesar Salad", description: "Crisp romaine with parmesan, croutons, and Caesar dressing.", price: "₹400" },
    ],
  },
  {
    category: "Asian",
    items: [
      { name: "Thai Green Curry", description: "Spicy coconut curry with vegetables. Choice of chicken or tofu.", price: "₹500" },
      { name: "Pad Thai Noodles", description: "Stir-fried rice noodles with shrimp, tofu, and peanuts.", price: "₹480" },
      { name: "Sushi Platter", description: "Assortment of fresh nigiri and maki rolls.", price: "₹950" },
    ],
  },
];

interface MenuProps {
  cuisine: string[];
}

function Menu({ cuisine }: MenuProps) {
  const menuToDisplay = sampleMenu.filter(cat => cuisine.includes(cat.category));

  return (
    <section id="menu">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        <div className="menu-grid">
          {menuToDisplay.map((category) => (
            <div key={category.category} className="menu-category">
              <h3>{category.category}</h3>
              {category.items.map((item) => (
                <div key={item.name} className="menu-item">
                  <div className="menu-item-header">
                    <h4>{item.name}</h4>
                    <span className="price">{item.price}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;