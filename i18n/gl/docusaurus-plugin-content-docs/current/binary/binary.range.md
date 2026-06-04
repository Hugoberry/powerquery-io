---
title: Binary.Range
---

# Binary.Range


Devolve un subconxunto do valor binario comezando nun desprazamento.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Remarks

Devolve un subconxunto do valor binario comezando no desprazamento `binary`. Un parámetro opcional, `offset`, establece a lonxitude máxima do subconxunto.


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
