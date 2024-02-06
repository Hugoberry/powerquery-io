---
title: Table.FromColumns
---

# Table.FromColumns


Erstellt eine Tabelle auf der Grundlage einer Liste mit Spalten und angegebenen Werten.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Remarks

Erstellt eine Tabelle vom Typ "<code>columns</code>" auf der Grundlage einer Liste (<code>lists</code>), die geschachtelte Listen mit Spaltennamen und -werten enthält.    Besitzen einige Spalten mehr Werte als andere, werden die fehlenden Werte mit dem Standardwert NULL ausgefüllt, sofern die Spalten NULL-Werte zulassen.


## Examples

### Example #1 
Gibt eine Tabelle aus einer Liste mit Kundennamen in einer Liste zurück. Jeder Wert im Kundenlistenelement wird zu einem Zeilenwert, und jede Liste wird zu einer Spalte.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
Erstellt eine Tabelle auf der Grundlage einer angegebenen Liste mit Spalten und einer Liste mit Spaltennamen.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
Erstellt eine Tabelle mit einer anderen Anzahl von Spalten pro Zeile. Der fehlende Zeilenwert ist NULL.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction
