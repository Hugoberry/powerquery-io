---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


指定資料表中的清單資料行之後，針對其清單中的每個值建立一個資料列複本。


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

給定一個 `table`，其中 `column` 包含值清單，將清單分割成每個值的資料列。在每個建立的新資料列中，其他資料行的值都會重複。此函數也可以將巢狀表格視為記錄清單來展開。


## Examples

### Example #1
分割清單資料行 \[名稱\]。
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
分割巢狀表格資料行 \[元件\]。
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
