---
title: Table.HasColumns
---

# Table.HasColumns


## Description

指定された列がテーブルに含まれているかどうかを示します。


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Details

指定された列 <code>columns</code> が <code>table</code> に含まれているかどうかを示します。列がテーブルに含まれている場合は <code>true</code>、それ以外の場合は <code>false</code> を返します。


## Examples

### Example #1 
テーブルに列 [Name] が含まれているかどうかを調べます。
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
true
```


### Example #2 
テーブルに列 [Name] と [PhoneNumber] が含まれているかどうかを調べます。
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"Name", "PhoneNumber"}
)
```

Result: 
```powerquery
false
```




## Category
Table.Column operations
