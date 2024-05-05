export class Serie {
    

    id: number;
    name:string;
    channel: string;
    seasons:number;
    descriptions:string;
    webpage: string;
    poster: string;

    public constructor (id: number,name:string,channel: string,seasons:number,descriptions:string,webpage: string,poster: string){
        this.id=id;
        this.name=name;
        this.channel=channel;
        this.seasons=seasons;
        this.descriptions=descriptions;
        this.webpage=webpage;
        this.poster=poster;

    }

}