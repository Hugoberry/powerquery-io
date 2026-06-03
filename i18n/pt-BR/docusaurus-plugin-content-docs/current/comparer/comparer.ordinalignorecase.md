---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Retorna a função do comparador sem diferenciação de maiúsculas e minúsculas que utiliza as regras Ordinais para comparar valores.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Retorna uma função comparador sem diferenciação de maiúsculas e minúsculas que usa regras Ordinais para comparar os valores `x` e `y` fornecidos.  
  
Uma função de comparador aceita dois argumentos e retorna -1, 0 ou 1 se o primeiro valor for menor, igual ou maior que o segundo.


## Examples

### Example #1
Usando as regras Ordinais sem diferenciação de maiúsculas e minúsculas, compare "Abc" com "abc". Observe que "Abc" é menor do que "abc" usando o `Comparer.Ordinal`.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
