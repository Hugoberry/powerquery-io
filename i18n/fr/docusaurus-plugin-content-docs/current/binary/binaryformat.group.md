---
title: BinaryFormat.Group
---

# BinaryFormat.Group


Retourne un format binaire qui lit un groupe d'éléments.


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

Les paramètres sont les suivants :

-   Le paramètre `binaryFormat` spécifie le format binaire de la valeur de clé.
-   Le paramètre `group` fournit des informations sur le groupe d'éléments connus.
-   Le paramètre `extra` facultatif peut être utilisé pour spécifier une fonction qui retourne une valeur de format binaire pour la valeur qui suit une clé inattendue. Si le paramètre `extra` n'est pas spécifié, une erreur est générée en cas de valeurs de clés inattendues.

Le paramètre `group` spécifie une liste de définitions d'élément. Chaque définition d'élément est une liste, contenant 3 à 5 valeurs, comme suit :

-   Valeur de clé. Valeur de la clé qui correspond à l'élément. Elle doit être unique dans le jeu d'éléments.
-   Format d'élément. Format binaire correspondant à la valeur de l'élément. Cela permet à chaque élément d'avoir un format différent.
-   Occurrence de l'élément. Valeur `BinaryOccurrence.Type` indiquant le nombre de fois qu'il est prévu que l'élément apparaisse dans le groupe. Les éléments requis qui ne sont pas présents retournent une erreur. Les éléments en double obligatoires ou facultatifs sont traités comme des valeurs de clés inattendues.
-   Valeur d'élément par défaut (facultatif). Si la valeur par défaut de l'élément apparaît dans la liste des définitions d'élément et n'a pas la valeur NULL, elle sera utilisée à la place de la valeur par défaut. La valeur par défaut des éléments répétitifs ou facultatifs est NULL, et la valeur par défaut des valeurs répétitives est une liste vide \{ \}.
-   Transformation de la valeur d'élément (facultatif). Si la fonction de transformation de la valeur d'élément est présente dans la liste des définitions d'élément et n'est pas NULL, elle est appelée pour transformer la valeur de l'élément avant qu'elle ne soit retournée. La fonction de transformation est appelée uniquement si l'élément apparaît dans l'entrée (elle n'est jamais appelée avec la valeur par défaut).


## Examples

### Example #1
L'exemple suivant suppose une valeur de clé d'un seul octet, avec 4 éléments attendus dans le groupe, qui ont tous un octet de données après la clé. Les éléments affichés dans l'entrée sont les suivants :

-   La clé 1 est requise, et apparaît avec la valeur 11.
-   La clé 2 se répète, apparaît deux fois avec la valeur 22 et génère une valeur \{ 22, 22 \}.
-   La clé 3 est facultative ; elle n'apparaît pas, et génère une valeur NULL.
-   La clé 4 se répète, mais n'apparaît pas, et génère une valeur \{ \}.
-   La clé 5 ne fait pas partie du groupe, mais apparaît une fois avec la valeur 55. La fonction supplémentaire est appelée avec la valeur de clé 5, puis retourne le format correspondant à cette valeur (BinaryFormat.Byte). La valeur 55 est lue et ignorée.
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
L'exemple suivant illustre la transformation de la valeur d'élément et la valeur d'élément par défaut. L'élément répétitif avec la clé 1 somme la liste des valeurs lues avec List.Sum. L'élément facultatif avec la clé 2 a une valeur par défaut 123 au lieu de NULL.
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
