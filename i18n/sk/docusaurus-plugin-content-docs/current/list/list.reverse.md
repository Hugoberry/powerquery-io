---
title: List.Reverse
---

# List.Reverse


Zmení poradie hodnôt v zozname.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Remarks

Vráti zoznam s hodnotami v zozname `list` v opačnom poradí.


## Examples

### Example #1
Vytvorte zoznam zo zoznamu \{1..10\} v opačnom poradí.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
