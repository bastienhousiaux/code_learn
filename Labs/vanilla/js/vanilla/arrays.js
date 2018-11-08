var abc ="abc";
var arrAbc=["a","b","c"];
var arr123=[1,2,3];
var arr456=[4,5,6];
var arr789=[7,8,9];

var nestedArr=[20,[21,22],23];

var temp;

function Foo(arg){
    this.arg=arg;
}

var foo=new Foo("fooArg");

var log=console.log;
// Array.from(arrayLike [, fonctionMap[, thisArg]]):Array
// créé un array à partir d'un array like en les passant facultativement par une fonction de transformation
Array.from(abc);//["a","b","c"]
Array.from(arr123, x => x*2);//[2,4,6]
Array.from(abc,function(a){return this.arg+a},foo);//["fooArga", "fooArgb", "fooArgc"]

// Array.isArray(obj):boolean
// teste si l'objet est un array
Array.isArray([1, 2, 3]);   // true
Array.isArray({toto: 123}); // false
Array.isArray("tototruc");  // false
Array.isArray(undefined);   // false

// Array.of(element0[, element1[, ...[, elementN]]]):Array
// créé un array à partir des valeurs passées en paramètre
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]
//différence avec Array()
Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]


// arr.concat(valeur1[, valeur2[, ...[, valeurN]]]):Array
// renvoie un array contenant la fusion du premier et des paramètres (array ou valeur)
arr123.concat(arrAbc,arr456);//[1, 2, 3, "a", "b", "c", 4, 5, 6]
arr123.concat("boum","vlan",arr456);//[1, 2, 3, "boum", "vlan", 4, 5, 6]
arr123.concat(nestedArr);//[1, 2, 3, 20, [21,22], 23]

// arr.copyWithin(cible, début, fin):Array
// copie une partie du tableau à un autre endroit de celui(indiqué par cible)
//je copie en 0 ce qui se trouve en 2 et en 1 ce qui se trouve en 3 je n'applique pas pour l'index 4
[1,2,3,4,5,6].copyWithin(0,2,4);//[3, 2, 3, 4, 5, 6]
//je copie en index 2 (6-4) la valeur de l'index 4 (6-2) et le dernier élément 
//(6 hors du tableau mais pour prendre en compte le dernier élément)
[1,2,3,4,5,6].copyWithin(-4,-2,6);//[1, 2, 5, 6, 5, 6]

// arr.entries():Iterator
// renvoie un itérateur du tableau
var iterator=arrAbc.entries();
iterator.next().value;//[0,"a"]
iterator.next().value;//[1,"b"]
iterator.next().value;//[2,"c"]
//on peut donc faire
while(temp=iterator.next().value);
//et
for (let e of arrAbc) {
    //e vaut uniquement la valeur sans index
}

// arr.every(callback(valeur[[[,index],array]):boolean, thisArg]):boolean
// teste si toute les valeurs du tableau répondent true à la fonction callback
arr123.every(x=>x<4);//true
arr123.every(x=>x<3);//false

// arr.fill(valeur[[, début], fin]):Array
// rempli le tableau ou une partie de celui ci avec la valeur passée en paramètre
// index négatifs autorisés | le tableau est à la fois modifié et retourné
[1,4,5,6,2,0].fill(9);//[9, 9, 9, 9, 9, 9]

// arr.filter(callback(val [, index[, array]]):boolean):Array;
// renvoie un nouveau tableau composé des valeurs qui ont passé le test du callback
temp=[1,2,3,4,5].filter(x=>x%2===0);//[2, 4]

// arr.find(callback(val [, index[, array]]):boolean[, thisArg]):any
// renvoie le premier élément du tableau qui renvoie true au callback
arr123.find(x=>x>1);//2
arr123.find(x=>x>5);//undefined

// arr.findIndex(callback[, thisArg]):number
// idem find mais renvoie l'index de l'élément ou -1


