import Image from './assets/menu-image.jpg';

function createMenu(parent) {
    const heading = document.createElement('h1');
    heading.textContent = "Menu";
    const img = document.createElement('img');
    img.src = Image;
    img.style.width = "75%";
    img.style.height = "auto";

    heading.classList.add("heading");
    const menu = document.createElement('div');
    
    const groupStarters = document.createElement('div');
    const groupStartersHeading = document.createElement('h2');
    groupStarters.append(groupStartersHeading)
    groupStartersHeading.textContent = "Starters";
    const groupMains = document.createElement('div');
    const groupMainsHeading = document.createElement('h2');
    groupMains.append(groupMainsHeading)
    groupMainsHeading.textContent = "Mains";
    const groupDesserts = document.createElement('div');
    const groupDessertsHeading = document.createElement('h2');
    groupDesserts.append(groupDessertsHeading)
    groupDessertsHeading.textContent = "Desserts";
    const groupDrinks = document.createElement('div');
    const groupDrinksHeading = document.createElement('h2');
    groupDrinks.append(groupDrinksHeading)
    groupDrinksHeading.textContent = "Drinks";
    for (let i = 0; i < 4; i++) {
        const li = document.createElement('li');
        li.classList.add('menu-item');
        const name = document.createElement('span');
        const desc = document.createElement('span');
        let nameContent;
        let descContent;
        switch (i + 1) {
            case 1:
                [nameContent, descContent] = ("Cullen Skink - A creamy Scottish soup with smoked haddock, potatoes, and onions.").split(" -").join(":$").split("$");
                break;
            case 2:
                [nameContent, descContent] = ("Haggis Bon Bons - Deep fried haggis balls served with a whisky cream sauce.").split(" -").join(":$").split("$");
                break;
            case 3:
                [nameContent, descContent] = ("Scottish Smoked Salmon Platter - Locally sourced smoked salmon served with capers, red onions, and homemade oatcakes.").split(" -").join(":$").split("$");
                break;
            case 4:
                [nameContent, descContent] = ("Cock a Leekie Soup - A traditional Scottish soup made with chicken, leeks, and barley.").split(" -").join(":$").split("$");
        }
        name.textContent = nameContent;
        desc.textContent = descContent;
        li.append(name, desc)
        groupStarters.append(li);
    }
    for (let i = 0; i < 4; i++) {
        const li = document.createElement('li');
        li.classList.add('menu-item');
        const name = document.createElement('span');
        const desc = document.createElement('span');
        let nameContent;
        let descContent;
        switch (i + 1) {
            case 1:
                [nameContent, descContent] = ("Highland Beef Wellington - Prime Scottish beef fillet wrapped in puff pastry, served with buttery mash, seasonal vegetables, and a rich red wine jus.").split(" -").join(":$").split("$");
                break;
            case 2:
                [nameContent, descContent] = ("Loch Ness Salmon Fillet - Grilled Scottish salmon fillet served with a lemon dill sauce, roasted potatoes, and wilted greens.").split(" -").join(":$").split("$");
                break;
            case 3:
                [nameContent, descContent] = ("Vegetarian Haggis Neeps & Tatties - Vegetarian haggis served with mashed turnips, potatoes, and a whisky cream sauce.").split(" -").join(":$").split("$");
                break;
            case 4:
                [nameContent, descContent] = ("Aberdeen Angus Burger - Juicy Aberdeen Angus beef burger served with caramelized onions, melted cheddar cheese, lettuce, tomato, and hand-cut chips.").split(" -").join(":$").split("$");
        }
        name.textContent = nameContent;
        desc.textContent = descContent;
        li.append(name, desc)
        groupMains.append(li);
    }
    
    // Desserts
    for (let i = 0; i < 4; i++) {
        const li = document.createElement('li');
        li.classList.add('menu-item');
        const name = document.createElement('span');
        const desc = document.createElement('span');
        let nameContent;
        let descContent;
        switch (i + 1) {
            case 1:
                [nameContent, descContent] = ("Cranachan - A traditional Scottish dessert made with whipped cream, raspberries, toasted oats, and Scottish heather honey.").split(" -").join(":$").split("$");
                break;
            case 2:
                [nameContent, descContent] = ("Sticky Toffee Pudding - Moist sponge cake made with dates, covered in a rich toffee sauce, served with vanilla ice cream.").split(" -").join(":$").split("$");
                break;
            case 3:
                [nameContent, descContent] = ("Edinburgh Gin & Raspberry Cranachan Cheesecake - Creamy cheesecake infused with Edinburgh Gin and raspberries, topped with cranachan and a raspberry coulis.").split(" -").join(":$").split("$");
                break;
            case 4:
                [nameContent, descContent] = ("Scottish Tablet - Homemade Scottish tablet made with sugar, butter, and condensed milk, served with a drizzle of caramel sauce.").split(" -").join(":$").split("$");
        }
        name.textContent = nameContent;
        desc.textContent = descContent;
        li.append(name, desc)
        groupDesserts.append(li);
    }
    
    // Drinks
    for (let i = 0; i < 4; i++) {
        const li = document.createElement('li');
        li.classList.add('menu-item');
        const name = document.createElement('span');
        const desc = document.createElement('span');
        let nameContent;
        let descContent;
        switch (i + 1) {
            case 1:
                [nameContent, descContent] = ("Single Malt Scotch Whiskies - Choose from a selection of single malt Scotch whiskies, each with its own unique flavor profile.").split(" -").join(":$").split("$");
                break;
            case 2:
                [nameContent, descContent] = ("Craft Beers - Explore our range of locally brewed craft beers, featuring traditional Scottish ales and modern IPA styles.").split(" -").join(":$").split("$");
                break;
            case 3:
                [nameContent, descContent] = ("Scottish Gins - Sample our collection of Scottish gins, served with premium tonic and garnishes.").split(" -").join(":$").split("$");
                break;
            case 4:
                [nameContent, descContent] = ("Non-Alcoholic Beverages - Enjoy a variety of non-alcoholic options including Scottish sparkling water, artisanal sodas, and fresh fruit juices.").split(" -").join(":$").split("$");
        }
        name.textContent = nameContent;
        desc.textContent = descContent;
        li.append(name, desc)
        groupDrinks.append(li);
    }
    menu.append(groupStarters, groupMains, groupDesserts, groupDrinks);
    parent.append(heading, img, menu);
}

export { createMenu };