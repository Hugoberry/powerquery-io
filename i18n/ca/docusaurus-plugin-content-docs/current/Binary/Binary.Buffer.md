---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Emmagatzema a la memòria intermèdia un valor binari.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Emmagatzema a la memòria intermèdia un valor binari.  El resultat d'aquesta crida és un valor binari estable, la qual cosa significa que tindrà una longitud i un ordre de bytes determinant.


## Examples

### Example #1 
Crea una versió estable del valor binari.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
