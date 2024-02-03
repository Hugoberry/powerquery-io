---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Poistaa syötearvojen kaikki esiintymät.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Poistaa kohteessa <code>list2</code> annettujen arvojen kaikki esiintymät luettelosta <code>list1</code>. Jos kohteen <code>list2</code> arvoja ei ole kohteessa <code>list1</code>, palautetaan alkuperäinen luettelo.    Valinnainen laskutoimituksen ehtoarvo <code>equationCriteria</code> voidaan määrittää ohjaamaan samanlaisuustestausta. 


## Examples

### Example #1 
Luo luettelo luettelosta \{1, 2, 3, 4, 5, 5} ilman arvoja \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
