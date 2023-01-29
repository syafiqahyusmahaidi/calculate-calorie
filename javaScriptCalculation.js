function onClick() {
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var activity = document.getElementById('activityList').value;
    var total;
    var totalLoseFat;

    /*--------------------------------------
    
        CALORIE INTAKE FOR ADULT age(>19)

     --------------------------------------*/
    if (Number(age) > 18) {

        //Validating the whole form
        if (age == "" || weight == "" || height == "" || Number(age) > 80 || Number(age) < 15) {
            alert("Fill form correcly");
        }
        //validating the height must be in meter.
        else if (height > 9) {

            document.getElementById("invalid-feedback").innerHTML = "Please enter the height in meter";
            return false;
        }

///CALCULATION---------------------------------------
     /*--------------------------------------
     
        CALORIE INTAKE FOR MALE ADULT

     --------------------------------------*/
        else if (document.getElementById("male").checked == true && activity == "1") {
            document.getElementById("invalid-feedback").innerHTML = "";
            total = 864 - 9.72 * Number(age) + 1.0 * (14.2 * Number(weight) + 503 * Number(height));
            document.getElementById("total").value = Math.round(total*100)/100;

            totalLoseFat = total - 500;
            document.getElementById("totalLoss").value = Math.round(totalLoseFat*100)/100;
        }
        else if (document.getElementById("male").checked == true && activity == "2") {
            document.getElementById("invalid-feedback").innerHTML = "";
            total = 864 - 9.72 * Number(age) + 1.12 * (14.2 * Number(weight) + 503 * Number(height));
            document.getElementById("total").value = Math.round(total * 100) / 100;

            totalLoseFat = total - 500;
            document.getElementById("totalLoss").value = Math.round(totalLoseFat * 100) / 100;
        }
        else if (document.getElementById("male").checked == true && activity == "3") {
            document.getElementById("invalid-feedback").innerHTML = "";
            total = 864 - 9.72 * Number(age) + 1.27 * (14.2 * Number(weight) + 503 * Number(height));
            document.getElementById("total").value = Math.round(total * 100) / 100;

            totalLoseFat = total - 500;
            document.getElementById("totalLoss").value = Math.round(totalLoseFat * 100) / 100;
        }
        else if (document.getElementById("male").checked == true && activity == "4") {
            document.getElementById("invalid-feedback").innerHTML = "";
            total = 864 - 9.72 * Number(age) + 1.45 * (14.2 * Number(weight) + 503 * Number(height));
            document.getElementById("total").value = Math.round(total * 100) / 100;

            totalLoseFat = total - 500;
            document.getElementById("totalLoss").value = Math.round(totalLoseFat * 100) / 100;
        }
        /*---------------------------- 
          
         CALORIE INTAKE FOR FEMALE ADULT
         
         ---------------------------*/

        else if (document.getElementById("female").checked == true && activity == "1") {
            document.getElementById("invalid-feedback").innerHTML = "";
            total = 387 - 7.31 * Number(age) + 1.0 * (10.9 * Number(weight) + 660.7 * Number(height));
            document.getElementById("total").value = Math.round(total * 100) / 100;

            totalLoseFat = total - 500;
            document.getElementById("totalLoss").value = Math.round(totalLoseFat * 100) / 100;
        }
        else if (document.getElementById("female").checked == true && activity == "2") {
            document.getElementById("invalid-feedback").innerHTML = "";
            total = 387 - 7.31 * Number(age) + 1.14 * (10.9 * Number(weight) + 660.7 * Number(height));
            document.getElementById("total").value = Math.round(total * 100) / 100;

            totalLoseFat = total - 500;
            document.getElementById("totalLoss").value = Math.round(totalLoseFat * 100) / 100;
        }
        else if (document.getElementById("female").checked == true && activity == "3") {
            document.getElementById("invalid-feedback").innerHTML = "";
            total = 387 - 7.31 * Number(age) + 1.27 * (10.9 * Number(weight) + 660.7 * Number(height));
            document.getElementById("total").value = Math.round(total * 100) / 100;

            totalLoseFat = total - 500;
            document.getElementById("totalLoss").value = Math.round(totalLoseFat * 100) / 100;
        }
        else if (document.getElementById("female").checked == true && activity == "4") {
            document.getElementById("invalid-feedback").innerHTML = "";
            total = 387 - 7.31 * Number(age) + 1.45 * (10.9 * Number(weight) + 660.7 * Number(height));
            document.getElementById("total").value = Math.round(total * 100) / 100;

            totalLoseFat = total - 500;
            document.getElementById("totalLoss").value = Math.round(totalLoseFat * 100) / 100;
        }
        
    }
    /*---------------------------------------------------------------------------------------------------------
      
      CALCULATION FOR CHILDREN age(1 - 18)

     ----------------------------------------------------------------------------------------------------------*/
    else {
        //validating the whole form.
        if (age == "" || weight == "" || height == "" || Number(age) > 80 || Number(age) < 0) {
            alert("Fill form correcly");
        }

        //validating the height must be in meter.
        else if (height > 9) {

            document.getElementById("invalid-feedback").innerHTML = "Please enter the height in meter";
            return false;
        }

            /*----------------------------------------
             
             MALE CHILDREN THAT ARE NOT ACTIVE 
             
             ------------------------------------------*/

        else if ((document.getElementById("male").checked == true) && (activity == "1" || activity == "2")) {

            if (Number(age) > 0 && Number(age) < 4) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1000;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) > 3 && Number(age) < 6) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1200;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) > 5 && Number(age) < 9) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1400;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) > 10 && Number(age) < 11) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1600;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) > 10 && Number(age) < 13) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1800;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) > 12 && Number(age) < 15) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 2000;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) == 15) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 2200;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 2400;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
        }
            /* ----------------------------------------
             
             FEMALE CHILDREN THAT ARE NOT ACTIVE 
             
             ------------------------------------------*/

        else if ((document.getElementById("female").checked == true) && (activity == "1" || activity == "2")) {

            if (Number(age) > 0 && Number(age) < 4) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1000;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) > 3 && Number(age) < 8) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1200;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) > 7 && Number(age) < 11) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1400;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) > 10 && Number(age) < 14) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1600;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1800;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }  
        }
            /*-----------------------------------------------
             
             MALE CHILDREN THAT ARE  ACTIVE 

             ------------------------------------------------*/

        else if ((document.getElementById("male").checked == true) && (activity == "3" || activity == "4")) {

            if (Number(age) > 0 && Number(age) < 3) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1000;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) > 2 && Number(age) < 4) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1400;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) > 5 && Number(age) < 9) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1600;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) > 8 && Number(age) < 11) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1800;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) == 11) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 2000;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) > 11 && Number(age) < 14) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 2200;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) == 14) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 2400;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) == 15) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 2600;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 2800;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
        }

        /* ----------------------------------------------
         
         FEMALE CHILDREN THAT ARE ACTIVE 
         
         -------------------------------------------------*/

        else if ((document.getElementById("female").checked == true) && (activity == "3" || activity == "4")) {

            if (Number(age) > 0 && Number(age) < 3) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1000;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) == 3) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1200;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) > 3 && Number(age) < 7) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1400;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) > 6 && Number(age) < 10) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1600;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else if (Number(age) > 9 && Number(age) < 12) {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1800;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
            else {
                document.getElementById("invalid-feedback").innerHTML = "";
                total = 1800;
                document.getElementById("total").value = total;

                document.getElementById("totalLoss").value = "-";
            }
        }
    }
    
}
