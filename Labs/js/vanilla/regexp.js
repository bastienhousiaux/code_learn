//RegExp(modèle[, indicateurs]) ou new RegExp(modèle[, indicateurs]) ou /modele/indicateurs

/*indicateurs
g recherche de toute les occurences au lieu de juste la premiere
i ignorer la casse
m multiligne (pour \n et \r)
u traite une séquence unicode
y pour stopper à la prop lastIndex de la RegExp
*/

/*caractères
. n'importe quel caractere excepté \n \r \u2028 \u2029
\d un chiffre de 0 à 9
\D un caractère qui n'est pas un chiffre de 0 à 9
\w un caractère dans l'ensemble chiffre lettre(majuscule et minuscule) et _
\W un caractère qui n'est pas compris dans \w
\s un caractère d'espacement
\S un caractère qui n'est pas dans \s
\t une tabulation
\r un retour chariot
\n un saut de ligne
\v une tabulation verticale
\f un saut de page
[\b] un caractère de retour arrière
\0 le caractère NUL (ne pas mettre de chiffre juste après)
\cX ou X est une lettre caractère de controle de cette lettre
\xhh deux chiffres hexadécimaux
\uhhhh quatre chiffres hexadécimaux
\u{hhhh} \u{hhhhh} chiffres hexadécimaux précédés du u
\ permet d'échapper un caractère spécial d'une regexp pex : \* pour chercher une * au lieu d'indiquer une multiplicité
*/

/*Ensembles de caractères
[xyz] un caractère qui soit x y ou z
[a-c] un caractère qui soit a b ou c
[^xyz] et [^a-c] un caractère qui n'est pas compris dans ces ensembles
*/

// x|y l'un ou l'autre => a|z un caractère qui soit a ou z

/*Limites
^ au début-> ^a un a en début de chaine ou de ligne
$ à la fin-> $a un a en fin de chaine ou de ligne
\b limite de mot espace début de chaine et fin de chaine
\B qui n'est pas dans \b
*/

/*Groupes et références arrières
(x) capture x pour une utilisation postérieure (après test de la chaine) les groupes sont référencés par $1 à $n
    n étant le nombre de captures faites
\n ou n est un chiffre, référence à la nième correspondance
(?:x) x sans capture de la correpondance
*/

/*Quantificateurs
b* 0 à plusieurs b
b+ 1 à plusieurs b
b? 0 ou 1 b
b(?=c) b immédatiemment suivant par c (donc "bc")
b(?!c) b qui n'est pas immédiatemment suivant par un c
x{n} n occurence -> b{3} ="bbb"
x{n,m} entre n et m occurence (inclus) -> b{1,3} ="b" ou "bb" ou "bbb"

x*?
x+?
x??
x{n}?
x{n,}?
x{n,m}?

rajouter le ? après un quantifieur permet de chercher la plus petite correspondance (en taille)
*/

/*
RegExp.$1 à $9 contient les capture de la dernière regexp effectuée
.lastIndex index de la fin d'une occurence
*/

/*
regexObj.exec(chaîne):Array
renvoie toute les correspondances de la regexp dans chaine

regexObj.test(chaîne):boolean
verifie qu'il y a au moins une correspondance

regexObj.toString():string
renvoie une chaine représentant la regexp
*/

