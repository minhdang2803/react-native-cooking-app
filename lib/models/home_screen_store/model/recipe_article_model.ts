export interface RecipeArticle {
    tag: string[],
    title: string,
    imageUrl: any,
    cookDuration: string,
    isFavorite: boolean
    isSaved: boolean,
    author: AuthorModel
    description?: string

}