---
title: Table.HasColumns
---

# Table.HasColumns


指示表是否包含指定的列。


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Remarks

指示 <code>table</code> 是否包含指定的列 <code>columns</code>。如果表包含此列或这些列，则返回 <code>true</code>，否则返回 <code>false</code>。


## Examples

### Example #1 
确定表是否具有列 [Name]。
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
查找表是否具有列 [Name] 和 [PhoneNumber]。
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
