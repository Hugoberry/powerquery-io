---
title: Table.Profile
---

# Table.Profile


テーブルの列のプロファイルを返します。


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

`table` 内の列のプロファイルを返します。

各列の以下の情報が返されます (該当する場合):

-   最小値
-   最大値
-   平均
-   標準偏差
-   カウント
-   null カウント
-   個別のカウント



## Category
Table.Information
