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

返回基于样本估计的列表 `numbersList` 中的值的标准偏差。 如果 `numbersList` 是数字列表，则返回数字。 如果列表为空或列表中项的类型不属于 `number`，则引发错误。


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
