function Triangle(x,y,z) {

    var type = "";

    if ((x+y<z)||(x+z<y)||(y+z<x)){
        type="impossible";
    }else{
        if ((x !== y)&&(x!==z)&&(y!==z)){
            type = "scalène";
        } else if ((x === y)&&(x===z)&&(y===z)) {
            type = "équilatéral";
        } else {
            type = "isocèle";
        }
    }    
    console.log(type);
}