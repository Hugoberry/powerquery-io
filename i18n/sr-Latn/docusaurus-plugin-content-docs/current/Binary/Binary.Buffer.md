---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Baferuje binarnu vrednost u memoriju.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Baferuje binarnu vrednost u memoriju. Rezultat ovog poziva je stabilna binarna vrednost, što znači da će imati determinističku dužinu i raspored bajtova.


## Examples

### Example #1 
Kreiranje stabilne verzije binarne vrednosti.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
