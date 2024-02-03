---
title: Binary.Split
---

# Binary.Split


## Description

Divideix el binari especificat en una llista de binaris mitjançant la mida de pàgina especificada.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

Divideix <code>binary</code> en una llista de binaris en què el primer element de la llista de sortida és un binaris que conté els primers <code>pageSize</code> bytes de    el binari de fonts; el següent element de la llista de sortida és un binari que conté els propers <code>pageSize</code> bytes del binari de fonts, etc.



## Category
Binary
