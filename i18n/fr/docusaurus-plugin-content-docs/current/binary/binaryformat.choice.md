---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Retourne un format binaire qui sélectionne le format binaire suivant en fonction d'une valeur déjà lue.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Remarks

Retourne un format binaire qui sélectionne le format binaire suivant en fonction d'une valeur déjà lue. Valeur du format binaire produite par cette fonction par étapes :

-   Le format binaire spécifié par le paramètre `binaryFormat` est utilisé pour lire une valeur.
-   La valeur est passée à la fonction de choix spécifiée par le paramètre `chooseFunction`.
-   La fonction de choix inspecte la valeur et retourne un second format binaire.
-   Le second format binaire est utilisé pour lire une seconde valeur.
-   Si la fonction d'association est spécifiée, la première et la deuxième valeur sont passées à cette fonction et la valeur résultante est retournée.
-   Si la fonction d'association n'est pas spécifiée, la seconde valeur est retournée.
-   La seconde valeur est retournée.

Le paramètre facultatif `type` indique le type de format binaire qui est retourné par la fonction de choix. `type any`, `type list` ou `type binary` peut être spécifié. Si le paramètre `type` n'est pas spécifié, `type any` est utilisé. Si `type list` ou `type binary` est utilisé, le système peut retourner une valeur `binary` ou `list` diffusée en continu au lieu d'une valeur mise en mémoire tampon, ce qui peut réduire la quantité de mémoire requise pour lire le format.


## Examples

### Example #1
Lecture d'une liste d'octets où le nombre d'éléments est déterminé par le premier octet.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2
Lecture d'une liste d'octets où le nombre d'éléments est déterminé par le premier octet, et qui conserve le premier octet lu.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3
Lecture d'une liste d'octets où le nombre d'éléments est déterminé par le premier octet à l'aide d'une liste diffusée en continu.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
