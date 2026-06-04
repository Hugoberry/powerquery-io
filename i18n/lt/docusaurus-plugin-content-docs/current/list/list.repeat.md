---
title: List.Repeat
---

# List.Repeat


Pateikiamas sąrašas, kuriame nurodytas pradinio sąrašo pasikartojimų skaičius.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Pateikiamas sąrašas, kuriame nurodytas pradinio sąrašo `list` pasikartojimų `count` skaičius.


## Examples

### Example #1
Sukurkite sąrašą, kuriame \{1, 2\} pasikartoja 3 kartus.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
