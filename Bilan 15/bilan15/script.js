window.addEventListener('DOMContentLoaded', function() {
    var date = new Date();
    var jourDeLAnnee = Math.ceil((date - new Date(date.getFullYear(), 0, 1)) / 86400000); // Calcul du numéro du jour de l'année
    document.getElementById('jour-de-l-annee').textContent = jourDeLAnnee + "00";
  });

  window.addEventListener('DOMContentLoaded', function() {
    var date = new Date();
    var jour = String(date.getDate()).padStart(2, '0'); // Jour avec formatage à deux chiffres
    var mois = String(date.getMonth() + 1).padStart(2, '0'); // Mois avec formatage à deux chiffres (janvier est 0)
    var annee = date.getFullYear(); // Année
  
    var dateDuJour = jour + '/' + mois + '/' + annee; // Formatage de la date
    document.getElementById('date-du-jour').textContent = dateDuJour;
  });
  



  document.addEventListener('DOMContentLoaded', function() {
    var premierMenu = document.getElementById('localisation1');
    var deuxiemeMenu = document.getElementById('loca-precis1');
  
    // Définir les options pour le deuxième menu déroulant en fonction de la valeur sélectionnée dans le premier
    premierMenu.addEventListener('change', function() {
      var valeurSelectionnee = premierMenu.value;
      deuxiemeMenu.innerHTML = ''; // Effacer les anciennes options
  
      // Ajouter les nouvelles options en fonction de la valeur sélectionnée dans le premier menu
      if (valeurSelectionnee === 'Tête') {
        ajouterOptions(['Nez','Bouche', 'Pomette Gauche', 'Pomette Droite','Frontal', 'Temporal Gauche', 'Temporal Droit', 'Pariétal Gauche', 'Pariétal Droit', 'Occipital', 'Arcade Gauche', 'Arcade droite'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Cou') {
        ajouterOptions(['Cou', 'Nuque',], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Thorax') {
        ajouterOptions(['Pectoral Gauche', 'Pectoral Droit', 'Diaphragme', 'Médiastin', 'Bord Gauche', 'Bord Droit'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Abdomen') {
        ajouterOptions(['Hypochondre Gauche', 'Epigastre', 'Hypochondre Droit', 'Flanc Gauche','Péri-Ombilical','Flanc Droit','Fosse Iliaque Gauche' , 'Hypogastre', 'Fosse Iliqaue Droite','Pelvienne'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Dos') {
        ajouterOptions(['Omoplate Gauche', 'Omoplate Droite', 'Milieu du dos', 'Fosse lombaire G', 'Fosse lombaire D'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Membre sup. D') {
        ajouterOptions(['Avant épaule', 'Arrière épaule', 'Bras', 'Avant bras', 'Poignet', 'Dos de la main', 'Paume de la main', 'Pouce', 'Index', 'Majeur', 'Annulaire', 'Auriculaire'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Membre sup. G') {
        ajouterOptions(['Avant épaule', 'Arrière épaule', 'Bras', 'Avant bras', 'Poignet', 'Dos de la main', 'Paume de la main', 'Pouce', 'Index', 'Majeur', 'Annulaire', 'Auriculaire'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Membre inf. D') {
        ajouterOptions(['Hanche','Aisne', 'Cuisse', 'Arrière cuisse', 'Avant Genou', 'Creux poplitée', 'Tibia', 'Mollet', 'Cheville', 'Maléole interne', 'Maléole externe', 'Coup du pied', 'Plante du pied', 'Talon', 'Orteil' ], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Membre inf. G') {
        ajouterOptions(['Hanche','Aisne', 'Cuisse', 'Arrière cuisse', 'Avant Genou', 'Creux poplitée', 'Tibia', 'Mollet', 'Cheville', 'Maléole interne', 'Maléole externe', 'Coup du pied', 'Plante du pied', 'Talon', 'Orteil' ], deuxiemeMenu);
      }
    });
  
    // Fonction pour ajouter des options à un menu déroulant
    function ajouterOptions(options, menu) {
      options.forEach(function(option) {
        var opt = document.createElement('option');
        opt.textContent = option;
        opt.value = option;
        menu.appendChild(opt);
      });
    }
  
    // Appeler manuellement la fonction pour initialiser les options du deuxième menu déroulant
    premierMenu.dispatchEvent(new Event('change'));
  });
  document.addEventListener('DOMContentLoaded', function() {
    var premierMenu = document.getElementById('localisation2');
    var deuxiemeMenu = document.getElementById('loca-precis2');
  
    // Définir les options pour le deuxième menu déroulant en fonction de la valeur sélectionnée dans le premier
    premierMenu.addEventListener('change', function() {
      var valeurSelectionnee = premierMenu.value;
      deuxiemeMenu.innerHTML = ''; // Effacer les anciennes options
  
      // Ajouter les nouvelles options en fonction de la valeur sélectionnée dans le premier menu
      if (valeurSelectionnee === 'Tête') {
        ajouterOptions(['Nez','Bouche', 'Pomette Gauche', 'Pomette Droite','Frontal', 'Temporal Gauche', 'Temporal Droit', 'Pariétal Gauche', 'Pariétal Droit', 'Occipital', 'Arcade Gauche', 'Arcade droite'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Cou') {
        ajouterOptions(['Cou', 'Nuque',], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Thorax') {
        ajouterOptions(['Pectoral Gauche', 'Pectoral Droit', 'Diaphragme', 'Médiastin', 'Bord Gauche', 'Bord Droit'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Abdomen') {
        ajouterOptions(['Hypochondre Gauche', 'Epigastre', 'Hypochondre Droit', 'Flanc Gauche','Péri-Ombilical','Flanc Droit','Fosse Iliaque Gauche' , 'Hypogastre', 'Fosse Iliqaue Droite','Pelvienne'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Dos') {
        ajouterOptions(['Omoplate Gauche', 'Omoplate Droite', 'Milieu du dos', 'Fosse lombaire G', 'Fosse lombaire D'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Membre sup. D') {
        ajouterOptions(['Avant épaule', 'Arrière épaule', 'Bras', 'Avant bras', 'Poignet', 'Dos de la main', 'Paume de la main', 'Pouce', 'Index', 'Majeur', 'Annulaire', 'Auriculaire'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Membre sup. G') {
        ajouterOptions(['Avant épaule', 'Arrière épaule', 'Bras', 'Avant bras', 'Poignet', 'Dos de la main', 'Paume de la main', 'Pouce', 'Index', 'Majeur', 'Annulaire', 'Auriculaire'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Membre inf. D') {
        ajouterOptions(['Aisne', 'Cuisse', 'Arrière cuisse', 'Avant Genou', 'Creux poplitée', 'Tibia', 'Mollet', 'Cheville', 'Maléole interne', 'Maléole externe', 'Coup du pied', 'Plante du pied', 'Talon', 'Orteil' ], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Membre inf. G') {
        ajouterOptions(['Aisne', 'Cuisse', 'Arrière cuisse', 'Avant Genou', 'Creux poplitée', 'Tibia', 'Mollet', 'Cheville', 'Maléole interne', 'Maléole externe', 'Coup du pied', 'Plante du pied', 'Talon', 'Orteil' ], deuxiemeMenu);
      }
    });
  
    // Fonction pour ajouter des options à un menu déroulant
    function ajouterOptions(options, menu) {
      options.forEach(function(option) {
        var opt = document.createElement('option');
        opt.textContent = option;
        opt.value = option;
        menu.appendChild(opt);
      });
    }
  
    // Appeler manuellement la fonction pour initialiser les options du deuxième menu déroulant
    premierMenu.dispatchEvent(new Event('change'));
  });
  document.addEventListener('DOMContentLoaded', function() {
    var premierMenu = document.getElementById('localisation3');
    var deuxiemeMenu = document.getElementById('loca-precis3');
  
    // Définir les options pour le deuxième menu déroulant en fonction de la valeur sélectionnée dans le premier
    premierMenu.addEventListener('change', function() {
      var valeurSelectionnee = premierMenu.value;
      deuxiemeMenu.innerHTML = ''; // Effacer les anciennes options
  
      // Ajouter les nouvelles options en fonction de la valeur sélectionnée dans le premier menu
      if (valeurSelectionnee === 'Tête') {
        ajouterOptions(['Nez','Bouche', 'Pomette Gauche', 'Pomette Droite','Frontal', 'Temporal Gauche', 'Temporal Droit', 'Pariétal Gauche', 'Pariétal Droit', 'Occipital', 'Arcade Gauche', 'Arcade droite'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Cou') {
        ajouterOptions(['Cou', 'Nuque',], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Thorax') {
        ajouterOptions(['Pectoral Gauche', 'Pectoral Droit', 'Diaphragme', 'Médiastin', 'Bord Gauche', 'Bord Droit'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Abdomen') {
        ajouterOptions(['Hypochondre Gauche', 'Epigastre', 'Hypochondre Droit', 'Flanc Gauche','Péri-Ombilical','Flanc Droit','Fosse Iliaque Gauche' , 'Hypogastre', 'Fosse Iliqaue Droite','Pelvienne'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Dos') {
        ajouterOptions(['Omoplate Gauche', 'Omoplate Droite', 'Milieu du dos', 'Fosse lombaire G', 'Fosse lombaire D'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Membre sup. D') {
        ajouterOptions(['Avant épaule', 'Arrière épaule', 'Bras', 'Avant bras', 'Poignet', 'Dos de la main', 'Paume de la main', 'Pouce', 'Index', 'Majeur', 'Annulaire', 'Auriculaire'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Membre sup. G') {
        ajouterOptions(['Avant épaule', 'Arrière épaule', 'Bras', 'Avant bras', 'Poignet', 'Dos de la main', 'Paume de la main', 'Pouce', 'Index', 'Majeur', 'Annulaire', 'Auriculaire'], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Membre inf. D') {
        ajouterOptions(['Aisne', 'Cuisse', 'Arrière cuisse', 'Avant Genou', 'Creux poplitée', 'Tibia', 'Mollet', 'Cheville', 'Maléole interne', 'Maléole externe', 'Coup du pied', 'Plante du pied', 'Talon', 'Orteil' ], deuxiemeMenu);
      } else if (valeurSelectionnee === 'Membre inf. G') {
        ajouterOptions(['Aisne', 'Cuisse', 'Arrière cuisse', 'Avant Genou', 'Creux poplitée', 'Tibia', 'Mollet', 'Cheville', 'Maléole interne', 'Maléole externe', 'Coup du pied', 'Plante du pied', 'Talon', 'Orteil' ], deuxiemeMenu);
      }
    });
  
    // Fonction pour ajouter des options à un menu déroulant
    function ajouterOptions(options, menu) {
      options.forEach(function(option) {
        var opt = document.createElement('option');
        opt.textContent = option;
        opt.value = option;
        menu.appendChild(opt);
      });
    }
  
    // Appeler manuellement la fonction pour initialiser les options du deuxième menu déroulant
    premierMenu.dispatchEvent(new Event('change'));
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    var slider = document.getElementById('slider');
    var valeurSpan = document.getElementById('valeur-slider');
  
    // Mettre à jour la valeur affichée lorsque le slider change
    slider.addEventListener('input', function() {
      valeurSpan.textContent = slider.value;
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var slider2 = document.getElementById('slider2');
    var valeurSpan2 = document.getElementById('valeur-slider2');
  
    // Mettre à jour la valeur affichée lorsque le slider change
    slider2.addEventListener('input', function() {
      valeurSpan2.textContent = slider2.value;
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    var slider3 = document.getElementById('slider3');
    var valeurSpan3 = document.getElementById('valeur-slider3');
  
    // Mettre à jour la valeur affichée lorsque le slider change
    slider3.addEventListener('input', function() {
      valeurSpan3.textContent = slider3.value;
    });
  });
  