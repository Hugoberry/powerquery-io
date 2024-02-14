---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


Gibt eine Tabelle ohne die Zeilen aus der Eingabetabelle zurück, die in mindestens einer der Zellen einen Fehler enthalten. Bei Angabe einer Spaltenliste werden nur die Zellen der angegebenen Spalten auf Fehler geprüft.


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Gibt eine Tabelle ohne die Zeilen aus der Eingabetabelle zurück, die in mindestens einer der Zellen einen Fehler enthalten. Bei Angabe einer Spaltenliste werden nur die Zellen der angegebenen Spalten auf Fehler geprüft.


## Examples

### Example #1 
Entfernen des Fehlerwerts aus der ersten Zeile.
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
