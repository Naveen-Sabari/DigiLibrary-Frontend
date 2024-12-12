import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-receipe',
  standalone: true,
  imports: [RouterModule,CommonModule,HeaderComponent,FooterComponent],
  templateUrl: './receipe.component.html',
  styleUrl: './receipe.component.css'
})
export class ReceipeComponent {

  
  
  
 

  


  recipes = [
    {
      id: 1,
      name: "Spaghetti Carbonara with Garam Masala",
      description: "A creamy pasta with a touch of Indian garam masala.",
      image: "../../../../assets/imgg/food1.avif",
      fullDescription: "Cook the spaghetti in salted boiling water according to package instructions until al dente, then drain and set aside. In a large pan, cook pancetta or bacon pieces over medium heat until crispy. In a bowl, whisk together eggs, grated parmesan cheese, and garam masala until smooth. Once the pancetta is cooked, add the hot pasta to the pan and stir quickly to prevent the eggs from scrambling. Pour the egg mixture into the pasta and toss vigorously until the pasta is well coated and creamy. Season with freshly cracked black pepper and serve hot with extra parmesan on top.",
      ingredients: ["Spaghetti", "Eggs", "Parmesan", "Pancetta", "Garam Masala", "Black Pepper"]
    },
    {
      id: 2,
      name: "Chicken Tikka Masala Pizza",
      description: "A pizza topped with chicken tikka and masala sauce.",
      image: "../../../../assets/imgg/food2.jpg",
      fullDescription: "Preheat the oven to 475°F (245°C) and roll out the pizza dough on a floured surface, shaping it into a round pizza base. Spread a thin layer of chicken tikka masala sauce over the dough, leaving a small border for the crust. Arrange cooked chicken tikka pieces evenly over the sauce. Sprinkle a generous amount of shredded mozzarella cheese on top, making sure to cover the chicken evenly. Bake the pizza for about 12-15 minutes, or until the crust is golden and crispy and the cheese is bubbling and melted. Once done, remove the pizza from the oven, sprinkle with fresh cilantro, and serve with a side of cool raita.",
      ingredients: ["Pizza Dough", "Chicken", "Tikka Masala Sauce", "Mozzarella", "Cilantro", "Raita"]
    },
    {
      id: 3,
      name: "Sushi with Mango Chutney",
      description: "Sushi rolls served with tangy mango chutney.",
      image: "../../../../assets/imgg/food3.jpg",
      fullDescription: "Begin by rinsing sushi rice thoroughly under cold water until the water runs clear. Then cook the rice according to the package instructions and let it cool to room temperature. Lay a sheet of nori on a bamboo sushi mat, shiny side down, and spread a thin, even layer of sushi rice over the nori, leaving about 1 inch at the top. Add thin strips of cucumber and fresh salmon in the center of the rice. Carefully roll the sushi tightly using the bamboo mat, making sure the ingredients are secure inside. Slice the roll into bite-sized pieces using a sharp knife. Serve the sushi rolls with a small bowl of mango chutney for dipping, enjoying the sweet and spicy fusion.",
      ingredients: ["Sushi Rice", "Nori Sheets", "Salmon", "Cucumber", "Mango Chutney"]
    },
    {
      id: 4,
      name: "Butter Chicken Mac & Cheese",
      description: "A fusion of butter chicken and creamy mac and cheese.",
      image: "../../../../assets/imgg/food4.jpg",
      fullDescription: "Start by cooking macaroni according to the package instructions, then drain and set aside. In a separate saucepan, melt butter over medium heat and add heavy cream, stirring to create a rich, creamy sauce. Gradually stir in grated cheddar cheese until melted and smooth. In another pan, cook pieces of butter chicken until browned and heated through. Once everything is ready, combine the cooked macaroni with the cheese sauce, ensuring it's evenly coated. Gently fold in the butter chicken pieces, allowing the flavors to mix. Transfer the mixture into a baking dish, top with breadcrumbs for a crispy finish, and bake at 375°F (190°C) for 15-20 minutes, until the top is golden brown and bubbling. Serve immediately for the ultimate comfort dish.",
      ingredients: ["Macaroni", "Cheddar Cheese", "Butter Chicken", "Cream", "Breadcrumbs"]
    },
    {
      id: 5,
      name: "Falafel Biryani",
      description: "A mix of crispy falafel with spiced biryani rice.",
      image: "../../../../assets/imgg/food5.jpg",
      fullDescription: "Rinse the basmati rice under cold water and cook with aromatic biryani spices such as cumin, cardamom, and cloves until the rice is fully cooked. While the rice is cooking, prepare the falafel by blending soaked chickpeas, onions, garlic, parsley, and spices like cumin and coriander in a food processor. Roll the mixture into small balls and fry in hot oil until golden and crispy. Once the rice and falafel are ready, layer the cooked biryani rice in a serving dish and top with the crispy falafel. Garnish with fried onions, fresh cilantro, and a side of raita for an added touch of freshness.",
      ingredients: ["Basmati Rice", "Falafel", "Biryani Spices", "Onions", "Raita"]
    },
    {
      id: 6,
      name: "Paneer Quesadilla",
      description: "A quesadilla with spicy paneer filling.",
      image: "../../../../assets/imgg/food6.webp",
      fullDescription: "Cube paneer and sauté it with onions, bell peppers, and spices such as garam masala and cumin until the vegetables are tender and the paneer is golden brown. Heat flour tortillas on a skillet until warm, then place a generous amount of the cooked paneer mixture in the center of each tortilla. Sprinkle shredded cheese on top, then fold the tortilla in half. Cook the quesadilla on both sides until golden brown and crispy, and the cheese is melted. Serve with a side of salsa and sour cream for dipping.",
      ingredients: ["Flour Tortillas", "Paneer", "Bell Peppers", "Onions", "Cheese", "Coriander"]
    },
    {
      id: 7,
      name: "Lamb Kofta Burger",
      description: "Lamb kofta patties served as a burger with yogurt sauce.",
      image: "../../../../assets/imgg/food7.jpeg",
      fullDescription: "Combine ground lamb with cumin, coriander, finely chopped onions, garlic, and parsley to form a flavorful mixture. Shape the mixture into small patties and grill or pan-fry them until golden and cooked through. Toast the burger buns and place the cooked lamb kofta patties inside the buns. Top with cool cucumber raita, fresh lettuce, and any additional toppings of your choice. Serve the burgers with a side of fries or a light salad.",
      ingredients: ["Ground Lamb", "Cumin", "Coriander", "Yogurt", "Buns", "Lettuce"]
    },
    {
      id: 8,
      name: "Samosa Spring Rolls",
      description: "Crispy spring rolls filled with spiced potato and peas.",
      image: "../../../../assets/imgg/food8.jpg",
      fullDescription: "Boil potatoes until soft, then mash them and set aside. In a separate pan, sauté onions, peas, and carrots with cumin, coriander, and turmeric until the vegetables are tender and fragrant. Mix the spiced vegetables with the mashed potatoes, and season to taste with salt. Lay out spring roll wrappers and spoon the mixture onto each one, then roll them tightly. Heat oil in a deep pan and fry the spring rolls until they turn golden brown and crispy. Serve with tangy tamarind chutney or mint chutney for dipping.",
      ingredients: ["Spring Roll Wrappers", "Potatoes", "Peas", "Carrots", "Cumin", "Tamarind Chutney"]
    },
    {
      id: 9,
      name: "Biryani Tacos",
      description: "Biryani rice served in taco shells with raita.",
      image: "../../../../assets/imgg/food9.jpeg",
      fullDescription: "Warm the taco shells in the oven or on a skillet until slightly crispy. Cook the biryani rice with spices like cinnamon, cumin, and cardamom until fully cooked and fragrant. Once the taco shells are ready, fill each one with a generous scoop of biryani rice. Top with fresh raita, cilantro, and a squeeze of lime for a fresh and tangy twist. Serve immediately as a fusion street food dish, perfect for a quick snack or light meal.",
      ingredients: ["Taco Shells", "Biryani Rice", "Raita", "Cilantro", "Lime"]
    },
    {
      id: 10,
      name: "Tandoori Chicken Burrito",
      description: "A burrito filled with tandoori chicken and rice.",
      image: "../../../../assets/imgg/food10.jpg",
      fullDescription: "Marinate the chicken in tandoori spices, yogurt, garlic, and ginger for at least 2 hours. Grill the marinated chicken until cooked through and slightly charred on the outside. Warm tortillas on a skillet and layer with a scoop of basmati rice, followed by the grilled tandoori chicken. Add fresh lettuce and drizzle with yogurt sauce before wrapping the tortilla tightly. Serve the burrito with extra yogurt sauce or raita on the side.",
      ingredients: ["Chicken", "Tandoori Marinade", "Tortillas", "Rice", "Lettuce", "Yogurt Sauce"]
    },
    {
      id: 11,
      name: "Masala Chai Latte",
      description: "A warm, spiced tea latte made with Indian masala chai spices.",
      image: "../../../../assets/imgg/food11.jpg",
      fullDescription: "Brew black tea leaves with a mix of masala chai spices like cinnamon, cardamom, cloves, and ginger in boiling water. Once the tea is brewed, add steamed milk and sweeten with sugar or honey to taste. Stir and serve in a warm cup, enjoying the aromatic flavors of the spiced tea blended with creamy milk.",
      ingredients: ["Black Tea", "Cinnamon", "Cardamom", "Ginger", "Milk", "Sugar"]
    },
    {
      id: 12,
      name: "Sushi Burrito with Raita",
      description: "A sushi burrito wrapped in nori with fresh fish and served with raita.",
      image: "../../../../assets/imgg/food12.jpeg",
      fullDescription: "Prepare sushi rice by cooking and seasoning it with rice vinegar, sugar, and salt. Lay out a large sheet of nori on a flat surface and spread a thin layer of rice across the sheet. Add slices of fresh avocado, cucumber, and your choice of fish (salmon, tuna, etc.) in the center of the rice. Roll the nori tightly into a burrito shape using a bamboo mat. Serve with a side of cool, refreshing raita for dipping.",
      ingredients: ["Nori", "Sushi Rice", "Avocado", "Cucumber", "Fish", "Raita"]
    },
    {
      id: 13,
      name: "Chana Masala Tacos",
      description: "A fusion of chickpea curry in soft taco shells.",
      image: "../../../../assets/imgg/food13.jpg",
      fullDescription: "Cook chickpeas with onions, tomatoes, garlic, ginger, and a mix of spices like cumin, coriander, and garam masala until the chickpeas are tender and the sauce has thickened. Warm soft taco shells and fill each one with the chana masala. Top with fresh onions, cilantro, and a dollop of yogurt for a flavorful, spicy fusion dish.",
      ingredients: ["Chickpeas", "Onions", "Cilantro", "Yogurt", "Taco Shells", "Chana Masala Spices"]
    },
    {
      id: 14,
      name: "Palak Paneer Pasta",
      description: "Creamy pasta with spinach and paneer.",
      image: "../../../../assets/imgg/food14.jpg",
      fullDescription: "Cook pasta according to package instructions. In a separate pan, sauté spinach with garlic and a touch of cumin until wilted. Blend the cooked spinach into a creamy sauce with some cream and seasonings. Cube the paneer and fry until golden brown. Toss the cooked pasta with the creamy spinach sauce, then add the fried paneer cubes on top. Garnish with a squeeze of lime and serve warm.",
      ingredients: ["Pasta", "Spinach", "Paneer", "Cream", "Lime"]
    },
    {
      id: 15,
      name: "Methi Thepla Quesadilla",
      description: "Indian methi thepla flatbreads stuffed with cheese.",
      image: "../../../../assets/imgg/food15.jpg",
      fullDescription: "Prepare methi thepla dough by mixing whole wheat flour, fenugreek leaves, spices, and water. Roll out into thin flatbreads and cook on a hot griddle until both sides are golden. Stuff each thepla with melted cheese and grill until crispy and golden brown. Serve with salsa and sour cream for dipping.",
      ingredients: ["Methi Thepla", "Cheese", "Salsa", "Sour Cream"]
    },
    {
      id: 16,
      name: "Keema Empanadas",
      description: "Spicy minced meat-filled empanadas.",
      image: "../../../../assets/imgg/food16.jpg",
      fullDescription: "Prepare keema curry by cooking minced meat with onions, garlic, tomatoes, and spices like cumin, garam masala, and coriander. Roll out empanada dough and cut into circles. Spoon the keema filling into the center of each dough circle and fold into a half-moon shape, sealing the edges. Bake or fry until golden and crispy.",
      ingredients: ["Minced Meat", "Keema Curry Spices", "Empanada Dough", "Cilantro"]
    },
    {
      id: 17,
      name: "Aloo Gobi Frittata",
      description: "A spiced egg frittata with potatoes and cauliflower.",
      image: "../../../../assets/imgg/food17.jpeg",
      fullDescription: "Cook spiced potatoes and cauliflower in a pan with cumin and garam masala until tender. Beat eggs and pour them over the cooked vegetables. Cook the frittata on low heat until the eggs are set, then transfer to the oven to finish cooking and brown the top. Serve warm.",
      ingredients: ["Eggs", "Potatoes", "Cauliflower", "Garam Masala", "Onions"]
    },
    {
      id: 18,
      name: "Naan-Wich",
      description: "A naan sandwich with tandoori chicken and veggies.",
      image: "../../../../assets/imgg/food18.jpeg",
      fullDescription: "Grill tandoori-marinated chicken until cooked through and slightly charred. Warm naan bread and stuff with the grilled chicken, fresh lettuce, cucumber, and a drizzle of yogurt sauce. Serve as a fusion-style sandwich, perfect for a quick meal.",
      ingredients: ["Naan", "Tandoori Chicken", "Lettuce", "Cucumber", "Yogurt Sauce"]
    }
  ];
  
  
    
    
    selectedRecipe: any;
    preview: any = null; // New preview property
    
    constructor() { }
  
    ngOnInit(): void { }
  
    selectRecipe(id: number): void {
      this.selectedRecipe = this.recipes.find(recipe => recipe.id === id);
    }
  
    closeRecipe(): void {
      this.selectedRecipe = null;
    }
  
    previewRecipe(recipe: any): void {
      this.preview = recipe;
    }
  
    clearPreview(): void {
      this.preview = null;
    }
  }
  