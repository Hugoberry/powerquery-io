---
title: BinaryFormat.Group
---

# BinaryFormat.Group


Retorna un format binari que llegeix un grup d'elements.


## Syntax

```powerquery
BinaryFormat.Group(
    binaryFormat as function,
    group as list,
    optional extra as function,
    optional lastKey as any
) as function
```


## Remarks

Els paràmetres són els següents:

-   El paràmetre `binaryFormat` especifica el format binari del valor clau.
-   El paràmetre `group` proporciona informació sobre el grup d'elements coneguts.
-   El paràmetre opcional `extra` es pot utilitzar per especificar una funció que retornarà un valor de format binari per al valor a partir de qualsevol clau que fos inesperada. Si no s'especifica el paràmetre `extra`, es provocarà un error si hi ha valors clau inesperats.

El paràmetre `group` especifica una llista de definicions d'elements. Cada definició d'element és una llista, que conté de 3 a 5 valors, com s'indica a continuació:

-   Valor clau. El valor de la clau que correspon a l'element. Ha de ser únic dins del conjunt d'elements.
-   Format d'element. El format binari corresponent al valor de l'element. Això permet que cada element tingui un format diferent.
-   Repetició d'element. El valor `BinaryOccurrence.Type` per a les vegades que s'espera que l'element aparegui al grup. Els elements necessaris que no estan presents provoquen un error. Els elements duplicats necessaris o opcionals es gestionen com a valors clau inesperats.
-   Valor d'element per defecte (opcional). Si el valor d'element per defecte apareix a la llista de definició de l'element i no és nul, s'utilitzarà en lloc del valor per defecte. El valor per defecte per a elements repetitius o opcionals és nul, i el valor per defecte per a valors repetitius és una llista buida \{ \}.
-   Transformació de valor d'element (opcional). Si la funció de transformació del valor d'element està present a la llista de definició de l'element i no és nul,s'invocarà per transformar el valor de l'element abans de retornar-lo. La funció de transformació només s'invoca si l'element apareix a l'entrada (no s'invocarà mai amb el valor per defecte).


## Examples

### Example #1
A continuació s'assumeix un valor clau que és un únic byte, amb 4 elements esperats al grup, tots els quals tenen un byte de dades a continuació de la clau. L'element apareix a l'entrada tal com s'indica a continuació:

-   La clau 1 és necessària i sí que apareix amb el valor 11.
-   La clau 2 es repeteix i apareix dues vegades amb el valor 22, i dóna com a resultat un valor de \{ 22, 22 \}.
-   La clau 3 és opcional i no apareix, i dóna com a resultat un valor de nul.
-   La clau 4 es repeteix, però no apareix, i dóna com a resultat un valor de \{ \}.
-   La clau 5 no forma part del grup, però apareix una vegada amb el valor 55. La funció addicional es crida amb el valor clau 5 i retorna el format corresponent a aquest valor (BinaryFormat.Byte). El valor 55 es llegeix i es descarta.
```powerquery
let
    b = #binary({
        1, 11,
        2, 22,
        2, 22,
        5, 55,
        1, 11
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Required},
            {2, BinaryFormat.Byte, BinaryOccurrence.Repeating},
            {3, BinaryFormat.Byte, BinaryOccurrence.Optional},
            {4, BinaryFormat.Byte, BinaryOccurrence.Repeating}
        },
        (extra) => BinaryFormat.Byte
    )
in
    f(b)
```

Result: 
```powerquery
{11, {22, 22}, null, {}}
```


### Example #2
L'exemple següent il·lustra la transformació del valor d'element i el valor d'element per defecte. L'element repetitiu amb la clau 1 suma la llista de valors llegits mitjançant List.Sum. L'element opcional amb la clau 2 té un valor per defecte de 123 en lloc de nul.
```powerquery
let
    b = #binary({
        1, 101,
        1, 102
    }),
    f = BinaryFormat.Group(
        BinaryFormat.Byte,
        {
            {1, BinaryFormat.Byte, BinaryOccurrence.Repeating,
              0, (list) => List.Sum(list)},
            {2, BinaryFormat.Byte, BinaryOccurrence.Optional, 123}
        }
    )
in
    f(b)
```

Result: 
```powerquery
{203, 123}
```




## Category
Binary Formats.Reading a group of items
