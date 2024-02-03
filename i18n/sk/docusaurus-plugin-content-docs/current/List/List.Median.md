---
title: List.Median
---

# List.Median


## Description

Vráti hodnotu mediána v zozname.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Vráti položku mediána zoznamu <code>list</code>. Táto funkcia vráti hodnotu <code>null</code>, ak zoznam neobsahuje žiadne hodnoty, ktoré nie sú <code>null</code>.    Ak existuje párny počet položiek, funkcia vyberie tú menšiu z dvoch položiek mediána, pokiaľ zoznam    nepozostáva výlučne z datetime, duration, number alebo time – v takom prípade vráti priemer daných dvoch položiek.


## Examples

### Example #1 
Nájdite medián zoznamu &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
