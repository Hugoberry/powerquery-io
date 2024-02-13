---
title: Binary.Buffer
---

# Binary.Buffer


Memorizza nel buffer il valore binario in memoria.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Remarks

Memorizza nel buffer il valore binario in memoria. Il risultato della chiamata è un valore binario stabile che pertanto avrà lunghezza deterministica e ordine di byte.


## Examples

### Example #1 
Creare una versione stabile del valore binario.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
