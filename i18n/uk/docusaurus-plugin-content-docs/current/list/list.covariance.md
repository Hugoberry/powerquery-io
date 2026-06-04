---
title: List.Covariance
---

# List.Covariance


Повертає коваріацію між двома списками чисел.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Повертає коваріацію між двома списками, `numberList1` і `numberList2`. `numberList1` і `numberList2` повинні містити однакову кількість значень `number`.


## Examples

### Example #1
Обчислити коваріацію між двома списками.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
