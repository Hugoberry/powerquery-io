---
title: Table.SplitColumn
---

# Table.SplitColumn


## Description

使用指定的分隔器函數，將指定的資料行分割成一組額外的資料行。


## Syntax

```powerquery
Table.SplitColumn(
    table as table,
    sourceColumn as text,
    splitter as function,
    optional columnNamesOrNumber as any,
    optional default as any,
    optional extraColumns as any
) as table
```


## Details

使用指定的分隔器函數，將指定的資料行分割成一組額外的資料行。


## Examples

### Example #1 
將 [Name] 資料行從位置 &#34;i&#34; 分割成兩個資料行
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    })
in
    Table.SplitColumn(Customers, "Name", Splitter.SplitTextByDelimiter("i"), 2)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name.1 = "Bob", Name.2 = null, Phone = "123-4567"],
    [CustomerID = 2, Name.1 = "J", Name.2 = "m", Phone = "987-6543"],
    [CustomerID = 3, Name.1 = "Paul", Name.2 = null, Phone = "543-7890"],
    [CustomerID = 4, Name.1 = "Cr", Name.2 = "st", Phone = "232-1550"]
})
```




## Category
Table.Transformation
