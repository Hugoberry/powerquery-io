---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Devolve unha función de comparación que non diferencia maiúsculas de minúsculas e que usa regras ordinais para comparar valores.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Devolve unha función de comparación que non distingue entre maiúsculas e minúsculas que usa regras ordinais para comparar os valores proporcionados `x` e `y`.  
  
Unha función de comparación acepta dous argumentos e devolve -1, 0 ou 1 en función de se o primeiro valor é menor, igual ou maior que o segundo.


## Examples

### Example #1
Mediante as regras ordinais que non diferencian maiúsculas de minúsculas, compare "Abc" con "abc". Teña en conta que "Abc" é inferior a "abc" mediante `Comparer.Ordinal`.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
