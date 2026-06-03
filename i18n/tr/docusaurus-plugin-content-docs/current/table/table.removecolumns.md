---
title: Table.RemoveColumns
---

# Table.RemoveColumns


Belirtilen sütunları kaldırır.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Belirtilen `columns` öğesini sağlanan `table` öğesinden kaldırır. Belirtilen sütun yoksa, `missingField` isteğe bağlı parametresi bir alternatif davranış belirtmediği sürece hata oluşur (örneğin `MissingField.UseNull` veya `MissingField.Ignore`).


## Examples

### Example #1
Tablodaki \[Phone\] sütununu kaldırır.
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
Var olmayan bir sütunu tablodan kaldırmayı deneyin.
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
