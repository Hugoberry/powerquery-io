---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Olyan táblát ad vissza, amelyben minden oszlopnévhez hozzá lett fűzve előtagként a megadott szöveg.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Olyan táblát ad vissza, amelyben a megadott <code>table</code> összes oszlopnevéhez hozzá lett fűzve előtagként a megadott szöveg (<code>prefix</code>), valamint egy pont a következő formátumban: <code>prefix</code><code>.ColumnName</code>.


## Examples

### Example #1 
Hozzáfűzi a tábla oszlopaihoz a MyTable előtagot.
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
