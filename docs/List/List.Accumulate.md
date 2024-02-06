---
title: List.Accumulate
---

# List.Accumulate


Accumulates a summary value from the items in the list.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Accumulates a summary value from the items in the list <code>list</code>, using <code>accumulator</code>.    An optional seed parameter, <code>seed</code>, may be set.


## Examples

### Example #1 
Accumulates the summary value from the items in the list \{1, 2, 3, 4, 5} using ((state, current) =&gt; state + current ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
