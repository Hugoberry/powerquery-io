---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Retorna uma função de comparador com base na cultura e diferenciação de maiúsculas e minúsculas especificadas.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Retorna uma função de comparador que usa o `culture` e a diferenciação de maiúsculas e minúsculas especificados pelo `ignoreCase` para executar comparações.  
  
Uma função de comparador aceita dois argumentos e retorna -1, 0 ou 1 se o primeiro valor for menor, igual ou maior que o segundo.  
  
O valor padrão de `ignoreCase` é false. O `culture` deve ser uma das localidades com suporte pelo .NET Framework (por exemplo, “en-US”).


## Examples

### Example #1
Comparar "a" e "A" usando a localidade "pt-BR" para determinar se os valores são iguais.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Comparar "a" e "A" usando a localidade "pt-BR", ignorando maiúsculas e minúsculas, para determinar se os valores são iguais.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
