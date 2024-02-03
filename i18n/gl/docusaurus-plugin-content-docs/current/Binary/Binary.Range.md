---
title: Binary.Range
---

# Binary.Range


## Description

Devolve un subconxunto do valor binario comezando nun desprazamento.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Devolve un subconxunto do valor binario comezando no desprazamento <code>binary</code>. Un parámetro opcional, <code>offset</code>, establece a lonxitude máxima do subconxunto.


## Examples

### Example #1 
Devolve un subconxunto do valor binario comezando no desprazamento 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2 
Devolve un subconxunto de lonxitude 2 do desprazamento 6 do valor binario.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
