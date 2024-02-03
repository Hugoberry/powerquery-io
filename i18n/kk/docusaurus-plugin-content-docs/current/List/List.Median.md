---
title: List.Median
---

# List.Median


## Description

Тізімдегі медиана мәнін қайтарады.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

<code>list</code> тізімінің медиана элементін қайтарады. Бұл функция тізімде <code>null</code> емес мәндер болмаса, <code>null</code> қайтарады.    Егер элементтердің саны жұп болса, тізім    толығымен күн мен уақыттан, ұзақтықтардан, сандардан немесе уақыттардан құралған жағдайдан басқа кезде (екі элементтің орташа мәнін қайтарады), функция екі медиана элементінің кішірегін таңдайды.


## Examples

### Example #1 
&lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; тізімінің медиана мәнін анықтау.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
