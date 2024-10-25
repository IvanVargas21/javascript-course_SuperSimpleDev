        //for the function below
        let calculation = localStorage.getItem('calculation') || '';

        function updateCalculation(value){
            calculation += value;

            displayCalculation();

            //Key Value Pairs
            localStorage.setItem('calculation', calculation);
        }
        function displayCalculation(){
            document.querySelector('.js-calculation').innerHTML= calculation;
        }
