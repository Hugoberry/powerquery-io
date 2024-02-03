---
title: List.Accumulate
---

# List.Accumulate


## Description

Zbere skupno vrednost iz elementov na seznamu.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Zbere skupno vrednost iz elementov na seznamu <code>list</code> z <code>accumulator</code>.    Nastavite lahko tudi izbirni parameter semena, <code>seed</code>.


## Examples

### Example #1 
Zbere skupno vrednost iz elementov na seznamu \{1, 2, 3, 4, 5} z ((state, current) =&gt; state + current ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
