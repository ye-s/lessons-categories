(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,i,n){e.exports=n(17)},,,,,,function(e,i,n){},function(e,i,n){},function(e,i,n){},function(e,i,n){"use strict";n.r(i);var t=n(0),a=n.n(t),s=n(7),r=n.n(s),d=(n(14),n(1)),o=n(2),l=n(4),c=n(3),u=n(5),p=function(e){function i(){var e,n;Object(d.a)(this,i);for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(i)).call.apply(e,[this].concat(a)))).handleClick=function(){var e=n.props,i=e.name;(0,e.showLesson)(i)},n}return Object(u.a)(i,e),Object(o.a)(i,[{key:"render",value:function(){var e=this.props,i=e.name,n=e.depth,t=e.isLocked,s={marginLeft:"".concat(15*n-15,"px")};return a.a.createElement("div",{className:"lessonBlock",style:s,onClick:this.handleClick},a.a.createElement("p",null,i),t&&a.a.createElement("span",{className:"lessonLocked"},"locked"))}}]),i}(t.Component),h=function(e,i){for(var n=e.findIndex(function(e){return e.id===i}),t=!1,a=1;a<n;a++)t=e[a].quiz_enabled||t;return t},m=function(e){function i(){var e,n;Object(d.a)(this,i);for(var t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(c.a)(i)).call.apply(e,[this].concat(s)))).state={isExpanded:!1,isChildExpanded:!1,childNumber:0,initialChilds:n.props.innerLessons.length},n.expandCategory=function(e){var i=n.props,t=i.innerLessons,a=i.depth,s=n.state.isExpanded?-t.length:t.length;n.setState(function(e,i){return{isExpanded:!e.isExpanded,childNumber:a>1?e.childNumber:s}}),a>1&&n.updateChildQuantityModifier(s)},n.showLesson=function(e){(0,n.props.showLesson)(e)},n.updateChildQuantityModifier=function(e){var i=n.props,t=i.onExpand,a=(i.depth,n.state);a.childNumber,a.isExpanded,a.isChildExpanded;n.setState(function(i,n){i.childNumber;return{isChildExpanded:i.isChildExpanded,childNumber:i.childNumber+e}}),t&&e&&t(e)},n.renderChildren=function(){var e=n.props,t=e.innerLessons,s=e.depth;e.showLesson;return t.map(function(e){var r=e.name,d=e.isCategory,o=e.children,l=e.id,c=s+1,u=!1;return d||(u=h(t,l)),d?a.a.createElement(i,{key:l,name:r,isCategory:d,innerLessons:o,depth:c,onExpand:n.updateChildQuantityModifier,showLesson:n.showLesson}):a.a.createElement(p,{key:l,name:r,depth:c,isLocked:u,showLesson:n.showLesson})})},n}return Object(u.a)(i,e),Object(o.a)(i,[{key:"render",value:function(){var e,i=this.state,n=i.childNumber,t=(i.isChildExpanded,i.isExpanded),s=this.props,r=s.name,d=s.isCategory,o=s.innerLessons,l=s.depth,c=1,u=0;o&&(u=35*(c+=n)),e={height:"".concat(this.state.isExpanded?u:35,"px"),marginLeft:"".concat(15*l-15,"px")};var p=d&&o&&t;return a.a.createElement("div",{className:"lessonCategoryBlock",style:e},a.a.createElement("div",{className:"lessonCategory",onClick:this.expandCategory},a.a.createElement("div",{className:"lessonCategory--arrow"}),a.a.createElement("p",null,r)),p&&this.renderChildren())}}]),i}(t.Component),g=function(e){function i(){var e,n;Object(d.a)(this,i);for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(i)).call.apply(e,[this].concat(a)))).showLesson=function(e){(0,n.props.showLesson)(e)},n}return Object(u.a)(i,e),Object(o.a)(i,[{key:"render",value:function(){var e=this,i=this.props,n=i.lessons;i.showLesson;return a.a.createElement("div",{className:"lessonCategoriesContainer"},n.map(function(i){var n=i.name,t=i.isCategory,s=i.children,r=i.id;return t?a.a.createElement(m,{key:r,name:n,isCategory:t,innerLessons:s,depth:1,showLesson:e.showLesson}):a.a.createElement(p,{key:r,id:r,name:n,depth:1,showLesson:e.showLesson})}))}}]),i}(t.Component),b=function(e){function i(){return Object(d.a)(this,i),Object(l.a)(this,Object(c.a)(i).apply(this,arguments))}return Object(u.a)(i,e),Object(o.a)(i,[{key:"render",value:function(){var e=this.props,i=e.content,n=e.chosenLesson;return a.a.createElement("div",{className:"lessonContent"},a.a.createElement("h2",null,n),a.a.createElement("p",null,i))}}]),i}(t.Component),v=(n(15),n(16),[{id:56612,parentId:null,name:"Willkommen",active:!0,isCategory:!0,static:!1,position:0,quiz_enabled:!1,children:[{id:56613,parentId:56612,name:"Willkommen",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:!1,children:[]},{id:130467,parentId:56612,name:"Abnehmen selbst und st\xe4ndig - ein Basis-Webinar*",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]}]},{id:56614,parentId:null,name:"Block 1",active:!0,isCategory:!0,static:!1,position:2,quiz_enabled:!1,children:[{id:56615,parentId:56614,name:"Einstieg in den Kurs",active:!0,isCategory:!0,static:!1,position:0,quiz_enabled:!1,children:[{id:56616,parentId:56615,name:"Kurs\xfcbersicht",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:!1,children:[]},{id:56617,parentId:56615,name:"Deine Top-Module",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:!1,children:[]},{id:56618,parentId:56615,name:"Warum abnehmen? *",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:!1,children:[]}]},{id:56619,parentId:56614,name:"Selbstverantwortung",active:!0,isCategory:!0,static:!1,position:1,quiz_enabled:!1,children:[{id:56620,parentId:56619,name:"Ankommen",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:!1,children:[]},{id:56621,parentId:56619,name:"Gewichtskontrolle",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:!1,children:[]},{id:56622,parentId:56619,name:"Vertrag mit Dir selbst *",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:!1,children:[]}]},{id:56623,parentId:56614,name:"Kalorien + Ern\xe4hrungspyramiden",active:!0,isCategory:!0,static:!1,position:2,quiz_enabled:!1,children:[{id:56624,parentId:56623,name:"Kalorien *",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:!1,children:[]},{id:56625,parentId:56623,name:"Ern\xe4hrungspyramiden",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:!1,children:[]},{id:56626,parentId:56623,name:"Ern\xe4hrungspl\xe4ne",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:!1,children:[]}]},{id:56627,parentId:56614,name:"Fette einsparen",active:!0,isCategory:!0,static:!1,position:3,quiz_enabled:!1,children:[{id:56628,parentId:56627,name:"Fett",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:!1,children:[]},{id:56629,parentId:56627,name:"Klassische Fett-Spar-Tipps *",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:!1,children:[]},{id:56630,parentId:56627,name:"Das Butter-Brot",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:!1,children:[]}]},{id:56631,parentId:56614,name:"Vorrats-Check und Einkaufs-Check",active:!0,isCategory:!0,static:!1,position:4,quiz_enabled:!1,children:[{id:56632,parentId:56631,name:"Vorrats-Check *",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:56633,parentId:56631,name:"Deine Extras",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:56634,parentId:56631,name:"Einkaufs-Check *",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56635,parentId:56614,name:"Achtsam essen",active:!0,isCategory:!0,static:!1,position:5,quiz_enabled:!1,children:[{id:56636,parentId:56635,name:"Achtsamkeitsexperiment",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:56637,parentId:56635,name:"Mahlzeiten-Regeln *",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:!1,children:[]},{id:56638,parentId:56635,name:"Schokoladen-Meditation",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56639,parentId:56614,name:"Getr\xe4nke, Gem\xfcse und (zuckerarmes) Obst",active:!0,isCategory:!0,static:!1,position:6,quiz_enabled:!1,children:[{id:56640,parentId:56639,name:"Gem\xfcse und Obst *",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:56641,parentId:56639,name:"Trinken",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:56642,parentId:56639,name:"Innere Werte",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56643,parentId:56614,name:"(Neue) Bewegungsstrategien",active:!0,isCategory:!0,static:!1,position:7,quiz_enabled:!1,children:[{id:56644,parentId:56643,name:"Deine Bewegung *",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:56645,parentId:56643,name:"Ideen-Mix *",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:56646,parentId:56643,name:"Fettverbrennung und Eiwei\xdf",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56647,parentId:56614,name:"Zauberessen",active:!0,isCategory:!0,static:!1,position:8,quiz_enabled:!1,children:[{id:56648,parentId:56647,name:"Produkt-Ideen",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:56649,parentId:56647,name:"Eiwei\xdf-Pulver *",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:56650,parentId:56647,name:"Kleine Helferlein",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56651,parentId:56614,name:"Zwischenfazit",active:!0,isCategory:!0,static:!1,position:9,quiz_enabled:!1,children:[{id:56652,parentId:56651,name:"R\xfcckblick *",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:56653,parentId:56651,name:"Zwischenfazit",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:56654,parentId:56651,name:"K\xf6rperwahrnehmung",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]}]},{id:56655,parentId:null,name:"Block 2",active:!0,isCategory:!0,static:!1,position:43,quiz_enabled:!1,children:[{id:56656,parentId:56655,name:"Deine Vision",active:!0,isCategory:!0,static:!1,position:0,quiz_enabled:!1,children:[{id:56657,parentId:56656,name:"Deine Vision",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:56658,parentId:56656,name:"Kurs auf Erfolg",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:56659,parentId:56656,name:"S\xe4ulen der Gesundheit *",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56660,parentId:56655,name:"Zucker und Insulin",active:!0,isCategory:!0,static:!1,position:1,quiz_enabled:!1,children:[{id:56661,parentId:56660,name:"Zucker und Insulin *",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:56662,parentId:56660,name:"Vollkorn",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:56663,parentId:56660,name:"Kleine Zuckerkunde",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56664,parentId:56655,name:"Kohlenhydratarme Mahlzeiten",active:!0,isCategory:!0,static:!1,position:2,quiz_enabled:!1,children:[{id:56665,parentId:56664,name:"Mahlzeiten-Baukasten *",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:!1,children:[]},{id:56666,parentId:56664,name:"Kohlenhydratearme Rezepte",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:56667,parentId:56664,name:"Low Carb und Ketogen",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56668,parentId:56655,name:"Selbstreflexion",active:!0,isCategory:!0,static:!1,position:3,quiz_enabled:!1,children:[{id:56669,parentId:56668,name:"Selbstreflexion",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:56670,parentId:56668,name:"Start in den Tag *",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:56671,parentId:56668,name:"Ern\xe4hrungsverhalten",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:!1,children:[]}]},{id:56672,parentId:56655,name:"Stressoren und L\xf6sungen",active:!0,isCategory:!0,static:!1,position:4,quiz_enabled:!1,children:[{id:56673,parentId:56672,name:"Anspannung und Entspannung *",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:56674,parentId:56672,name:"Emotionale Problemzonen *",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:56675,parentId:56672,name:"Zeit und Zeitdiebe",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56676,parentId:56655,name:"Schnelle Haupt- und Zwischenmahlzeiten",active:!0,isCategory:!0,static:!1,position:5,quiz_enabled:!1,children:[{id:56677,parentId:56676,name:"Schnell in der K\xfcche *",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:56678,parentId:56676,name:"5 Sterne f\xfcr die Mahlzeit",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:56679,parentId:56676,name:"Lunch im Glas / Overnight Oats",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56680,parentId:56655,name:"Dein Trainingsplan",active:!0,isCategory:!0,static:!1,position:6,quiz_enabled:!1,children:[{id:56681,parentId:56680,name:"Individueller Trainingsplan *",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:56682,parentId:56680,name:"Finde Deinen Sport",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:56683,parentId:56680,name:"Mini-Fitness-\xdcbungen",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56684,parentId:56655,name:"Zauberfragen",active:!0,isCategory:!0,static:!1,position:7,quiz_enabled:!1,children:[{id:56685,parentId:56684,name:"Hast Du gute Laune? *",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:56686,parentId:56684,name:"Der Aladin-Faktor",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:56687,parentId:56684,name:"Die 101-Traumliste",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56688,parentId:56655,name:"Zwischenfazit 2",active:!0,isCategory:!0,static:!1,position:8,quiz_enabled:!1,children:[{id:56689,parentId:56688,name:"Mein lieber Mensch",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:56690,parentId:56688,name:"R\xfcckblick",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:56691,parentId:56688,name:"10-Punkte-Plan *",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]}]},{id:56692,parentId:null,name:"Block 3",active:!0,isCategory:!0,static:!1,position:80,quiz_enabled:!1,children:[{id:56693,parentId:56692,name:"Deine Inneren Stimmen",active:!0,isCategory:!0,static:!1,position:0,quiz_enabled:!1,children:[{id:56694,parentId:56693,name:"F\xfcttere den wei\xdfen Wolf",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:69761,parentId:56693,name:"Die inneren Antreiber*",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:56695,parentId:56693,name:"Swing",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56696,parentId:56692,name:"Di\xe4tkonzepte und Fasten",active:!0,isCategory:!0,static:!1,position:1,quiz_enabled:!1,children:[{id:56697,parentId:56696,name:"Powerwochen *",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:69762,parentId:56696,name:"Intervallfasten",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:69763,parentId:56696,name:"Plus-Minus-Prinzip",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56698,parentId:56692,name:"Eiwei\xdfk\xfcche",active:!0,isCategory:!0,static:!1,position:2,quiz_enabled:!1,children:[{id:56699,parentId:56698,name:"Eiwei\xdf *",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:69767,parentId:56698,name:"Eiwei\xdfreiche K\xfcche",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:69768,parentId:56698,name:"Vegan",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56700,parentId:56692,name:"Hei\xdfhunger und schwierige Situationen",active:!0,isCategory:!0,static:!1,position:3,quiz_enabled:!1,children:[{id:56701,parentId:56700,name:"Hei\xdfhunger und schwierige Situationen",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:69770,parentId:56700,name:"Wenn Hunger nicht das Problem ist ... *",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:69771,parentId:56700,name:"Urlaub und Restaurant",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56702,parentId:56692,name:"Umgang mit R\xfcckschl\xe4gen",active:!0,isCategory:!0,static:!1,position:4,quiz_enabled:!1,children:[{id:56703,parentId:56702,name:"Umgang mit R\xfcckschl\xe4gen *",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:69896,parentId:56702,name:"Weitere Strategien",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:69897,parentId:56702,name:"Suppenfasten",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56704,parentId:56692,name:"Rezepte nachhaltig ver\xe4ndern",active:!0,isCategory:!0,static:!1,position:5,quiz_enabled:!1,children:[{id:56705,parentId:56704,name:"optimale Mahlzeit",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:69910,parentId:56704,name:"Eigene Rezepte ver\xe4ndern *",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:69911,parentId:56704,name:"Pl\xe4ne selbst erstellen",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]},{id:56711,parentId:56692,name:"Endfazit",active:!0,isCategory:!0,static:!1,position:8,quiz_enabled:!1,children:[{id:56712,parentId:56711,name:"Das letzte Modul",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:56713,parentId:56711,name:"So bitte nicht! *",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:66961,parentId:56711,name:"Wissen wie's geht",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]}]}]},{id:56714,parentId:null,name:"Bonus-Module",active:!0,isCategory:!0,static:!1,position:117,quiz_enabled:null,children:[{id:56800,parentId:56714,name:"Eiwei\xdfstarter",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:56715,parentId:56714,name:"Krisen meistern",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:null,children:[]},{id:56716,parentId:56714,name:"Einstieg nach Ausstieg",active:!0,isCategory:!1,static:!0,position:2,quiz_enabled:null,children:[]},{id:56717,parentId:56714,name:"Urlaub / Feiern",active:!0,isCategory:!1,static:!0,position:3,quiz_enabled:null,children:[]}]},{id:56718,parentId:null,name:"Abnehmen Verstehen",active:!0,isCategory:!0,static:!1,position:122,quiz_enabled:!1,children:[{id:56719,parentId:56718,name:"Abnehmen Verstehen",active:!0,isCategory:!1,static:!0,position:1,quiz_enabled:!1,children:[]},{id:56720,parentId:56718,name:"Klartext",active:!0,isCategory:!1,static:!1,position:2,quiz_enabled:!0,children:[]},{id:56729,parentId:56718,name:"Kalorienbedarf",active:!0,isCategory:!1,static:!1,position:3,quiz_enabled:!1,children:[]},{id:56724,parentId:56718,name:"Kalorien",active:!0,isCategory:!1,static:!1,position:4,quiz_enabled:!1,children:[]},{id:56725,parentId:56718,name:"Gem\xfcse und Obst",active:!0,isCategory:!1,static:!1,position:5,quiz_enabled:!1,children:[]},{id:56726,parentId:56718,name:"Bewegung",active:!0,isCategory:!1,static:!1,position:6,quiz_enabled:!1,children:[]},{id:56722,parentId:56718,name:"Essverhalten",active:!0,isCategory:!1,static:!1,position:7,quiz_enabled:!1,children:[]},{id:56723,parentId:56718,name:"Stressoren",active:!0,isCategory:!1,static:!1,position:8,quiz_enabled:!1,children:[]},{id:56721,parentId:56718,name:"Motivation",active:!0,isCategory:!1,static:!1,position:9,quiz_enabled:!1,children:[]},{id:56727,parentId:56718,name:"Abnehmen",active:!0,isCategory:!1,static:!1,position:10,quiz_enabled:!1,children:[]},{id:56728,parentId:56718,name:"Abnehmen II",active:!0,isCategory:!1,static:!1,position:11,quiz_enabled:!1,children:[]},{id:56730,parentId:56718,name:"Di\xe4ten",active:!0,isCategory:!1,static:!1,position:12,quiz_enabled:!1,children:[]},{id:56732,parentId:56718,name:"Schnell abnehmen?",active:!0,isCategory:!1,static:!1,position:13,quiz_enabled:!1,children:[]},{id:56731,parentId:56718,name:"Achtsam essen",active:!0,isCategory:!1,static:!1,position:14,quiz_enabled:!1,children:[]},{id:56733,parentId:56718,name:"Nachhaltige Ver\xe4nderung",active:!0,isCategory:!1,static:!1,position:15,quiz_enabled:!1,children:[]}]},{id:56734,parentId:null,name:"Webinar-Paket",active:!0,isCategory:!0,static:!1,position:138,quiz_enabled:!1,children:[{id:64012,parentId:56734,name:"7 Schl\xfcssel f\xfcr Deinen Abnehm-Erfolg",active:!0,isCategory:!1,static:!0,position:0,quiz_enabled:null,children:[]},{id:56735,parentId:56734,name:"Kalorien + Austausch",active:!0,isCategory:!1,static:!1,position:1,quiz_enabled:!1,children:[]},{id:56736,parentId:56734,name:"Extras + Alternativen",active:!0,isCategory:!1,static:!1,position:2,quiz_enabled:!1,children:[]},{id:56737,parentId:56734,name:"Schnelle Gem\xfcsek\xfcche",active:!0,isCategory:!1,static:!1,position:3,quiz_enabled:!1,children:[]},{id:56738,parentId:56734,name:"Rezepte + Ver\xe4nderung",active:!0,isCategory:!1,static:!1,position:4,quiz_enabled:!1,children:[]},{id:56739,parentId:56734,name:"Top 10 Motivation",active:!0,isCategory:!1,static:!1,position:5,quiz_enabled:!1,children:[]},{id:56740,parentId:56734,name:"Essverhalten \xe4ndern",active:!0,isCategory:!1,static:!1,position:6,quiz_enabled:!1,children:[]},{id:56742,parentId:56734,name:"Abnehm-Zauber",active:!0,isCategory:!1,static:!1,position:7,quiz_enabled:!1,children:[]},{id:64011,parentId:56734,name:"Schnell Abnehmen ohne Jojo-Effekt",active:!0,isCategory:!1,static:!0,position:8,quiz_enabled:null,children:[]},{id:56741,parentId:56734,name:"Leberfasten und Formuladi\xe4t",active:!0,isCategory:!1,static:!1,position:9,quiz_enabled:!1,children:[]}]}]),y=function(e){function i(){var e,n;Object(d.a)(this,i);for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(c.a)(i)).call.apply(e,[this].concat(a)))).state={lessons:v,content:"",chosenLesson:""},n.showLesson=function(e){for(var i="",t=0;t<1e3;t++)i+="".concat(e," ");n.setState(function(n,t){return{content:i,chosenLesson:e}})},n}return Object(u.a)(i,e),Object(o.a)(i,[{key:"render",value:function(){var e=this.state,i=e.content,n=e.chosenLesson;return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"lessonsModule"},a.a.createElement(g,{showLesson:this.showLesson,lessons:this.state.lessons}),a.a.createElement(b,{content:i,chosenLesson:n})))}}]),i}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.1d0549c2.chunk.js.map