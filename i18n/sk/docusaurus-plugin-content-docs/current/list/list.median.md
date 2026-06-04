---
title: List.Median
---

# List.Median


Vráti hodnotu mediána v zozname.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Vráti položku mediána zoznamu `list`. Táto funkcia vráti hodnotu `null`, ak zoznam neobsahuje žiadne hodnoty, ktoré nie sú `null`. Ak existuje párny počet položiek, funkcia vyberie tú menšiu z dvoch položiek mediána, pokiaľ zoznam nepozostáva výlučne z datetime, duration, number alebo time – v takom prípade vráti priemer daných dvoch položiek.


## Examples

### Example #1
Nájdite medián zoznamu `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
