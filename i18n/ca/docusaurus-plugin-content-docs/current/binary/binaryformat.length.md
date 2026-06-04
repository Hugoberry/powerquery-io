---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Retorna un format binari que limita la quantitat de dades que es poden llegir.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Retorna un format binari que limita la quantitat de dades que es poden llegir. Tant `BinaryFormat.List` com `BinaryFormat.Binary` es poden utilitzar per llegir fins al final de les dades. `BinaryFormat.Length` es pot utilitzar per limitar el nombre de bytes que es llegeixen. El paràmetre `binaryFormat` especifica el format binari al qual es limitarà. El paràmetre `length` especifica el nombre de bytes que es llegiran. El paràmetre `length` pot ser un valor de nombre o un valor de format binari que especifica el format del valor de longitud que apareix i precedeix el valor que s'està llegint.


## Examples

### Example #1
Limita el nombre de bytes llegits a 2 quan es llegeix una llista de bytes.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        2
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Limita el nombre de bytes llegits quan es llegeix una llista de bytes al valor del byte que precedeix la llista.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        BinaryFormat.Byte
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{2}
```




## Category
Binary Formats.Limiting input
