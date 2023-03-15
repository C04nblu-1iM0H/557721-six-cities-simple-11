export type Review = {
    idHostel: number;
    comment: string;
    date:string;
    id:number;
    rating:number;
    user:{
        avatar:string;
        id:number;
        isPro:boolean;
        name:string;
    };
};

export type Comments = Review[];
