---
title: List.PositionOf
---

# List.PositionOf


## Description

Vráti posuny hodnoty v zozname.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Vráti posun, pri ktorom sa hodnota <code>value</code> vyskytuje v zozname <code>list</code>. Ak sa príslušná hodnota nevyskytuje, vráti hodnotu –1.    Možno stanoviť voliteľný parameter výskytu <code>occurrence</code>.<ul>   <li><code>occurrence</code>: Maximálny počet výskytov, ktoré sa majú nahlásiť.</li></ul>


## Examples

### Example #1 
Nájdite pozíciu v zozname \{1, 2, 3}, v ktorej sa vyskytuje hodnota 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
