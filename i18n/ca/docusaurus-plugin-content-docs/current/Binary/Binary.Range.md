---
title: Binary.Range
---

# Binary.Range


## Description

Retorna un subconjunt del valor binari que comença en un desplaçament.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Retorna un subconjunt del valor binari que comença al desplaçament <code>binary</code>. El paràmetre opcional <code>offset</code> defineix la longitud màxima del subconjunt.


## Examples

### Example #1 
Retorna un subconjunt del valor binari que comença al desplaçament 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Retorna un subconjunt de longitud 2 del desplaçament 6 del valor binari.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
