import{Person} from '../class/Person'

export class Teacher extends Person {

  constructor(
      id: number,
      firstName: string,
      lastName: string,
      doB: string,
      joB: string,
      status: string
  ) {
      super(firstName,lastName,doB)
    }
}