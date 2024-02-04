---
title: Table.FillUp
---

# Table.FillUp


## Description

Gibt den Wert einer Zelle an die darüber liegenden Zellen mit NULL-Wert in der Spalte weiter.


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Details

Gibt eine Tabelle auf der Grundlage des angegebenen Elements vom Typ '<code>table</code>' zurück, wobei der Wert der nächsten Zelle an die darüber liegenden Zellen mit NULL-Wert im angegebenen Element vom Typ '<code>columns</code>' weitergegeben wird.


## Examples

### Example #1 
Gibt eine Tabelle zurück, in der die NULL-Werte in der Spalte &#39;[Column2]&#39; mit dem unter ihnen liegenden Wert aus der Tabelle aufgefüllt wurden.
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation
