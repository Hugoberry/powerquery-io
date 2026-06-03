---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Devuelve una función comparadora basada en la cultura y la distinción entre mayúsculas y minúsculas especificadas.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Devuelve una función comparadora que utiliza la `culture` y la distinción entre mayúsculas y minúsculas especificada por `ignoreCase` para realizar las comparaciones..  
  
Una función comparadora acepta dos argumentos y devuelve -1, 0 o 1 en función de si el primer valor es menor, igual o mayor que el segundo.  
  
El valor por defecto para `ignoreCase` es false. El `culture` debe ser una de las localizaciones soportadas por el framework .NET (por ejemplo, "en-US").


## Examples

### Example #1
Compara "a" y "A" usando la configuración regional "en-US" para determinar si los valores son iguales.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Compara "a" y "A" usando la configuración regional "en-US" e ignorando las mayúsculas y minúsculas para determinar si los valores son iguales.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
