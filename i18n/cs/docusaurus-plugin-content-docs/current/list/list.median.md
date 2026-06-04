---
title: List.Median
---

# List.Median


Vrátí střední hodnotu v seznamu.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Vrátí položku mediánu ze seznamu `list`. Pokud seznam neobsahuje žádné hodnoty, které nejsou `null`, vrátí funkce hodnotu `null`. Pokud seznam obsahuje sudý počet položek, funkce vybere menší ze dvou položek mediánu (pokud se seznam neskládá výhradně z kalendářních dat a časů, dob trvání, čísel nebo časů – v takovém případě funkce vrátí průměrnou hodnotu těchto dvou položek).


## Examples

### Example #1
Vyhledá střední hodnotu v seznamu `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
