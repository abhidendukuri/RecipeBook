export class Recipe {
    public name: string;
    public description: string;
    public imgPath: string;

    constructor(n: string, d: string, p: string) {
        this.name = n;
        this.description = d;
        this.imgPath = p;
    }
}