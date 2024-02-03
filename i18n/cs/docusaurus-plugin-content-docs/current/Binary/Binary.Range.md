---
title: Binary.Range
---

# Binary.Range


## Description

Vrátí podmnožinu binární hodnoty začínající posunem.


## Syntax

```powerquery
Binary.Range(
    binary as binary,
    offset as number,
    optional count as number
) as binary
```


## Details

Vrátí podmnožinu binární hodnoty začínající posunem <code>binary</code>. Volitelný parametr <code>offset</code> určuje maximální délku podmnožiny.


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
