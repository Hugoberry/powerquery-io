---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


## Description

Retourne un format binaire qui sélectionne le format binaire suivant en fonction d&#39;une valeur déjà lue.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Details

Retourne un format binaire qui sélectionne le format binaire suivant en fonction d'une valeur déjà lue.  Valeur du format binaire produite par cette fonction par étapes :<ul><li>Le format binaire spécifié par le paramètre <code>binaryFormat</code> est utilisé pour lire une valeur.</li><li>La valeur est passée à la fonction de choix spécifiée par le paramètre <code>chooseFunction</code>.</li><li>La fonction de choix inspecte la valeur et retourne un second format binaire.</li><li>Le second format binaire est utilisé pour lire une seconde valeur.</li><li>Si la fonction d'association est spécifiée, la première et la deuxième valeur sont passées à cette fonction et la valeur résultante est retournée.</li><li>Si la fonction d'association n'est pas spécifiée, la seconde valeur est retournée.</li><li>La seconde valeur est retournée.</li></ul>Le paramètre facultatif <code>type</code> indique le type de format binaire qui est retourné par la fonction de choix.  <code>type any</code>, <code>type list</code> ou <code>type binary</code> peut être spécifié.  Si le paramètre <code>type</code> n'est pas spécifié, <code>type any</code> est utilisé.   Si <code>type list</code> ou <code>type binary</code> est utilisé, le système peut retourner une valeur <code>binary</code> ou <code>list</code> diffusée en continu au lieu d'une valeur mise en mémoire tampon, ce qui peut réduire la quantité de mémoire requise pour lire le format.


## Examples

### Example #1 
Lecture d&#39;une liste d&#39;octets où le nombre d&#39;éléments est déterminé par le premier octet.
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
Lecture d&#39;une liste d&#39;octets où le nombre d&#39;éléments est déterminé par le premier octet, et qui conserve le premier octet lu.
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
Lecture d&#39;une liste d&#39;octets où le nombre d&#39;éléments est déterminé par le premier octet à l&#39;aide d&#39;une liste diffusée en continu.
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
