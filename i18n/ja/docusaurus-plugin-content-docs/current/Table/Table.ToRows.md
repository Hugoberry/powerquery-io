---
title: Table.ToRows
---

# Table.ToRows


行の値のリストが入れ子になったリストをテーブルから作成します。


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Remarks

入れ子になったリストのリストをテーブル (<code>table</code>) から作成します。各リスト項目は、行の値を含む入れ子のリストです。


## Examples

### Example #1 
テーブルから行の値のリストを作成します。
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
