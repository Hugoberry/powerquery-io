---
title: Table.FillDown
---

# Table.FillDown


Verteilt den Wert einer vorherigen Zelle auf die darunter liegenden Zellen mit NULL-Wert in der Spalte.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Remarks

Gibt eine Tabelle auf der Grundlage des angegebenen Elements vom Typ '<code>table</code>' zurück, wobei der Wert einer vorherigen Zelle an die darunter liegenden Zellen mit NULL-Wert im angegebenen Element vom Typ '<code>columns</code>' weitergegeben wird.


## Examples

### Example #1 
Gibt eine Tabelle zurück, in der die NULL-Werte in der Spalte &#34;[Place]&#34; mit dem Wert darüber aus der Tabelle aufgefüllt wurden.
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
