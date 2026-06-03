---
title: Table.ReplaceErrorValues
---

# Table.ReplaceErrorValues


Ersetzt die Fehlerwerte in den angegebenen Spalten durch den entsprechenden angegebenen Wert.


## Syntax

```powerquery
Table.ReplaceErrorValues(
    table as table,
    errorReplacement as list
) as table
```


## Remarks

Ersetzt die Fehlerwerte in den angegebenen Spalten von `table` durch die neuen Werte in der Liste `errorReplacement`. Das Format der Liste ist \{\{column1, value1\}, ...\}. Es darf pro Spalte nur einen Ersatzwert geben; die mehrfache Angabe derselben Spalte führt zu einem Fehler.


## Examples

### Example #1
Ersetzt den Fehlerwert durch das Wort "world" in der Tabelle.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{1, "hello"}, {3, ...}}, {"A", "B"}),
    {"B", "world"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "hello"],
    [A = 3, B = "world"]
})
```


### Example #2
Ersetzt den Fehlerwert in der Spalte "A" durch den Text "hello" und in Spalte "B" durch den Text "world" in der Tabelle.
```powerquery
Table.ReplaceErrorValues(
    Table.FromRows({{..., ...}, {1, 2}}, {"A", "B"}),
    {{"A", "hello"}, {"B", "world"}}
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "hello", B = "world"],
    [A = 1, B = 2]
})
```




## Category
Table.Transformation
