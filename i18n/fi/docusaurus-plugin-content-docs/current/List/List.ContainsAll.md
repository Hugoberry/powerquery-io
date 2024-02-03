---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Ilmaisee, missä luettelo sisältää kaikki toisen luettelon arvot.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Ilmaisee, sisältääkö luettelo <code>list</code> kaikki toisen luettelon <code>values</code> arvot.    Palauttaa arvon true, jos arvo löytyy luettelosta, ja muutoin arvon false. Valinnainen laskutoimituksen ehtoarvo <code>equationCriteria</code> voidaan määrittää ohjaamaan samanlaisuustestausta. 


## Examples

### Example #1 
Selvitä, sisältääkö luettelo \{1, 2, 3, 4, 5} luvut 3 ja 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Selvitä, sisältääkö luettelo \{1, 2, 3, 4, 5} luvut 5 ja 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
