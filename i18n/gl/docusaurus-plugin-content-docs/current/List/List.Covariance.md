---
title: List.Covariance
---

# List.Covariance


## Description

Devolve a covarianza entre as dúas listas de números.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Devolve a covarianza entre dúas listas, <code>numberList1</code> e <code>numberList2</code>. <code>numberList1</code> e <code>numberList2</code> deben conter o mesmo número de valores <code>number</code>.


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
