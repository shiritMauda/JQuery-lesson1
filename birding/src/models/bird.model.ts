export interface IBird {

    name: string;
    img: string;
    id: number;

}
export interface IBirdSpot {
    id: number;
    bird_id: string;
    area_id: string;
    email: string;
    spot_date: Date;

}
