export class Receipe{
  name: string;
  desc: string;
  imagePath: string;

  constructor(name: string, desc: string, imagePath: string){
    this.name = name;
    this.desc = desc;
    this.imagePath = imagePath;
  }
}