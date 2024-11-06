export type TIngredient = {
    calories: string;
    carbohydrate: string;
    fat: string;
    image: string;
    image_large: string;
    image_mobile: string;
    name: string;
    price: number;
    proteins: number;
    type: string;
    __v: number;
    _id: string;
}

export type TConstructorIngredient = TIngredient & { ID: string };