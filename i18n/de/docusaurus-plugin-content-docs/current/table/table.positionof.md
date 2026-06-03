---
title: Table.PositionOf
---

# Table.PositionOf


Gibt die Position(en) der Zeile innerhalb der Tabelle zurück.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

Gibt die Zeilenposition des ersten Vorkommens von „`row`“ im angegebenen Element vom Typ „`table`“ zurück. Gibt -1 zurück, wenn kein Vorkommen gefunden wird.

-   `table`: Die Eingabetabelle.
-   `row`: Die Zeile in der Tabelle, in der die Position gesucht werden soll.
-   `occurrence`: *(Optional)* Gibt an, welche Vorkommen der Zeile zurückgegeben werden sollen.
-   `equationCriteria`: *(Optional)* Steuert den Vergleich zwischen den Tabellenzeilen.


## Examples

### Example #1
Ermittelt die Position des ersten Vorkommens von "\[a = 2, b = 4\]" in der Tabelle `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
Ermittelt die Position des zweiten Vorkommens von "\[a = 2, b = 4\]" in der Tabelle `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
Ermittelt die Position aller Vorkommen von "\[a = 2, b = 4\]" in der Tabelle `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
