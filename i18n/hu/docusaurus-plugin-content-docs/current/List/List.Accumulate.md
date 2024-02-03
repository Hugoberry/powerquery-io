---
title: List.Accumulate
---

# List.Accumulate


## Description

Összesít egy összegértéket a lista elemeiből.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Összesít egy összegértéket a(z) <code>list</code> lista elemeiből a következő használatával: <code>accumulator</code>.    Megadható egy nem kötelező <code>seed</code> kezdőérték paraméter.


## Examples

### Example #1 
Összesít egy összegértéket az \{1, 2, 3, 4, 5} lista elemeiből a ((state, current) =&gt; state + current ) képlet használatával.
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
