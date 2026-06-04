---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Poistaa syötearvojen kaikki esiintymät.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Poistaa kohteessa `list2` annettujen arvojen kaikki esiintymät luettelosta `list1`. Jos kohteen `list2` arvoja ei ole kohteessa `list1`, palautetaan alkuperäinen luettelo. Valinnainen laskutoimituksen ehtoarvo `equationCriteria` voidaan määrittää ohjaamaan samanlaisuustestausta.


## Examples

### Example #1
Luo luettelo luettelosta \{1, 2, 3, 4, 5, 5\} ilman arvoja \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
