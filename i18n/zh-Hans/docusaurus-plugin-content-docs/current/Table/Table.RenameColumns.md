---
title: Table.RenameColumns
---

# Table.RenameColumns


对格式 \{old, new\} 应用重命名。


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

对表 `table` 中的列执行给定的重命名。一个替换操作 `renames` 由两个值组成，即旧列名和新列名，这些值存放在列表中。 如果列不存在，则引发错误，除非可选参数 `missingField` 指定了备用值(例如 `MissingField.UseNull` 或 `MissingField.Ignore`)。


## Examples

### Example #1
在表中将列名 "CustomerNum" 替换为 "CustomerID"。
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
在表中将列名 "CustomerNum" 替换为 "CustomerID"，并将 "PhoneNum" 替换为 "Phone"。
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3
在表中将列名 "NewCol" 替换为 "NewColumn"，如果列不存在，则忽略。
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
