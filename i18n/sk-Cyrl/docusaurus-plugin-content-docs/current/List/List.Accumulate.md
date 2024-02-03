---
title: List.Accumulate
---

# List.Accumulate


## Description

Nahromadí súhrnnú hodnotu z položiek v zozname.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Nahromadí súhrnnú hodnotu z položiek v zozname <code>list</code> pomocou parametra <code>accumulator</code>.    Možno nastaviť voliteľný počiatočný parameter <code>seed</code>.


## Examples

### Example #1 
Nahromadí súhrnnú hodnotu z položiek v zozname \{1, 2, 3, 4, 5} pomocou parametra ((state, current) =&gt; state + current ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
