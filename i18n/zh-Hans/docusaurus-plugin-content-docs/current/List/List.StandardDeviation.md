---
title: List.StandardDeviation
---

# List.StandardDeviation


返回基于样本估计的标准偏差。


## Syntax

```powerquery
List.StandardDeviation(
    numbersList as list
) as number
```


## Remarks

返回基于样本估计的列表 <code>numbersList</code> 中的值的标准偏差。    如果 <code>numbersList</code> 是数字列表，则返回数字。    如果为空列表或类型不属于 <code>number</code> 的项的列表，将引发异常。


## Examples

### Example #1 
计算 1 到 5 的数的标准偏差。
```powerquery
List.StandardDeviation({1..5})
```

Result: 
```powerquery
1.5811388300841898
```




## Category
List.Averages
