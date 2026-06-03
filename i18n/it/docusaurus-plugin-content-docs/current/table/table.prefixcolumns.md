---
title: Table.PrefixColumns
---

# Table.PrefixColumns


Restituisce una tabella in cui le colonne sono state precedute tutte dal testo specificato.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

Restituisce una tabella in cui tutti i nomi di colonna da `table` sono preceduti dal testo specificato `prefix` e da un punto nel formato `prefix.ColumnName`.


## Examples

### Example #1
Aggiungere alle colonne il prefisso "MyTable" nella tabella.
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
