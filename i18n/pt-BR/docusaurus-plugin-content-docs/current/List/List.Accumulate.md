---
title: List.Accumulate
---

# List.Accumulate


Acumula um valor de resumo a partir dos itens da lista.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Acumula um valor de resumo a partir dos itens da lista <code>list</code>, usando <code>accumulator</code>.    Um parâmetro de semente opcional, <code>seed</code>, pode ser definido.


## Examples

### Example #1 
Acumula o valor de resumo a partir dos itens na lista \{1, 2, 3, 4, 5} usando ((state, current) =&gt; state + current ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
