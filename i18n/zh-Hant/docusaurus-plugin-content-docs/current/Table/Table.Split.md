---
title: Table.Split
---

# Table.Split


## Description

將指定的資料表分割為一組使用特定頁面大小的資料表。


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

將 <code>table</code> 分割成一組資料表，其中清單的第一個元素為包含來自來源資料表前 <code>pageSize</code> 個資料列的資料表，清單的下一個元素則是包含來自來源資料表接下來 <code>pageSize</code> 個資料列的資料表，以此類推。


## Examples

### Example #1 
將具有五個記錄的資料表分割為各擁有兩個記錄的資料表。
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation
