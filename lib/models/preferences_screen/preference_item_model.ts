export type PreferencesItemModel ={
    name: string
    imageUrl: any
}

export const preferenceItems : PreferencesItemModel[] = [
    {
        name: 'Vegan',
        imageUrl : require("../../../assets/vegan.png")
    },
    {
        name: 'Meat',
        imageUrl : require("../../../assets/meat.png")
    },
    {
        name: 'Sweet',
        imageUrl : require("../../../assets/sweet.png")
    },
    {
        name: 'Seafood',
        imageUrl : require("../../../assets/seafood.png")
    },
    {
        name: 'Raw Food Diet',
        imageUrl : require("../../../assets/raw_food_diet.png")
    },
    {
        name: 'Alcohol',
        imageUrl : require("../../../assets/alcohol.png")
    },
    {
        name: 'No Milk',
        imageUrl : require("../../../assets/milk.png")
    },
    {
        name: 'Gluten free',
        imageUrl : require("../../../assets/gluten_free.png")
    },
]

