---
title: List.Accumulate
---

# List.Accumulate


## Description

Kerää yhteenvetoarvon luettelon kohteista.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Kerää yhteenvetoarvon luettelon <code>list</code> kohteista käyttäen kohdetta <code>accumulator</code>.    Valinnainen alkuarvoparametri <code>seed</code> voidaan asettaa.


## Examples

### Example #1 
Kerää yhteenvetoarvon luettelon \{1, 2, 3, 4, 5} kohteista käyttäen kohdetta ((state, current) =&gt; state + current ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
