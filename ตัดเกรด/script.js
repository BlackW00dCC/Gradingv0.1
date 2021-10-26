

var score1 = (prompt("ใส่คะแนนวิชาภาษาไทย"))
var score2 = (prompt("ใส่คะแนนวิชาภาษาอังกฤษ"))
var score3 = (prompt("ใส่คะแนนวิชาวิชาดนตรี"))

var g1 = 4, g2 = 3.5, g3 = 3.0, g4 = 2.5, g5 =2.0, g6 = 1.5, g7 = 1, g8 = 0 

if(score1>=80 && score1 <= 100){
    document.getElementById("sj1").innerHTML ="วิชาภาษาไทย ได้ "+score1+" คะแนน ได้เกรด "+g1+" ผ่าน"
    }else if(score1>=75 && score1 <= 100){
    document.getElementById("sj1").innerHTML ="วิชาภาษาไทย ได้ "+score1+" คะแนน ได้เกรด "+g2+" ผ่าน"
    }else if(score1>=70 && score1 <= 100){
    document.getElementById("sj1").innerHTML ="วิชาภาษาไทย ได้ "+score1+" คะแนน ได้เกรด "+g3+" ผ่าน"
    }else if(score1>=65 && score1 <= 100){
    document.getElementById("sj1").innerHTML ="วิชาภาษาไทย ได้ "+score1+" คะแนน ได้เกรด "+g4+" ผ่าน"
    }else if(score1>=60 && score1 <= 100){
    document.getElementById("sj1").innerHTML ="วิชาภาษาไทย ได้ "+score1+" คะแนน ได้เกรด "+g5+" ผ่าน"
    }else if(score1>=55 && score1 <= 100){
    document.getElementById("sj1").innerHTML ="วิชาภาษาไทย ได้ "+score1+" คะแนน ได้เกรด "+g6+" ผ่าน"
    }else if(score1>=50 && score1 <= 100){
    document.getElementById("sj1").innerHTML ="วิชาภาษาไทย ได้ "+score1+" คะแนน ได้เกรด "+g7+" ผ่าน"
    }else if(score1>=0 && score1 <= 100){
    document.getElementById("sj1").innerHTML ="วิชาภาษาไทย ได้ "+score1+" คะแนน ได้เกรด "+g8+" ไม่ผ่าน โปรดติดต่ออาจารย์ผู้สอน"
    }
    else{

        document.getElementById("sj1").innerHTML ="eror"

    }


    if(score2>=80 && score2 <= 100){
        document.getElementById("sj2").innerHTML ="วิชาภาษาอังกฤษ ได้ "+score2+" คะแนน ได้เกรด "+g1+" ผ่าน"
        }else if(score2>=75 && score2 <= 100){
        document.getElementById("sj2").innerHTML ="วิชาภาษาอังกฤษ ได้ "+score2+" คะแนน ได้เกรด "+g2+" ผ่าน"
        }else if(score2>=70 && score2 <= 100){
        document.getElementById("sj2").innerHTML ="วิชาภาษาอังกฤษ ได้ "+score2+" คะแนน ได้เกรด "+g3+" ผ่าน"
        }else if(score2>=65 && score2 <= 100){
        document.getElementById("sj2").innerHTML ="วิชาภาษาอังกฤษ ได้ "+score2+" คะแนน ได้เกรด "+g4+" ผ่าน"
        }else if(score2>=60 && score2 <= 100){
        document.getElementById("sj2").innerHTML ="วิชาภาษาอังกฤษ ได้ "+score2+" คะแนน ได้เกรด "+g5+" ผ่าน"
        }else if(score2>=55 && score2 <= 100){
        document.getElementById("sj2").innerHTML ="วิชาภาษาอังกฤษ ได้ "+score2+" คะแนน ได้เกรด "+g6+" ผ่าน"
        }else if(score2>=50 && score2 <= 100){
        document.getElementById("sj2").innerHTML ="วิชาภาษาอังกฤษ ได้ "+score2+" คะแนน ได้เกรด "+g7+" ผ่าน"
        }else if(score2>=0 && score2 <= 100){
        document.getElementById("sj2").innerHTML ="วิชาภาษาอังกฤษ ได้ "+score2+" คะแนน ได้เกรด "+g8+" ไม่ผ่าน โปรดติดต่ออาจารย์ผู้สอน"
        }
        else{
    
            document.getElementById("sj2").innerHTML ="eror"
    
        }




 
        if(score3>=80 && score3 <= 100){
            document.getElementById("sj3").innerHTML ="วิชาดนตรี ได้ "+score3+"  คะแนน ได้เกรด "+g1+" ผ่าน"
            }else if(score3>=75 && score3 <= 100){
            document.getElementById("sj3").innerHTML ="วิชาดนตรี ได้ "+score3+"  คะแนน ได้เกรด "+g2+" ผ่าน"
            }else if(score3>=70 && score3 <= 100){
            document.getElementById("sj3").innerHTML ="วิชาดนตรี ได้ "+score3+"  คะแนน ได้เกรด "+g3+" ผ่าน"
            }else if(score3>=65 && score3 <= 100){
            document.getElementById("sj3").innerHTML ="วิชาดนตรี ได้ "+score3+"  คะแนน ได้เกรด "+g4+" ผ่าน"
            }else if(score3>=60 && score3 <= 100){
            document.getElementById("sj3").innerHTML ="วิชาดนตรี ได้ "+score3+"  คะแนน ได้เกรด "+g5+" ผ่าน"
            }else if(score3>=55 && score3 <= 100){
            document.getElementById("sj3").innerHTML ="วิชาดนตรี ได้ "+score3+"  คะแนน ได้เกรด "+g6+" ผ่าน"
            }else if(score3>=50 && score3 <= 100){
            document.getElementById("sj3").innerHTML ="วิชาดนตรี ได้ "+score3+"  คะแนน ได้เกรด "+g7+" ผ่าน"
            }else if(score3>=0 && score3<= 100){
            document.getElementById("sj3").innerHTML ="วิชาดนตรี ได้ "+score3+" คะแนน ได้เกรด "+g8+" ไม่ผ่าน โปรดติดต่ออาจารย์ผู้สอน"
            }
            else{
        
                document.getElementById("sj3").innerHTML ="eror"
        
            }
    


            

    

            


            









//3 วิชาพอ
//score1 ภาษาไทย 
//score2 ภาษาอังกฤษ
//score3 ดนตรี
