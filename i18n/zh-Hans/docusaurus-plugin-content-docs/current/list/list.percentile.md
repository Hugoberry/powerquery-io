---
title: List.Percentile
---

# List.Percentile


返回与给定概率对应的一个或多个示例百分位数。


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

返回 `list` 列表的一个或多个示例百分位数。如果值 `percentiles` 是一个介于 0.0 至 1.0 之间的数字，则将其视为百分位，且结果将是 与该概率对应的一个值。如果值 `percentiles` 是包含值介于 0.0 至 1.0 之间的数字的列表，则结果将是与输入概率对应的 百分位数的列表。  
  
高级用户可使用 `options` 中的 PercentileMode 选项来选择更具体的内插方法，但在大多数情况下不建议使用。 预定义符号 `PercentileMode.ExcelInc` 和 `PercentileMode.ExcelExc` 与 Excel 函数 `PERCENTILE.INC` 和 `PERCENTILE.EXC` 使用的 内插方法匹配。默认行为与 `PercentileMode.ExcelInc` 匹配。符号 `PercentileMode.SqlCont` 和 `PercentileMode.SqlDisc` 分别与 `PERCENTILE_CONT` 和 `PERCENTILE_DISC` 的 SQL Server 行为匹配。


## Examples

### Example #1
查找列表 `{5, 3, 1, 7, 9}` 的第一个四分位数。
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
使用与 Excel `PERCENTILE.EXC` 匹配的内插方法查找列表 `{5, 3, 1, 7, 9}` 的四分位数。
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
