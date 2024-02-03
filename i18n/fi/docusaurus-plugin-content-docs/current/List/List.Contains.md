---
title: List.Contains
---

# List.Contains


## Description

Ilmaisee, sisältääkö luettelo arvon.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Ilmaisee, sisältääkö luettelo <code>list</code> arvon <code>value</code>.    Palauttaa arvon true, jos arvo löytyy luettelosta, ja muutoin arvon false. Valinnainen laskutoimituksen ehtoarvo <code>equationCriteria</code> voidaan määrittää ohjaamaan samanlaisuustestausta. 


## Examples

### Example #1 
Selvitä, sisältääkö luettelo \{1, 2, 3, 4, 5} luvun 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Selvitä, sisältääkö luettelo \{1, 2, 3, 4, 5} luvun 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
