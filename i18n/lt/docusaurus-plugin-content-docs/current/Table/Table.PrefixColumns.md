---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Pateikiama lentelė, kurioje visi stulpeliai turi nurodyto teksto prefiksą.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Pateikiama lentelė, kurioje visi stulpelių pavadinimai iš pateikto <code>table</code> turi nurodyto teksto prefiksą <code>prefix</code>, taip pat tašką formoje <code>prefix</code><code>.ColumnName</code>.


## Examples

### Example #1 
Nurodykite stulpelių su „My Table“ prefiksus lentelėje.
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
