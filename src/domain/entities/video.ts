export class Video{
    constructor(
        public name: string,
        public description: string,
        public pathVideo: string,
        public releaseDate: Date,
        public videoWidht: number,
        public videoHeight: number,
        public videoDuration: number,
        public videoSize: number
    ) {}
}