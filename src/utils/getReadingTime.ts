import readingTime from "reading-time";

export default function getReadingTime(md:string){
    const time = readingTime(md)
    return time
}