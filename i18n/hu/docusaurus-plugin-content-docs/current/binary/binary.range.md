---
title: Binary.Range
---

# Binary.Range


A bináris érték részhalmazát adja vissza egy eltolástól kezdődően.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Remarks

A bináris érték részhalmazát adja vissza a(z) `binary` eltolástól kezdődően. Az opcionális `offset` paraméter a részhalmaz maximális hosszát határozza meg.


## Examples

### Example #1
A bináris érték részhalmazát adja vissza a 6-os eltolástól kezdődően.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2
A bináris érték 2 számból álló részhalmazát adja vissza a 6-os eltolástól kezdődően.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
