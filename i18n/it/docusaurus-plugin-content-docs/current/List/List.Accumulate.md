---
title: List.Accumulate
---

# List.Accumulate


Accumula un valore di riepilogo dagli elementi dell&#39;elenco.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Accumula un valore di riepilogo dagli elementi dell'elenco <code>list</code>, usando <code>accumulator</code>.    È possibile impostare un parametro facoltativo <code>seed</code> del valore di inizializzazione.


## Examples

### Example #1 
Accumula il valore di riepilogo gli elementi dell&#39;elenco \{1, 2, 3, 4, 5} utilizzando ((state, current) =&gt; state + current ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
