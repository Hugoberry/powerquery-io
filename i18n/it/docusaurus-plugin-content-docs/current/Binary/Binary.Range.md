---
title: Binary.Range
---

# Binary.Range


## Description

Restituisce un subset del valore binario a partire da un offset.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Restituisce un subset del valore binario a partire dall'offset <code>binary</code>. Il parametro facoltativo <code>offset</code> imposta la lunghezza massima del subset.


## Examples

### Example #1 
Restituisce un subset del valore binario a partire dall&#39;offset 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Restituisce un subset di lunghezza 2 dall&#39;offset 6 del valore binario.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
