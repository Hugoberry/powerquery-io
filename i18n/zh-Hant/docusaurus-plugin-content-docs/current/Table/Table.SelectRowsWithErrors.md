---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


傳回資料表，其中只包含輸入資料表中至少有一個資料格包含錯誤的資料列。如果指定了資料行清單，就只會檢查指定資料行中的資料格是否有錯誤。


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

傳回資料表，其中只包含輸入資料表中至少有一個資料格包含錯誤的資料列。如果指定了資料行清單，就只會檢查指定資料行中的資料格是否有錯誤。


## Examples

### Example #1 
選取資料列中有錯誤的客戶名稱。
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
