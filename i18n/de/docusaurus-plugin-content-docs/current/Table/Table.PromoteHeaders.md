---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


## Description

Stuft die erste Zeile mit Werten zu den neuen Spaltenüberschriften herauf (z. B. Spaltennamen).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Details

Stuft die erste Zeile mit Werten zu den neuen Spaltenüberschriften (also Spaltennamen) herauf. Alle Zellen der ersten Zeile müssen Text- oder Zahlenwerte enthalten. Standardmäßig werden nur Text- oder Zahlenwerte zu Überschriften heraufgestuft. Gültige Optionen:    <div>      <code>PromoteAllScalars</code>: Bei Festlegung auf <code>true</code> werden alle Skalarwerte in der ersten Zeile mithilfe von <code>Culture</code> zu Überschriften heraufgestuft, sofern angegeben (andernfalls wird das Gebietsschema für das Dokument verwendet).    Für Werte, die nicht in Text konvertiert werden können, wird ein standardmäßiger Spaltenname verwendet.    </div>    <div>    <code>Culture</code>: Ein Kulturname, der die Kultur für die Daten angibt.    </div>  


## Examples

### Example #1 
Stuft die erste Zeile mit Werten in der Tabelle höher.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2 
Stuft alle Skalarwerte in der ersten Zeile der Tabelle zu Überschriften herauf.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
