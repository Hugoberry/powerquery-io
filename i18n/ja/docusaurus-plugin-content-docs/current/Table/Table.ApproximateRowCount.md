---
title: Table.ApproximateRowCount
---

# Table.ApproximateRowCount


## Description

テーブル内の行の概数を返します。


## Syntax

```powerquery
Table.ApproximateRowCount(
    table as table
) as number
```


## Details

<code>table</code>内のおおよその行数を返します。データ ソースが近似をサポートしていない場合はエラーを返します。


## Examples

### Example #1 
大きなテーブル内で、列のカーディナリティの推定として使用できる、都市と州の個別の組み合わせの数を推定します。カーディナリティの推定は、さまざまなデータ ソース (SQL Server など) がこの特定の近似をサポートするほど充分に重要で、多くの場合 HyperLogLog と呼ばれるアルゴリズムを使用します。
```powerquery
Table.ApproximateRowCount(Table.Distinct(Table.SelectColumns(sqlTable, {"city", "state"})))
```

Result: 
```powerquery
number
```




## Category
Table.Information
