---
title: List.Select
---

# List.Select


## Description

A feltételnek megfelelő értékekből álló listát ad vissza.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

A(z) <code>list</code> lista azon értékeinek listáját adja vissza, amelyek megfelelnek a(z) <code>selection</code> kiválasztási feltételnek.


## Examples

### Example #1 
A 0-nál nagyobb értékek megkeresése az \{1, -3, 4, 9, -2} listán
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
