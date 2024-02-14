---
title: Table.Repeat
---

# Table.Repeat


Wiederholt die Zeilen der Tabellen so oft wie angegeben.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Remarks

Gibt eine Tabelle zurück, für deren Zeilen aus der Eingabe "<code>table</code>" die angegebene Anzahl (<code>count</code>) von Wiederholungen erstellt wurde.


## Examples

### Example #1 
Wiederholt die Zeilen in der Tabelle zwei Mal.
```powerquery
Table.Repeat(
    Table.FromRecords({
        [a = 1, b = "hello"],
        [a = 3, b = "world"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = "hello"],
    [a = 3, b = "world"],
    [a = 1, b = "hello"],
    [a = 3, b = "world"]
})
```




## Category
Table.Row operations
