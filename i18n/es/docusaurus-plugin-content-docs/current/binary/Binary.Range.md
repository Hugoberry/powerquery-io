---
title: Binary.Range
---

# Binary.Range


Devuelve un subconjunto del valor binario comenzando en un desplazamiento.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Remarks

Devuelve un subconjunto del valor binario comenzando en el desplazamiento <code>binary</code>. Un parámetro opcional, <code>offset</code>, establece la longitud máxima del subconjunto.


## Examples

### Example #1 
Devuelve un subconjunto del valor binario comenzando en el desplazamiento 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Devuelve un subconjunto de longitud 2 a partir del desplazamiento 6 del valor binario.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
