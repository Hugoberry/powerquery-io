---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Ilmaisee, missä luettelo sisältää minkä tahansa toisen luettelon arvoista.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Ilmaisee, sisältääkö luettelo <code>list</code> mitään toisen luettelon <code>values</code> arvoista.        Palauttaa arvon true, jos arvo löytyy luettelosta, ja muutoin arvon false. Valinnainen laskutoimituksen ehtoarvo <code>equationCriteria</code> voidaan määrittää ohjaamaan samanlaisuustestausta. 


## Examples

### Example #1 
Selvitä, sisältääkö luettelo \{1, 2, 3, 4, 5} luvun 3 tai 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Selvitä, sisältääkö luettelo \{1, 2, 3, 4, 5} luvun 6 tai 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
