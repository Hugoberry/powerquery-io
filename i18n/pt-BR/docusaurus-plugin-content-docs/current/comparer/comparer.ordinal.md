---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Retorna uma função de comparador que usa regras do Ordinal para comparar valores.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Retorna uma função de comparador que usa regras Ordinais para comparar os valores `x` e `y` fornecidos.  
  
Uma função de comparador aceita dois argumentos e retorna -1, 0 ou 1 se o primeiro valor for menor, igual ou maior que o segundo.


## Examples

### Example #1
Usando regras do Ordinal, compare se “encyclopædia” e “encyclopaedia” são equivalentes. Observe que são equivalentes usando `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
