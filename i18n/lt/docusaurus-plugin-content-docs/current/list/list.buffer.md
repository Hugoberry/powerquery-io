---
title: List.Buffer
---

# List.Buffer


Kaupia sąrašą.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Remarks

Kaupia sąrašą `list` atmintyje. Šio iškvietimo rezultatas yra pastovus sąrašas.


## Examples

### Example #1
Sukurkite pastovią sąrašo kopiją \{1..10\}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
