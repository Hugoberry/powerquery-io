---
title: Table.Group
---

# Table.Group


Gruppiert Tabellenzeilen mit dem gleichen Schlüssel.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Remarks

Gruppiert die Zeilen von `table` nach den Schlüsselspalten, die von `key` definiert werden. Bei `key` kann es sich entweder um einen einzelnen Spaltenname oder um eine Liste mit Spaltennamen handeln. Für jede Gruppe wird ein Datensatz erstellt, der die Schlüsselspalten (und ihre Werte) sowie alle von `aggregatedColumns` angegebenen aggregierten Spalten enthält. Optional können auch `groupKind` und `comparer` angegeben werden.  
  
Wenn die Daten bereits nach den Schlüsselspalten sortiert sind, kann ein `groupKind` von GroupKind.Local angegeben werden kann. Dies kann die Leistung der Gruppierung in bestimmten Fällen verbessern, da angenommen wird, dass alle Zeilen mit einem angegebenen Satz von Schlüsselwerten zusammenhängend sind.  
  
Beim Übergeben eines `comparer` ist zu beachten, dass eine Zeile möglicherweise in einer Gruppe platziert wird, deren Schlüssel sich von ihren eigenen unterscheiden, wenn sie unterschiedliche Schlüssel als gleich behandelt.  
  
Diese Funktion garantiert nicht die Reihenfolge der Zeilen, die sie zurücksendet.


## Examples

### Example #1
Gruppiert die Tabelle und fügt die aggregierte Spalte "\[total\]" hinzu, die die Summe der Preise ("each List.Sum(\[price\])") enthält.
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
