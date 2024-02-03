---
title: List.Covariance
---

# List.Covariance


## Description

Повертає коваріацію між двома списками чисел.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Повертає коваріацію між двома списками, <code>numberList1</code> і <code>numberList2</code>. <code>numberList1</code> і <code>numberList2</code> повинні містити однакову кількість значень <code>number</code>.


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
