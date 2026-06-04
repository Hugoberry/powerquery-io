---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


Ottaa käyttöön kunkin kohteen \{ old, new \} toiston.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

Suorittaa annetut korvaukset luettelolle `list`. Korvaamistoiminto `replacements` muodostuu kahden arvon (vanha arvo ja uusi arvo) luettelosta. Valinnainen laskutoimituksen ehtoarvo `equationCriteria` voidaan määrittää ohjaamaan samanlaisuustestausta.


## Examples

### Example #1
Luo luettelo luettelosta \{1, 2, 3, 4, 5\} korvaamalla arvo 5 arvolla -5 ja arvo 1 arvolla -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
