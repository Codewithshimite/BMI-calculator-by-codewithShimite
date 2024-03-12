
const submit = document.getElementById("submit");
const result = document.querySelector("#show-result");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const sexInput = document.querySelector("#sex");
const ageInput = document.querySelector("#age");
const form = document.querySelector("form");
// const resetInput = document.querySelector('#reset');



let height = heightInput.value;
let weight = weightInput.value;
let sex = sexInput.value;
let age = ageInput.value;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let height = heightInput.value;
    let weight = weightInput.value;
    let sex = sexInput.value;
    let age = ageInput.value;

  const indexIn = weight / (height * height);
  const index = indexIn.toFixed(1)
    result.textContent = `Result: ${Math.round(index)}`
    

    //    // for male of age 18-24
if (index < 20 && age >= 18 && age <= 24  && sex === 'M' ){
    result.textContent = `${index}: you are underweight`

}else if (index > 20 && index <= 25 && age >= 18 && age <= 24 && sex === 'M' ){
    result.textContent = `${index}: you are Normal weight`

}else if (index > 25 && index <= 30 && age >= 18 && age <= 24 && sex === 'M' ){
    result.textContent = `${index}: you are Overweight`

}else if (index > 30 && index <= 40 && age >= 18 && age <= 24 && sex ==='M' ){
    result.textContent = `${index}: Adiposity`

}else if (index > 40 && age >= 18 && age <= 24 && sex === 'M' ){
    result.textContent = `${index}: Severe adiposity`


  // for male of age 18-24
}if (index < 20 && age >= 18 && age <= 24  && sex === 'M' ){
    result.textContent = `${index}: you are underweight`

}else if (index > 20 && index <= 25 && age >= 18 && age <= 24 && sex === 'M' ){
    result.textContent = `${index}: you are Normal weight`

}else if (index > 25 && index <= 30 && age >= 18 && age <= 24 && sex === 'M' ){
    result.textContent = `${index}: you are Overweight`

}else if (index > 30 && index <= 40 && age >= 18 && age <= 24 && sex ==='M' ){
    result.textContent = `${index}: Adiposity`

}else if (index > 40 && age >= 18 && age <= 24 && sex === 'M' ){
    result.textContent = `${index}: Severe adiposity`


    
    // for male of age 18-24
}if (index < 20 && age >= 18 && age <= 24  && sex === 'M' ){
   result.textContent =`${index}: you are underweight`

}else if (index > 20 && index <= 25 && age >= 18 && age <= 24 && sex === 'M' ){
    result.textContent =`${index}: you are Normal weight`
 }else if (index > 25 && index <= 30 && age >= 18 && age <= 24 && sex === 'M' ){
    result.textContent =`${index}: you are Overweight`

 }else if (index > 30 && index <= 40 && age >= 18 && age <= 24 && sex ==='M' ){
    result.textContent =`${index}: Adiposity`

 }else if (index > 40 && age >= 18 && age <= 24 && sex === 'M' ){
     result.textContent =`${index}: Severe adiposity`
 


        // for male of age 18-24
 }if (index < 20 && age >= 18 && age <= 24  && sex === 'M' ){
    result.textContent =`${index}: you are underweight`

}else if (index > 20 && index <= 25 && age >= 18 && age <= 24 && sex === 'M' ){
    result.textContent =`${index}: you are Normal weight`

}else if (index > 25 && index <= 30 && age >= 18 && age <= 24 && sex === 'M' ){
    result.textContent =`${index}: you are Overweight`

}else if (index > 30 && index <= 40 && age >= 18 && age <= 24 && sex ==='M' ){
    result.textContent =`${index}: Adiposity`

}else if (index > 40 && age >= 18 && age <= 24 && sex === 'M' ){
    result.textContent =`${index}: Severe adiposity`

    
}    // for male of age 18-24
    if (index < 20 && age >= 18 && age <= 24  && sex === 'M' ){
        result.textContent =`${index}: you are underweight`

    }else if (index > 20 && index <= 25 && age >= 18 && age <= 24 && sex === 'M' ){
        result.textContent =`${index}: you are Normal weight`

    }else if (index > 25 && index <= 30 && age >= 18 && age <= 24 && sex === 'M' ){
        result.textContent =`${index}: you are Overweight`

    }else if (index > 30 && index <= 40 && age >= 18 && age <= 24 && sex ==='M' ){
        result.textContent =`${index}: Adiposity`

    }else if (index > 40 && age >= 18 && age <= 24 && sex === 'M' ){
        result.textContent `${index}: Severe adiposity`

                // for male of age 25-34
    }else if(index < 21 && age >= 25 && age <= 34 && sex === 'M'){
        result.textContent =`${index}: you are underweight`

    }else if (index > 21 && index <= 26 && age >= 25 && age <= 34 && sex === 'M'){
        result.textContent =`${index}: you are Normal weight`

    }else if (index > 26 && index <= 31 && age >= 25 && age <= 34 && sex === 'M'){
        result.textContent =`${index}: you are overweight`

    }else if (index > 31 && index <= 41 && age >= 25 && age <= 34 && sex === 'M'){
        result.textContent =`${index}: Adiposity`

    }else if  (index > 41 && age >= 25 && age <= 34 && sex === 'M'){
        result.textContent =`${index}:  Severe adiposity`

 
        // for male of age 35-44
    }else if (index < 22 && age >= 35 && age <= 44 && sex === 'M'){
        result.textContent =`${index}: you are Overweight`

    }else if (index > 22 && index <= 27 && age >= 35 && age <= 44 && sex === 'M'){
        result.textContent =`${index}: you are Normal weight`

    }else if (index > 27 && index <= 32 && age >= 35 && age <= 44 && sex === 'M'){
        result.textContent =`${index}: you are overweight`

    }else if (index > 32 && index <= 42 && age >= 35 && age <= 44 && sex === 'M'){
        result.textContent =`${index}: Adiposity`

    }else if (index > 44 && age >= 35 && age <= 44 && sex === 'M'){
        result.textContent =`${index}:  Severe adiposity`




         // for male of age 45-54
     }else if (index < 23 && age >= 45 && age <= 54 && sex === 'M'){
        result.textContent =`${index}}: you are Underweight`

    }else if (index > 23 && index <= 28 && age >= 45 && age <= 54 && sex === 'M'){
        result.textContent =`${index}: you are Normal weight`
     }else if (index > 28 && index <= 33 && age >= 45 && age <= 54 && sex === 'M'){
     result.textContent =`${index}: you are Overweight`

     }else if  (index > 33 && index <= 43 && age >= 45 && age <= 54 && sex === 'M'){
         result.textContent =`${index}: Adiposity`

    }else if (index > 43 && age >= 45 && age <= 54 && sex === 'M' ){
        result.textContent =`${index}:severe adiposity`


          // for male of age 55-64
    } else if (index < 24 && age >= 55 && age <= 64 && sex === 'M' ){
    result.textContent =`${index}: you are Underweight`

    }else if (index > 24 && index <= 29 && age >= 55 && age <= 64 && sex === 'M' ){
    result.textContent =`${index}: you are Normal weight`

    }else if (index > 29 && index <= 34 && age >= 55 && age <= 64 && sex === 'M' ){
    result.textContent =`${index}: You are Overweight`

    }else if (index > 34 && index <= 44 & age >= 55 && age <= 64 && sex === 'M'){
    result.textContent =`${index}: Adiposity`

    }else if (index > 44 && age >= 55 && age <= 64 && sex === "M" ){
    result.textContent =`${index}:Severe adiposity`



         // for male of age above 65+

    }else if (index < 25 && age > 65 && sex === 'M'){
        result.textContent =`${index}: you are Underweight`

    }else if (index > 25 && index <= 30 && age > 65 && sex =='M'){
        result.textContent =`${index}: you are Normal weight`

    }else if (index > 30 && index <= 35 && age > 65 && sex === 'M'){
        result.textContent =`${index}: You are Overweight`

    }else if (index > 35 && index <= 45 && age > 65 && sex === 'M'){
        result.textContent =`${index}: Adiposity`

    }else if (index > 45 && age > 65 && sex === 'M' ){
        result.textContent =`${index}:Severe adiposity`




        

       
                 //WOMEN

        //For Female age 18-24
        }else if (index < 19 && age >= 18 && age <= 24 & sex === 'F'){
        result.textContent =`${index}: you are Underweight`

         }else if (index > 19 && index <= 24 && age >= 18 && age <= 24 && sex === 'F'){
        result.textContent =`${index}: you are Normal weight`

        }else if (index > 24 && index <= 29 && age >= 18 && age <= 24 && sex === 'F'){
        result.textContent =`${index}: You are Overweight`

        }else if (index > 29 && index <= 39 && age >= 18  && age <= 24 && sex === 'F'){
        result.textContent =`${index}: Adiposity`

        }else if (index > 39 && age >= 18 && age <= 24 && sex === 'F'){
        result.textContent =`${index}:Severe adiposity`


          //For Female age 25-34

        }else if (index < 20 && age >= 25 && age <= 34 & sex === 'F'){
            result.textContent =`${index}: you are Underweight`
    
        }else if (index > 20 && index <= 25 && age >= 25 && age <= 34 && sex === 'F'){
            result.textContent =`${index}: you are Normal weight`
    
        }else if (index > 25 && index <= 30 && age >= 25 && age <= 34 && sex === 'F'){
            result.textContent =`${index}: You are Overweight`
    
        }else if (index > 30 && index <= 40 && age >= 25  && age <= 34 && sex === 'F'){
            result.textContent =`${index}: Adiposity`
    
        }else if (index > 40 && age >= 25 && age <= 34 && sex === 'F'){
            result.textContent =`${index}:Severe adiposity`



                    // //For Female age 35-44
    }else if (index < 21 && age >= 35 && age <= 44 & sex === 'F'){
        result.textContent =`${index}: you are Underweight`

    }else if (index > 21 && index <= 26 && age >= 35 && age <= 44 && sex === 'F'){
        result.textContent =`${index}: you are Normal weight`

    }else if (index > 26 && index <= 31 && age >= 35 && age <= 44 && sex === 'F'){
        result.textContent =`${index}: You are Overweight`

    }else if (index > 31 && index <= 41 && age >= 35  && age <= 44 && sex === 'F'){
        result.textContent =`${index}: Adiposity`

    }else if (index > 40 && age >= 35 && age <= 44 && sex === 'F'){
        result.textContent =`${index}:Severe adiposity`


        
         // //For Female age 45-54

    }else if (index < 22 && age >= 45 && age <= 54 & sex === 'F'){
        result.textContent =`${index}: you are Underweight`

    }else if (index > 22 && index <= 27 && age >= 45 && age <= 54 && sex === 'F'){
        result.textContent =`${index}: you are Normal weight`

    }else if (index > 27 && index <= 32 && age >= 45 && age <= 54 && sex === 'F'){
        result.textContent =`${index}: You are Overweight`

    }else if (index > 42 <= 42 && age >= 45  && age <= 54 && sex === 'F'){
        result.textContent =`${index}: Adiposity`

    }else if (index > 42 && age >= 45 && age <= 54 && sex === 'F'){
        result.textContent =`${index}:Severe adiposity`


                // //For Female age 55-64

    }else if (index < 23 && age >= 55 && age <= 64 & sex === 'F'){
        result.textContent =`${index}: you are Underweight`

    }else if (index > 23 && index <= 28 && age >= 55 && age <= 64 && sex === 'F'){
        result.textContent =`${index}: you are Normal weight`

    }else if (index > 28 && index <= 33 && age >= 55 && age <= 64 && sex === 'F'){
        result.textContent =`${index}: You are Overweight`

    }else if (index > 33 <= 43 && age >= 55  && age <= 64 && sex === 'F'){
        result.textContent =`${index}: Adiposity`

    }else if (index > 43 && age >= 55 && age <= 64 && sex === 'F'){
        result.textContent =`${index}:Severe adiposity`


        
         // //For Female age 65+

    }else if (index < 24 && age >= 65 & sex === 'F'){
        result.textContent =`${index}: you are Underweight`

    }else if (index > 24 && index <= 29 && age >= 65 && sex === 'F'){
        result.textContent =`${index}: you are Normal weight`

    }else if (index > 29 && index <= 34 && age >= 65 && sex === 'F'){
        result.textContent =`${index}: You are Overweight`

    }else if (index > 34 <= 44 && age >= 65 && sex === 'F'){
        result.textContent =`${index}: Adiposity`

    }else if (index > 44 && age >= 65  && sex === 'F'){
        result.textContent =`${index}:Severe adiposity`

    }else {

        result.textContent ='Enter value'
    }  
    });

    // resetInput.addEventListener('click', () => {
    //     heightInput.value = '';
    //     weightInput.value = '';
    //     sexInput.value = '';
    //     ageInput.value = '';
     
    //  })

