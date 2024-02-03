---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


## Description

將資料行標頭降階為第一個資料列的值。


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Details

將資料行標頭 (亦即 資料行名稱) 降階為第一個資料列的值。預設資料行名稱是 "Column1"、"Column2"，依此類推。


## Examples

### Example #1 
將資料表中第一個資料列的值降階。
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
