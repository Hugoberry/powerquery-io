---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Führt für angegebene Spalten einen Join zwischen Tabellen aus und stellt das Join-Ergebnis in einer neuen Spalte bereit.


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Remarks

Führt die Zeilen von "`table1`" mit den Zeilen von "`table2`" zusammen. Grundlage hierfür bildet die Übereinstimmung der Werte der Schlüsselspalten, die durch "`key1`" (für "`table1`") und "`key2`" (für "`table2`") ausgewählt wurden. Die Ergebnisse werden in die Spalte namens "`newColumnName`" eingefügt. Das Verhalten dieser Funktion gleicht "Table.Join" mit dem JoinKind-Typ "LeftOuter", allerdings werden hier die Join-Ergebnisse geschachtelt (und nicht vereinfacht) dargestellt.


## Examples

### Example #1
Fügt "(\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\})" eine Join-Spalte namens "price/stock" auf der Grundlage der Tabelle "(\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\})" hinzu, für die ein Join für "\[saleID\]" ausgeführt wird.
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
