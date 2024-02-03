---
title: Table.RemoveColumns
---

# Table.RemoveColumns


## Description

Belirtilen sütunları kaldırır.


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Belirtilen <code>columns</code> öğesini sağlanan <code>table</code> öğesinden kaldırır.    Belirtilen sütun yoksa, <code>missingField</code> isteğe bağlı parametresi bir alternatif davranış belirtmediği sürece hata oluşur (örneğin <code>MissingField.UseNull</code> veya <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Tablodaki [Phone] sütununu kaldırır.
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
