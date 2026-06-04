---
title: List.Percentile
---

# List.Percentile


傳回一或多個對應到指定機率的樣本百分位數。


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

傳回 `list` 清單的一或多個樣本百分位數。如果 `percentiles` 的值是介於 0.0 到 1.0 之間的數字，就會視為百分位數，而結果會是 對應到該機率的單一值。若 `percentiles` 值為數字清單，其值介於 0.0 到 1.0 之間，結果會是百分位數清單 對應到輸入機率。  
  
進階使用者可使用 `options` 中的 PercentileMode 選項，挑選更明確的內插補點方法，但不建議用於大多數用途。 預先定義的符號 `PercentileMode.ExcelInc` 和 `PercentileMode.ExcelExc` 所使用的內插補點方法相符 `PERCENTILE.INC` 和 `PERCENTILE.EXC`。預設行為與 `PercentileMode.ExcelInc` 相符。符號 `PercentileMode.SqlCont` 和 `PercentileMode.SqlDisc` 分別與 `PERCENTILE_CONT` 和 `PERCENTILE_DISC` 的 SQL Server 行為相符。


## Examples

### Example #1
找出清單 `{5, 3, 1, 7, 9}` 的第一四分位數。
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
使用與 Excel `PERCENTILE.EXC` 相符的內插補點方法，尋找 `{5, 3, 1, 7, 9}` 清單的四分位數。
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
