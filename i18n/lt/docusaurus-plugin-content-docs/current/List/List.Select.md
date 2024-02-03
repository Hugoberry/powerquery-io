---
title: List.Select
---

# List.Select


## Description

Pateikiamas sąlygą atitinkančių reikšmių sąrašas.


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

Pateikiamas sąrašas reikšmių iš sąrašo <code>list</code>, atitinkančių pasirinkimo sąlygą <code>selection</code>.


## Examples

### Example #1 
Sąraše \{1, -3, 4, 9, -2} raskite reikšmes, kurios yra didesnės už 0.
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
