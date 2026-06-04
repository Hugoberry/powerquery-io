---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Көрсетілген бағандарды жояды.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Көрсетілген `columns` берілген `table` ішінен жояды. Егер берілген баған жоқ болса, `missingField` міндетті емес параметрі баламалы әрекетті (мысалы, `MissingField.UseNull` немесе `MissingField.Ignore`) көрсетпесе, қате туралы хабар қайтарылады.


## Examples

### Example #1
Кестеден \[Phone\] бағанын жою.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Phone"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #2
Кестеден жоқ бағанды ​​алып тастап көріңіз.
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Address"
)
```

Result: 
```powerquery
[Expression.Error] The column 'Address' of the table wasn't found.
```




## Category
Table.Column operations
