---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Vráti prvý posun hodnoty v zozname.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Vráti posun v zozname <code>list</code> prvého výskytu hodnoty v zozname <code>values</code>. Ak sa nenájdu žiadne výskyty, vráti hodnotu –1.    Možno stanoviť voliteľný parameter výskytu <code>occurrence</code>.<ul>   <li><code>occurrence</code>: Maximálny počet výskytov, ktoré možno vrátiť.</li></ul>


## Examples

### Example #1 
Nájdite prvú pozíciu v zozname \{1, 2, 3}, v ktorej sa vyskytuje hodnota 2 alebo 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
