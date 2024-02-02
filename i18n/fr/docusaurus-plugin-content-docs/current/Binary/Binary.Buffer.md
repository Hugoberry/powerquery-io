---
title: Binary.Buffer
---

# Binary.Buffer


## Description

Place la valeur binaire dans la mémoire tampon.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

Place la valeur binaire dans la mémoire tampon. Le résultat de cet appel est une valeur binaire stable, avec une longueur et un ordre d'octets déterministes.


## Examples

### Example #1 
Créez une version stable de la valeur binaire.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
