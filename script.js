const menu = [
    {
        id:1,
        title:"Baked French Toast",
        category:"Breakfast",
        price:"$29.99",
        img:"https://www.allrecipes.com/thmb/VjVrkCVYaalH2JXogJMoFQ_a-zI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7016-french-toast-mfs-010-0e1007bf0b47433abe91f2f0c74e5a27.jpg",
        desc:"Enjoy the timeless comfort of our Classic Buttered Toast, a perfect start to any day. Our toast is made from fresh, artisanal bread slices, toasted to golden perfection and generously spread with creamy, rich butter. Crisp on the outside and soft on the inside, it’s the ideal companion to your favorite breakfast spread. Add a touch of jam, honey, or avocado for extra flavor, and experience the simple joy of a well-made toast."

       
    },
    {
        id:2,
        title:"Butter Milk Pancakes",
        category:"Breakfast",
        price:"$ 15.99",
        img:"https://www.allrecipes.com/thmb/Pn6CJYfILCBbnJgkkPfLWh-Aga0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45396-easy-pancakes-mfs-38-34bd7f71161446bfb69609fa46a301e4.jpg",
        desc:"Indulge in our irresistibly fluffy Buttermilk Pancakes, a breakfast classic that’s light, airy, and perfectly golden brown. Each stack is made from scratch with fresh buttermilk, giving them a tangy richness that melts in your mouth. Served with a generous pat of creamy butter and a drizzle of pure maple syrup, these pancakes are the perfect start to your day. Add fresh berries or a sprinkle of powdered sugar for an extra touch of sweetness."

       
    },
    {
        id:3,
        title:"Dinner Double",
        category:"Lunch",
        price:"$ 13.99",
        img:"https://hips.hearstapps.com/hmg-prod/images/dinner-ideas-for-two-chicken-teriyaki-65a9579b4d58c.jpeg?crop=1xw:1xh;center,top&resize=980:*",
        desc:"Savor the mouthwatering taste of our Grilled Lemon Herb Chicken, a perfect blend of tangy citrus and aromatic herbs. Each juicy chicken breast is marinated in a zesty mixture of lemon juice, garlic, rosemary, and thyme, then grilled to perfection. The result is a tender, flavorful dish that delights the palate with every bite. Served with a side of fresh vegetables and a light, refreshing lemon herb sauce."
        
       
    },
    {
        id:4,
        title:"Godzilla Milkshake",
        category:"Shakes",
        price:"$ 6.99",
        img:"https://sf1.mariefranceasia.com/wp-content/uploads/sites/7/2015/11/Robert-Timms-490x410.jpg",
        desc:"Unleash the colossal flavor of our Godzilla Milkshake! This epic treat is a towering blend of rich chocolate ice cream, creamy peanut butter, and a splash of banana for a monstrous taste explosion. Topped with whipped cream, chocolate drizzle, and a sprinkle of crunchy cookie crumbs, this milkshake is as legendary as its namesake. Perfect for those who crave a larger-than-life dessert experience!"
        
       
    },
    {
        id:5,
        title:"Oatmeal",
        category:"Breakfast",
        price:"$ 20.99",
        img:"https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&resize=556,505",
        desc:"Start your morning with a bowl of our Hearty Classic Oatmeal, a wholesome and comforting breakfast choice. Made with premium rolled oats simmered to creamy perfection, this oatmeal is both nourishing and delicious. Customize it with your choice of fresh fruits, nuts, honey, or a sprinkle of cinnamon for added flavor and texture. Whether you prefer it sweet or savory, our oatmeal is the perfect canvas for a healthy and satisfying meal."
        
       
    },
    {
        id:6,
        title:"Pasta",
        category:"Dinner",
        price:"$ 39.99",
        img:"https://assets.epicurious.com/photos/5e7b9c347b506d0008efe005/1:1/w_320%2Cc_limit/TunaCasserole_HERO_v2.jpg",
        desc:"Indulge in our Creamy Garlic Alfredo Pasta, a rich and satisfying dish that brings the flavors of Italy to your plate. Our al dente pasta is generously coated in a luxurious Alfredo sauce made from fresh cream, butter, and Parmesan cheese, with a hint of garlic for an extra burst of flavor. Topped with freshly grated Parmesan and a sprinkle of parsley, this dish is perfect for a comforting and delicious meal. Add grilled chicken or shrimp for an extra protein boost and a touch of elegance."
        
       
    },
    {
        id:7,
        title:"Vanilla Dream",
        category:"Shakes",
        price:"$ 10.9",
        img:"https://www.tastingtable.com/img/gallery/old-fashioned-vanilla-milkshake-recipe/l-intro-1669762595.jpg",
        desc:"Experience the timeless delight of our Classic Vanilla Milkshake. This creamy, dreamy treat is made with premium vanilla ice cream, blended to perfection with fresh milk for a smooth, velvety texture. Topped with a swirl of whipped cream and a cherry on top, it’s the ultimate indulgence for vanilla lovers. Perfectly refreshing and deliciously satisfying, our vanilla milkshake is a nostalgic favorite that never goes out of style."
        
       
    },
    {
        id:8,
        title:"Chicken Nugets",
        category:"Lunch",
        price:"$ 28.99",
        img:"https://static.toiimg.com/photo/83114901.cms",
        desc:"Enjoy our Crispy Chicken Nuggets, a delightful snack that's perfect for any time of day. Made from tender, juicy chicken breast, each nugget is coated in a crunchy, golden breading seasoned to perfection. Fried to a crisp, they are served hot and ready to dip into your favorite sauces like tangy barbecue, honey mustard, or classic ketchup. Perfect for kids and adults alike, these nuggets are sure to satisfy your craving for something deliciously crispy and savory."
        
       
    },
    {
        id:9,
        title:"biryani",
        category:"Dinner",
        price:"$ 16.9",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcEVMGpaqzfKQdWO7uw474tOCSUZRQ5PO0_w&s",
        desc:"ive into the vibrant flavors of our Authentic Chicken Biryani, a dish that captures the essence of Indian cuisine. This fragrant rice dish features tender, marinated chicken cooked with a blend of aromatic spices, including saffron, cardamom, and cloves, layered with perfectly steamed basmati rice. Garnished with fresh herbs, fried onions, and a sprinkle of cashews, each bite is an explosion of taste and texture. Served with a side of cooling raita and tangy pickle, our Chicken Biryani offers a truly satisfying and flavorful experience."
        
       
    },
    {
        id:10,
        title:"Chesse Salad Wrap",
        category:"Breakfast",
        price:"$ 30.99",
        img:"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Smitha-Kalluraya/Cheese_Salad_Wrap.jpg",
        desc:"Enjoy the vibrant flavors of our Cheese Salad Wraps, a perfect blend of freshness and creaminess. These wraps are filled with crisp lettuce, juicy tomatoes, crunchy cucumbers, and shredded carrots, all tossed in a light vinaigrette. Complemented by a generous helping of shredded cheddar cheese, these wraps are then encased in a soft, whole-wheat tortilla. Perfect for a healthy and delicious meal on the go, our Cheese Salad Wraps offer a delightful balance of textures and flavors."
        
       
    },
    {
        id:11,
        title:"Grilled Chicken Salad",
        category:"Lunch",
        price:"$ 40.99",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuS3G_4IgPLrBk74VtF2O928EJtUWyT4vsmQ&s",
        desc:"Treat yourself to our Grilled Chicken Salad, a hearty and healthy option packed with vibrant flavors. This salad features tender, marinated chicken breast, grilled to perfection and served atop a bed of crisp mixed greens. Complemented by juicy cherry tomatoes, crunchy cucumbers, sweet red onions, and creamy avocado slices, it’s finished with a sprinkle of crumbled feta cheese. Drizzled with your choice of our house-made dressings, each bite of this salad is a delicious blend of freshness and savory goodness."
        
       
    },
    {
        id:12,
        title:"Angara Kabab",
        category:"Dinner",
        price:"$ 20.9",
        img:"https://foodiesterminal.com/wp-content/uploads/2019/11/chicken-angara-kabab-2-679x1024.jpg",
        desc:"Experience the fiery flavors of our Angara Kabab, a dish that promises a tantalizing taste adventure. These succulent chicken pieces are marinated in a robust blend of yogurt, red chili, and an array of traditional Indian spices, then grilled to smoky perfection. Each kabab is juicy, tender, and packed with a delightful heat that lingers on your palate. Served with a side of fresh mint chutney and lemon wedges, our Angara Kabab is perfect for those who crave a spicy and flavorful treat."
        
       
    },
    {
        id:13,
        title:"Peanut Butter And Jelly Time ",
        category:"Shakes",
        price:"$ 17.4",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73bGbdzDLzgtT1jiRsBWrwjMhJtGPmQkefA&s",
        desc:"Get ready for a nostalgic treat with our Peanut Butter and Jelly Time Shake! This whimsical shake blends creamy peanut butter with sweet strawberry jelly and rich vanilla ice cream to create a perfectly balanced flavor explosion. Topped with whipped cream, a drizzle of peanut butter, and a sprinkle of crushed peanuts, it's the ultimate indulgence for PB&J lovers. Sip on this deliciously fun shake and take a delightful trip down memory lane!"
        
       
    },
    {
        id:14,
        title:"Coffee Banana Shake ",
        category:"Shakes",
        price:"$ 45.6",
        img:"https://falasteenifoodie.com/wp-content/uploads/2023/01/Coffee-Banana-Shake-534x800.jpeg",
        desc:"Experience the perfect fusion of flavors with our Coffee Banana Shake, a delightful blend of rich coffee and sweet banana. This creamy shake combines freshly brewed coffee with ripe bananas and velvety vanilla ice cream, creating a smooth and refreshing drink. Topped with a dollop of whipped cream and a dusting of cocoa powder, it’s the ideal treat for coffee enthusiasts and fruit lovers alike. Enjoy this energizing and delicious shake any time of day!"
        
       
    },  {
        id:15,
        title:"Beef Burger",
        category:"Dinner",
        price:"$ 50.6",
        img:"https://www.certifiedirishangus.ie/wp-content/uploads/2019/11/TheUltimateBurgerwBacon_RecipePic.jpg",
        desc:"Sink your teeth into our Classic Beef Burger, a true masterpiece of flavor and craftsmanship. This juicy, perfectly grilled beef patty is seasoned to perfection and served on a toasted brioche bun. Topped with crisp lettuce, ripe tomatoes, tangy pickles, and melted cheddar cheese, it’s finished with a generous dollop of our house-made burger sauce. Served with a side of golden fries, this burger is a timeless favorite that delivers satisfaction with every bite."
        
       
    },
    {
        id:16,
        title:"Macrons",
        category:"Breakfast",
        price:"$ 10.6",
        img:"https://www.shutterstock.com/image-photo/sweet-colorful-macrons-natural-light-600nw-2164468719.jpg",
        desc:"Indulge in the delicate elegance of our French Macarons, a symphony of flavor and texture in every bite. These exquisite treats feature a crisp, airy shell and a soft, chewy interior, made from finely ground almonds and meringue. Each macaron is filled with a luscious ganache, buttercream, or fruit preserve, available in a variety of vibrant flavors such as raspberry, pistachio, vanilla, and chocolate. Perfect for a sophisticated treat or a delightful gift, our macarons are a luxurious experience for the senses."
        
       
    },
    {
        id:17,
        title:"Margherita Flatbread",
        category:"Lunch",
        price:"$ 50.3",
        img:"https://cdn.momsdish.com/wp-content/uploads/2021/08/5-Minute-Margherita-Flatbread-Pizza-08.jpg",
        desc:"Savor the simplicity of our Margherita Flatbread, a classic Italian favorite reimagined. Our crisp flatbread is adorned with ripe tomato slices, fresh mozzarella cheese, and fragrant basil leaves, reminiscent of the colors of the Italian flag. Baked to perfection, it's finished with a drizzle of extra virgin olive oil and a sprinkle of sea salt, ensuring each bite bursts with flavor. Delight in the harmonious combination of quality ingredients and artisanal craftsmanship that make this flatbread a timeless delight."
        
       
    }
    ,
    {
        id:18,
        title:"Spicy Tuna Sushi Roll",
        category:"Dinner",
        price:"$ 80.99",
        img:"https://twomarketgirls.com/wp-content/uploads/2019/03/IMG_0018-scaled.jpg",
        desc:"Embark on a culinary journey with our Spicy Tuna Sushi Roll, a tantalizing blend of flavors and textures. Inside, tender pieces of sushi-grade tuna are delicately mixed with spicy mayo, providing a fiery kick that ignites the palate. Wrapped in seasoned sushi rice and crisp seaweed, each roll is topped with creamy avocado slices for a buttery contrast. Finished with a sprinkle of sesame seeds and served with soy sauce and pickled ginger, this roll is a symphony of taste and tradition, perfect for sushi enthusiasts and novices alike."
        
       
    },
    
    {
        id:19,
        title:"Shrimp Tacos",
        category:"Lunch",
        price:"$ 60.9",
        img:"https://www.twopeasandtheirpod.com/wp-content/uploads/2020/06/Shrimp-Tacos-1.jpg",
        desc:"Transport your taste buds to the sunny shores of Mexico with our Shrimp Tacos, a zesty and flavorful delight. Plump, juicy shrimp, seasoned with a blend of spices and grilled to perfection, are nestled in warm, soft corn tortillas. Topped with crunchy cabbage slaw, creamy avocado slices, and a zesty lime crema, each taco bursts with freshness and flavor. Served with a side of tangy salsa and lime wedges, these tacos are a fiesta for your senses, perfect for a quick lunch or a festive dinner."
        
       
    }

    ,
    
    {
        id:20,
        title:"Nutella Shake",
        category:"Shakes",
        price:"$ 9.9",
        img:"https://saltandbaker.com/wp-content/uploads/2022/05/Nutella-milkshake-recipe.jpg",
        desc:"Indulge in pure bliss with our Decadent Nutella Shake, a heavenly concoction of creamy delight. This luscious shake combines velvety Nutella spread with rich vanilla ice cream and a splash of milk, blended to creamy perfection. Topped with a generous dollop of whipped cream and a sprinkle of crushed hazelnuts, each sip is a journey into sweetness. Whether you crave a luxurious treat or a comforting pick-me-up, our Nutella Shake is sure to satisfy your sweet tooth and leave you craving for more.Feel free to adjust the description to match your specific ingredients and presentation style!"
        
       
    }

]

const sectionCentre = document.querySelector(".section-centre");
const filterbtn = document.querySelectorAll(".filter-btn");

filterbtn.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(itme){
            if(itme.category === category){
                return itme
            }
        });
        if(category == "all"){
            displaymeuItems(menu)
        }else{
            displaymeuItems(menuCategory)
        }

    })
    
});

window.addEventListener("DOMContentLoaded",function(){
    displaymeuItems(menu)
})

function displaymeuItems(items){
    
    let displayMenu = items.map(function(item){
        return `  <article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title}>
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
    
                </header>
                ${item.desc}
            </div>
    
         </article>`
    })
    displayMenu = displayMenu.join("")
    sectionCentre.innerHTML = displayMenu
}