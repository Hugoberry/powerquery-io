---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Poista luettelossa olevat kohteet kohteesta list1.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

Poistaa kohteessa <code>list2</code> annettujen arvojen kaikki esiintymät kohteesta <code>list1</code>. Jos kohteen <code>list2</code> arvoja ei ole kohteessa <code>list1</code>, palautetaan alkuperäinen luettelo.


## Examples

### Example #1 
Poistaa luettelon \{2, 4, 6} kohteet luettelosta \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
