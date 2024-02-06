---
title: Table.HasColumns
---

# Table.HasColumns


指出資料表是否包含指定的資料行。


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Remarks

指出 <code>table</code> 是否包含指定的資料行 <code>columns</code>。如果資料表包含資料行，則傳回 <code>true</code>，否則傳回 <code>false</code>。


## Examples

### Example #1 
判斷資料表是否具有 [Name] 資料行。
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
找出資料表是否具有 [Name] 和 [PhoneNumber] 資料行。
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
