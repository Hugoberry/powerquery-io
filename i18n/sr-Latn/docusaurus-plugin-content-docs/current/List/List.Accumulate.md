---
title: List.Accumulate
---

# List.Accumulate


## Description

Skuplja sumarnu vrednost od stavki sa liste.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Skuplja sumarnu vrednost od stavki sa liste <code>list</code> pomoću <code>accumulator</code>.    Može se podesiti opcionalni početni parametar, <code>seed</code>.


## Examples

### Example #1 
Skuplja sumarnu vrednost od stavki sa liste \{1, 2, 3, 4, 5} pomoću ((state, current) =&gt; state + current ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
