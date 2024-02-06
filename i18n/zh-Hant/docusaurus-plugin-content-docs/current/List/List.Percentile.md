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

傳回 <code>list</code> 清單的一或多個樣本百分位數。如果 <code>percentiles</code> 的值是介於 0.0 到 1.0 之間的數字，就會視為百分位數，而結果會是    對應到該機率的單一值。若 <code>percentiles</code> 值為數字清單，其值介於 0.0 到 1.0 之間，結果會是對應到輸入機率的百分位數清單。    進階使用者可使用 <code>options</code> 中的 PercentileMode 選項，挑選更明確的內插補點方法，但不建議用於大多數用途。    預先定義的符號 <code>PercentileMode.ExcelInc</code> 和 <code>PercentileMode.ExcelExc</code> 與 Excel 函式 <code>PERCENTILE.INC</code> 和 <code>PERCENTILE.EXC</code>    所使用的內插補點方法相符。預設行為與 <code>PercentileMode.ExcelInc</code> 相符。符號    <code>PercentileMode.SqlCont</code> 和 <code>PercentileMode.SqlDisc</code> 分別與 <code>PERCENTILE_CONT </code> 和    <code>PERCENTILE_DISC</code> 的 SQL Server 行為相符。  


## Examples

### Example #1 
找出清單 &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; 的第一四分位數。
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
使用與 Excel &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; 相符的內插補點方法，尋找 &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; 清單的四分位數。
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
