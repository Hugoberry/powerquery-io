---
title: Table.FromRecords
---

# Table.FromRecords


## Description

Konvertiert eine Liste mit Datensätzen in eine Tabelle.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Konvertiert "<code>records</code>" (eine Liste mit Datensätzen) in eine Tabelle.


## Examples

### Example #1 
Erstellen einer Tabelle aus Datensätzen mithilfe von Datensatz-Feldnamen als Spaltennamen.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Erstellen einer Tabelle mit typisierten Spalten Auswählen der Zahlenspalten.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```




## Category
Table.Table construction
