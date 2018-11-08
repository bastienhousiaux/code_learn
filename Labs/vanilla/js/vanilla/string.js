var abc="abc";
//String.fromCharCode(num1, ..., numN):string
//créé une chaine de caractère à partir des codes UTF-16 passés en arguments

//String.fromCodePoint(num1[, ...[, numN]]):string
//créé une chaine de caractère à partir de codets

//str.charAt(index):string
//renvoie le caractère à la position index. Si la position est en dehors, renvoie une chaine vide

//str.charCodeAt(index):number
//renvoie le code UTF-16 du code se trouvant à la position index. NaN si la valeur est en dehors de la chaine

// str.codePointAt(index):number
//renvoie la valeur unicode à l'index donné, renvoie undefined si en dehors de la chaine

//str.concat(string2[, string3, ..., stringN]):string
//renvoie une nouvelle chaine contenant la fusion de la chaine appelante et des chaines passées en parametres
//si les valeurs ne sont pas des chaines, la methode toString est utilisée
//note : concat est plus lent que l'opérateurs +

// str.endsWith(chaîneRecherchée[, position]):boolean
//regarde si la chaine se termine par celle fournie en parametre, on peut egalement passé une valeur
//pour faire la recherche en considerant length comme la valeur ainsi passée
"abcdefgh".endsWith("cd",4);//true

//str.includes(chaîneRecherchée[, position]):boolean
//cherche si la chaine contient celle passée en parametre, on peut également spécifié l'index du début de la recherche

// str.indexOf(valeurRecherchée[, indexDébut]):number
//renvoie l'index de début la premiere occurencec chaine recherchée, on peut spécifier l'index de début 
//de la recherche renvoie -1 si la chaine n'existe pas

//str.lastIndexOf(valeurRecherchée[, indiceDébut]):number
//idem mais pour la derniere occurence

//str.localeCompare(chaine [, locales [, options]]):number
//renvoie la comparaison alphabétique des lettres de str et chaine
//négatif si str est avant chaine positif si chaine est avant str nulle si elle sont égales

//str.match(regexp):Array
//retourne un tableau des occurences dans la chaine qui correspondent à la regex

//str.normalize([form]):string
//renvoie la forme normalisée de la chaine

//str.padEnd(longueurCible [, chaîneComplémentaire]):string
//renvoie une nouvelle chaine qui ajoute la chaine passée en paramètre à la chaine appelant en la répétant 
//pour obtenir la longueur souhaitée, rempli avec des espaces si aucune chaine n'est passée en parametre
abc.padEnd(10,"A");//abcAAAAAAA
abc;//abc

//str.padStart(longueurCible [, chaîneComplémentaire]):string
//idem mais en ajoutant au début

//str.repeat(x):string
//renvoie une nouvelle chaine composée de x fois la chaine appelante

// str.replace(regexp|str2, strRemplacement|fonction(correspondance[, p1[, p2[, p3]]], decalage, chaine):string):string
//renvoie une nouvelle chaine en remplacant ce qui correspond au premier argument (regexp ou sous chaine) par
//le second (chaine ou fonction renvoyant une chaine)
//si la fonction est utilisée, ses paramètres sont la chaine correspondant actuelle, facultativement les n premieres
//occurences de chaque correspondance, l'index de debut et la chaine testée
//parametre spéciaux pour le remplacement:
//$$ ajoute un $
//$& la chaine qui a correspondu
//'$ ce qui précède la correspondance
//$' ce qui suis la correspondance
//$n la nieme correspondance


//str.search(regexp):number
//renvoie l'index de début de la premiere occurence qui correspond a la regexp renvoie -1 si aucune n'est trouvée

//chn.slice(indiceDebut[, indiceFin]):string
//renvoie une nouvelle chaine contenue entre indiceDebut et indiceFin (length-1 si non spécifié)

//str.split([séparateur[, qtéMax]]):Array
//renvoie un tableau de sous chaine qui contient toute les valeurs entre séparateur, qtéMax permet de limiter
//le nombre d'objets dans le tableau

//str.startsWith(chaîneRecherchée [, position]):boolean
//renvoie true si la chaine en parametre se trouve au début de la chaine appelant, position permet de commencer
//à un autre endroit de la chaine (index)

//chn.substr(début[, longueur]):string
//renvoie une nouvelle chaine à partir du paramètre début dans la chaine appelant et pour une taille de longueur

//str.substring(indiceA[, indiceB]):string
//idem mais on spécifie l'index de fin à la place de la longueur

//str.toLocaleLowerCase([locale]):string
//renvoie la chaine en petite casse

//str.toLocaleUpperCase([locale]):string
//renvoie la chaine en grande casse

// str.toLowerCase():string
//renvoie la chaine en petite casse

//str.toUpperCase():string
//renvoie la chaine en grande casse

//str.toString():string
//renvoie la meme chaine

//str.trim():string
//renvoie une nouvelle chaine en retirant les espaces blancs au debut et a la fin
"      t t t      ".trim()//t t t
//str.trimEnd():string
//str.trimRight():string
//synonymes idem mais uniquement pour la fin

//str.trimStart():string
//str.trimLeft():string
//synonymes idem mais uniquement pour le début