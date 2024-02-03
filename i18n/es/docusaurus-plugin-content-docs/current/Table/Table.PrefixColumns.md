---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Devuelve una tabla donde todas las columnas tienen como prefijo el texto dado.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Devuelve una tabla donde todos los nombres de columna de la <code>table</code> proporcionada tienen como prefijo el texto dado <code>prefix</code>, más un punto en el formato <code>prefix</code><code>.ColumnName</code>.


## Examples

### Example #1 
Anteponer a las columnas &#34;MyTable&#34; en la tabla.
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
