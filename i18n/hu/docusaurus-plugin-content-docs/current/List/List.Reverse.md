---
title: List.Reverse
---

# List.Reverse


## Description

Megfordítja az értékek sorrendjét a listán.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

Egy olyan listát ad vissza, amely fordított sorrendben tartalmazza az eredeti <code>list</code> lista értékeit.


## Examples

### Example #1 
Lista létrehozása az \{1..10} tartományból fordított sorrendben
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
