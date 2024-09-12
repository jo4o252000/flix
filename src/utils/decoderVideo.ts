import ffmpeg from "fluent-ffmpeg";

export function decoderVideo(videoPath:string): Promise<any>{
    return new Promise((resolve, reject) => {
        ffmpeg.ffprobe(videoPath, (err, metadata) => {
            if(err){
                reject(err);
            } else {
                resolve(metadata);
            }
        })
    })
}