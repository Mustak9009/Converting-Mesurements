const INCHE = 12;
const FOOT = 1;
const FEET = 3;
const YARD = 1;
const YARDS = 1760;
const MILE = 1;
const X = 1;

const solveProportion = (a,b,inputValue)=>{
    const leftValue = a * inputValue;
    const rightValue =  b * X;
   
    const unownValue = leftValue / rightValue;
    return unownValue;
}

const solveProportionOneUnit = (a,b,inputValue)=>{ 
  const unownValue = solveProportion(a,b,inputValue)
  document.getElementById('parameter-2').value = unownValue;
}
const solveProportionTwoUnit = (proportion1,proportion2)=>{
    const {a,b,inputValue} = proportion1;
    const {y,z} = proportion2;

    //First Proportion 
    const unownValue_of_firstProportion = solveProportion(a,b,inputValue)
    //Second Proportion
    const finalUnownValue = solveProportion(y,z,unownValue_of_firstProportion)

    document.getElementById('parameter-2').value = finalUnownValue;
}
const solveProportionThreeUnit = (proportion1,proportion2,proportion3)=>{
    const {a,b,inputValue} = proportion1;
    const {y,z} = proportion2;
    const {i,j} = proportion3;

    //First Proportion 
    const unownValue_of_firstProportion = solveProportion(a,b,inputValue);
    //Second Proportion
    const unownValue_of_secondProportion = solveProportion(y,z,unownValue_of_firstProportion);
    //Third proportion  
    const finalUnownValue = solveProportion(i,j,unownValue_of_secondProportion);

    document.getElementById('parameter-2').value = finalUnownValue;
}
function handleCallculastion(){
    const unit_1 = document.getElementById('unit-1').value;
    const unit_2 = document.getElementById('unit-2').value;
    const inputValue = document.getElementById('parameter-1').value;

    switch(true){
        case unit_1 == unit_2:
            document.getElementById('parameter-2').value = inputValue;
            break;
        case unit_1 == 'FOOT' && unit_2 == 'INCHES':
            solveProportionOneUnit(INCHE,FOOT,inputValue);
            break;
        case unit_1 == 'INCHES' && unit_2 == 'FOOT':
            solveProportionOneUnit(FOOT,INCHE,inputValue);
            break;    
        case unit_1 == 'FOOT' && unit_2 ==  'YARDS':
            solveProportionOneUnit(YARD,FEET,inputValue);
            break;
        case unit_1 == 'YARDS' && unit_2 == 'FOOT':
            solveProportionOneUnit(FEET,YARD,inputValue);
            break;
        case unit_1 == 'YARDS' && unit_2 == 'MILE':
            solveProportionOneUnit(MILE,YARDS,inputValue);
            break;
        case unit_1 == 'MILE' && unit_2 == 'YARDS':
            solveProportionOneUnit(YARDS,MILE,inputValue);
            break;  
        case unit_1 == 'MILE' && unit_2 == 'FOOT':{
            const proportion1 = {a:YARDS,b:MILE,inputValue};
            const proportion2 = {y:FEET,z:YARD};
            solveProportionTwoUnit(proportion1,proportion2);
            break;  
        }
        case unit_1 == 'MILE' && unit_2 == 'INCHES':{
            const proportion1 = {a:YARDS,b:MILE,inputValue};
            const proportion2 = {y:FEET,z:YARD};
            const proportion3 = {i:INCHE,j:FOOT}
            solveProportionThreeUnit(proportion1,proportion2,proportion3);
            break;
        }
        case unit_1 == 'INCHES' && unit_2 == 'MILE':{
            const proportion1 = {a:FOOT,b:INCHE,inputValue};
            const proportion2 = {y:YARD,z:FEET};
            const proportion3 = {i:MILE,j:YARDS}
            solveProportionThreeUnit(proportion1,proportion2,proportion3);
            break;
        }
        case unit_1 == 'FOOT' && unit_2 == 'MILE':{
            const proportion1 = {a:YARD,b:FEET,inputValue};
            const proportion2 = {y:MILE,z:YARDS};
            solveProportionTwoUnit(proportion1,proportion2);
            break;  
        }
    
    }
}

/**
 * Note:
 *  Cross Multiplication 
 *  -> Variable: a,b,c,d
 *     - L = a*d
 *     - R = b*c
 *     
 *     - U = L/R
*/
