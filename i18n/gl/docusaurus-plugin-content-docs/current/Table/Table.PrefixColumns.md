---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Devolve unha táboa onde todas as columnas se prefixaron co texto indicado.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Devolve unha táboa onde todos os nomes das columnas da <code>table</code> fornecida prefíxanse co texto indicado, <code>prefix</code>, máis un punto na forma <code><code>prefix</code>.ColumnName</code>.


## Examples

### Example #1 
Prefixar as columnas con &#34;MyTable&#34; na táboa.
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
