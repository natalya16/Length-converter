//  1. get input value from input field
// 2. get value from select field
// 3. implement the logic of conversion using multiple

const converter = () => {
  var in_val = document.querySelector("#in_val").value;
  var in_unit = document.querySelector("#in_unit").value;
  var out_val = document.querySelector("#out_val");
  var out_unit = document.querySelector("#out_unit").value;

  // meter to centimeter

  if (in_unit == "meter" && out_unit == "centimeter") {
    // multiply by 100
    let output_val = in_val * 100;
    out_val.value = output_val;
  }

  // centimeter to meter
  else if (in_unit == "centimeter" && out_unit == "meter") {
    // divide by 100
    let output_val = in_val / 100;
    out_val.value = output_val;
  }

  // kilometer to meter
  else if (in_unit == "kilometer" && out_unit == "meter") {
    // multiply by 100
    let output_val = in_val * 1000;
    out_val.value = output_val;
  }
  // meter to kilometer
  else if (in_unit == "meter" && out_unit == "kilometer") {
    // divide by 100
    let output_val = in_val / 1000;
    out_val.value = output_val;
  }
//   kilometer to centimeter

else if(in_unit=="kilometer" && out_unit=="centimeter"){
    // multiply by 100
    let output_val = in_val*100000;
    out_val.value = output_val;
}
// centimeter to kilometer 
else if(in_unit=="centimeter" && out_unit=="kilometer"){
    // multiply by 100
    let output_val = in_val/100000;
    out_val.value = output_val;
}
// meter to inch
else if(in_unit=="meter" && out_unit=="inch"){
    // multiply by 39.37
    let output_val = in_val*39.37;
    out_val.value = output_val;
}
// inch to meter
else if(in_unit=="inch" && out_unit=="meter"){
    //divide by 39.37
    let output_val = in_val*39.37;
    out_val.value = output_val;
}






};
