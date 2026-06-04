---
title: Binary.Split
---

# Binary.Split


Divideix el binari especificat en una llista de binaris mitjançant la mida de pàgina especificada.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Divideix `binary` en una llista de binaris en què el primer element de la llista de sortida és un binaris que conté els primers `pageSize` bytes de el binari de fonts; el següent element de la llista de sortida és un binari que conté els propers `pageSize` bytes del binari de fonts, etc.



## Category
Binary
