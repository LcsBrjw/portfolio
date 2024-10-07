/APPARITION ET DISPARITION DU PANIER SELON SON REMPLISSAGE/ 
//---------------------------------------------------------/ 

const cartlogo = document.querySelector(".cartlogo");
cartlogo.addEventListener('click', function(){
    const somme = calculerSomme();
    const emptyCart = document.querySelector('#popup-cart-empty');
    const fullCart = document.querySelector('#popup-cart-full');

    if(emptyCart.style.display === "block" || fullCart.style.display === "block") {
        emptyCart.style.display = "none";
        fullCart.style.display = "none";
    } else {
        if(somme ==0){
            emptyCart.style.display = "block";
            fullCart.style.display = "none";
        } else {
            emptyCart.style.display = "none";
            fullCart.style.display = "block";
        }
    }
    function calculerSomme() {                                                          /CALCUL DE LA SOMME TOTALE D'ITEMS/
        const nbItem1 = parseInt(document.querySelector('.nbItem1').textContent);
        const nbItem2 = parseInt(document.querySelector('.nbItem2').textContent);
        const nbItem3 = parseInt(document.querySelector('.nbItem3').textContent);
        const nbItem4 = parseInt(document.querySelector('.nbItem4').textContent);
    
        const somme = nbItem1 + nbItem2 + nbItem3 + nbItem4;
        return somme;
    }
});



/ GESTION DES ITEMS DANS L'APPERCU DU PANIER/ 
// ------------------------------------------/


//ITEM1/ 

document.addEventListener('DOMContentLoaded', function(){

    const calcSubTot1 = document.querySelector(".calcSubTot1");
    const calcSubTot2 = document.querySelector(".calcSubTot2");
    const calcSubTot3 = document.querySelector(".calcSubTot3");
    const calcSubTot4 = document.querySelector(".calcSubTot4");
    const viderCart = document.querySelector(".viderCart");
    const removeButton1 = document.querySelector('.remove-item1');
    const nbItem1 = document.querySelector('.nbItem1');
    const addButton1 = document.querySelector('.add-item1');
    const quantity1 = document.querySelector('.quantity1');
    const miniRecap1 = document.querySelector('.mini-recap1');
    const trashlogo1 = document.querySelector('.trashlogo1');

    updateVisibility();

    /RETIRER UN ITEM AU CLIC SI IL Y EN A AU MOINS UN/ 
    removeButton1.addEventListener('click', function(){
        let currentValue1 = parseInt(nbItem1.textContent);

        if (currentValue1 > 0){
            currentValue1--;
            nbItem1.textContent = currentValue1;
            quantity1.textContent = currentValue1;
            updateSubTot1(currentValue1);
            updateVisibility();
            calculateTotal(
                parseFloat(calcSubTot1.textContent.replace(' €', '')), 
                parseFloat(calcSubTot2.textContent.replace(' €', '')), 
                parseFloat(calcSubTot3.textContent.replace(' €', '')), 
                parseFloat(calcSubTot4.textContent.replace(' €', ''))
            );
        }
    });

    /AJOUTER UN ITEM AU CLIC/ 

    addButton1.addEventListener('click', function(){
        let currentValue1 = parseInt(nbItem1.textContent);

        currentValue1++;
        nbItem1.textContent = currentValue1;
        quantity1.textContent = currentValue1;
        updateSubTot1(currentValue1);
        updateVisibility();
        calculateTotal(
            parseFloat(calcSubTot1.textContent.replace(' €', '')), 
            parseFloat(calcSubTot2.textContent.replace(' €', '')), 
            parseFloat(calcSubTot3.textContent.replace(' €', '')), 
            parseFloat(calcSubTot4.textContent.replace(' €', ''))
        );
    });

    /SUPPRIMER UNE LIGNE DE L'APPERCU DU PANIER/ 

    trashlogo1.addEventListener('click', function(){
        if (confirm("Voulez vous supprimer cet objet ?")){
            nbItem1.textContent='0';
            updateVisibility();
            calculateTotal(parseFloat(calcSubTot1.textContent.replace(' €', '')));
        }
    });

    function updateVisibility(){                            /CHANGE LA VISIBILITE D'UN ITEM SELON SA QUANTITE/
        if (parseInt(nbItem1.textContent) === 0){
            miniRecap1.style.visibility = 'hidden';
        } else{
            miniRecap1.style.visibility = 'visible';
        }
    }
});

    /METTRE A JOUR LE SOUS TOTAL DE MANIERE AUTOMATIQUE/ 

