---
title: BinaryFormat.List
---

# BinaryFormat.List


Retourne un format binaire qui lit une séquence d&#39;éléments et retourne une liste.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Retourne un format binaire qui lit une séquence d'éléments et retourne une <code>list</code>.  Le paramètre <code>binaryFormat</code> spécifie le format binaire de chaque élément.  Il existe trois façons de déterminer le nombre d'éléments lus : <ul><li>si le <code>countOrCondition</code> n'est pas spécifié, le format binaire lit jusqu'à ce qu'il n'y ait plus d'éléments.</li><li>Si le <code>countOrCondition</code> est un nombre, alors le format binaire lit autant d'éléments.</li><li>Si le <code>countOrCondition</code> est une fonction, alors cette fonction sera appelée pour chaque élément lu.  La fonction retourne la valeur true pour continuer, et false pour cesser de lire les éléments.  L'élément final est inclus dans la liste. </li><li>Si <code>countOrCondition</code> est un format binaire, alors le nombre d'éléments doit précéder la liste, et le format spécifié est utilisé pour lire le nombre.</li></ul>


## Examples

### Example #1 
Lit les octets jusqu&#39;à la fin des données.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Lit deux octets.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #3 
Lit les octets jusqu&#39;à ce que la valeur d&#39;octet soit supérieure ou égale à deux.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, (x) => x < 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```




## Category
Binary Formats.Reading lists
