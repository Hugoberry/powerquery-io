---
title: Table.NestedJoin
---

# Table.NestedJoin


Führt für angegebene Spalten einen Join zwischen Tabellen aus und stellt das Join-Ergebnis in einer neuen Spalte bereit.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

Führt die Zeilen von "<code>table1</code>" mit den Zeilen von "<code>table2</code>" zusammen. Grundlage hierfür bildet die Übereinstimmung der Werte der Schlüsselspalten, die durch "<code>key1</code>" (für "<code>table1</code>") und "<code>key2</code>" (für "<code>table2</code>") ausgewählt wurden. Die Ergebnisse werden in die Spalte namens "<code>newColumnName</code>" eingefügt.<br />"<code>joinKind</code>" (optional) legt die Art des durchzuführenden Joins fest. Standardmäßig wird ein linker äußerer Join durchgeführt, wenn "<code>joinKind</code>" nicht angegeben ist.<br />Um festzulegen, wie die Schlüsselspalten verglichen werden sollen, kann ein optionaler <code>keyEqualityComparers</code>-Satz eingeschlossen werden. Dieses Feature ist zurzeit nur für die interne Verwendung vorgesehen.<br />  


## Examples

### Example #1 
Verknüpfen Sie zwei Tabellen mit einer einzelnen Schlüsselspalte.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
