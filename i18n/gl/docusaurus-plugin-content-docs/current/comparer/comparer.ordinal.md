---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Devolve unha función de comparador que utiliza regras ordinais para comparar valores.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Devolve unha función de comparación que usa regras ordinais para comparar os valores proporcionados `x` e `y`.  
  
Unha función de comparación acepta dous argumentos e devolve -1, 0 ou 1 en función de se o primeiro valor é menor, igual ou maior que o segundo.


## Examples

### Example #1
Mediante regras ordinais, compara se "encyclopædia" e "encyclopaedia" son equivalentes. Ten en conta que son equivalentes utilizando `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
