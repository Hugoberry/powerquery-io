---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Tiek atgriezta tabula, kur visām kolonnām ir pievienots prefikss ar norādīto tekstu.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Atgriež tabulu, kur visiem kolonnu nosaukumiem no norādītā `table` ir prefikss ar norādīto tekstu `prefix` un punkts formātā `prefix.ColumnName`.


## Examples

### Example #1
Pievienojiet tabulas kolonnām prefiksu "MyTable".
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
