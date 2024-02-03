---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Restituisce una tabella in cui le colonne sono state precedute tutte dal testo specificato.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Restituisce una tabella in cui tutti i nomi di colonna da <code>table</code> sono preceduti dal testo specificato <code>prefix</code> e da un punto nel formato <code>prefix</code><code>.ColumnName</code>.


## Examples

### Example #1 
Aggiungere alle colonne il prefisso &#34;MyTable&#34; nella tabella.
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
