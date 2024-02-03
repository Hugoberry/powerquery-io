---
title: Binary.Buffer
---

# Binary.Buffer


## Description

A memóriában puffereli a bináris értéket.


## Syntax

```powerquery
Binary.Buffer(
    binary as binary
) as binary
```


## Details

A memóriában puffereli a bináris értéket. A hívás eredménye egy stabil bináris érték, ami azt jelenti, hogy az érték meghatározott hosszúsággal és bájtsorrenddel rendelkezik.


## Examples

### Example #1 
Létrehozza a bináris érték stabil verzióját.
```powerquery
Binary.Buffer(Binary.FromList({0..10}))
```

Result: 
```powerquery
#binary({0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
```




## Category
Binary
