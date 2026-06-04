---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Devolve unha función de comparación baseada na cultura especificada e na distinción entre maiúsculas e minúsculas.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Devolve unha función de comparación que usa o `culture` e a case-sensibilidade especificada por `ignoreCase` para realizar comparacións.  
  
Unha función de comparación acepta dous argumentos e devolucións -1, 0 ou 1 en función de se o primeiro valor é menor, igual ou superior ao segundo.  
  
O valor por defecto para `ignoreCase` é falso. O `culture` debe ser un dos locais apoiados polo marco .NET (por exemplo, "en-US").


## Examples

### Example #1
Compare "a" e "A" mediante a configuración rexional "gl-ES" para determinar se os valores son iguais.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Compare "a" e "A" mediante a configuración rexional "gl-ES" ignorando as maiúsculas e minúsculas para determinar se os valores son iguais.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
