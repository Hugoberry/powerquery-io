---
title: Table.RenameColumns
---

# Table.RenameColumns


套用 \{old, new\} 格式的重新命名。


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

針對資料表 `table` 中的資料行執行指定的重新命名。取代作業 `renames` 是由兩個值的清單組成，舊資料行名稱與新資料行名稱 (以清單形式提供)。 如果資料行不存在，則引發錯誤，除非選用的參數 `missingField` 指定了替代方案 (例如 `MissingField.UseNull` 或 `MissingField.Ignore`)。


## Examples

### Example #1
以 "CustomerID" 取代資料表中的資料行名稱 "CustomerNum"。
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
以 "CustomerID" 取代資料表中的資料行名稱 "CustomerNum"，並以 "Phone" 取代 "PhoneNum"。
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
以 "NewColumn" 取代資料表中的資料行名稱 "NewCol"，如果資料行不存在，則忽略。
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
