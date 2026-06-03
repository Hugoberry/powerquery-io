---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


Erstellt auf der Grundlage einer Spalte mit Listen in einer Tabelle je eine Zeilenkopie für die einzelnen Werte in der Liste.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

Bei „`table`“, wenn „`column`“ eine Liste mit Werten enthält, wird die Liste für jeden Wert in eine Zeile aufgeteilt. Werte in den anderen Spalten werden in jeder neu erstellten Zeile dupliziert. Diese Funktion kann auch geschachtelte Tabellen erweitern, indem sie als Listen von Datensätzen behandelt werden.


## Examples

### Example #1
Teilen Sie die Listenspalte \[Name\].
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```


### Example #2
Teilen Sie die geschachtelte Tabellenspalte \[Components\].
```powerquery
Table.ExpandListColumn(
    #table(
        {"Part", "Components"},
        {
            {"Tool", #table({"Name", "Quantity"}, {{"Thingamajig", 2}, {"Widget", 3}})}
        }
    ),
    "Components"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Part = "Tool", Components = [Name = "Thingamajig", Quantity = 2]],
    [Part = "Tool", Components = [Name = "Widget", Quantity = 3]]
})
```




## Category
Table.Transformation
