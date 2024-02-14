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

Führt die Zeilen von "<code>table1</code>" mit den Zeilen von "<code>table2</code>" zusammen. Grundlage hierfür bildet die Übereinstimmung der Werte der Schlüsselspalten, die durch "<code>key1</code>" (für "<code>table1</code>") und "<code>key2</code>" (für "<code>table2</code>") ausgewählt wurden. Die Ergebnisse werden in die Spalte namens "<code>newColumnName</code>" eingefügt.Das Verhalten dieser Funktion gleicht "Table.Join" mit dem JoinKind-Typ "LeftOuter", allerdings werden hier die Join-Ergebnisse geschachtelt (und nicht vereinfacht) dargestellt.


## Examples

### Example #1 
Fügt &#34;(\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]})&#34; eine Join-Spalte namens &#34;price/stock&#34; auf der Grundlage der Tabelle &#34;(\{[saleID = 1, price = 20], [saleID = 2, price = 10]})&#34; hinzu, für die ein Join für &#34;[saleID]&#34; ausgeführt wird.
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
