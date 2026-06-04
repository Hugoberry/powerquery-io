---
title: List.Difference
---

# List.Difference


Palauttaa kahden annetun luettelon eron.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Palauttaa luettelon `list1` kohteet, joita ei ole luettelossa `list2`. Arvojen kaksoiskappaleita tuetaan. Valinnainen laskutoimituksen ehtoarvo `equationCriteria` voidaan määrittää ohjaamaan samanlaisuustestausta.


## Examples

### Example #1
Selvitä luettelon \{1, 2, 3, 4, 5\} kohteet, joita ei ole luettelossa \{4, 5, 3\}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Selvitä luettelon \{1, 2\} kohteet, joita ei ole luettelossa \{1, 2, 3\}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
