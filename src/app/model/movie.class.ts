export class Movie{
  public description : string;
  public duration : number;
  public id : number;
  public movieName : string;
  public status : string;
  public thumbUrl : string;

  constructor(description : string, duration : number, id : number, movieName : string, status : string, thumbUrl : string){
    this.description = description;
    this.duration = duration;
    this.id = id;
    this.movieName = movieName;
    this.status = status;
    this.thumbUrl = thumbUrl;
  }
}
