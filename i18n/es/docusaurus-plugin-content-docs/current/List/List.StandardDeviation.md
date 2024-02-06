---
title: List.StandardDeviation
---

# List.StandardDeviation


Devuelve una estimación basada en la muestra de la desviación estándar.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Devuelve una estimación basada en la muestra de la desviación estándar de los valores de la lista <code>numbersList</code>.    Si <code>numbersList</code> es una lista de números, se devuelve un número.    Se produce una excepción en una lista vacía o una lista de elementos que no sean del tipo <code>number</code>.


## Examples

### Example #1 
Buscar la desviación estándar de los números 1 a 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
