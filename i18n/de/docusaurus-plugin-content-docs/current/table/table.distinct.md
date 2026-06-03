---
title: Table.Distinct
---

# Table.Distinct


Entfernt doppelte Zeilen aus der Tabelle.


## Syntax

```powerquery
Table.Distinct(
    table as table,
    optional equationCriteria as any
) as table
```


## Remarks

Entfernt doppelte Zeilen aus der Tabelle. Ein optionaler Parameter `equationCriteria` gibt an, welche Spalten der Tabelle auf Duplizierung getestet werden. Wenn `equationCriteria` nicht angegeben ist, werden alle Spalten getestet.  
  
Da Power Query manchmal bestimmte Vorgänge an Back-End-Datenquellen auslagert (bekannt als „Folding“), und manchmal auch Abfragen optimiert, indem Vorgänge überspringen werden, die nicht unbedingt erforderlich sind. Im Allgemeinen gibt es keine Garantie, welches bestimmte Duplikat beibehalten wird. Sie können beispielsweise nicht davon ausgehen, dass die erste Zeile mit einem eindeutigen Satz von Spaltenwerten erhalten bleibt und Zeilen weiter unten in der Tabelle entfernt werden. Wenn sich die Entfernung von Duplikaten vorhersehbar verhalten soll, puffern Sie zuerst die Tabelle mithilfe von `Table.Buffer`.


## Examples

### Example #1
Entfernt doppelte Zeilen aus der Tabelle.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "b"],
        [a = "A", b = "a"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "B", b = "b"]
})
```


### Example #2
Entfernt die doppelten Zeilen aus der Spalte "\[b\]" der Tabelle `({[a = "A", b = "a"], [a = "B", b = "a"], [a = "A", b = "b"]})`.
```powerquery
Table.Distinct(
    Table.FromRecords({
        [a = "A", b = "a"],
        [a = "B", b = "a"],
        [a = "A", b = "b"]
    }),
    "b"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "A", b = "a"],
    [a = "A", b = "b"]
})
```




## Category
Table.Membership
