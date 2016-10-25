import {Component} from '@angular/core';

import {Student} from '../class/Students';
import {Validation} from "../checkvalidation/validation";

@Component({
  selector: 'MainPage',
  styleUrls: ['./MainPage.css'],
  templateUrl: './MainPage.html'
})
export class MainPage {

  // tạo mảng với phần tử đầu tiên
  students : Student[]= [new Student(1,'Hau','Nguyen','19/06/1995',8,7)];
  
  typemessage: string;
  message: string;
  
  id=this.students.length;
  firstName='';
  lastName='';
  date='';
  month='';
  year='';
  doB='';
  mathematic='';
  physic='';

  addStudent() {

    this.typemessage = '';
    this.message = '';

    if(this.firstName !='' && this.lastName !=''  && this.date !='' && this.month !='' 
        && this.year !='' && this.mathematic !='' && this.physic !=''){

    //kiem tra diem nhap vao phai lon hon bang khong va nho hon hoac bang 10
    if (Validation.checkMark(this.mathematic) == false) {
      this.typemessage = 'mark';
      this.message = 'Bạn đã nhập điểm Toán không hợp lệ!';
    return;
    }
    if (Validation.checkMark(this.physic) == false) {
      this.typemessage = 'mark';
      this.message = 'Bạn đã nhập điểm Lý không hợp lệ!';
    return;
    }

    //check ngày
    if(Validation.checkday(this.date) == false){
      this.typemessage = 'date';
      this.message = 'Bạn đã nhập Ngày Sinh không hợp lệ!';
      return;
    }

    //check tháng
    if(Validation.checkmonth(this.month) == false){
      this.typemessage = 'date';
      this.message = 'Bạn đã nhập Tháng Sinh không hợp lệ!';
      return;
    }

    //check số ngày phải đúng với tháng
    if(Validation.checkdob(this.date,this.month) == false){
      this.typemessage = 'date';
      this.message = 'Bạn đã nhập Ngày Sinh không hợp lệ!';
      return;
    }

    //add phần tử vào mảng
    this.students.push(new Student(this.students.length+1, 
                                  this.firstName, this.lastName, 
                                  this.date+"/"+this.month+"/"+this.year, parseFloat( this.mathematic), 
                                  parseFloat( this.physic)))
    //khi add thành công
    this.typemessage = 'thanhcong';
    this.message = 'Thành công rồi kìa! ahihi';    
    this.firstName ='';
    this.lastName ='';
    this.date ='';
    this.month ='';
    this.year ='';
    this.mathematic ='';
    this.physic ='';
    ///////////////////////////////////
   }
  }
}
