import { RecipeArticle } from "../../models/home_screen_store/model/recipe_article_model"

export const HomeTabViewModel = () => {
    const snacks: RecipeArticle[] = [
        {
            tag: ["Protein", "Heath"],
            title: "Fried Bacon with vegetables - Quick",
            imageUrl: require("../../../assets/images/recipe1_medium.png"),
            cookDuration: '10 mins',
            isFavorite: false,
            isSaved: false,
            description:"hkadjkáhdjksahdjkáhdjkáhdkjsahdkjáhdkjáhdkjsahdkjsahdkjsadkjaalkep;oqiweioqưueoiqưueiơqeuioqưueioqưueiơqueioqưeoiu",
            author: {
                name: "Kate Cleverly",
                imageUrl: require("../../../assets/images/user3_medium.png")
            }
        },
        {
            tag: ["Nutrious", "Heath"],
            title: "Double Decker beef sandwich",
            imageUrl: require("../../../assets/images/recipe2_medium.png"),
            cookDuration: '5 mins',
            isFavorite: false,
            isSaved: false,
            description:"hkadjkáhdjksahdjkáhdjkáhdkjsahdkjáhdkjáhdkjsahdkjsahdkjs",
            author: {
                name: "JimmyCarter",
                imageUrl: require("../../../assets/images/user2_medium.png")
            }
        },
        {
            tag: ["Sweet", "Heath"],
            title: "Sweet Egg Benedics with salad",
            imageUrl: require("../../../assets/images/recipe3_medium.png"),
            cookDuration: '10 mins',
            isFavorite: false,
            isSaved: false,
            description:"hkadjkáhdjksahdjkáhdjkáhdkjsahdkjáhdkjáhdkjsahdkjsahdkjsadkja,lkhqwkljejlkqwhekjqwhekjqwhjkewqjkehqwjkehkjqwehkjqwhekjqwhekjqwhekjqwh",
            author: {
                name: "Jimmy Carter",
                imageUrl: require("../../../assets/images/user4_medium.png")
            }
        },
        
    ]
    const user : AuthorModel[] = [
        {
            name: "Joe Johnson",
            imageUrl: require("../../../assets/images/user1_small.png")
        },
        {
            name: "Joe Johnson",
            imageUrl: require("../../../assets/images/user2_small.png")
        },
        {
            name: "Joe Johnson",
            imageUrl: require("../../../assets/images/user3_small.png")
        },
        {
            name: "Joe Johnson",
            imageUrl: require("../../../assets/images/user4_small.png")
        },
    ]
    return {snacks, user}
}