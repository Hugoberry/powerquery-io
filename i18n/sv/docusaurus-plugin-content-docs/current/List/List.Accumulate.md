---
title: List.Accumulate
---

# List.Accumulate


## Description

Ackumulerar ett summary-värde från objekten i listan.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Ackumulerar ett summary-värde från objekten i listan <code>list</code> med hjälp av <code>accumulator</code>.    En valfri seed-parameter, <code>seed</code>, kan användas.


## Examples

### Example #1 
Ackumulerar summary-värdet från objekten i listan \{1, 2, 3, 4, 5} med hjälp av ((state, current) =&gt; state + current ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
