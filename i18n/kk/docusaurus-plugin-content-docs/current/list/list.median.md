---
title: List.Median
---

# List.Median


Тізімдегі медиана мәнін қайтарады.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

`list` тізімінің медиана элементін қайтарады. Бұл функция тізімде `null` емес мәндер болмаса, `null` қайтарады. Егер элементтердің саны жұп болса, тізім толығымен күн мен уақыттан, ұзақтықтардан, сандардан немесе уақыттардан құралған жағдайдан басқа кезде (екі элементтің орташа мәнін қайтарады), функция екі медиана элементінің кішірегін таңдайды.


## Examples

### Example #1
`{5, 3, 1, 7, 9}` тізімінің медиана мәнін анықтау.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
