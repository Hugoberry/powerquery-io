---
title: List.Covariance
---

# List.Covariance


Возвращает ковариацию между двумя списками чисел.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Возвращает ковариацию между двумя списками, <code>numberList1</code> и <code>numberList2</code>. <code>numberList1</code> и <code>numberList2</code> должны содержать одинаковое количество значений <code>number</code>.


## Examples

### Example #1 
Вычислить ковариацию между двумя списками.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