function updateSubTot1(currentValue1){
    const subTot1 = currentValue1 * 2100;
    const calcSubTot1 = document.querySelector('.calcSubTot1');
    calcSubTot1.textContent = subTot1 +" €";
}



//ITEM2//

document.addEventListener('DOMContentLoaded', function(){
    const calcSubTot1 = document.querySelector(".calcSubTot1");
    const calcSubTot2 = document.querySelector(".calcSubTot2");
    const calcSubTot3 = document.querySelector(".calcSubTot3");
    const calcSubTot4 = document.querySelector(".calcSubTot4");
    const removeButton2 = document.querySelector('.remove-item2');
    const nbItem2 = document.querySelector('.nbItem2');
    const addButton2 = document.querySelector('.add-item2');
    const quantity2 = document.querySelector('.quantity2');
    const miniRecap2 = document.querySelector('.mini-recap2');
    const trashlogo2 = document.querySelector('.trashlogo2');
    
    updateVisibility();

    /RETIRER UN ITEM AU CLIC SI IL Y EN A AU MOINS UN/ 
    
    removeButton2.addEventListener('click', function(){
        let currentValue2 = parseInt(nbItem2.textContent);
    
        if (currentValue2 > 0){
            currentValue2--;
            nbItem2.textContent = currentValue2;
            quantity2.textContent = currentValue2;
            updateSubTot2(currentValue2);
            updateVisibility();
            calculateTotal(
                parseFloat(calcSubTot1.textContent.replace(' €', '')) 
            );
        }
    });

    /AJOUTER UN ITEM AU CLIC/ 
    
    addButton2.addEventListener('click', function(){
        let currentValue2 = parseInt(nbItem2.textContent);
    
        currentValue2++;
        nbItem2.textContent = currentValue2;
        quantity2.textContent = currentValue2;
        updateSubTot2(currentValue2);
        updateVisibility();
        calculateTotal(parseFloat(calcSubTot1.textContent.replace(' €', '')) );
    });

    /SUPPRIMER UNE LIGNE DE L'APPERCU DU PANIER/ 

    trashlogo2.addEventListener('click', function(){
        if (confirm("Voulez vous supprimer cet objet ?")){
            nbItem2.textContent='0';
            updateVisibility();
            calculateTotal(parseFloat(calcSubTot2.textContent.replace(' €', '')));
        }
    });

    function updateVisibility(){
        if (parseInt(nbItem2.textContent) === 0){
            miniRecap2.style.visibility = 'hidden';
        } else{
            miniRecap2.style.visibility = 'visible';
        }
    }
    });

    /METTRE A JOUR LE SOUS TOTAL DE MANIERE AUTOMATIQUE/ 

    function updateSubTot2(currentValue2){
        const subTot2 = currentValue2 * 225;
        const calcSubTot2 = document.querySelector('.calcSubTot2');
        calcSubTot2.textContent = subTot2 +" €";
}

//ITEM3/ 

