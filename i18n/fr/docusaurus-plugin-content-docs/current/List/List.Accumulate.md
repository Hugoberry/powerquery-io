---
title: List.Accumulate
---

# List.Accumulate


## Description

Cumule une valeur de résumé à partir des éléments dans la liste.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Cumule une valeur de résumé à partir des éléments dans la liste <code>list</code> à l'aide de <code>accumulator</code>.    Un paramètre de départ <code>seed</code> facultatif peut être défini.


## Examples

### Example #1 
Cumule la valeur agrégée des éléments dans la liste \{1, 2, 3, 4, 5} en utilisant ((state, current) =&gt; state + current ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
