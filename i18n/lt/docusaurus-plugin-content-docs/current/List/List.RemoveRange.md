---
title: List.RemoveRange
---

# List.RemoveRange


## Description

Pašalinamas reikšmių skaičius, pradedant nuo nurodytos padėties.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

Pašalinamos <code>count</code> reikšmės, esančios <code>list</code>, pradedant nuo nurodytos padėties, <code>index</code>.


## Examples

### Example #1 
Pašalinkite 3 reikšmes, esančias sąraše \{1, 2, 3, 4, -6, -2, -1, 5}, pradėdami nuo indekso 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
