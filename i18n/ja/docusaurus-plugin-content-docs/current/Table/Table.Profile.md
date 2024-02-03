---
title: Table.Profile
---

# Table.Profile


## Description

テーブルの列のプロファイルを返します。


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

<code>table</code> 内の列のプロファイルを返します。<br />各列の以下の情報が返されます (該当する場合):<ul>  <li>最小値</li>  <li>最大値</li>  <li>平均</li>  <li>標準偏差</li>  <li>カウント</li>  <li>null カウント</li>  <li>個別のカウント</li></ul><br />



## Category
Table.Information
