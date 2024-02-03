---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Retourneert een tabel waarin alle kolomnamen worden voorafgegaan door de opgegeven tekst.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Retourneert een tabel waarin alle kolomnamen van de opgegeven <code>table</code> worden voorafgegaan door de opgegeven tekst, <code>prefix</code>, plus een punt in de notatie <code>prefix</code><code>.ColumnName</code>.


## Examples

### Example #1 
De kolomnamen in de tabel vooraf laten gaan door de tekst MyTable.
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
