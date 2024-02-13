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

Teilt die Liste auf der Grundlage eines Elements vom Typ "<code>table</code>" (wobei "<code>column</code>" eine Liste mit Werten ist) in jeweils eine Zeile pro Wert auf. Die Werte in den anderen Spalten werden in jeder neu erstellten Zeile dupliziert.


## Examples

### Example #1 
Teilt die Listenspalte &#34;[Name]&#34; in der Tabelle auf.
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




## Category
Table.Transformation
