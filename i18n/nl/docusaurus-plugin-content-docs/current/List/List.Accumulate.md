---
title: List.Accumulate
---

# List.Accumulate


## Description

Stelt een totale waarde samen van de items in de lijst.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Stelt een totale waarde samen van de items in de lijst <code>list</code>, met behulp van <code>accumulator</code>.    Een optionele seedparameter, <code>seed</code>, kan worden ingesteld.


## Examples

### Example #1 
Stelt de totale waarde samen van de items in de lijst \{1, 2, 3, 4, 5} met behulp van ((state, current) =&gt; state + current ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
