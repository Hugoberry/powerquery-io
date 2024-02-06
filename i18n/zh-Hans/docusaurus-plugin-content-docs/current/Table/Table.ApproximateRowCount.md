---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


返回表中的近似行数。


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Remarks

返回 <code>table</code> 中的近似行数，或者如果数据源不支持近似值，则返回错误。


## Examples

### Example #1 
估计大型表中城市和省/市/自治区的不同组合数，这可用作列的基数估计值。基数估计值非常重要，因此各种数据源(如 SQL Server)通常使用名为 HyperLog 的算法支持此特殊近似值。
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
