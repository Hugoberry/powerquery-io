---
title: List.Median
---

# List.Median


## Description

Vrátí střední hodnotu v seznamu.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Vrátí položku mediánu ze seznamu <code>list</code>. Pokud seznam neobsahuje žádné hodnoty, které nejsou <code>null</code>, vrátí funkce hodnotu <code>null</code>. Pokud seznam obsahuje sudý počet položek, funkce vybere menší ze dvou položek mediánu (pokud se seznam    neskládá výhradně z kalendářních dat a časů, dob trvání, čísel nebo časů – v takovém případě funkce vrátí průměrnou hodnotu těchto dvou položek).


## Examples

### Example #1 
Vyhledá střední hodnotu v seznamu &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
