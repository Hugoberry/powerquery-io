---
title: List.RemoveRange
---

# List.RemoveRange


Pašalinamas reikšmių skaičius, pradedant nuo nurodytos padėties.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Remarks

Pašalinamos `count` reikšmės, esančios `list`, pradedant nuo nurodytos padėties, `index`.


## Examples

### Example #1
Pašalinkite 3 reikšmes, esančias sąraše \{1, 2, 3, 4, -6, -2, -1, 5\}, pradėdami nuo indekso 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
