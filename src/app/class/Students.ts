import {Person} from '../class/Person';

export class Student extends Person{
    id: number;
    mathematic: number;
    physic: number;
    average: number;
    status: string;
  constructor(
              id: number,
              firstName: string,
              lastName: string,
              doB: string,
              mathematic: number,
              physic: number
  ) {
      super(firstName,lastName,doB);
      this.id = id;
      this.mathematic = mathematic;
      this.physic = physic;
      this.average = (this.mathematic + this.physic)/2 ;
      if(this.average >=5){
        this.status = "Passed";
      }else{
        this.status = "Failed"
      }
    }
}