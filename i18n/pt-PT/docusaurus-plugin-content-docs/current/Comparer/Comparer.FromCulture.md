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

Devolve uma função de comparação que utiliza o <code>culture</code> e a sensibilidade a maiúsculas e minúsculas especificada por <code>ignoreCase</code> para efetuar comparações.<br />      <br />      Uma função de comparação aceita dois argumentos e devolve -1, 0 ou 1 com base se o primeiro valor é menor que, igual ou superior ao segundo.<br />      <br />      O valor predefinido para <code>ignoreCase</code> é falso. O <code>culture</code> deve ser uma das regiões suportadas pelo .NET Framework (por exemplo, "en-US").    


## Examples

### Example #1 
Comparar &#34;a&#34; e &#34;A&#34; com a região &#34;pt-PT&#34; para determinar se os valores são iguais.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Comparar &#34;a&#34; e &#34;A&#34; com a região &#34;pt-PT&#34;, ignorando maiúsculas/minúsculas para determinar se os valores são iguais.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
