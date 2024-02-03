---
title: List.Repeat
---

# List.Repeat


## Description

Egy olyan listát ad vissza, amely az eredeti lista adott számú ismétlődését tartalmazza.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

Egy olyan listát ad vissza, amely az eredeti <code>list</code> lista <code>count</code> ismétlődését tartalmazza.


## Examples

### Example #1 
Olyan lista létrehozása, amely az \{1, 2} lista 3 ismétlődését tartalmazza
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
