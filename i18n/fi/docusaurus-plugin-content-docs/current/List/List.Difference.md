---
title: List.Difference
---

# List.Difference


## Description

Palauttaa kahden annetun luettelon eron.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Palauttaa luettelon <code>list1</code> kohteet, joita ei ole luettelossa <code>list2</code>. Arvojen kaksoiskappaleita tuetaan.    Valinnainen laskutoimituksen ehtoarvo <code>equationCriteria</code> voidaan määrittää ohjaamaan samanlaisuustestausta. 


## Examples

### Example #1 
Selvitä luettelon \{1, 2, 3, 4, 5} kohteet, joita ei ole luettelossa \{4, 5, 3}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Selvitä luettelon \{1, 2} kohteet, joita ei ole luettelossa \{1, 2, 3}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
