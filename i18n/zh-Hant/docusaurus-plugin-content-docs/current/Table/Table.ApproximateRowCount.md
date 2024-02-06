---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


傳回資料表中的約略資料列數目。


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Remarks

傳回 <code>table</code> 中的近似列數，如果資料來源不支援近似值，則傳回錯誤。


## Examples

### Example #1 
估計大型資料表中城市和省份之相異組合數，可以用作資料行的基數估算。基數估算非常重要，以至於各種資料來源 (如 SQL Server) 都支援這種特定的近似值，通常使用稱為 HyperLogLog 的演算法。
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
