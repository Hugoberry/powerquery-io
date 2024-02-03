---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Utilizează valoarea binară ca zonă tampon în memorie.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Utilizează valoarea binară ca zonă tampon în memorie. Rezultatul acestui apel este o valoare binară stabilă, ceea ce înseamnă că va avea o lungime şi o ordine de octeţi determinate.


## Examples

### Example #1 
Creaţi o versiune stabilă a valorii binare.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
