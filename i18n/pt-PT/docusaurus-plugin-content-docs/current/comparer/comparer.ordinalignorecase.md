---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Devolve uma função de comparador não sensível a maiúsculas/minúsculas que utiliza regras Ordinais para comparar valores.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Devolve uma função de comparador não sensível a maiúsculas e minúsculas, que utiliza regras Ordinais para comparar os valores fornecidos `x` e `y`.  
  
Uma função de comparação aceita dois argumentos e devolve -1, 0 ou 1, com base no facto de o primeiro valor ser menor, igual ou superior ao segundo.


## Examples

### Example #1
Utilize as regras Ordinais não sensíveis a maiúsculas/minúsculas e compare "Abc" com "abc". Tenha em atenção que "Abc" é menor que "abc" quando utiliza `Comparer.Ordinal`.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
