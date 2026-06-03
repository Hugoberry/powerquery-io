---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Devolve uma função de comparação com base na cultura e sensibilidade a maiúsculas e minúsculas especificada.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Devolve uma função de comparação que utiliza o `culture` e a sensibilidade a maiúsculas e minúsculas especificada por `ignoreCase` para efetuar comparações.  
  
Uma função de comparação aceita dois argumentos e devolve -1, 0 ou 1 com base se o primeiro valor é menor que, igual ou superior ao segundo.  
  
O valor predefinido para `ignoreCase` é falso. O `culture` deve ser uma das regiões suportadas pelo .NET Framework (por exemplo, "en-US").


## Examples

### Example #1
Comparar "a" e "A" com a região "pt-PT" para determinar se os valores são iguais.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Comparar "a" e "A" com a região "pt-PT", ignorando maiúsculas/minúsculas para determinar se os valores são iguais.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
