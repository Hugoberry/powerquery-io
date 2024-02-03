---
title: List.Accumulate
---

# List.Accumulate


## Description

Acumula un valor de resumo dos elementos da lista.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Acumula un valor de resumo dos elementos da lista <code>list</code>, utilizando <code>accumulator</code>.    Pódese establecer un parámetro de propagación opcional, <code>seed</code>.


## Examples

### Example #1 
Acumula o valor de resumo dos elementos da lista \{1, 2, 3, 4, 5} utilizando ((estado, actual) =&gt; estado + actual ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
