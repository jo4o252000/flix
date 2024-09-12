export class Video{
    constructor(
        public readonly id: string,
        public name: string,
        public releaseDate: Date,
        public video: string
    ) {}
}