document.addEventListener('DOMContentLoaded', function(){
    const calcSubTot1 = document.querySelector(".calcSubTot1");
    const calcSubTot2 = document.querySelector(".calcSubTot2");
    const calcSubTot3 = document.querySelector(".calcSubTot3");
    const calcSubTot4 = document.querySelector(".calcSubTot4");
    const removeButton3 = document.querySelector('.remove-item3');
    const nbItem3 = document.querySelector('.nbItem3');
    const addButton3 = document.querySelector('.add-item3');
    const quantity3 = document.querySelector('.quantity3');
    const miniRecap3 = document.querySelector('.mini-recap3');
    const trashlogo3 = document.querySelector('.trashlogo3');
    
    updateVisibility();

    /RETIRER UN ITEM AU CLIC SI IL Y EN A AU MOINS UN/ 
    
    removeButton3.addEventListener('click', function(){
        let currentValue3 = parseInt(nbItem3.textContent);
    
        if (currentValue3 > 0){
            currentValue3--;
            nbItem3.textContent = currentValue3;
            quantity3.textContent = currentValue3;
            updateSubTot3(currentValue3);
            updateVisibility();
            calculateTotal(
                parseFloat(calcSubTot3.textContent.replace(' €', ''))
            );
        }
    });

    /AJOUTER UN ITEM AU CLIC/ 
    
    addButton3.addEventListener('click', function(){
        let currentValue3 = parseInt(nbItem3.textContent);
    
        currentValue3++;
        nbItem3.textContent = currentValue3;
        quantity3.textContent = currentValue3;
        updateSubTot3(currentValue3);
        updateVisibility();
        calculateTotal(
            parseFloat(calcSubTot3.textContent.replace(' €', ''))
        );
    });

    /SUPPRIMER UNE LIGNE DE L'APPERCU DU PANIER/ 

    trashlogo3.addEventListener('click', function(){
        if (confirm("Voulez-vous supprimer cet objet ?")){
            nbItem3.textContent = '0';
            updateVisibility();
            calculateTotal(parseFloat(calcSubTot3.textContent.replace(' €', '')));
        }
    });

    function updateVisibility(){
        if (parseInt(nbItem3.textContent) === 0){
            miniRecap3.style.visibility = 'hidden';
        } else {
            miniRecap3.style.visibility = 'visible';
        }
    }
});

    /METTRE A JOUR LE SOUS TOTAL DE MANIERE AUTOMATIQUE/ 

function updateSubTot3(currentValue3){
    const subTot3 = currentValue3 * 110;
    const calcSubTot3 = document.querySelector('.calcSubTot3');
    calcSubTot3.textContent = subTot3 + " €";
}

//ITEM4/ 

document.addEventListener('DOMContentLoaded', function(){
    const calcSubTot1 = document.querySelector(".calcSubTot1");
    const calcSubTot2 = document.querySelector(".calcSubTot2");
    const calcSubTot3 = document.querySelector(".calcSubTot3");
    const calcSubTot4 = document.querySelector(".calcSubTot4");
    const removeButton4 = document.querySelector('.remove-item4');
    const nbItem4 = document.querySelector('.nbItem4');
    const addButton4 = document.querySelector('.add-item4');
    const quantity4 = document.querySelector('.quantity4');
    const miniRecap4 = document.querySelector('.mini-recap4');
    const trashlogo4 = document.querySelector('.trashlogo4');
    
    updateVisibility();

    /RETIRER UN ITEM AU CLIC SI IL Y EN A AU MOINS UN/ 
    
    removeButton4.addEventListener('click', function(){
        let currentValue4 = parseInt(nbItem4.textContent);
    
        if (currentValue4 > 0){
            currentValue4--;
            nbItem4.textContent = currentValue4;
            quantity4.textContent = currentValue4;
            updateSubTot4(currentValue4);
            updateVisibility();
            calculateTotal(
                parseFloat(calcSubTot4.textContent.replace(' €', ''))
            );
        }
    });

    /AJOUTER UN ITEM AU CLIC/ 
    
    addButton4.addEventListener('click', function(){
        let currentValue4 = parseInt(nbItem4.textContent);
    
        currentValue4++;
        nbItem4.textContent = currentValue4;
        quantity4.textContent = currentValue4;
        updateSubTot4(currentValue4);
        updateVisibility();
        calculateTotal(
            parseFloat(calcSubTot4.textContent.replace(' €', ''))
        );
    });

    /SUPPRIMER UNE LIGNE DE L'APPERCU DU PANIER/ 
    
    trashlogo4.addEventListener('click', function(){
        if (confirm("Voulez vous supprimer cet objet ?")){
            nbItem4.textContent='0';
            updateVisibility();
            calculateTotal(parseFloat(calcSubTot4.textContent.replace(' €', '')));
        }
    });
    
    function updateVisibility(){
        if (parseInt(nbItem4.textContent) ===0){
            miniRecap4.style.visibility = 'hidden';
        } else{
            miniRecap4.style.visibility = 'visible';
        }
    }

    /METTRE A JOUR LE SOUS TOTAL DE MANIERE AUTOMATIQUE/ 
    
    function updateSubTot4(currentValue4){
        const subTot4 = currentValue4 * 90;
        const calcSubTot4 = document.querySelector('.calcSubTot4');
        calcSubTot4.textContent = subTot4 +" €";
    }
    });
       




