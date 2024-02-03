---
title: List.Accumulate
---

# List.Accumulate


## Description

Acumulează o valoare rezumat din elementele din listă.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Acumulează o valoare rezumat din elementele din lista <code>list</code>, utilizând <code>accumulator</code>.    Un parametru opţional pentru valoarea de pornire, <code>seed</code>, poate fi setat.


## Examples

### Example #1 
Acumulează valoarea rezumat din elementele din lista \{1, 2, 3, 4, 5}, utilizând ((stare, actual) =&gt; stare + actual).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
