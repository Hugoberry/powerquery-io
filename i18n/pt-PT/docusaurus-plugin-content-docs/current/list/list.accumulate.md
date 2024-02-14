---
title: List.Accumulate
---

# List.Accumulate


Acumula um valor de resumo dos itens existentes na lista.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Acumula um valor de resumo dos itens existentes na lista <code>list</code>, utilizando <code>accumulator</code>.    É possível definir um parâmetro de seed opcional, <code>seed</code>.


## Examples

### Example #1 
Acumula o valor de resumo dos itens existentes na lista \{1, 2, 3, 4, 5} utilizando ((state, current) =&gt; state + current).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
