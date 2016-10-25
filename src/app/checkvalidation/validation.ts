
export class Validation{

    //check gioi han diem
    static checkMark(mark) {
        if (mark >= 0 && mark <= 10) {
            return true;
        } else {
            return false;
        }
    }

    //check day of birth
    //check gioi han ngay
    static checkday(date){
        if(date >=1 && date <=31){
            return true;
        }else{
            return false;
        }
    }
    //check gioi han thang
    static checkmonth(month){
        if(month >=1 && month <=12){
            return true;
        }else{
            return false;
        }
    }
    //check ngay 30 hay 31 theo thang
    static checkdob(month,date){
        if(month == 2 && date <= 28){
            return true;
        }
        if(month == 1 && date <= 31){
            return true;
        }
        if(month == 3 && date <= 31){
            return true;
        }
        if(month == 4 && date <= 30){
            return true;
        }
        if(month == 5 && date <= 31){
            return true;
        }
        if(month == 6 && date <= 30){
            return true;
        }
        if(month == 7 && date <= 31){
            return true;
        }
        if(month == 8 && date <= 31){
            return true;
        }
        if(month == 9 && date <= 30){
            return true;
        }
        if(month == 10 && date <= 31){
            return true;
        }
        if(month == 11 && date <= 30){
            return true;
        }
        if(month == 12 && date <= 31){
            return true;
        }
        return false;

    }    
}