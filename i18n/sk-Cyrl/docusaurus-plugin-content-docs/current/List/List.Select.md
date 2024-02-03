---
title: List.Select
---

# List.Select


## Description

Vráti zoznam hodnôt, ktoré spĺňajú podmienku.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Vráti zoznam hodnôt zo zoznamu <code>list</code>, ktoré spĺňajú podmienku výberu <code>selection</code>.


## Examples

### Example #1 
Nájdite hodnoty v zozname \{1, -3, 4, 9, -2}, ktoré sú väčšie ako 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
