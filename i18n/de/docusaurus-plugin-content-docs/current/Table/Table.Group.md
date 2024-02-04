---
title: Table.Group
---

# Table.Group


## Description

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


## Details

Gruppiert die Zeilen von <code>table</code> nach den Schlüsselspalten, die von <code>key</code> definiert werden. Bei <code>key</code> kann es sich entweder um einen einzelnen Spaltenname oder um eine Liste mit Spaltennamen handeln.    Für jede Gruppe wird ein Datensatz erstellt, der die Schlüsselspalten (und ihre Werte) sowie alle von <code>aggregatedColumns</code> angegebenen aggregierten Spalten enthält.    Optional können auch <code>groupKind</code> und <code>comparer</code> angegeben werden.<br />    <br />    Wenn die Daten bereits nach den Schlüsselspalten sortiert sind, kann ein <code>groupKind</code> von GroupKind.Local angegeben werden kann. Dies kann die Leistung der Gruppierung in bestimmten Fällen verbessern,    da angenommen wird, dass alle Zeilen mit einem angegebenen Satz von Schlüsselwerten zusammenhängend sind.<br />    <br />    Beim Übergeben eines <code>comparer</code> ist zu beachten, dass eine Zeile möglicherweise in einer Gruppe platziert wird, deren Schlüssel sich von ihren eigenen unterscheiden, wenn sie unterschiedliche Schlüssel als gleich behandelt.<br />    <br />    Diese Funktion garantiert nicht die Reihenfolge der Zeilen, die sie zurücksendet.  


## Examples

### Example #1 
Gruppiert die Tabelle und fügt die aggregierte Spalte &#34;[total]&#34; hinzu, die die Summe der Preise (&#34;each List.Sum([price])&#34;) enthält.
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
