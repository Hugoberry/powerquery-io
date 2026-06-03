---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Gibt die Position(en) von angegebenen Zeilen innerhalb der Tabelle zurück.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Gibt die Zeilenposition(en) des ersten Vorkommens der `table`\-Liste aus dem Element vom Typ „`rows`“ zurück. Gibt -1 zurück, wenn kein Vorkommen gefunden wird.

-   `table`: Die Eingabetabelle.
-   `rows`: Die Liste der Zeilen in der Tabelle, deren Positionen gesucht werden sollen.
-   `occurrence`: *(Optional)* Gibt an, welche Vorkommen der Zeile zurückgegeben werden sollen.
-   `equationCriteria`: *(Optional)* Steuert den Vergleich zwischen den Tabellenzeilen.


## Examples

### Example #1
Ermittelt die Position des ersten Vorkommens von "\[a = 2, b = 4\]" oder "\[a = 6, b = 8\]" in der Tabelle `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
Ermittelt die Position aller Vorkommen von "\[a = 2, b = 4\]" oder "\[a = 6, b = 8\]" in der Tabelle `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
