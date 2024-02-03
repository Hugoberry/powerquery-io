---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

列見出しを先頭行の値に降格させます。


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

列見出し (つまり列名) を先頭行の値に降格させます。既定の列名は、"Column1"、"Column2" などです。


## Examples

### Example #1 
テーブルの値の先頭行を降格させます。
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations
