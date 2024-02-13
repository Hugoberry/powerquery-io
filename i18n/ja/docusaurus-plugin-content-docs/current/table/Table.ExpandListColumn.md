---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


テーブル内にリスト列がある場合に、そのリスト内の値ごとに 1 行のコピーを作成します。


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

<code>column</code> があり、<code>table</code> が値のリストである場合に、リストを値ごとに行に分割します。他の列の値は、作成された新しい各行で重複します。


## Examples

### Example #1 
テーブルのリスト列 [Name] を分割します。
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
