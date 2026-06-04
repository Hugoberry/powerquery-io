---
title: Binary.Range
---

# Binary.Range


Vrátí podmnožinu binární hodnoty začínající posunem.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Remarks

Vrátí podmnožinu binární hodnoty začínající posunem `binary`. Volitelný parametr `offset` určuje maximální délku podmnožiny.


## Examples

### Example #1
Vrátí podmnožinu binární hodnoty začínající posunem 6.
```powerquery
Binary.Range(#binary({0..10}), 6)
```

Result: 
```powerquery
#binary({6, 7, 8, 9, 10})
```


### Example #2
Vrátí podmnožinu binární hodnoty o délce 2 od posunu 6.
```powerquery
Binary.Range(#binary({0..10}), 6, 2)
```

Result: 
```powerquery
#binary({6, 7})
```




## Category
Binary
