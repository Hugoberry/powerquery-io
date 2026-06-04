---
title: List.StandardDeviation
---

# List.StandardDeviation


Devolve unha estimación baseada en exemplos da desviación estándar.


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

Devolve unha estimación baseada en exemplos da desviación estándar dos valores da lista, `numbersList`. Se `numbersList` é unha lista de números, devólvese un número. Xérase un erro nunha lista baleira ou nunha lista de elementos que non son do tipo `number`.


## Examples

### Example #1
Buscar a desviación estándar dos números 1 a 5.
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
