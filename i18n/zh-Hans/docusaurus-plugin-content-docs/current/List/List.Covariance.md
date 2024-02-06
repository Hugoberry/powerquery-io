---
title: List.Covariance
---

# List.Covariance


返回两个数值列表之间的协方差。


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

返回两个列表 <code>numberList1</code> 和 <code>numberList2</code> 之间的协方差。<code>numberList1</code> 和 <code>numberList2</code> 必须包含相同数目的 <code>number</code> 值。


## Examples

### Example #1 
计算两个列表之间的协方差。
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
