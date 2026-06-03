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

`column` に値のリストが含まれる `table` がある場合は、値ごとにリストを 1 行に分割します。他の列の値は、新しい行が作成されるたびに複製されます。この関数は、入れ子の表をレコードのリストとして扱って展開することもできます。


## Examples

### Example #1
リスト列 \[名前\] を分割します。
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


### Example #2
入れ子になった表の列 \[Components\] を分割します。
```powerquery
Table.ExpandListColumn(
    #table(
        {"Part", "Components"},
        {
            {"Tool", #table({"Name", "Quantity"}, {{"Thingamajig", 2}, {"Widget", 3}})}
        }
    ),
    "Components"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Part = "Tool", Components = [Name = "Thingamajig", Quantity = 2]],
    [Part = "Tool", Components = [Name = "Widget", Quantity = 3]]
})
```




## Category
Table.Transformation
