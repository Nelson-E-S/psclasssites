const recipeCard = {
    title: 'Pan de Jamon',
    servings: '4',
    ingredients: ['wheat flour','olive oil','ham','capers','bacon','caramel sauce']
};
console.log(recipeCard.title);
console.log(`Serves: ${recipeCard.servings}`);
console.log(`Ingredients:`);
for(ing of recipeCard.ingredients)
    console.log(ing);