/FERMER LE PANIER "REMPLI" EN CLIQUANT SUR UN BOUTON/ 
// -------------------------------------------------/

    const closeFullCart = document.querySelector('.full-cart-button');
    const emptyCart = document.querySelector('#popup-cart-empty');
    const fullCart = document.querySelector('#popup-cart-full');
    closeFullCart.addEventListener('click', function(){
        if (emptyCart.style.display === "block") {
            emptyCart.style.display = "none";
        } else if (fullCart.style.display === "block") {
            fullCart.style.display = "none";
        }
    });





/FERMER LE PANIER 'VIDE' EN CLIQUANT SUR UN BOUTON/ 
// -----------------------------------------------/

    const closeEmptyCart = document.querySelector('.empty-cart-button');
    closeEmptyCart.addEventListener('click', function(){
        if (emptyCart.style.display === "block") {
            emptyCart.style.display = "none";
        } else if (fullCart.style.display === "block") {
            fullCart.style.display = "none";
        }
    });





/ CALCULER LE TOTAL DANS L'APPERCU DU PANIER/ 
// -----------------------------------------/

    function calculateTotal() {
        const nbItem1 = parseInt(document.querySelector('.nbItem1').textContent);
        const nbItem2 = parseInt(document.querySelector('.nbItem2').textContent);
        const nbItem3 = parseInt(document.querySelector('.nbItem3').textContent);
        const nbItem4 = parseInt(document.querySelector('.nbItem4').textContent);
        const total = nbItem1*2100 + nbItem2*225 + nbItem3*110 + nbItem4*90;
        const calcTotal = document.querySelector('.calcTotal');
        calcTotal.textContent = total+ " €";
    }


/VIDER LE PANIER EN CLIQUANT SUR UN BOUTON/
// ---------------------------------------/

    const viderCart = document.querySelector('.viderCart');
    const nbItem1 = document.querySelector('.nbItem1');
    const nbItem2 = document.querySelector('.nbItem2');
    const nbItem3 = document.querySelector('.nbItem3');
    const nbItem4 = document.querySelector('.nbItem4');
    const miniRecap1 = document.querySelector('.mini-recap1');
    const miniRecap2 = document.querySelector('.mini-recap2');
    const miniRecap3 = document.querySelector('.mini-recap3');
    const miniRecap4 = document.querySelector('.mini-recap4');

    viderCart.addEventListener('click', function(){
        if (confirm("Voulez vous vraiment vider votre panier ?")){
            nbItem1.textContent='0';
            nbItem2.textContent='0';
            nbItem3.textContent='0';
            nbItem4.textContent='0';
            updateVisibility();
            calculateTotal();
        }
    });

    function updateVisibility(){
        if (parseInt(nbItem4.textContent) ===0){
            miniRecap1.style.visibility = 'hidden';
            fullCart.style.display = "none";
        } else{
            miniRecap1.style.visibility = 'visible';
        }
        if (parseInt(nbItem4.textContent) ===0){
            miniRecap2.style.visibility = 'hidden';
            fullCart.style.display = "none";
        } else{
            miniRecap2.style.visibility = 'visible';
        }
        if (parseInt(nbItem4.textContent) ===0){
            miniRecap3.style.visibility = 'hidden';
            fullCart.style.display = "none";
        } else{
            miniRecap3.style.visibility = 'visible';
        }
        if (parseInt(nbItem4.textContent) ===0){
            miniRecap4.style.visibility = 'hidden';
            fullCart.style.display = "none";
        } else{
            miniRecap4.style.visibility = 'visible';
        }
    }
