---
title: List.Accumulate
---

# List.Accumulate


## Description

Acumula un valor de resum a partir dels elements de la llista.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Acumula un valor de resum a partir dels elements de la llista <code>list</code>, amb <code>accumulator</code>.    Es pot definir un paràmetre opcional de propagació, <code>seed</code>.


## Examples

### Example #1 
Acumula el valor de resum a partir dels elements de la llista \{1, 2, 3, 4, 5} amb ((state, current) =&gt; state + current ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