// arr.forEach(callback(val [, index[, array]]), thisArg):void
// boucle sur chaque élément du tableau en exécutant callback dessus


// array.includes(élémentRecherché, indiceDépart):boolean
// renvoie true si l'élément se trouve dans le tableau

// arr.indexOf(élémentRecherché, indiceDébut):number
// renvoie l'index de la première valeur du tableau qui correspond renvoie -1 si aucun élément ne correspond

// arr.join([séparateur]):string
// renvoie une chaine de caractère contenant tous les éléments l'un à la suite de l'autre espacés par le paramètre
// séparateur si fourni

// arr.keys():Iterator
// renvoie un iterateur sur les index

// arr.lastIndexOf(élémentRecherché, indexDébut):number
// renvoie le dernier index de la valeur recherchée renvoie -1 si aucune valeur ne correspond

// arr.map(callback(val [, index[, array]]):any [, thisArg]):Array
// renvoie un nouveau tableau avec les valeurs retournées par callback sur chaque valeur du tableau d'origine

// arr.pop():any
// supprime le dernier élément du tableau et le retourne si le tableau est vide renvoie undefined

// arr.push(élément1, ..., élémentN):number
// ajoute les éléments passés en paramètres en fin de tableau et renvoie la nouvelle longueur de celui ci

// arr.reduce(callback(accumulateur,valeur,[, index[, array]]):any, [valeurInitiale]):any
// applique le callback sur chaque élément tout en sauvant la valeur de retour dans accumulateur pour la passer à
// l'élément suivant retourne la valeur finale d'accumulateur, on peut spécifier la valeur initiale de l'accumulateur

// arr.reduceRight(callback[, valeurInitiale]):any
// idem reduce mais en partant de la fin du tableau en allant vers le début

// arr.reverse():Array
// inverse l'ordre des éléments d'un tableau

// arr.shift():any
// supprimer le premier élément du tableau et le renvoie

// arr.slice([début [, fin]]):Array
// renvoie un tableau composé des mêmes éléments si aucun paramètre n'est fourni une copie complète du tableau
// sera renvoyé sinon un tableau de l'interval spécifié

// arr.some(callback(val [, index[, array]]):boolean[, thisArg]):boolean
// teste si au moins un élément du tableau passe le test du callback

// arr.sort([fonctionComparaison(a,b):number]):Array
// trie le tableau, si aucune fonction n'est fournie, le tableau sera trié sur base des caractères Unicode
// lorsque a doit etre placé avant b on renvoie une valeur négative,positive si b doit etre avant a, nulle si rien 
// ne doit changer
[48,2,8,6,14,23].sort((a,b)=>{return a-b});//[2, 6, 8, 14, 23, 48]
["zzzz","zz","z","zzz"].sort((a,b)=>{return a.length-b.length});//["z", "zz", "zzz", "zzzz"]

// array.splice(start, [x[, élem1[, élem2[, ...]]]]):Array
// supprime x élément du tableau à partir de l'index start et ajoute facultativement des nouveaux éléments au même endroit
// si x n'est pas spécifié supprime les éléments de l'index start jusqu'a la fin du tableau
// renvoie les valeurs supprimées

["a","b","c","d","e","f"].splice(3);//["a", "b", "c"]
["a","b","c","d","e","f"].splice(3,2);//["a", "b", "c", "f"]
["a","b","c","d","e","f"].splice(3,2,1,2,3);//["a", "b", "c", 1, 2, 3, "f"]

// arr.toLocaleString([locales, [options]]):string
// renvoie une chaine de caractere du join des differents elements du tableau auquel on a appliqué leur propre
// toLocaleString

// arr.toString():string
// renvoie une chaine de caractère représentant les éléments du tableau
arrAbc.toString();//a,b,c

// arr.unshift([élém1[, ...[, élémN]]]):number
// ajoute les éléments spécifiés au début du tableau et renvoie sa nouvelle longueur

// array.values():Iterator
// renvoie un itérateur sur les valeurs du tableau