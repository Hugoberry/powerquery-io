---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


## Description

Retourne un format binaire qui transformera les valeurs lues par un autre format binaire.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Details

Retourne un format binaire qui transformera les valeurs lues par un autre format binaire.  Le paramètre <code>binaryFormat</code> spécifie le format binaire utilisé pour lire la valeur.  Le <code>function</code> est appelé avec la valeur lue, et retourne la valeur transformée.


## Examples

### Example #1 
Lit un octet et en ajoute un.
```powerquery
let
    binaryData = #binary({1}),
    transformFormat = BinaryFormat.Transform(
        BinaryFormat.Byte,
        (x) => x + 1
    )
in
    transformFormat(binaryData)
```

Result: 
```powerquery
2
```




## Category
Binary Formats.Transforming what was read
