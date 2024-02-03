---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

Ottaa käyttöön kunkin kohteen  \{ old, new } toiston.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

Suorittaa annetut korvaukset luettelolle <code>list</code>. Korvaamistoiminto <code>replacements</code> muodostuu kahden arvon (vanha arvo ja uusi arvo) luettelosta.    Valinnainen laskutoimituksen ehtoarvo <code>equationCriteria</code> voidaan määrittää ohjaamaan samanlaisuustestausta.


## Examples

### Example #1 
Luo luettelo luettelosta \{1, 2, 3, 4, 5} korvaamalla arvo 5 arvolla -5 ja arvo 1 arvolla -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
