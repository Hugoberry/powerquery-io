---
title: List.Covariance
---

# List.Covariance


Devolve a covarianza entre as dúas listas de números.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Devolve a covarianza entre dúas listas, `numberList1` e `numberList2`. `numberList1` e `numberList2` deben conter o mesmo número de valores `number`.


## Examples

### Example #1
Calcular a covarianza entre dúas listas.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
