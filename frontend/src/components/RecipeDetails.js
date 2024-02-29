const RecipeDetails = ({recipe}) => {
    return(
        <div className="recipe-details">
            <h4>{recipe.name}</h4>
            <h2>{console.log(recipe.ingredients)}</h2>
            <p><strong>Ingredients</strong>
                {
                    recipe.ingredients && recipe.ingredients.map((ingredients) =>(
                        ingredients.map((ingredient) => (
                            <p>
                            {ingredient.ingredientName}
                            {" "}
                            {ingredient.ingredientAmount}  
                            {ingredient.unit}
                            </p>    
                        ))
                ))}
            </p>
            <p><strong>Instructions</strong>{recipe.instructions}</p>
        </div>
    )
}

export default RecipeDetails