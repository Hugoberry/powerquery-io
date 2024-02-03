---
title: List.Covariance
---

# List.Covariance


## Description

傳回兩個數字清單之間的共變數。


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

傳回兩個數字清單 <code>numberList1</code> 和 <code>numberList2</code> 之間的共變數。<code>numberList1</code> 和 <code>numberList2</code> 必須包含相同數目的 <code>number</code> 值。


## Examples

### Example #1 
計算兩個清單之間的共變數。
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
