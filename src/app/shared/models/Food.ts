export class Food {
    id!: number;  // mandatory = compulsory: bắt buộc
    name!: string;
    price!: number;
    tags?: string[];
    favorite: boolean = false;
    stars: number = 0;
    imgUrl!: string;
    origins!: string[];
    cookTime!: string
}