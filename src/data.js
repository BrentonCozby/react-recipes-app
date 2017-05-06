const defaultRecipes = [
    {
        title: 'Chocolate Chip Cookies',
        description: `Why Yo Mamma is so fat`,
        image: 'http://media.philly.com/images/chocolate-chip-cookie-app-600.jpg',
        ingredients: [
            '1 cup butter, softened',
            '1 cup white sugar',
            '1 cup packed brown sugar',
            '2 eggs',
            '2 teaspoons vanilla extract',
            '3 cups all-purpose flour',
            '1 teaspoon baking soda',
            '2 teaspoons hot water',
            '1/2 teaspoon salt',
            '2 cups semisweet chocolate chips',
            '1 cup chopped walnuts'
        ],
        instructions: [
            'Preheat oven to 350 degrees F (175 degrees C).',
            'Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.',
            'Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.'
        ],
        id: 1
    },
    {
        title: 'Medianoche',
        description: 'A Cuban sandwich with sweet bread',
        image: 'http://burgerbeast.com/wp-content/uploads/2014/05/Medianoche_ElCaribe.jpg',
        ingredients: [
            '4 sweet bread rolls',
            '1/2 cup mayonnaise',
            '1/4 cup prepared mustard',
            '1 pound thinly sliced cooked ham',
            '1 pound thinly sliced fully cooked pork',
            '1 pound sliced Swiss cheese',
            '1 cup dill pickle slices',
            '2 tablespoons butter, melted'
        ],
        instructions: [
            'Split the sandwich rolls in half, and spread mustard and mayonnaise liberally onto the cut sides. On each sandwich, place and equal amount of Swiss cheese, ham and pork in exactly that order. Place a few pickles onto each one, and put the top of the roll onto the sandwich. Brush the tops with melted butter.',
            'Press each sandwich in a sandwich press heated to medium-high heat. If a sandwich press is not available, use a large skillet over medium-high heat, and press the sandwiches down using a sturdy plate or skillet. Some indoor grills may be good for this also. Cook for 5 to 8 minutes, keeping sandwiches pressed. If using a skillet, you may want to flip them once for even browning. Slice diagonally and serve hot.'
        ],
        id: 2
    },
    {
        title: 'Oatmeal Pancakes',
        description: 'A great way to start the day.',
        image: 'http://images.media-allrecipes.com/userphotos/560x315/2887547.jpg',
        ingredients: [
            '2 cups buttermilk',
            '1 1/2 cups rolled oats',
            '1/2 cup all-purpose flour',
            '1/2 cup cornmeal',
            '2 teaspoons baking powder',
            '1 1/2 teaspoons white sugar',
            '1/2 teaspoon baking soda',
            '1/2 teaspoon salt',
            '2 eggs, beaten',
            '1/4 cup vegetable oil'
        ],
        instructions: [
            'Mix buttermilk and oats in a large bowl; allow to rest about 5 minutes. Stir flour, cornmeal, baking powder, sugar, baking soda, and salt into oat mixture. Add eggs and vegetable oil; mix until just combined.',
            'Heat a lightly oiled griddle over medium-high heat. Drop batter by large spoonfuls onto the griddle; cook until bubbles form and the edges are dry, about 3 minutes. Flip and cook until browned on the other side, about 3 minutes more. Repeat with remaining batter.'
        ],
        id: 3
    },
    {
        title: 'Naan',
        description: 'How many Indians can resist this delicious bread? Naan',
        image: 'https://arbuz.com/wp-content/uploads/2010/03/20100326-Cooking-1880-Edit.jpg',
        ingredients: [
            '1 (.25 ounce) package active dry yeast',
            '1 cup warm water',
            '1/4 cup white sugar',
            '3 tablespoons milk',
            '1 egg, beaten',
            '2 teaspoons salt',
            '4 1/2 cups bread flour',
            '2 teaspoons minced garlic (optional)',
            '1/4 cup butter, melted'
        ],
        instructions: [
            'In a large bowl, dissolve yeast in warm water. Let stand about 10 minutes, until frothy. Stir in sugar, milk, egg, salt, and enough flour to make a soft dough. Knead for 6 to 8 minutes on a lightly floured surface, or until smooth. Place dough in a well oiled bowl, cover with a damp cloth, and set aside to rise. Let it rise 1 hour, until the dough has doubled in volume.',
            'Punch down dough, and knead in garlic. Pinch off small handfuls of dough about the size of a golf ball. Roll into balls, and place on a tray. Cover with a towel, and allow to rise until doubled in size, about 30 minutes.',
            'During the second rising, preheat grill to high heat.',
            'At grill side, roll one ball of dough out into a thin circle. Lightly oil grill. Place dough on grill, and cook for 2 to 3 minutes, or until puffy and lightly browned. Brush uncooked side with butter, and turn over. Brush cooked side with butter, and cook until browned, another 2 to 4 minutes. Remove from grill, and continue the process until all the naan has been prepared.'
        ],
        id: 4
    },
    {
        title: 'Guacamole',
        description: 'A Canadian man walked up to a carnival game, looks at it a bit, and then asks, "...So all you gotta do is Guacamole?"',
        image: 'http://assets.simplyrecipes.com/wp-content/uploads/2014/05/guacamole-horiz-a-1600.jpg',
        ingredients: [
            '3 avocados - peeled, pitted, and mashed',
            '1 lime, juiced',
            '1 teaspoon salt',
            '1/2 cup diced onion',
            '3 tablespoons chopped fresh cilantro',
            '2 roma (plum) tomatoes, diced',
            '1 teaspoon minced garlic',
            '1 pinch ground cayenne pepper (optional)'
        ],
        instructions: [
            'In a medium bowl, mash together the avocados, lime juice, and salt. Mix in onion, cilantro, tomatoes, and garlic. Stir in cayenne pepper. Refrigerate 1 hour for best flavor, or serve immediately.'
        ],
        id: 5
    },
    {
        title: 'Nova Lox Bagel',
        description: 'For those of you like raw onions and fish in the morning',
        image: 'http://www.sandwichamerica.com/wp-content/uploads/2016/04/Nova-Lox-Sandwich-HHBagels7944_54_990x660.jpg',
        ingredients: [
            '4oz Nova lox smoked salmon',
            '1 Bagel',
            '1 tbsp Cream Cheese',
            '1 oz capers',
            '1 red onion, sliced in rings'
        ],
        instructions: [
            'Slide the onion into rings.',
            'Slice bagel in half',
            'Spread the cream cheese on the bagel',
            'Lay nova lox on top of cream cheese',
            'Place onions and capers on top'
        ],
        id: 6
    }
]

export { defaultRecipes }
