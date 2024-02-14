---
title: Table.ToColumns
---

# Table.ToColumns


列の値のリストが入れ子になったリストをテーブルから作成します。


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Remarks

入れ子になったリストのリストをテーブル (<code>table</code>) から作成します。各リスト項目は、列の値を含む入れ子のリストです。


## Examples

### Example #1 
テーブルから列の値のリストを作成します。
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
