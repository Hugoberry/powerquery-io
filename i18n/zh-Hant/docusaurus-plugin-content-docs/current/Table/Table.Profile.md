---
title: Table.Profile
---

# Table.Profile


傳回資料表資料行的設定檔。


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

傳回 <code>table</code> 中資料行的設定檔。<br />會為每個資料行傳回下列資訊 (若適用):<ul>  <li>最小值</li>  <li>最大值</li>  <li>平均值</li>  <li>標準差</li>  <li>計數</li>  <li>null 計數</li>  <li>相異計數</li></ul><br />



## Category
Table.Information
