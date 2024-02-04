---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Fügt eine Spalte mit dem angegebenen Namen hinzu. Der Wert wird anhand der angegebenen Auswahlfunktion berechnet, wobei die einzelnen Zeilen jeweils als Eingabe herangezogen werden.


## Syntax

```powerquery
Table.AddColumn(
    table as table,
    newColumnName as text,
    columnGenerator as function,
    optional columnType as type
) as table
```


## Details

Fügt der Tabelle "<code>table</code>" eine Spalte mit der Bezeichnung "<code>newColumnName</code>" hinzu. Die Werte für die Spalte werden anhand der angegebenen Auswahlfunktion "<code>columnGenerator</code>" berechnet, wobei die einzelnen Zeilen jeweils als Eingabe herangezogen werden.


## Examples

### Example #1 
Fügen Sie eine Zahlenspalte mit dem Namen „Gesamtpreis“ in die Tabelle hinzu, wobei jeder Wert die Summe der Spalten [Preis] und [Versand] entspricht.
```powerquery
Table.AddColumn(
    Table.FromRecords({
        [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0, Shipping = 10.00],
        [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5.0, Shipping = 15.00],
        [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25.0, Shipping = 10.00]
    }),
    "TotalPrice",
    each [Price] + [Shipping],
    type number
)
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100, Shipping = 10, TotalPrice = 110],
    [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5, Shipping = 15, TotalPrice = 20],
    [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25, Shipping = 10, TotalPrice = 35]
})
```




## Category
Table.Transformation
