---
title: Table.Partition
---

# Table.Partition


Unterteilt die Tabelle auf der Grundlage der Gruppenanzahl und der angegebenen Spalte in eine Liste mit Tabellen.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

Unterteilt das Element vom Typ "`table`" in eine Liste mit der angegebenen Anzahl von Tabellen (`groups`) auf der Grundlage des Werts für "`column`" und einer Funktion vom Typ "`hash`". Die Funktion "`hash`" wird auf den Wert der Zeile "`column`" angewendet, um einen Hashwert für die Zeile abzurufen. Das Hashwertmodulo "`groups`" bestimmt, in welcher der zurückgegebenen Tabellen die Zeile platziert wird.

-   `table`: Die aufzuteilende Tabelle.
-   `column`: Die Spalte, für die ein Hashwert erstellt werden soll, um zu bestimmen, in welcher zurückgegebenen Tabelle sich die Zeile befindet.
-   `groups`: Die Anzahl von Tabellen, in die die Eingabetabelle unterteilt wird.
-   `hash`: Die zum Erstellen eines Hashwerts angewendete Funktion.


## Examples

### Example #1
Unterteilt die Tabelle `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` auf der Grundlage von Spalte "\[a\]" in zwei Tabellen, wobei der Wert der Spalten als Hashfunktion verwendet wird.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
