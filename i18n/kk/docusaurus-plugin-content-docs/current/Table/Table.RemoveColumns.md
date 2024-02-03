---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Көрсетілген бағандарды жояды.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Көрсетілген <code>columns</code> берілген <code>table</code> ішінен жояды.    Егер берілген баған жоқ болса, <code>missingField</code> міндетті емес параметрі баламалы әрекетті (мысалы, <code>MissingField.UseNull</code> немесе <code>MissingField.Ignore</code>) көрсетпесе, қате туралы хабар қайтарылады.


## Examples

### Example #1 
Кестеден [Phone] бағанын жою.
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
