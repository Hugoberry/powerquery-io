---
title: List.Accumulate
---

# List.Accumulate


## Description

Shromažďuje souhrnnou hodnotu položek v seznamu.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Shromažďuje souhrnnou hodnotu položek v seznamu <code>list</code> pomocí výrazu <code>accumulator</code>.    Lze nastavit volitelný parametr počáteční hodnoty <code>seed</code>.


## Examples

### Example #1 
Shromažďuje souhrnnou hodnotu položek v seznamu \{1, 2, 3, 4, 5} pomocí výrazu ((state, current) =&gt; state + current ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
