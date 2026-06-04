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

傳回 `table` 中資料行的設定檔。

會為每個資料行傳回下列資訊 (若適用):

-   最小值
-   最大值
-   平均值
-   標準差
-   計數
-   null 計數
-   相異計數



## Category
Table.Information
