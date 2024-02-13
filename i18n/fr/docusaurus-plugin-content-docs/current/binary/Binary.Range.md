---
title: Binary.Range
---

# Binary.Range


Retourne un sous-ensemble de la valeur binaire commençant à un décalage.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Remarks

Retourne un sous-ensemble de la valeur binaire commençant au décalage <code>binary</code>. Un paramètre facultatif <code>offset</code> définit la longueur maximale du sous-ensemble.


## Examples

### Example #1 
Retourne un sous-ensemble de la valeur binaire commençant au décalage 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Retourne un sous-ensemble de longueur 2 à partir du décalage 6 de la valeur binaire.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
